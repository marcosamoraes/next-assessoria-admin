import { IconType } from 'react-icons/lib'

type DangerButtonProps = {
  icon?: IconType
  children?: string
}

export default function DangerButton({ icon: Icon, children }: DangerButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-xl h-10 px-3 border-2 border-danger font-bold 
      text-lg text-danger relative overflow-hidden inline-flex items-center 
      justify-evenly duration-300 hover:bg-danger hover:text-white transition-all`}
    >
      {Icon ? <Icon className={children ? 'md:mr-2' : ''} /> : ''}
      <span className="hidden md:block">{children}</span>
    </button>
  )
}
