import { IOrder } from './IOrder'
import { IProduct } from './IProduct'

export interface IOrderProduct {
  id: number
  price: number
  quantity: number
  total: number
  createdAt: string
  updatedAt: string

  product?: IProduct
  order?: IOrder
}