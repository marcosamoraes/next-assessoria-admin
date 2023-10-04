import { IOrder } from './IOrder'
import { IProduct } from './IProduct'

export interface IOrderProduct {
  id: number
  price: number
  quantity: number
  total: number
  created_at: string
  updated_at: string

  product?: IProduct
  order?: IOrder
}