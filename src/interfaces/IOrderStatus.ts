import OrderStatusEnum from '@/enums/OrderStatusEnum'
import { IOrder } from './IOrder'

export interface IOrderStatus {
  id: number
  status: OrderStatusEnum
  description: string
  date: string
  createdAt: string

  order?: IOrder
}