import { BookCard, Button } from '@/components/ui'
import { MdOutlineExpandMore } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'
import {
  booksActions,
  selectCategory,
  selectLoadMoreBooks,
  selectSearchTrigger,
  selectSearchValue,
  selectSorting,
} from '@/services/books'
import { useEffect, useState } from 'react'
import { useGetBooksQuery } from '@/services/baseApi.ts'
import { Loader } from '@/components/ui/loader/loader.tsx'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

export const BooksPage = () => {
  const maxResults = 30
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

  const { data, isFetching, isLoading, error } = useGetBooksQuery(
    {
      search,
      orderBy,
      maxResults,
      startIndex,
      loadMore,
    },
    { skip: !searchTrigger }
  )
  const handleLoadMoreBooks = () => {
    if (!isFetching) {
      dispatch(booksActions.setLoadMoreBooks(true))
      setStartIndex(prev => prev + maxResults)
    }
  }

  useEffect(() => {
    if (error) {
      toast.error((error as any).data.error.message || 'Something went wrong')
    }
  }, [error])

  return (
    <section className="px-2 sm:px-4">
      {data && (
        <h3 className="flex h-[50px] flex-row items-center justify-center text-2xl font-bold">
          Found {data?.totalItems} results
        </h3>
      )}
      <nav className="flex flex-row flex-wrap justify-center gap-4">
        {!isLoading ? (
          data &&
          data.totalItems > 0 &&
          data.items.map(book => (
            <li key={book.etag} className="w-full list-none sm:w-[45%] lg:w-[30%] ">
              <BookCard
                imageLink={book.volumeInfo.imageLinks?.thumbnail}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                category={book.volumeInfo.categories?.[0]}
                id={book.id}
              />
            </li>
          ))
        ) : (
          <div className="flex h-[calc(100vh_-_398px)] items-center justify-center">
            <Loader />
          </div>
        )}
      </nav>
      <div className="flex justify-center">
        {data && data.totalItems > maxResults && (
          <Button onClick={handleLoadMoreBooks} disabled={isFetching}>
            Load more{' '}
            {isFetching ? (
              <div className="inline-block h-5 w-5 animate-spin rounded-full border-t-2 border-white" />
            ) : (
              <MdOutlineExpandMore className="inline-block h-5 w-5 border-white" />
            )}
          </Button>
        )}
      </div>
    </section>
  )
}
