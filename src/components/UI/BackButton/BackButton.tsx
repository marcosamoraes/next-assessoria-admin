import { IconType } from 'react-icons/lib'

type BackButtonProps = {
  icon?: IconType
  children?: string
}

export default function BackButton({ icon: Icon, children }: BackButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-xl h-10 px-3 border-2 border-gray-500 font-bold 
      text-lg text-gray-500 relative overflow-hidden inline-flex items-center 
      justify-evenly duration-300 hover:border-gray-800 hover:text-gray-800 transition-all`}
    >
      {Icon ? <Icon className={children ? 'md:mr-2' : ''} /> : ''}
      <span className="hidden md:block">{children}</span>
    </button>
  )
}
