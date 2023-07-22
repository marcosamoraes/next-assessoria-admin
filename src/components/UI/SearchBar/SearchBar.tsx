import { deleteSearchParam, updateSearchParams } from '@/helpers/useQuery'
import useDebounce from '@/hooks/useDebounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type SearchBarProps = {
  inputName?: string
}

export default function SearchBar({ inputName = 'search' }: SearchBarProps) {
  const [ search, setSearch ] = useState<string>('')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    if (searchParams.get(inputName)) {
      setSearch(searchParams.get(inputName)!)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (debouncedSearch) {
      updateSearchParams(inputName, search, router, pathname, searchParams)
    } else {
      deleteSearchParam(inputName, router, pathname, searchParams)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch])

  return (
    <form className="relative w-full lg:w-fit flex items-center">
      <input
        type="search"
        name={inputName}
        value={search}
        className={`peer cursor-pointer relative z-10 h-10 rounded-xl border bg-transparent md:pl-12 outline-none 
          w-full ${searchParams.get(inputName) ? 'md:w-[200px] cursor-text md:border-gray-300 md:pl-16 md:pr-4' : 'md:w-[180px] lg:w-12'} 
          focus:cursor-text md:focus:w-[200px] md:focus:border-gray-300 md:focus:pl-16 md:focus:pr-4`}
        onChange={(e) => setSearch(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute inset-y-0 my-auto h-6 w-12 m-0 border-r px-3.5 
        ${searchParams.get(inputName) ? 'border-gray-300 stroke-gray-500' : 'border-transparent stroke-gray-500'} peer-focus:border-gray-300 peer-focus:stroke-gray-500`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </form>
  )
}
