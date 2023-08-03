import { ISettingText } from '@/interfaces/ISettingText'
import axios from 'axios'

export const all = (query?: string): Promise<ISettingText[]> => axios.get(`settings/texts?${query ?? ''}`)

export const find = (id: number): Promise<ISettingText> => axios.get(`settings/texts/${id}`)

export const update = (id: number, data: ISettingText): Promise<ISettingText> => axios.put(`settings/texts/${id}`, data)