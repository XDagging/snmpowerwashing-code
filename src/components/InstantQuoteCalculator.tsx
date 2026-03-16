import { useState, FormEvent } from 'react'

type Step = 'address' | 'details' | 'result'
type PropertyType = 'residential' | 'commercial' | 'house'
type SizeKey = 'small' | 'medium' | 'large'
type Condition = 'light' | 'heavy'

const RES_SIZES = [
  { key: 'small' as SizeKey, label: 'Small', sub: '1-car / compact' },
  { key: 'medium' as SizeKey, label: 'Medium', sub: '2-car / standard' },
  { key: 'large' as SizeKey, label: 'Large', sub: '3-car+ / long' },
]
const COM_SIZES = [
  { key: 'small' as SizeKey, label: 'Small Lot', sub: 'Up to 10 spaces' },
  { key: 'medium' as SizeKey, label: 'Medium Lot', sub: '10–30 spaces' },
  { key: 'large' as SizeKey, label: 'Large Lot', sub: '30+ spaces' },
]
const HOUSE_SIZES = [
  { key: 'small' as SizeKey, label: 'Small', sub: '1-story / ranch' },
  { key: 'medium' as SizeKey, label: 'Medium', sub: '2-story / colonial' },
  { key: 'large' as SizeKey, label: 'Large', sub: '3-story / estate' },
]

function getZipMultiplier(zip: string): number {
  const p = parseInt(zip.substring(0, 3), 10)
  if (isNaN(p)) return 1.0
  // Northeast — higher cost of living
  if ((p >= 1 && p <= 29) || (p >= 100 && p <= 149) || (p >= 200 && p <= 212)) return 1.2
  // West Coast
  if (p >= 900 && p <= 961) return 1.15
  // Southeast
  if (p >= 300 && p <= 349) return 0.95
  // Midwest
  if ((p >= 480 && p <= 499) || (p >= 600 && p <= 649)) return 0.9
  return 1.0
}

function calculateQuote(type: PropertyType, size: SizeKey, condition: Condition, zip: string) {
  const BASE = type === 'residential' ? 150 : type === 'house' ? 249 : 299
  const sizeMult =
    type === 'residential'
      ? { small: 1.0, medium: 1.55, large: 2.3 }[size]
      : type === 'house'
      ? { small: 1.0, medium: 1.6, large: 2.4 }[size]
      : { small: 1.0, medium: 2.1, large: 3.6 }[size]
  const condMult = condition === 'heavy' ? 1.35 : 1.0
  const zipMult = getZipMultiplier(zip)
  const mid = Math.round((BASE * sizeMult * condMult * zipMult) / 5) * 5
  const low = Math.max(BASE, mid - 100)
  const high = mid + 100
  return { low, high }
}

function extractZip(address: string): string {
  const match = address.match(/\b\d{5}\b/)
  return match ? match[0] : '30301' // fallback → standard multiplier area
}

