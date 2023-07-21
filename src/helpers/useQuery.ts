import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const updateSearchParams = (e: any, router: ReturnType<typeof useRouter>, pathname: ReturnType<typeof usePathname>, searchParams: ReturnType<typeof useSearchParams>) => {
  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)

    return params.toString()
  }

  if (e.target.value !== '0') {
    router.push(pathname + '?' + createQueryString(e.target.name, e.target.value))
  } else {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(e.target.name)
    router.push(pathname + '?' + params.toString())
  }
}