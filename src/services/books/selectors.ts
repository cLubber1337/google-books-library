import { RootState } from '@/services/store.ts'

export const selectSearchValue = (state: RootState) => state.books.searchValue
