import CouponTypeEnum from '@/enums/CouponTypeEnum'

export interface ICoupon {
  id: number
  name: string
  category?: CouponTypeEnum
  type: string
  value: number
  minValue?: number
  code?: string
  quantity: number
  expireAt: string
  active: boolean
}