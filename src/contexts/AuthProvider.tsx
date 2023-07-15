'use client'

import React, { createContext, useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { IUser } from '@/interfaces/IUser'
import useStickyState from '@/hooks/useStickyState'
import * as $Auth from '@/services/Auth'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

type AuthContextProps = {
  isLoading: boolean
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  user: IUser|null
  setUser: React.Dispatch<React.SetStateAction<IUser|null>>
  token: string|null
  setToken: React.Dispatch<React.SetStateAction<string|null>>
  login: (email: string, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [ token, setToken ] = useStickyState<string|null>(null, 'token')
  const [ user, setUser ] = useState<IUser|null>(null)
  const [ isAuthenticated, setIsAuthenticated ] = useState<boolean>(false)
  const [ isLoading, setIsLoading ] = useState<boolean>(token !== null && token.length > 0)

  const router = useRouter()

  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL

  const MySwal = withReactContent(Swal)

  useEffect(() => {
    if (token?.length) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

      $Auth.me(token).then(({ data }: any) => {
        setUser(data)
        setIsAuthenticated(true)
      }).catch(() => setToken(null)).finally(() => setIsLoading(false))
    } else {
      setIsLoading(false)
    }
  }, [setToken, token])

  const login = (email: string, password: string) => {
    setIsLoading(true)
    $Auth.login(email, password).then(({ data: { user, token } }: any) => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setUser(user)
      setToken(token)
      setIsAuthenticated(true)
      router.push('/dashboard')
    }).catch((e) => {
      setUser(null)
      setToken(null)
      setIsAuthenticated(false)

      MySwal.fire({
        title: 'Falha ao realizar login',
        text: e.response.data.message,
        icon: 'error',
      })
    }).finally(() => setIsLoading(false))
  }

  const logout = useCallback(() => {
    setUser(null)
    setToken(null)
    setIsAuthenticated(false)
    router.push('/')
  }, [router, setToken])

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        token,
        setToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
