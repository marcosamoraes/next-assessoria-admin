import LoadingComponent from '@/components/Loading/Loading'
import LoadingProvider from '@/providers/LoadingProvider'
import { Suspense } from 'react'
import './globals.css'
import Loading from './loading'

export const metadata = {
  title: 'Next Assessoria',
  description: 'Loja NEXT - Loja Glock Oficial',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-100">
        <Suspense fallback={<Loading />}>
          <LoadingProvider>
            <LoadingComponent />
            {children}
          </LoadingProvider>
        </Suspense>
      </body>
    </html>
  )
}
