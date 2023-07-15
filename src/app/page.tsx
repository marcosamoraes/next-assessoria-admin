'use client'
import AuthSidebar from '@/components/AuthSidebar/AuthSidebar'
import AuthContext from '@/contexts/AuthProvider'
import Link from 'next/link'
import { FormEvent, useContext, useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { login } = useContext(AuthContext)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className="h-screen flex bg-cover bg-no-repeat bg-[url('/auth-background.jpg')]">
      <AuthSidebar>
        <div>
          <h1 className="mb-5 font-bold text-center text-lg">Acesso Administrativo</h1>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-5">
              <input type="text" name="email" placeholder="E-mail" className="py-2 px-5 rounded-lg w-full text-black" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-5">
              <input type="text" name="password" placeholder="Senha" className="py-2 px-5 rounded-lg w-full text-black" onChange={e => setPassword(e.target.value)} />
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
