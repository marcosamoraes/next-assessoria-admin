import CouponTypeEnum from '@/enums/CouponTypeEnum'
import { ICategory } from './ICategory'

export interface ICoupon {
  id: number
  name: string
  category_id?: number
  type: CouponTypeEnum
  value: number
  min_value?: number
  code?: string
  quantity: number
  expire_at?: string
  active: boolean

  category?: ICategory
}