'use client'
import AuthSidebar from '@/components/AuthSidebar/AuthSidebar'
import { useAuth } from '@/contexts/AuthProvider'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'

export default function Login() {
  const { user, login } = useAuth()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const router = useRouter()

  useEffect(() => {
    if (user) return router.push('/dashboard')
  }, [router, user])

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/auth-background.jpg')]"></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <AuthSidebar>
        <div>
          <h1 className="mb-5 font-bold text-center text-lg">Acesso Administrativo</h1>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-5">
              <input type="text" name="email" placeholder="E-mail" className="py-2 px-5 rounded-lg w-full text-black" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-5">
              <input type="password" name="password" placeholder="Senha" className="py-2 px-5 rounded-lg w-full text-black" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="mb-3">
              <Link href="/esqueci-minha-senha">
              Esqueceu sua senha? <span className="text-primary">Clique aqui</span>
              </Link>
            </div>
            <div>
              <button type="submit" className="bg-primary px-5 py-2 rounded-lg">
              Entrar
              </button>
            </div>
          </form>
        </div>
      </AuthSidebar>
    </div>
  )
}
