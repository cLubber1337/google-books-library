import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BookInfoPage } from '@/pages/book-info-page'
import { Layout } from '@/components/ui'
import { BooksPage } from '@/pages/books-page'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <BooksPage />,
    },
    {
      path: '/book/:id',
      element: <BookInfoPage />,
    },
  ].map(route => ({
    ...route,
    element: <Layout>{route.element}</Layout>,
  }))
)

export const Router = () => {
  return <RouterProvider router={router} />
}
