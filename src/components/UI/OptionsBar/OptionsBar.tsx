import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import ExportButton from '../ExportButton/ExportButton'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

type OptionsBarProps = {
  storeLink?: string
  exportLink?: string
  hidden?: boolean
}

export default function OptionsBar({ storeLink, exportLink, hidden = false }: OptionsBarProps) {
  return (
    <div className={`flex gap-1 lg:gap-3 ${hidden ? 'hidden' : ''}`}>
      {storeLink ? (
        <Link href={storeLink} as={storeLink}>
          <PrimaryButton icon={FaPlus} text="Cadastrar" />
        </Link>
      ) : (
        false
      )}
      {exportLink ? <ExportButton apiRoute={exportLink} /> : false}
    </div>
  )
}
