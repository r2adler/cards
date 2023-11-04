import { baseApi } from '@/services/base-api'
import { CardsResponse, CreateCardArg, Tt, UpdateCardArg } from '@/services/cards/types'
import { Deck, GetCardInDeckResponse } from '@/services/decks/types'

const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<CardsResponse, CreateCardArg>({
        invalidatesTags: ['Cards'],
        query: ({ deckId, ...body }) => ({
          body,
          method: 'POST',
          url: `v1/decks/${deckId}/cards`,
        }),
      }),
      deleteCard: builder.mutation<void, { id: string }>({
        invalidatesTags: ['Cards'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `v1/cards/${id}`,
        }),
      }),
      getCard: builder.query<CardsResponse, { id?: string }>({
        providesTags: ['Cards'],
        query: ({ id }) => ({
          method: 'GET',
          url: `v1/cards/${id}`,
        }),
      }),
      getCardsInDeck: builder.query<GetCardInDeckResponse, Tt>({
        providesTags: ['Cards'],
        query: ({ id }) => ({
          url: `v1/decks/${id}/cards`,
        }),
      }),
      getDeck: builder.query<Deck, { id: string }>({
        providesTags: ['Cards'],
        query: ({ id }) => ({
          url: `v1/decks/${id}`,
        }),
      }),
      updateCard: builder.mutation<CardsResponse, UpdateCardArg>({
        invalidatesTags: ['Cards'],
        query: ({ id, ...body }) => ({
          body,
          method: 'PATCH',
          url: `v1/cards/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardQuery,
  useGetCardsInDeckQuery,
  useGetDeckQuery,
  useUpdateCardMutation,
} = cardsApi
