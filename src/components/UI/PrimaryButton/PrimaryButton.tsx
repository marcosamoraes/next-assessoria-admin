import { IconType } from 'react-icons/lib'

type PrimaryButtonProps = {
  icon?: IconType
  text?: string
  color?: string
  hoverTextColor?: string
}

export default function PrimaryButton({ icon: Icon, text, color = 'primary', hoverTextColor = 'white' }: PrimaryButtonProps) {
  return (
    <button
      className={`rounded-xl h-10 px-3 border-2 border-${color} font-bold 
      text-lg text-${color} relative overflow-hidden inline-flex items-center 
      justify-evenly duration-300 hover:bg-${color} hover:text-${hoverTextColor} transition-all`}
    >
      {Icon ? <Icon className={text ? 'mr-2' : ''} /> : ''}
      {text ?? ''}
    </button>
  )
}
