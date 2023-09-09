import { BooksSection, Header } from '@/components/ui'

import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'
import {
  booksActions,
  selectCategory,
  selectLoadMoreBooks,
  selectSearchTrigger,
  selectSearchValue,
  selectSorting,
} from '@/services/books'
import { useGetBooksQuery } from '@/services/baseApi.ts'

export const HomePage = () => {
  const MAX_RESULTS = 30
  const dispatch = useAppDispatch()
  const searchTrigger = useAppSelector(selectSearchTrigger)
  const searchValue = useAppSelector(selectSearchValue)
  const sorting = useAppSelector(selectSorting)
  const currentCategory = useAppSelector(selectCategory)
  const loadMore = useAppSelector(selectLoadMoreBooks)
  const orderBy = sorting.toLowerCase() as 'relevance' | 'newest'
  const category = `+subject:${currentCategory}`
  const search = currentCategory !== 'All' ? `${searchValue}${category}` : searchValue
  const [startIndex, setStartIndex] = useState(0)

  const { data: books, isLoading: isLoadingBooks } = useGetBooksQuery(
    {
      search,
      orderBy,
      maxResults: MAX_RESULTS,
      startIndex,
      loadMore,
    },
    { skip: !searchTrigger }
  )
  const handleLoadMoreBooks = () => {
    if (!isLoadingBooks) {
      dispatch(booksActions.setLoadMoreBooks(true))
      setStartIndex(prev => prev + MAX_RESULTS)
    }
  }

  return (
    <main className="min-h-screen bg-gray-300">
      <Header />
      <div className="mx-auto max-w-[1200px] px-4">
        {books && <BooksSection data={books} loadMore={handleLoadMoreBooks} />}
      </div>
    </main>
  )
}
