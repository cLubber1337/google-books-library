import { BsSearch } from 'react-icons/bs'

import { useAppDispatch, useAppSelector } from '@/services/store.ts'
import { booksActions, selectSearchValue } from '@/services/books'
import { ChangeEvent, FormEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchBar = () => {
  const dispatch = useAppDispatch()
  const searchValue = useAppSelector(selectSearchValue)
  const navigate = useNavigate()

  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(booksActions.setSearchByName(e.target.value))
  }
  const onSubmitHandler: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    dispatch(booksActions.setSearchTrigger(true))
    navigate('/')
  }

  return (
    <form onSubmit={onSubmitHandler} className="mb-8 flex items-center justify-center">
      <div className="relative w-full max-w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <BsSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          id="search"
          className="block h-[38px] w-full resize-none appearance-none rounded-lg rounded-r-none bg-gray-200 p-2.5
          pl-10 text-sm text-gray-900 outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          placeholder="Search..."
          autoComplete="off"
          value={searchValue}
          onChange={onChangeValueHandler}
        />
      </div>
      <button
        type="submit"
        className="h-[38px] rounded-lg rounded-l-none bg-blue-700 px-4 py-2 text-sm font-medium text-white outline-none
        transition hover:bg-blue-500 focus:z-10 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Search
      </button>
    </form>
  )
}
