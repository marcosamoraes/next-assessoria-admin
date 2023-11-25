import axios from 'axios'

export const me = (token: string): Promise<Response> => axios.get('me', {
  headers: {
    'Authorization': `Bearer ${token}`,
  },
})

export const login = (email: string, password: string): Promise<Response> => axios.post('login', {
  email,
  password,
})

export const forgotPassword = (email: string): Promise<Response> => axios.post('forgot-password', {
  email,
})

export const resetPassword = (token: string, email: string, password: string, password_confirmation: string): Promise<Response> => axios.post('reset-password', {
  token,
  email,
  password,
  password_confirmation,
})