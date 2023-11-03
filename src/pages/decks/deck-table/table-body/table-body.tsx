import { ComponentPropsWithoutRef, FC } from 'react'
import { Link } from 'react-router-dom'

import { Body, Row, TD } from '@/components/ui/tables'
import { EditButtons } from '@/components/ui/tables/edit-buttons/edit-buttons'
import { Typography } from '@/components/ui/typography'
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
          <TD className={s.s}>
            <Link className={s.link} to={`/cards/${item.id}`}>
              {item.cover ? (
                <div className={s.deckImage} style={{ backgroundImage: `url(${item.cover})` }}>
                  <Typography className={s.transparent} variant={'body2'}>
                    {item.name}
                  </Typography>
                  <Typography className={s.title2} variant={'body2'}>
                    {item.name}
                  </Typography>
                </div>
              ) : (
                <Typography className={s.title1} variant={'body2'}>
                  {item.name}
                </Typography>
              )}
            </Link>
            {item.isPrivate && (
              <Typography className={s.private} variant={'body2'}>
                private
              </Typography>
            )}
          </TD>
          <TD>{item.cardsCount}</TD>
          <TD>{new Date(item.updated).toLocaleString('en-GB')}</TD>
          <TD>{item.author.name}</TD>
          <TD>
            <EditButtons item={item} />
          </TD>
        </Row>
      ))}
    </Body>
  )
}
