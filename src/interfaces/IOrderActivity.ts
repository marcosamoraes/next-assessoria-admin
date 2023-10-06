import OrderStatusEnum from '@/enums/OrderStatusEnum'
import { IAdmin } from './IAdmin'

export interface IOrderActivity {
  id: number
  status: OrderStatusEnum
  description: string
  created_at: string

  user?: IAdmin
}