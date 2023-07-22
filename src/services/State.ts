import { IState } from '@/interfaces/IState'
import axios from 'axios'

export const all = (): Promise<IState[]> => axios.get('states')