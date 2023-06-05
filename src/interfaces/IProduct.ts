export interface IProduct {
  id: number
  title: string
  code: string
  category: string
  clientType: string
  preSale?: boolean
  featured: boolean
  image: string
  images?: string[]
  description?: string
}