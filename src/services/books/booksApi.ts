import { baseApi } from '@/services/baseApi.ts'
import { BooksResponse, GetBooksArgs } from './types.ts'

const apiKey = import.meta.env.VITE_BOOKS_KEY
const MAX_RESULTS = 30

const booksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getBooks: builder.query<BooksResponse, GetBooksArgs>({
      query: args => {
        return {
          url: `volumes?`,
          method: 'GET',
          params: {
            key: apiKey,
            maxResults: MAX_RESULTS,
            q: args.search,
          },
        }
      },
      providesTags: ['Books'],
    }),
  }),
})
export const { useGetBooksQuery } = booksApi
