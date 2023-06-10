'use client'

import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import BackButton from '@/components/UI/BackButton/BackButton'
import { IUser } from '@/interfaces/IUser'
import { getUser } from '@/api/UsersApi'
import ClientInfos from './Form/ClientInfos'
import ClientAddress from './Form/ClientAddress'
import ClientDocumentRg from './Form/ClientDocumentRg'
import ClientDocumentCr from './Form/ClientDocumentCr'

export default async function ClientsCreate({ params }: any) {
  const [user, setUser] = useState<IUser | null>(null)

  const { id } = params

  useEffect(() => {
    const data = getUser(id)
    setUser(data)
  }, [id])

  return (
    <>
      <form className="flex flex-wrap flex-row">
        <div className="w-full px-2 -md-2 flex justify-between">
          <h1 className="text-2xl lg:text-4xl text-gray-500 font-light mb-10">{user ? 'Editar' : 'Novo'} Cliente</h1>
          <div className="flex justify-end px-2 -md-2 gap-4">
            <Link href="/dashboard/clientes">
              <BackButton icon={IoMdArrowBack}>Voltar</BackButton>
            </Link>
            <PrimaryButton text="Salvar" />
          </div>
        </div>

        <div className="w-full xl:w-9/12 px-2 -md-2">
          <ClientInfos user={user} />
          <ClientAddress user={user} />
        </div>

        <div className="w-full xl:w-3/12 px-2 -md-2">
          <ClientDocumentRg user={user} />
          <ClientDocumentCr user={user} />
        </div>
      </form>
    </>
  )
}
