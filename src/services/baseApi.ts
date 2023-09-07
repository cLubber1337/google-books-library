import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";


const apiKey = process.env.BOOKS_API_KEY;

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.googleapis.com/books/v1',
    }),
    endpoints: () => ({}),
})