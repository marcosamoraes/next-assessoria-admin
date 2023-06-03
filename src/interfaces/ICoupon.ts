export interface ICoupon {
  id: number
  name: string
  category: string
  type: string
  value: number
  minValue: number
  code: string
  quantity: number
  expireAt: Date
  active: boolean
}