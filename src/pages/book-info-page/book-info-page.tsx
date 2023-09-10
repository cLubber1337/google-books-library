import { useParams } from 'react-router-dom'
import { useGetBookQuery } from '@/services/baseApi.ts'
import { BookInfoCard } from '@/components/ui'
import { Loader } from '@/components/ui/loader/loader.tsx'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

export const BookInfoPage = () => {
  const { id } = useParams()

  const { data: bookData, isFetching, error } = useGetBookQuery({ id: id as string })

  useEffect(() => {
    if (error) {
      toast.error((error as any).data.error.message || 'Something went wrong')
    }
  }, [error])

  return (
    <section className="p-2 sm:p-4">
      {isFetching ? (
        <div className="flex h-[calc(100vh_-_398px)] items-center justify-center">
          <Loader />
        </div>
      ) : (
        bookData && (
          <BookInfoCard
            title={bookData.volumeInfo.title}
            imageLink={bookData.volumeInfo.imageLinks?.thumbnail}
            authors={bookData.volumeInfo.authors}
            category={bookData.volumeInfo.categories}
            description={bookData.volumeInfo.description}
          />
        )
      )}
    </section>
  )
}
