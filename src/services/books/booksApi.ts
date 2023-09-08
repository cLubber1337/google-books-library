import { baseApi } from '@/services/baseApi.ts'
import { BooksResponse, GetBooksArgs } from './types.ts'

const apiKey = import.meta.env.VITE_BOOKS_KEY

const booksApi = baseApi.injectEndpoints({
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
    }),
  }),
})
export const { useGetBooksQuery } = booksApi
