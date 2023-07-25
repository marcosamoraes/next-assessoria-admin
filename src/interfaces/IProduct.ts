import { ICategory } from './ICategory'
import { IProductImage } from './IProductImage'
import { IProductValue } from './IProductValue'

export interface IProduct {
  id: number
  slug: string
  title: string
  code: string
  stock: number
  client_type: string
  pre_sale: boolean
  featured: boolean
  image: string
  description?: string
  active: boolean
  category_id?: number

  category: ICategory
  images?: IProductImage[]
  prices?: IProductValue[]
}