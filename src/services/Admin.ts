import { IAdmin } from './../interfaces/IAdmin'
import axios from 'axios'

export const all = (query?: string): Promise<IAdmin[]> => axios.get(`admins?${query ?? ''}`)

export const find = (id: number): Promise<IAdmin> => axios.get(`admins/${id}`)

export const store = (data: IAdmin): Promise<IAdmin> => axios.post('admins', data)

export const update = (id: number, data: IAdmin): Promise<IAdmin> => axios.put(`admins/${id}`, data)

export const destroy = (id: number): Promise<IAdmin> => axios.delete(`admins/${id}`)

export const toggleStatus = (id: number): Promise<IAdmin> => axios.patch(`admins/${id}/status`)