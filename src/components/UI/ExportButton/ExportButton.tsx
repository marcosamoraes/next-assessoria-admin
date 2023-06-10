import { BsFiletypeCsv } from 'react-icons/bs'

type ExportButtonProps = {
  apiRoute?: string
}

export default function ExportButton({ apiRoute }: ExportButtonProps) {
  const handleClick = () => {
    //send request to apiRoute link
  }

  return (
    <button
      className={`rounded-xl h-10 px-3 border-2 border-gray-600 font-bold 
      text-lg text-gray-600 relative overflow-hidden inline-flex items-center 
      justify-evenly duration-300 bg-transparent hover:bg-gray-600 hover:text-white transition-all`}
      onClick={handleClick}
    >
      <BsFiletypeCsv className="lg:mr-2" />
      <span className="hidden lg:block">Exportar</span>
    </button>
  )
}
