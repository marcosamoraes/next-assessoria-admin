import axios from 'axios'

export const csrf = () => axios.get('sanctum/csrf-cookie', { baseURL: process.env.NEXT_PUBLIC_API_URL?.split('/api/admin')[0] })
