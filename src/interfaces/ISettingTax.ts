import { IState } from './IState'

export interface ISettingTax {
  id: number
  state_id?: number
  tax: string
  value: number

  state: IState
}