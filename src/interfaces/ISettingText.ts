import SettingTextTypeEnum from '@/enums/SettingTextTypeEnum'

export interface ISettingText {
  id: number
  type: SettingTextTypeEnum
  code: string
  name: string
  description: string
  content: string
}