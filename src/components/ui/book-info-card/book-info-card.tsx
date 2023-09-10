interface BookInfoCardProps {
  title: string
  imageLink?: string
  authors?: string[]
  category?: string[]
  description?: string
}

export const BookInfoCard = ({
  title,
  imageLink = 'https://placehold.co/600x400?text=No\\nImage',
  authors,
  category,
  description,
}: BookInfoCardProps) => {
  return (
    <article className="flex w-full flex-col gap-6 rounded bg-neutral-50  shadow-md sm:flex-row">
      <div className="max-h-full flex-[40%] rounded-bl rounded-tl bg-gray-400">
        <div className="relative block h-[200px] flex-[40%] text-center sm:h-[500px]">
          <img
            className="absolute left-1/2 top-1/2 max-h-[150px] translate-x-[-50%] translate-y-[-50%] sm:max-h-[300px]"
            src={imageLink}
            alt="book"
          />
        </div>
      </div>
      <div className="flex-[60%] p-5">
        <p className="pb-8 text-sm text-gray-500 sm:text-base">{category}</p>
        <h3 className="pb-4 text-lg font-semibold">{title}</h3>
        <p className="pb-4 text-gray-500 underline">{authors?.join(', ')}</p>
        <p className="">{description}</p>
      </div>
    </article>
  )
}
