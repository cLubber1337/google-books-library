import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { BooksState } from './types.ts'

const initialState: BooksState = {
  searchValue: '',
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSearchByName: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
  },
})

export const { actions: booksActions } = booksSlice
