import { ComponentPropsWithoutRef, FC } from 'react'
import { Link } from 'react-router-dom'

import { Body, Row, TD } from '@/components/ui/tables'
import { EditButtons } from '@/components/ui/tables/edit-buttons/edit-buttons'
import { Deck } from '@/services/decks/types'

import s from './table-body.module.scss'

export const TableBody: FC<
  Omit<
    ComponentPropsWithoutRef<'tbody'> & {
      data: Deck[] | undefined
    },
    'children'
  >
> = ({ data, ...restProps }) => {
  return (
    <Body {...restProps}>
      {data?.map((item, idx) => (
        <Row key={item.name + idx}>
          <TD>
            <Link className={s.link} to={`/cards/${item.id}`}>
              {item.name}
            </Link>
          </TD>
          <TD>{item.cardsCount}</TD>
          <TD>{new Date(item.updated).toLocaleDateString()}</TD>
          <TD>{item.author.name}</TD>
          <TD>
            <EditButtons />
          </TD>
        </Row>
      ))}
    </Body>
  )
}
