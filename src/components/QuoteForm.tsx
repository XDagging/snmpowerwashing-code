import { useQuoteForm } from '../hooks/useQuoteForm'

const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service…' },
  { value: 'residential', label: 'Residential Power Washing' },
  { value: 'house', label: 'House Powerwashing' },
  { value: 'commercial', label: 'Commercial Power Washing' },
]

export default function QuoteForm() {
  const { formData, status, errorMessage, handleChange, handleSubmit } = useQuoteForm()

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-green-50 px-8 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 text-2xl font-bold text-gray-900">Quote Request Sent!</h3>
        <p className="mt-3 max-w-md text-gray-600">
          Thanks for reaching out. We'll review your request and get back to you within 24 hours
          with a personalised quote.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1 */}
      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-shadow focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-shadow focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-shadow focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Property Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main St, City, State"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-shadow focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Service Needed <span className="text-red-500">*</span>
          </label>
          <select
            name="serviceType"
            required
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-shadow focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          >
            {SERVICE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} disabled={o.value === ''}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Additional Details
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your property — number of windows, floors, any special requirements…"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-shadow focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-brand-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          'Get My Free Quote →'
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        No spam, ever. We'll only contact you about your quote request.
      </p>
    </form>
  )
}
