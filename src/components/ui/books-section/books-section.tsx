import { BookCard } from '@/components/ui'
import { BooksResponse } from '@/services/books/types.ts'

type BooksSectionProps = {
  data?: BooksResponse
}
export const BooksSection = ({ data }: BooksSectionProps) => {
  return (
    <section>
      {data && (
        <h3 className="flex h-[50px] flex-row items-center justify-center text-2xl font-bold">
          Found {data?.totalItems} results
        </h3>
      )}
      <nav className="flex flex-row flex-wrap justify-center gap-4">
        {data?.items.map(book => (
          <li key={book.id} className="w-full list-none sm:w-[45%] lg:w-[30%] ">
            <BookCard
              imageLink={book?.volumeInfo?.imageLinks?.thumbnail}
              title={book?.volumeInfo?.title}
              authors={book?.volumeInfo?.authors}
            />
          </li>
        ))}
      </nav>
    </section>
  )
}
