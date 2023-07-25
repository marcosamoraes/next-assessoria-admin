import { IProduct } from '@/interfaces/IProduct'
import axios from 'axios'

export const all = (query?: string): Promise<IProduct[]> => axios.get(`products?${query ?? ''}`)

export const find = (id: number): Promise<IProduct> => axios.get(`products/${id}`)

export const store = (data: IProduct): Promise<IProduct> => axios.post('products', data)

export const update = (id: number, data: IProduct): Promise<IProduct> => axios.put(`products/${id}`, data)

export const destroy = (id: number): Promise<IProduct> => axios.delete(`products/${id}`)

export const toggleStatus = (id: number): Promise<IProduct> => axios.patch(`products/${id}/status`)