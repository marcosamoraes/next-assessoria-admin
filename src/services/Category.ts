import { ICategory } from '@/interfaces/ICategory'
import axios from 'axios'

export const all = (query?: string): Promise<ICategory[]> => axios.get(`categories?${query ?? ''}`)

export const find = (id: number): Promise<ICategory> => axios.get(`categories/${id}`)

export const store = (data: ICategory): Promise<ICategory> => axios.post('categories', data)

export const update = (id: number, data: ICategory): Promise<ICategory> => axios.put(`categories/${id}`, data)

export const destroy = (id: number): Promise<ICategory> => axios.delete(`categories/${id}`)

export const toggleStatus = (id: number): Promise<ICategory> => axios.patch(`categories/${id}/status`)