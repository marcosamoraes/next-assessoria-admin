'use client'

import { useAuth } from '@/contexts/AuthProvider'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    const isPrivateRoutes = pathname.startsWith('/dashboard')

    if (!isAuthenticated && isPrivateRoutes) {
      router.push('/')
    }
  }, [isAuthenticated, router, pathname])

  return <>{isAuthenticated && children}</>
}

export default PrivateRoute
