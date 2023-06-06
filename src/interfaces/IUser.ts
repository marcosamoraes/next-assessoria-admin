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
  document?: string
  role?: UserRoleEnum
  active: boolean
  createdAt?: string
  updatedAt?: string

  userInformation?: IUserInformation
  userAddress?: IUserAddress
  userDocuments?: IUserDocument[]
}