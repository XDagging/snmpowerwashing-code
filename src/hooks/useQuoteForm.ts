import { useState, ChangeEvent, FormEvent } from 'react'
import { QuoteFormData, FormStatus } from '../types/quote'

const initialData: QuoteFormData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  serviceType: '',
  message: '',
}

export function useQuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>(initialData)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8787'
      const res = await fetch(`${apiUrl}/api/quotes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error ?? `Server error ${res.status}`)
      }

      setStatus('success')
      setFormData(initialData)
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      )
    }
  }

  return { formData, status, errorMessage, handleChange, handleSubmit }
}
