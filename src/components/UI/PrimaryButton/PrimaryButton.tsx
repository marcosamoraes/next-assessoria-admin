import { IconType } from 'react-icons/lib'

type PrimaryButtonProps = {
  icon?: IconType
  text?: string
}

export default function PrimaryButton({ icon: Icon, text }: PrimaryButtonProps) {
  return (
    <button
      className={`rounded-xl h-10 px-3 border-2 border-primary font-bold 
      text-lg text-primary relative overflow-hidden inline-flex items-center 
      justify-evenly duration-300 hover:bg-primary hover:text-white transition-all`}
    >
      {Icon ? <Icon className={text ? 'lg:mr-2' : ''} /> : ''}
      <span className={`${Icon ? 'hidden' : '' } lg:block`}>{text ?? ''}</span>
    </button>
  )
}
