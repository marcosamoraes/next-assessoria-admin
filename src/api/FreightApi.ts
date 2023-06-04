import { IFreight } from '@/interfaces/IFreight'
import { getCategories } from './CategoriesApi'
import { getStates } from './StatesApi'

export const getFreight = (id?: number) => {
  if (id) {
    return null
  }

  const states = getStates()
  const categories = getCategories()
  const data: IFreight[] = []
  let index = 1
  categories.map((category) => {
    states.map((state) => {
      data.push({
        id: index,
        state: state.uf,
        category: category,
        oneItem: index * 20,
        twoItems: index * 15,
        threeItems: index * 10,
        fourItems: index * 5,
      })
      index++
    })
  })

  return data
}