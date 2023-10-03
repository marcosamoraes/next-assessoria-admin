'use client'

import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import BackButton from '@/components/UI/BackButton/BackButton'
import { IUser } from '@/interfaces/IUser'
import ClientInfos from './Form/ClientInfos'
import ClientAddress from './Form/ClientAddress'
import ClientDocumentRg from './Form/ClientDocumentRg'
import ClientDocumentCr from './Form/ClientDocumentCr'
import * as $User from '@/services/User'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

const IUserKeys = {
  details: 'details',
  address: 'address',
} as const

type IUserKeys = keyof typeof IUserKeys

export default function ClientsCreate({ params }: any) {
  const [user, setUser] = useState<IUser>({} as IUser)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { id } = params

  const MySwal = withReactContent(Swal)

  useEffect(() => {
    if (id) {
      $User.find(id).then((res: any) => {
        const data: IUser = res.data.user
        setUser(data)
      })
    }
  }, [id])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name.includes('.')) {
      const key: IUserKeys = name.split('.')[0] as IUserKeys
      const subKey = name.split('.')[1]
      setUser((prevUser) => ({ ...prevUser, [key]: { ...prevUser[key], [subKey]: value } }))
      return
    }

    setUser((prevUser) => ({ ...prevUser, [name]: value }))
  }

  const handleZipcodeChanges = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    let newValues: any = {
      ...user.address,
      zipcode: value,
    }

    if (value.length === 8) {
      setIsLoading(true)
      const res = await fetch(`https://viacep.com.br/ws/${value}/json/`)
      const data = await res.json()

      newValues = {
        zipcode: value,
        street: data.logradouro,
        number: '',
        complement: '',
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf,
      }
    }

    setUser((prevUser) => ({ ...prevUser, address: newValues}))
    setIsLoading(false)
  }

  const handleRgImageChange = (url: string) => {
    setUser((prevUser) => ({ ...prevUser, details: { ...prevUser.details, rg_image: url } } as IUser))
  }

  const handleCrImageChange = (url: string) => {
    setUser((prevUser) => ({ ...prevUser, details: { ...prevUser.details, cr_image: url } } as IUser))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (id) {
      $User.update(id, user).then((res: any) => {
        const message = res.response?.data?.message ?? 'Cliente atualizado com sucesso'
        MySwal.fire(
          'Sucesso',
          message,
          'success'
        )
      }).catch((err: any) => {
        const message = err.response?.data?.message ?? 'Ocorreu um erro ao atualizar o cliente'
        MySwal.fire(
          'Erro',
          message,
          'error'
        )
      })
    }
  }

  return (
    <>
      <form className="flex flex-wrap flex-row" onSubmit={handleSubmit}>
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
          {isLoading ? (
            <div className="flex flex-col justify-center items-center flex-wrap h-96">
              <svg className="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v2a6 6 0 0 0-6 6z" />
              </svg>
              <p>Buscando cep...</p>
            </div>
          ) : (
            <ClientAddress user={user} onChange={handleInputChange} handleZipcodeChanges={handleZipcodeChanges} />
          )}
        </div>

        <div className="w-full xl:w-3/12 px-2 -md-2">
          <ClientDocumentRg user={user} onChange={handleRgImageChange} />
          <ClientDocumentCr user={user} onChange={handleCrImageChange} />
        </div>
      </form>
    </>
  )
}
