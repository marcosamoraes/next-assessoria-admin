import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import ExportButton from '../ExportButton/ExportButton'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

type OptionsBarProps = {
  storeLink?: string
  exportLink?: string
}

export default function OptionsBar({ storeLink, exportLink }: OptionsBarProps) {
  return (
    <div className="flex gap-3">
      {storeLink ? (
        <Link href={storeLink}>
          <PrimaryButton icon={FaPlus} text="Cadastrar" />
        </Link>
      ) : (
        false
      )}
      {exportLink ? <ExportButton apiRoute={exportLink} /> : false}
    </div>
  )
}
