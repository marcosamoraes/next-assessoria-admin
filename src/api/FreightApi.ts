import { ISettingFreight } from '@/interfaces/ISettingFreight'
import { getCategories } from './CategoriesApi'
import { getStates } from './StatesApi'

export const getFreight = (id?: number) => {
  if (id) {
    return null
  }

  const states = getStates()
  const categories = getCategories()
  const data: ISettingFreight[] = []
  let index = 1
  categories.map((category) => {
    states.map((state) => {
      data.push({
        id: index,
        state_id: state.id,
        category_id: category.id,
        category: category,
        state: state,
        value_one_item: index * 20,
        value_two_item: index * 15,
        value_three_item: index * 15,
        value_four_item: index * 15,
      })
      index++
    })
  })

  return data
}