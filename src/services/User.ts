import { IUser } from './../interfaces/IUser'
import axios from 'axios'

export const all = (query?: string): Promise<IUser[]> => axios.get(`users?${query ?? ''}`)

export const find = (id: number): Promise<IUser> => axios.get(`users/${id}`)

export const store = (data: IUser): Promise<IUser> => axios.post('users', data)

export const update = (id: number, data: IUser): Promise<IUser> => axios.put(`users/${id}`, data)

export const destroy = (id: number): Promise<IUser> => axios.delete(`users/${id}`)

export const toggleStatus = (id: number): Promise<IUser> => axios.patch(`users/${id}/status`)