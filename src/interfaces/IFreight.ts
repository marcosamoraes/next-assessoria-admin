import { ICategory } from './ICategory'

export interface IFreight {
  id: number
  state: string
  category: ICategory
  oneItem: number
  twoItems: number
  threeItems: number
  fourItems: number
}
