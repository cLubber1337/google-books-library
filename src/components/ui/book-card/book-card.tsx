import { Link } from 'react-router-dom'

type BookCardProps = {
  imageLink?: string
  title?: string
  authors?: string[]
  category?: string
}

export const BookCard = ({ imageLink, title, authors, category }: BookCardProps) => {
  return (
    <article className="w-full rounded bg-neutral-200 p-5 shadow-md">
      <Link to="/book/1" className="relative block h-[250px] text-center">
        <img
          className="absolute left-1/2 top-1/2 max-h-[200px] translate-x-[-50%] translate-y-[-50%]"
          src={imageLink}
          alt="book"
        />
      </Link>
      <div className="g-4 flex h-36 w-full flex-col">
        <p className="text-sm text-gray-500 underline">{category}</p>
        <p className="flex-1 pt-1 font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{authors?.map(author => author)}</p>
      </div>
    </article>
  )
}
