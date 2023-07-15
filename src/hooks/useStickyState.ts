import { useEffect, useState } from 'react'
import useUpdateEffect from './useUpdateEffect'

const useStickyState = <T = unknown>(defaultValue: T, key: string): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [ value, setValue ] = useState<T>(() => {
    let stickyValue = null
    if (typeof window !== 'undefined') {
      stickyValue = localStorage.getItem(key) as string
    }

    if (stickyValue === null) {
      return defaultValue
    }

    try {
      return JSON.parse(stickyValue)
    } catch {
      return stickyValue
    }
  })

  const saveValue = () => {
    if (typeof value != 'undefined' && value != null) {
      localStorage.setItem(key, typeof value !== 'object' ? (value as unknown) as string : JSON.stringify(value))
    } else if (typeof value == 'undefined') {
      localStorage.removeItem(key)
    }
  }

  useEffect(saveValue)

  useUpdateEffect(saveValue, [ key, value ])

  return [ value, setValue ]
}

export default useStickyState
