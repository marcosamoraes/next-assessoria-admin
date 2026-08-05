import { IPartnerStore } from '@/interfaces/IPartnerStore'
import axios from 'axios'

export const all = (query?: string): Promise<IPartnerStore[]> => axios.get(`partner-stores?${query ?? ''}`)

export const find = (id: number): Promise<IPartnerStore> => axios.get(`partner-stores/${id}`)

export const store = (data: IPartnerStore): Promise<IPartnerStore> => axios.post('partner-stores', data)

export const update = (id: number, data: IPartnerStore): Promise<IPartnerStore> => axios.put(`partner-stores/${id}`, data)

export const destroy = (id: number): Promise<IPartnerStore> => axios.delete(`partner-stores/${id}`)

export const toggleStatus = (id: number): Promise<IPartnerStore> => axios.patch(`partner-stores/${id}/status`)
