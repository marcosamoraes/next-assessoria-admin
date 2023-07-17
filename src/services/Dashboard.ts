import axios from 'axios'

export const get = (filter: string): Promise<Response> => axios.get(`dashboard/${filter}`)