interface OptionButtonProps {
  selected: boolean
  onClick: () => void
  children: React.ReactNode
}
function OptionButton({ selected, onClick, children }: OptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border-2 px-4 py-3 text-left text-sm font-semibold transition-all ${
        selected
          ? 'border-brand-600 bg-brand-600 text-white shadow-md'
          : 'border-gray-200 bg-white text-gray-700 hover:border-brand-400'
      }`}
    >
      {children}
    </button>
  )
}

export default function InstantQuoteCalculator() {
  const [step, setStep] = useState<Step>('address')
  const [address, setAddress] = useState('')
  const [propertyType, setPropertyType] = useState<PropertyType>('residential')
  const [size, setSize] = useState<SizeKey>('medium')
  const [condition, setCondition] = useState<Condition>('light')
  const [quote, setQuote] = useState<{ low: number; high: number } | null>(null)

  const handleAddressSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (address.trim().length > 4) setStep('details')
  }

  const handleCalculate = () => {
    const zip = extractZip(address)
    setQuote(calculateQuote(propertyType, size, condition, zip))
    setStep('result')
  }

  const sizes = propertyType === 'residential' ? RES_SIZES : propertyType === 'house' ? HOUSE_SIZES : COM_SIZES

  /* ── Step 1: Address ─────────────────────────────────────────────── */
  if (step === 'address') {
    return (
      <div className="w-full">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-brand-400">
          Instant Price Estimate
        </p>
        <h2 className="mb-5 text-center text-xl font-bold text-gray-900">
          What's your property address?
        </h2>
        <form onSubmit={handleAddressSubmit} className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="123 Main St, City, State 12345"
              required
              className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 text-sm text-gray-800 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-brand-600 px-7 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-700 hover:shadow-lg active:scale-95"
          >
            Get My Estimate →
          </button>
        </form>
        <p className="mt-3 text-center text-xs text-gray-400">
          No sign-up required · Instant result · Free estimate
        </p>
      </div>
    )
  }

  /* ── Step 2: Details ─────────────────────────────────────────────── */
  if (step === 'details') {
    return (
      <div className="w-full">
        {/* Back + address confirmation */}
        <div className="mb-4 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setStep('address')}
            className="text-xs text-gray-400 underline hover:text-gray-600"
          >
            ← Change address
          </button>
          <span className="flex-1 truncate rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
            📍 {address}
          </span>
        </div>

        {/* Property type */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">Property Type</p>
        <div className="mb-5 grid grid-cols-3 gap-3">
          <OptionButton selected={propertyType === 'residential'} onClick={() => { setPropertyType('residential'); setSize('medium') }}>
            <span className="block text-base">🚗</span>
            <span className="block">Driveway</span>
            <span className="block text-xs font-normal opacity-70">Patio / Walkway</span>
          </OptionButton>
          <OptionButton selected={propertyType === 'house'} onClick={() => { setPropertyType('house'); setSize('medium') }}>
            <span className="block text-base">🏠</span>
            <span className="block">House</span>
            <span className="block text-xs font-normal opacity-70">Exterior walls</span>
          </OptionButton>
          <OptionButton selected={propertyType === 'commercial'} onClick={() => { setPropertyType('commercial'); setSize('medium') }}>
            <span className="block text-base">🏢</span>
            <span className="block">Commercial</span>
            <span className="block text-xs font-normal opacity-70">Business / Lot</span>
          </OptionButton>
        </div>

        {/* Driveway / lot size */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
          {propertyType === 'residential' ? 'Driveway Size' : propertyType === 'house' ? 'Home Size' : 'Lot Size'}
        </p>
        <div className="mb-5 grid grid-cols-3 gap-2">
          {sizes.map((s) => (
            <OptionButton key={s.key} selected={size === s.key} onClick={() => setSize(s.key)}>
              <span className="block font-bold">{s.label}</span>
              <span className="block text-xs font-normal opacity-70">{s.sub}</span>
            </OptionButton>
          ))}
        </div>

        {/* Condition */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">Current Condition</p>
        <div className="mb-6 grid grid-cols-2 gap-3">
          <OptionButton selected={condition === 'light'} onClick={() => setCondition('light')}>
            <span className="block text-base">✨</span>
            <span className="block">Light soiling</span>
            <span className="block text-xs font-normal opacity-70">Dirt, dust, general grime</span>
          </OptionButton>
          <OptionButton selected={condition === 'heavy'} onClick={() => setCondition('heavy')}>
            <span className="block text-base">🔴</span>
            <span className="block">Heavy stains</span>
            <span className="block text-xs font-normal opacity-70">Oil, mold, deep staining</span>
          </OptionButton>
        </div>

        <button
          type="button"
          onClick={handleCalculate}
          className="w-full rounded-xl bg-brand-600 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-brand-700 hover:shadow-lg active:scale-95"
        >
          Calculate My Price →
        </button>
      </div>
    )
  }

  /* ── Step 3: Result ──────────────────────────────────────────────── */
  return (
    <div className="w-full text-center">
      <div className="mb-1 flex items-center justify-center gap-2 text-sm text-gray-500">
        <button type="button" onClick={() => setStep('details')} className="text-xs underline hover:text-gray-700">
          ← Edit details
        </button>
        <span className="text-gray-300">|</span>
        <span className="truncate text-xs">📍 {address}</span>
      </div>

      <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-brand-600">Your Estimate</p>

      <div className="mt-3 rounded-2xl bg-gradient-to-br from-brand-50 to-blue-50 px-6 py-8">
        <p className="text-5xl font-extrabold tracking-tight text-brand-800">
          ${quote!.low.toLocaleString()} – ${quote!.high.toLocaleString()}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          {propertyType === 'residential' ? 'Driveway' : propertyType === 'house' ? 'House' : 'Commercial'} ·{' '}
          {size === 'small' ? 'Small' : size === 'medium' ? 'Medium' : 'Large'} ·{' '}
          {condition === 'light' ? 'Light cleaning' : 'Heavy-duty cleaning'}
        </p>
        <p className="mt-3 text-xs text-gray-400">
          Final price confirmed on-site. No hidden fees.
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a
          href="#contact"
          className="flex-1 rounded-xl bg-brand-600 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-700 hover:shadow-lg"
        >
          Book This Service →
        </a>
        <a
          href="tel:+15555550123"
          className="flex-1 rounded-xl border-2 border-brand-200 py-4 text-sm font-bold text-brand-700 transition-all hover:bg-brand-50"
        >
          Call to Confirm
        </a>
      </div>

      <button
        type="button"
        onClick={() => { setStep('address'); setAddress(''); setQuote(null) }}
        className="mt-4 text-xs text-gray-400 underline hover:text-gray-600"
      >
        Start over
      </button>
    </div>
  )
}
