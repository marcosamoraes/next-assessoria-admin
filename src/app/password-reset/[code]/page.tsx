'use client'

import AuthSidebar from '@/components/AuthSidebar/AuthSidebar'
import GuestRoute from '@/components/GuestRoute/GuestRoute'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import * as $Auth from '@/services/Auth'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

export default function PasswordReset({ params: { code } }: { params: any }) {
  const MySwal = withReactContent(Swal)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      // TODO: implement password reset

      MySwal.fire({
        title: 'Sucesso',
        text: 'Senha alterada com sucesso',
        icon: 'success',
      })
    } catch (e: any) {
      MySwal.fire({
        title: 'Falha ao resetar senha',
        text: e.response.data.message,
        icon: 'error',
      })
    }
  }

  return (
    <GuestRoute>
      <div className="h-screen flex bg-cover bg-no-repeat bg-[url('/auth-background2.jpg')]">
        <AuthSidebar>
          <div>
            <h1 className="mb-5 font-bold text-center text-lg">Redefinir Senha</h1>
            <form onSubmit={onSubmit}>
              <div className="mb-5">
                <input type="password" name="password" placeholder="Senha" className="py-2 px-5 rounded-lg w-full text-black" />
              </div>
              <div className="mb-5">
                <input type="password" name="password" placeholder="Confirmar Senha" className="py-2 px-5 rounded-lg w-full text-black" />
              </div>
              <div className="mb-3">
                <Link href="/">
                Lembrou a senha? <span className="text-primary">Fazer login</span>
                </Link>
              </div>
              <div>
                <button className="bg-primary px-5 py-2 rounded-lg">Resetar Senha</button>
              </div>
            </form>
          </div>
        </AuthSidebar>
      </div>
    </GuestRoute>
  )
}
