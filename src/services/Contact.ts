import { IContact } from './../interfaces/IContact'
import axios from 'axios'

export const all = (query?: string): Promise<IContact[]> => axios.get(`contacts?${query ?? ''}`)

export const destroy = (id: number): Promise<IContact> => axios.delete(`contacts/${id}`)