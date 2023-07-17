'use client'

import AuthSidebar from '@/components/AuthSidebar/AuthSidebar'
import GuestRoute from '@/components/GuestRoute/GuestRoute'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import * as $Auth from '@/services/Auth'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

export default function ForgotPassword() {
  const [ email, setEmail ] = useState<string>('')

  const MySwal = withReactContent(Swal)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await $Auth.forgotPassword(email)

      MySwal.fire({
        title: 'Sucesso',
        text: 'Um e-mail com instruções para resetar sua senha foi enviado',
        icon: 'success',
      })
    } catch (e: any) {
      MySwal.fire({
        title: 'Falha ao recuperar senha',
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
            <h1 className="mb-5 font-bold text-center text-lg">Recuperar Senha</h1>
            <form onSubmit={onSubmit}>
              <div className="mb-5">
                <input type="text" name="email" placeholder="E-mail" className="py-2 px-5 rounded-lg w-full text-black" onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <Link href="/">
                Lembrou a senha? <span className="text-primary">Fazer login</span>
                </Link>
              </div>
              <div>
                <button className="bg-primary px-5 py-2 rounded-lg">Recuperar Senha</button>
              </div>
            </form>
          </div>
        </AuthSidebar>
      </div>
    </GuestRoute>
  )
}
