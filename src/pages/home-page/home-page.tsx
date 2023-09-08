import { Header, BooksSection } from '@/components/ui'
import { useGetBooksQuery } from '@/services/books/booksApi.ts'
import { useState } from 'react'
import { useAppSelector } from '@/services/store.ts'
import { selectSearchValue } from '@/services/books'

export const HomePage = () => {
  const [clickedToSearch, setClickedToSearch] = useState(false)
  const searchValue = useAppSelector(selectSearchValue)
  console.log(clickedToSearch)

  const { data } = useGetBooksQuery({ search: searchValue }, { skip: !clickedToSearch })

  return (
    <main>
      <Header setClickedToSearch={setClickedToSearch} />
      <main className="mx-auto max-w-[1200px] px-4">
        <BooksSection data={data} />
      </main>
    </main>
  )
}
