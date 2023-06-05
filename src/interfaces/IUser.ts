import UserRoleEnum from '@/enums/UserRoleEnum'
import { IUserAddress } from './IUserAddress'
import { IUserDocument } from './IUserDocument'
import { IUserInformation } from './IUserInformation'

export interface IUser {
  id: number
  firstname: string
  lastname: string
  email: string
  whatsapp?: string
  role?: UserRoleEnum
  active: boolean

  userInformation?: IUserInformation
  userAddress?: IUserAddress
  userDocuments?: IUserDocument[]
}