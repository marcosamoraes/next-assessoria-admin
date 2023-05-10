import AuthSidebar from '@/components/AuthSidebar/AuthSidebar'
import Link from 'next/link'

export default function ForgotPassword() {
  return (
    <div className="h-screen flex bg-cover bg-no-repeat bg-[url('/auth-background2.jpg')]">
      <AuthSidebar>
        <div>
          <h1 className="mb-5 font-bold text-center text-lg">Recuperar Senha</h1>
          <form>
            <div className="mb-5">
              <input type="text" name="email" placeholder="E-mail" className="py-2 px-5 rounded-lg w-full text-black" />
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
  )
}
