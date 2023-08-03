import { ISettingPayment } from '@/interfaces/ISettingPayment'
import axios from 'axios'

export const all = (query?: string): Promise<ISettingPayment[]> => axios.get(`settings/payments?${query ?? ''}`)

export const update = (data: ISettingPayment): Promise<ISettingPayment> => axios.put('settings/payments', data)