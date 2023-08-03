import { ICategory } from './ICategory'
import { IState } from './IState'

export interface ISettingFreight {
  id: number
  state_id: number
  category_id: number
  value_one_item: number
  value_two_item: number
  value_three_item: number
  value_four_item: number

  state: IState
  category: ICategory
}
