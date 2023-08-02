import UserRoleEnum from '@/enums/UserRoleEnum'

export interface IAdmin {
  id: number
  name: string
  last_name: string
  email: string
  whatsapp?: string
  role: UserRoleEnum
  active: boolean
}