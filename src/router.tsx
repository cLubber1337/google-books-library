import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@/components/ui/layout'
import { BooksPage } from '@/pages/books-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <BooksPage />
      </Layout>
    ),
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
