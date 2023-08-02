import { ICoupon } from './../interfaces/ICoupon'
import axios from 'axios'

export const all = (query?: string): Promise<ICoupon[]> => axios.get(`coupons?${query ?? ''}`)

export const find = (id: number): Promise<ICoupon> => axios.get(`coupons/${id}`)

export const store = (data: ICoupon): Promise<ICoupon> => axios.post('coupons', data)

export const update = (id: number, data: ICoupon): Promise<ICoupon> => axios.put(`coupons/${id}`, data)

export const destroy = (id: number): Promise<ICoupon> => axios.delete(`coupons/${id}`)

export const toggleStatus = (id: number): Promise<ICoupon> => axios.patch(`coupons/${id}/status`)