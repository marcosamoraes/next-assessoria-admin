import OrderStatusEnum from '@/enums/OrderStatusEnum'
import { IOrderProduct } from './IOrderProduct'
import { IUser } from './IUser'
import { ICoupon } from './ICoupon'
import { IOrderActivity } from './IOrderActivity'

export interface IOrder {
  id: number
  code: string
  status: OrderStatusEnum
  payment_method: string
  subtotal: number
  discount: number
  delivery_fee: number
  installments: number
  total: number
  canceled_reason: string
  zipcode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  craf_image?: string,
  full_address?: string
  created_at: string
  updated_at: string

  coupon?: ICoupon
  user?: IUser
  order_activities?: IOrderActivity[]
  order_products?: IOrderProduct[]
}