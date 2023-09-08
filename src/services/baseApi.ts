import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Books'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1',
  }),
  endpoints: () => ({}),
})
