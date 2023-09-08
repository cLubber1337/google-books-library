import { RootState } from '@/services/store.ts'

export const selectSearchValue = (state: RootState) => state.books.searchValue

export const selectCategory = (state: RootState) => state.books.category
export const selectSorting = (state: RootState) => state.books.sorting
