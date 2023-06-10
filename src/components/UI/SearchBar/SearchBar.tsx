type SearchBarProps = {
  inputName?: string
}

export default function SearchBar({ inputName = 'search' }: SearchBarProps) {
  return (
    <form className="relative w-full lg:w-fit flex items-center">
      <input
        type="search"
        name={inputName}
        className="peer cursor-pointer relative z-10 h-10 rounded-xl border bg-transparent md:pl-12 outline-none w-full lg:w-12 md:w-[180px] md:focus:w-[200px] focus:cursor-text md:focus:border-gray-300 md:focus:pl-16 md:focus:pr-4"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-y-0 my-auto h-6 w-12 m-0 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-gray-300 peer-focus:stroke-gray-500"
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
