import { ISettingTax } from '@/interfaces/ISettingTax'
import axios from 'axios'

export const all = (query?: string): Promise<ISettingTax[]> => axios.get(`settings/taxes?${query ?? ''}`)

export const update = (id: number, data: ISettingTax): Promise<ISettingTax> => axios.put(`settings/taxes/${id}`, data)