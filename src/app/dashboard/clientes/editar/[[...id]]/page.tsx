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
import * as $User from '@/services/User'

export default function ClientsCreate({ params }: any) {
  const [user, setUser] = useState<IUser>({} as IUser)

  const { id } = params

  useEffect(() => {
    if (id) {
      $User.find(id).then((res: any) => {
        const data: IUser = res.data.user
        setUser(data)
      })
    }
  }, [id])

  const handleInputChange = (e: any) => {
    const { name, value } = e.target

    // TODO: split "." and correctly save it
    setUser({ ...user, [name]: value }) 
  }

  return (
    <>
      <form className="flex flex-wrap flex-row">
        <div className="w-full px-2 -md-2 flex justify-between">
          <h1 className="text-2xl lg:text-4xl text-gray-500 font-light mb-10">{user?.id ? 'Editar' : 'Novo'} Cliente</h1>
          <div className="flex justify-end px-2 -md-2 gap-4">
            <Link href="/dashboard/clientes">
              <BackButton icon={IoMdArrowBack}>Voltar</BackButton>
            </Link>
            <PrimaryButton text="Salvar" />
          </div>
        </div>

        <div className="w-full xl:w-9/12 px-2 -md-2">
          <ClientInfos user={user} onChange={handleInputChange} />
          <ClientAddress user={user} onChange={handleInputChange} />
        </div>

        <div className="w-full xl:w-3/12 px-2 -md-2">
          <ClientDocumentRg user={user} onChange={handleInputChange} />
          <ClientDocumentCr user={user} onChange={handleInputChange} />
        </div>
      </form>
    </>
  )
}
