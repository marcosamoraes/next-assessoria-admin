import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const updateSearchParams = (name: string, value: any, router: ReturnType<typeof useRouter>, pathname: ReturnType<typeof usePathname>, searchParams: ReturnType<typeof useSearchParams>) => {
  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)

    return params.toString()
  }

  if (value !== '0') {
    router.push(pathname + '?' + createQueryString(name, value))
  } else {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(name)
    router.push(pathname + '?' + params.toString())
  }
}

export const deleteSearchParam = (name: string, router: ReturnType<typeof useRouter>, pathname: ReturnType<typeof usePathname>, searchParams: ReturnType<typeof useSearchParams>) => {
  const params = new URLSearchParams(searchParams.toString())
  params.delete(name)
  router.push(pathname + '?' + params.toString())
}