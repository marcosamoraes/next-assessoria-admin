import UserRoleEnum from '@/enums/UserRoleEnum'
import { IUserAddress } from './IUserAddress'
import { IUserDetail } from './IUserDetail'

export interface IUser {
  id: number
  name: string
  last_name: string
  email: string
  whatsapp?: string
  document?: string
  role?: UserRoleEnum
  active: boolean
  created_at?: string
  updated_at?: string

  details?: IUserDetail
  address?: IUserAddress
}