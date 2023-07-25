import axios from 'axios'

export const post = (folder: string, data: any): Promise<string> => axios.post(`upload/${folder}`, data, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})