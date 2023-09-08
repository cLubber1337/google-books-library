import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { BsCaretDownFill, BsCaretUpFill, BsCheckLg } from 'react-icons/bs'

type SelectProps = {
  options: string[]
  label?: string
}

export const Select = ({ options, label }: SelectProps) => {
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="relative w-full">
      {label && <label className="mb-1 block font-medium text-white">{label}</label>}
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Button
              className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-gray-50 px-3
        py-2 text-left shadow-sm focus:border-blue-500
        focus:outline-none focus:ring-1
        focus:ring-blue-500"
            >
              {selected}
              {open ? (
                <BsCaretUpFill className="h-5 w-5 text-gray-400" />
              ) : (
                <BsCaretDownFill className="h-5 w-5 text-gray-400" />
              )}
            </Listbox.Button>
            <Listbox.Options
              className="absolute z-10 mt-1 max-h-60 w-full
        overflow-auto rounded-md bg-white py-1 text-base
        shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              {options.map(option => (
                <Listbox.Option
                  key={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-100 text-sky-900' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                      >
                        {option}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-700">
                          <BsCheckLg className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  )
}
