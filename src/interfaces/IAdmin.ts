import UserRoleEnum from '@/enums/UserRoleEnum'

export interface IAdmin {
  id: number
  firstname: string
  lastname: string
  email: string
  whatsapp?: string
  role: UserRoleEnum
  active: boolean
}