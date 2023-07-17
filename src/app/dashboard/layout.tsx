import Footer from '@/components/Footer/Footer'
import Sidebar from '@/components/Sidebar/Sidebar'
import './../globals.css'
import NavbarMobile from '@/components/NavbarMobile/NavbarMobile'
import SidebarProvider from '@/contexts/SidebarProvider'
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute'

export const metadata = {
  title: 'Next Assessoria',
  description: 'Loja NEXT - Loja Glock Oficial',
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <PrivateRoute>
      <SidebarProvider>
        <NavbarMobile />
        <div className="h-screen flex">
          <Sidebar />
          <div className="flex flex-col w-full md:w-8/12 xl:w-10/12">
            <main className="relative h-screen box-border overflow-auto w-full py-2 md:py-10 px-4 md:px-14">{children}</main>
            <Footer />
          </div>
        </div>
      </SidebarProvider>
    </PrivateRoute>
  )
}
