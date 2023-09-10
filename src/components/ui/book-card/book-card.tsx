import { Link } from 'react-router-dom'

type BookCardProps = {
  imageLink?: string
  title?: string
  authors?: string[]
  category?: string
  id?: string
}

export const BookCard = ({
  imageLink = 'https://placehold.co/600x400?text=No\\nImage',
  title,
  authors,
  category,
  id,
}: BookCardProps) => {
  return (
    <article className="w-full rounded bg-neutral-200 p-5 shadow-md">
      <Link to={`/book/${id}`} className="relative block h-[200px] text-center">
        <img
          className="absolute left-1/2 top-1/2 max-h-[150px] translate-x-[-50%] translate-y-[-50%]"
          src={imageLink}
          alt="book"
        />
      </Link>
      <div className="g-4 flex h-48 w-full flex-col overflow-hidden break-all">
        <p className="text-sm text-gray-500 underline">{category}</p>
        <div className="mt-2 grid h-full grid-rows-2 gap-2">
          <p className="max-[75px] overflow-hidden font-semibold">{title}</p>
          <p className="flex flex-col text-sm text-gray-500">
            {authors?.map(author => author).join(', ')}
          </p>
        </div>
      </div>
    </article>
  )
}
