import { IActivity } from './IActivity'
import { IOrder } from './IOrder'

export interface IDashboard {
  billingValue: number
  couponsCount: number
  ordersCount: number
  productsCount: number
  usersCount: number
  lastActivities: IActivity[]
  lastOrders: IOrder[]
}