'use client'

import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import BackButton from '@/components/UI/BackButton/BackButton'
import { IAdmin } from '@/interfaces/IAdmin'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import * as $Admin from '@/services/Admin'

export default function AdminsCreate({ params }: any) {
  const [admin, setAdmin] = useState<IAdmin>({
    name: '',
    last_name: '',
    email: '',
    whatsapp: '',
    role: 'admin',
    password: '',
    password_confirmation: ''
  } as IAdmin)

  const { id } = params

  const MySwal = withReactContent(Swal)

  useEffect(() => {
    if (id) {
      $Admin.find(id).then((res: any) => {
        const data: IAdmin = res.data.admin
        setAdmin(data)
      })
    }
  }, [id])

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setAdmin({ ...admin, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (id) {
      $Admin.update(id, admin).then((res: any) => {
        const message = res.response?.data?.message ?? 'Admin atualizado com sucesso'
        MySwal.fire(
          'Sucesso',
          message,
          'success'
        )
      }).catch((err: any) => {
        const message = err.response?.data?.message ?? 'Ocorreu um erro ao atualizar o admin'
        MySwal.fire(
          'Erro',
          message,
          'error'
        )
      })
    }
    else {
      $Admin.store(admin).then((res: any) => {
        const message = res.response?.data?.message ?? 'Admin criado com sucesso'
        MySwal.fire(
          'Sucesso',
          message,
          'success'
        )
      }).catch((err: any) => {
        const message = err.response?.data?.message ?? 'Ocorreu um erro ao atualizar o admin'
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
          <h1 className="text-2xl lg:text-4xl text-gray-500 font-light mb-10">{admin.id ? 'Editar' : 'Novo'} Admin</h1>
          <div className="flex justify-end px-2 -md-2 gap-4">
            <Link href="/dashboard/admins">
              <BackButton icon={IoMdArrowBack}>Voltar</BackButton>
            </Link>
            <PrimaryButton text="Salvar" />
          </div>
        </div>

        <div className="w-full px-2">
          <div className="mb-4">
            <h3 className="w-full text-md font-light text-primary mb-2">Informações</h3>
            <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
              <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
                <label htmlFor="name" className="text-gray-500 text-sm mb-2">
                  Nome
                </label>
                <input type="text" value={admin.name} name="name" id="name" placeholder="Nome" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={handleInputChange} />
              </div>
              <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
                <label htmlFor="last_name" className="text-gray-500 text-sm mb-2">
                  Sobrenome
                </label>
                <input type="text" value={admin.last_name} name="last_name" id="last_name" placeholder="Sobrenome" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={handleInputChange} />
              </div>
              <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
                <label htmlFor="email" className="text-gray-500 text-sm mb-2">
                  E-mail
                </label>
                <input type="email" value={admin.email} name="email" id="email" placeholder="E-mail" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={handleInputChange} />
              </div>
              <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
                <label htmlFor="role" className="text-gray-500 text-sm mb-2">
                  Função
                </label>
                <select value={admin.role} name="role" id="role" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={handleInputChange}>
                  <option value="admin">Administrador</option>
                  <option value="operational">Operacional</option>
                  <option value="consultant">Consultor</option>
                </select>
              </div>
              <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
                <label htmlFor="password" className="text-gray-500 text-sm mb-2">
                  Senha
                </label>
                <input type="password" value={admin.password} name="password" id="password" placeholder="Senha" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={handleInputChange} />
              </div>
              <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
                <label htmlFor="password_confirmation" className="text-gray-500 text-sm mb-2">
                  Repetir Senha
                </label>
                <input type="password" value={admin.password_confirmation} name="password_confirmation" id="password_confirmation" placeholder="Repetir Senha" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={handleInputChange} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
