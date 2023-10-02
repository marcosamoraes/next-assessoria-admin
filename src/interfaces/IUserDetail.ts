import UserInformationStatusEnum from '@/enums/UserInformationStatusEnum'

export interface IUserDetail {
  id: number
  document: string
  birth_date: string
  naturalness: string
  gender: string
  civil_status: string
  occupation: string
  rg: string
  rg_issuer: string
  rg_state: string
  rg_issue_date: string
  status: UserInformationStatusEnum
}