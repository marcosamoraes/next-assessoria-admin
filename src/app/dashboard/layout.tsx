import Footer from '@/components/Footer/Footer'
import Sidebar from '@/components/Sidebar/Sidebar'
import './../globals.css'

export const metadata = {
  title: 'Next Assessoria',
  description: 'Loja NEXT - Loja Glock Oficial',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <main className="relative h-screen w-full p-10">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
