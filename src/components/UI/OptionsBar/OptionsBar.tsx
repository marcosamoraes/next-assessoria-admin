'use client'

import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import ExportButton from '../ExportButton/ExportButton'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import ImportButton from '../ImportButton/ImportButton'
import { useAuth } from '@/contexts/AuthProvider'
import UserRoleEnum from '@/enums/UserRoleEnum'

type OptionsBarProps = {
  storeLink?: string
  exportLink?: string
  importLink?: string
  hidden?: boolean
}

export default function OptionsBar({ storeLink, importLink, exportLink, hidden = false }: OptionsBarProps) {
  const { user } = useAuth()

  return (
    <div className={`flex gap-1 lg:gap-3 ${hidden ? 'hidden' : ''}`}>
      {storeLink && user?.role === UserRoleEnum.ADMIN ? (
        <Link href={storeLink} as={storeLink}>
          <PrimaryButton icon={FaPlus} text="Cadastrar" />
        </Link>
      ) : (
        false
      )}
      {importLink ? <ImportButton apiRoute={importLink} /> : false}
      {exportLink ? <ExportButton apiRoute={exportLink} /> : false}
    </div>
  )
}
