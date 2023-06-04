import UserInformationStatusEnum from '@/enums/UserInformationStatusEnum'

export interface IUserInformation {
  id: number
  document: string
  birthdate: string
  naturalness: string
  gender: string
  civilStatus: string
  occupation: string
  rg: string
  rgIssuer: string
  rgState: string
  rgIssueDate: string
  status: UserInformationStatusEnum
}