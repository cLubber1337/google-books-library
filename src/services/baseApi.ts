import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { booksActions, BooksResponse, GetBooksArgs } from '@/services/books'

const apiKey = import.meta.env.VITE_BOOKS_KEY

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Books'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1',
  }),
  endpoints: builder => ({
    getBooks: builder.query<BooksResponse, GetBooksArgs>({
      query: args => {
        return {
          url: `volumes?`,
          method: 'GET',
          params: {
            key: apiKey,
            maxResults: args.maxResults,
            q: args.search,
            orderBy: args.orderBy,
            startIndex: args.startIndex,
          },
        }
      },
      providesTags: ['Books'],
      async onQueryStarted(_, { dispatch }) {
        dispatch(booksActions.setLoadMoreBooks(false))
      },
      serializeQueryArgs({ endpointName }: any) {
        return endpointName
      },
      merge: (currentCache: BooksResponse, newItems: BooksResponse, { arg }) => {
        if (arg.loadMore) {
          currentCache.items.push(...newItems.items)
          currentCache.totalItems = newItems.totalItems
        } else {
          currentCache.items = newItems.items
          currentCache.totalItems = newItems.totalItems
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
  }),
})

export const { useGetBooksQuery } = baseApi
