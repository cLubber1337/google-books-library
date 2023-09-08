import { BookCard } from '@/components/ui'
import { BooksResponse } from '@/services/books/types.ts'

type BooksSectionProps = {
  data?: BooksResponse
  loadMore: () => void
}
export const BooksSection = ({ data, loadMore }: BooksSectionProps) => {
  return (
    <section>
      {data && (
        <h3 className="flex h-[50px] flex-row items-center justify-center text-2xl font-bold">
          Found {data?.totalItems} results
        </h3>
      )}
      <nav className="flex flex-row flex-wrap justify-center gap-4">
        {data?.items.map(book => (
          <li key={book.etag} className="w-full list-none sm:w-[45%] lg:w-[30%] ">
            <BookCard
              imageLink={book?.volumeInfo?.imageLinks?.thumbnail}
              title={book?.volumeInfo?.title}
              authors={book?.volumeInfo?.authors}
              category={book?.volumeInfo?.categories?.[0]}
            />
          </li>
        ))}
      </nav>
      <div className="my-2 flex justify-center">
        {data && data.totalItems > 30 && (
          <button
            className="my-4 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white
      transition hover:bg-blue-500 active:bg-blue-800"
            onClick={loadMore}
          >
            Load more
          </button>
        )}
      </div>
    </section>
  )
}
