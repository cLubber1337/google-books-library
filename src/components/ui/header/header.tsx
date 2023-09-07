import { SearchBar } from '@/components/ui/search-bar'

export const Header = () => {
  return (
    <header className="bg-gray-600 px-4 py-4">
      <h1 className="mb-4 py-4 text-center text-4xl font-bold text-white">Search for books</h1>
      <SearchBar />
    </header>
  )
}
