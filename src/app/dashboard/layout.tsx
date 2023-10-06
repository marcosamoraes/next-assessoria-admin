'use client'

import Footer from '@/components/Footer/Footer'
import Sidebar from '@/components/Sidebar/Sidebar'
import './../globals.css'
import NavbarMobile from '@/components/NavbarMobile/NavbarMobile'
import SidebarProvider from '@/contexts/SidebarProvider'
import { useAuth } from '@/contexts/AuthProvider'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import UserRoleEnum from '@/enums/UserRoleEnum'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth()

  const router = useRouter()
  const pathname = usePathname()

  const checkIfRoleAllowAccess = useCallback(() => {
    if (!user) return

    if (user.role !== UserRoleEnum.ADMIN) {
      if (pathname.includes('/admins') || pathname.includes('/configuracoes')) {
        router.push('/dashboard')
      }
    }

    if (user.role === UserRoleEnum.OPERATIONAL) {
      if (pathname.endsWith('/editar')) {
        router.push('/dashboard')
      }
    }

    if (user.role === UserRoleEnum.CONSULTANT) {
      if (pathname.includes('/editar')) {
        router.push('/dashboard')
      }
    }
  }, [user, pathname, router])

  useEffect(() => {
    if (!isLoading && !user) return router.push('/')

    if (user) {
      checkIfRoleAllowAccess()
    }
  }, [isLoading, router, user, checkIfRoleAllowAccess])

  return (
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
  )
}
