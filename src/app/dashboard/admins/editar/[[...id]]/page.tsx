'use client'

import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import BackButton from '@/components/UI/BackButton/BackButton'
import { IAdmin } from '@/interfaces/IAdmin'
import { getAdmin } from '@/api/AdminsApi'

export default async function AdminsCreate({ params }: any) {
  const [admin, setAdmin] = useState<IAdmin | null>(null)

  const { id } = params

  useEffect(() => {
    const data = getAdmin(id)
    setAdmin(data)
  }, [id])

  return (
    <>
      <form className="flex flex-wrap flex-row">
        <div className="w-full px-2 -md-2 flex justify-between">
          <h1 className="text-2xl lg:text-4xl text-gray-500 font-light mb-10">{admin ? 'Editar' : 'Novo'} Admin</h1>
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
                <label htmlFor="firstname" className="text-gray-500 text-sm mb-2">
                  Nome
                </label>
                <input type="text" name="firstname" id="firstname" placeholder="Nome" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
              </div>
              <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
                <label htmlFor="lastname" className="text-gray-500 text-sm mb-2">
                  Sobrenome
                </label>
                <input type="text" name="lastname" id="lastname" placeholder="Sobrenome" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
              </div>
              <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
                <label htmlFor="email" className="text-gray-500 text-sm mb-2">
                  E-mail
                </label>
                <input type="email" name="email" id="email" placeholder="E-mail" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
              </div>
              <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
                <label htmlFor="role" className="text-gray-500 text-sm mb-2">
                  Função
                </label>
                <select name="role" id="role" className="border border-gray-300 rounded-lg px-3 py-2 mb-5">
                  <option value="admin">Administrador</option>
                  <option value="operational">Operacional</option>
                  <option value="consultant">Consultor</option>
                </select>
              </div>
              <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
                <label htmlFor="password" className="text-gray-500 text-sm mb-2">
                  Senha
                </label>
                <input type="password" name="password" id="password" placeholder="Senha" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
              </div>
              <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
                <label htmlFor="passwordConfirm" className="text-gray-500 text-sm mb-2">
                  Repetir Senha
                </label>
                <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Repetir Senha" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
