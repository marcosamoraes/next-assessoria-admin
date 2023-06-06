import OrderStatusEnum from '@/enums/OrderStatusEnum'
import { IOrderProduct } from './IOrderProduct'
import { IUser } from './IUser'
import { ICoupon } from './ICoupon'
import { IOrderStatus } from './IOrderStatus'

export interface IOrder {
  id: number
  code: string
  status: OrderStatusEnum
  paymentMethod: string
  subtotal: number
  discount: number
  deliveryFee: number
  installments: number
  total: number
  date: string
  canceledReason: string
  createdAt: string
  updatedAt: string

  coupon?: ICoupon
  user?: IUser
  orderStatus?: IOrderStatus[]
  orderProducts?: IOrderProduct[]
}