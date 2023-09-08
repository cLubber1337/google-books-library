import { Header, BooksSection } from '@/components/ui'
import { useGetBooksQuery } from '@/services/books/booksApi.ts'
import { useState } from 'react'
import { useAppSelector } from '@/services/store.ts'
import { selectCategory, selectSearchValue, selectSorting } from '@/services/books'

export const HomePage = () => {
  const [clickedToSearch, setClickedToSearch] = useState(false)
  const searchValue = useAppSelector(selectSearchValue)
  const sorting = useAppSelector(selectSorting)
  const currentCategory = useAppSelector(selectCategory)
  const orderBy = sorting.toLowerCase() as 'relevance' | 'newest'
  const category = `+subject:${currentCategory}`
  const search = currentCategory !== 'All' ? `${searchValue}${category}` : searchValue

  const handleLoadMore = () => null

  const { data } = useGetBooksQuery(
    { search, orderBy, maxResults: 30, startIndex: 0 },
    { skip: !clickedToSearch }
  )

  return (
    <main className="min-h-screen bg-gray-300">
      <Header setClickedToSearch={setClickedToSearch} />
      <div className="mx-auto max-w-[1200px] px-4">
        <BooksSection data={data} loadMore={handleLoadMore} />
      </div>
    </main>
  )
}
