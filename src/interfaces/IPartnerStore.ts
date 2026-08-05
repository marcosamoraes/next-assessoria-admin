export interface IPartnerStore {
  id: number
  name: string
  cnpj?: string
  email?: string
  phone?: string
  address: string
  number?: string
  neighborhood?: string
  city: string
  state: string
  zip_code: string
  latitude?: number
  longitude?: number
  logo?: string
  active: boolean
}
