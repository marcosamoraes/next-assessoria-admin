import { ICategory } from '@/interfaces/ICategory'
import axios from 'axios'

export const all = (params: any = {}): Promise<ICategory[]> => axios.get('categories', {
  params,
})

export const find = (id: number): Promise<ICategory> => axios.get(`categories/${id}`)

export const store = (id: number, data: ICategory): Promise<ICategory> => axios.post(`categories/${id}`, data)

export const update = (id: number, data: ICategory): Promise<ICategory> => axios.put(`categories/${id}`, data)