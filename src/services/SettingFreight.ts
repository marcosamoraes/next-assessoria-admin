import { ISettingFreight } from '@/interfaces/ISettingFreight'
import axios from 'axios'

export const all = (query?: string): Promise<ISettingFreight[]> => axios.get(`settings/freights?${query ?? ''}`)

export const update = (id: number, data: ISettingFreight): Promise<ISettingFreight> => axios.put(`settings/freights/${id}`, data)