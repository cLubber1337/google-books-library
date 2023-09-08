import { SearchBar, Select } from '@/components/ui'
import { categoriesData, sortingData } from '@/lib/data/options-select-data.ts'

type HeaderProps = {
  setClickedToSearch: (value: boolean) => void
}

export const Header = ({ setClickedToSearch }: HeaderProps) => {
  return (
    <header className="bg-gray-600 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">Search for books</h1>
        <SearchBar clickToSearch={setClickedToSearch} />
        <div
          className="flex flex-col items-center space-x-0 space-y-5 sm:flex-row sm:justify-between sm:space-x-5
        sm:space-y-0"
        >
          <Select options={categoriesData} label="Categories" />
          <Select options={sortingData} label="Sorting by" />
        </div>
      </div>
    </header>
  )
}
