import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { BooksState } from './types.ts'
import { categoriesData, sortingData } from '@/lib/data/options-select-data.ts'

const initialState: BooksState = {
  searchValue: '',
  category: 'All',
  sorting: 'Relevance',
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSearchByName: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setCategory: (state, action: PayloadAction<(typeof categoriesData)[number]>) => {
      state.category = action.payload
    },
    setSorting: (state, action: PayloadAction<(typeof sortingData)[number]>) => {
      state.sorting = action.payload
    },
  },
})

export const { actions: booksActions } = booksSlice
