import { ReactNode } from 'react'
import { Header } from '@/components/ui/header/header.tsx'

interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="mx-auto px-4">{children}</main>
    </>
  )
}
