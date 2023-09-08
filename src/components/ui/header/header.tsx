import { SearchBar, Select } from '@/components/ui'

const people = [
  { name: 'Wade Cooper', id: 1 },
  { name: 'Arlene Mccoy', id: 2 },
  { name: 'Devon Webb', id: 3 },
  { name: 'Tom Cook', id: 4 },
]

export const Header = () => {
  return (
    <header className="bg-gray-600 px-4 py-4">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 space-y-5 py-4 text-center text-4xl font-bold text-white">
          Search for books
        </h1>
        <SearchBar />
        <div
          className="flex flex-col items-center space-x-0 space-y-5 sm:flex-row sm:justify-between sm:space-x-5
        sm:space-y-0"
        >
          <Select options={people} label="Categories" />
          <Select options={people} label="Sorting by" />
        </div>
      </div>
    </header>
  )
}
