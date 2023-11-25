'use client'

import AuthSidebar from '@/components/AuthSidebar/AuthSidebar'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import * as $Auth from '@/services/Auth'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { useRouter, useSearchParams } from 'next/navigation'

export default function PasswordReset({ params: { code } }: { params: any }) {
  const MySwal = withReactContent(Swal)
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const searchParams = useSearchParams()

  const router = useRouter()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = searchParams.get('email')

    if (!email) {
      MySwal.fire({
        title: 'Falha ao resetar senha',
        text: 'Email não encontrado',
        icon: 'error',
      })
      return
    }

    try {
      await $Auth.resetPassword(code, email, password, confirmPassword)

      MySwal.fire({
        title: 'Sucesso',
        text: 'Senha alterada com sucesso',
        icon: 'success',
      })

      router.push('/')
    } catch (e: any) {
      MySwal.fire({
        title: 'Falha ao resetar senha',
        text: e.response.data.message,
        icon: 'error',
      })
    }
  }

  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/auth-background2.jpg')]"></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <AuthSidebar>
        <div>
          <h1 className="mb-5 font-bold text-center text-lg">Redefinir Senha</h1>
          <form onSubmit={onSubmit}>
            <div className="mb-5">
              <input type="password" name="password" placeholder="Senha" className="py-2 px-5 rounded-lg w-full text-black" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="mb-5">
              <input type="password" name="password" placeholder="Confirmar Senha" className="py-2 px-5 rounded-lg w-full text-black" onChange={e => setConfirmPassword(e.target.value)} />
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
  )
}
