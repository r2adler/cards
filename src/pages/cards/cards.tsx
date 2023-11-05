import { ChangeEvent } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'

import ArrowBackImg from '@/assets/arrow-back-img'
import { EditImg } from '@/assets/edit-img'
import { PlayCircleImg } from '@/assets/play-circle-img'
import { TrashImg } from '@/assets/trash-img'
import { ModalForCards } from '@/components/modal-for-cards'
import { AddAndEditCard, AddCardsFormValues } from '@/components/modal-for-cards/add-and-edit-card'
import { Button } from '@/components/ui/button'
import { DropDown, DropDownItem } from '@/components/ui/drop-down'
import { Modal } from '@/components/ui/modal'
import { Pagination } from '@/components/ui/pagination'
import { Body, Row, TD, Table } from '@/components/ui/tables'
import { Grade } from '@/components/ui/tables/grade'
import { TableHeader } from '@/components/ui/tables/table-header'
import { TextField } from '@/components/ui/text-field'
import { TriggerMore } from '@/components/ui/triggerMore'
import { Typography } from '@/components/ui/typography'
import { useMeQuery } from '@/services/auth/auth-api'
import {
  useCreateCardMutation,
  useGetCardsInDeckQuery,
  useGetDeckQuery,
} from '@/services/cards/cards-api'
import { cardsActions } from '@/services/cards/cards-slice'
import { useAppDispatch, useAppSelector } from '@/services/store'

import s from './cards.module.scss'

import { EditCell } from './editCell'

export const Cards = () => {
  const dispatch = useAppDispatch()

  const columns = [
    {
      key: 'question',
      sortable: false,
      title: 'Question',
    },
    {
      key: 'answer',
      sortable: false,
      title: 'Answer',
    },
    {
      key: 'updated',
      sortable: true,
      title: 'Last Updated',
    },
    {
      key: 'grade',
      sortable: false,
      title: 'Grade',
    },
  ]
  const { id } = useParams<{ id: string }>()

  const searchQuestion = useAppSelector(state => state.cards.searchQuestion)
  const currentPage = useAppSelector(state => state.cards.currentPage)
  const itemsPerPage = useAppSelector(state => state.cards.itemsPerPage)

  const { data: me } = useMeQuery()
  const { data: deck } = useGetDeckQuery({ id: id ?? '' })
  const { data: cards, isError } = useGetCardsInDeckQuery({
    currentPage,
    id: id ?? '',
    itemsPerPage,
    question: searchQuestion,
  })
  const [createCard] = useCreateCardMutation()

  const currentPageHandler = (page: number) => dispatch(cardsActions.setCurrentPage(page))
  const itemsPerPageHandler = (size: string) => dispatch(cardsActions.setItemsPerPage(+size))
  const searchQuestionHandler = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(cardsActions.setSearchQuestion(e.currentTarget.value))
  const clearSearchHandler = () => dispatch(cardsActions.setSearchQuestion(''))
  const addCardHandler = (data: AddCardsFormValues) =>
    createCard({ answer: data.answer, deckId: id, question: data.question })

  if (isError) {
    return <Navigate to={'/404'} />
  }

  const myDeck = deck?.userId === me?.id

  return (
    <>
      <Link className={s.linkBack} to={'/'}>
        <ArrowBackImg />
        <Typography className={s.back} variant={'body2'}>
          Back to Decks List
        </Typography>
      </Link>
      <div className={s.header}>
        <div>
          <Typography className={s.title} variant={'large'}>
            {deck?.name}
          </Typography>
          <DropDown trigger={<TriggerMore />}>
            <DropDownItem icon={<PlayCircleImg />} text={'Learn'} />
            <DropDownItem icon={<EditImg />} text={'Edit'} />
            <DropDownItem icon={<TrashImg />} lastItem text={'Delete'} />
          </DropDown>
        </div>

        {myDeck && (
          <Modal trigger={<Button variant={'primary'}>Add New Card</Button>}>
            <ModalForCards
              body={<AddAndEditCard onSubmit={addCardHandler} variant={'add'} />}
              title={'Add New Card'}
            />
          </Modal>
        )}
        {!myDeck && <Button variant={'primary'}>Learn to Deck</Button>}
      </div>
      {deck?.cover && (
        <div className={s.deckImage} style={{ backgroundImage: `url(${deck.cover})` }}></div>
      )}
      <TextField
        className={s.input}
        fullWidth
        onChange={searchQuestionHandler}
        onClearClick={clearSearchHandler}
        placeholder={'Input search'}
        type={'search'}
        value={searchQuestion}
      />
      <Table>
        <TableHeader className={s.tableHeader} columns={columns} />
        <Body>
          {cards?.items.map(card => (
            <Row key={card?.id}>
              <TD className={s.textCell}>{card?.question}</TD>
              <TD className={s.textCell}>{card?.answer}</TD>
              <TD>{new Date(card?.updated).toLocaleDateString()}</TD>
              <TD>
                <Grade />
              </TD>
              {myDeck && <EditCell card={card} />}
            </Row>
          ))}
        </Body>
      </Table>
      <Pagination
        className={s.pagination}
        currentPage={currentPage}
        onChangePage={currentPageHandler}
        onChangePageSize={itemsPerPageHandler}
        pageSize={itemsPerPage}
        totalCount={cards?.pagination.totalItems || 61}
      />
    </>
  )
}
