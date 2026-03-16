export interface QuoteFormData {
  name: string
  email: string
  phone: string
  address: string
  serviceType: string
  message: string
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'
