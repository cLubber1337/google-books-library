import { ReactNode } from 'react'
import { Header } from '@/components/ui'

interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-300">
      <Header />
      <main className="relative mx-auto max-w-[1200px] p-2 sm:p-4">{children}</main>
    </div>
  )
}
