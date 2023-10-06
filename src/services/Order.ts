import { IOrder } from '@/interfaces/IOrder'
import axios from 'axios'

export const all = (query?: string): Promise<IOrder[]> => axios.get(`orders?${query ?? ''}`)

export const find = (id: number): Promise<IOrder> => axios.get(`orders/${id}`)

export const update = (id: number, data: IOrder): Promise<IOrder> => axios.put(`orders/${id}`, data)

export const destroy = (id: number): Promise<IOrder> => axios.delete(`orders/${id}`)