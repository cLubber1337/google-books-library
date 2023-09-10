import { SearchBar, Select } from '@/components/ui'
import { categoriesData, sortingData } from '@/lib/data/options-select-data.ts'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'
import { booksActions, selectCategory, selectSorting } from '@/services/books'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const dispatch = useAppDispatch()
  const initCategory = useAppSelector(selectCategory)
  const initSorting = useAppSelector(selectSorting)
  const navigate = useNavigate()

  return (
    <header className="bg-gray-600 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1
          className="mb-8 cursor-pointer select-none text-center text-4xl font-bold text-white"
          onClick={() => navigate('/')}
        >
          Search for books
        </h1>
        <SearchBar />
        <div
          className="flex flex-col items-center space-x-0 space-y-5 sm:flex-row sm:justify-between sm:space-x-5
        sm:space-y-0"
        >
          <Select
            options={categoriesData}
            label="Categories"
            initValue={initCategory}
            onChangeValue={(category: (typeof categoriesData)[number]) =>
              dispatch(booksActions.setCategory(category))
            }
          />
          <Select
            options={sortingData}
            label="Sorting by"
            initValue={initSorting}
            onChangeValue={(sorting: (typeof sortingData)[number]) =>
              dispatch(booksActions.setSorting(sorting))
            }
          />
        </div>
      </div>
    </header>
  )
}
