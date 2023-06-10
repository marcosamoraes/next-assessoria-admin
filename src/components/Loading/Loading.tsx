'use client'

import { LoadingContext } from '@/contexts/LoadingProvider'
import { useContext } from 'react'

export default function Loading() {
  const { isLoading } = useContext(LoadingContext)

  return (
    <div
      className={`${
        !isLoading ? 'hidden' : false
      } absolute left-0 right-0 top-0 bottom-0 bg-black/30 z-50 flex justify-center items-center`}
    >
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
    </div>
  )
}
