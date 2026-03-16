import { useState } from 'react'

const FAQS = [
  {
    q: 'How much does driveway cleaning cost?',
    a: 'Residential power washing starts from $150 and commercial from $299. Exact pricing depends on the size, condition, and location of your property. Use our instant estimator at the top of the page to get a price range in seconds — or fill out the quote form and we\'ll confirm within 24 hours.',
  },
  {
    q: 'What surfaces do you clean?',
    a: 'We clean concrete, asphalt, block paving, tarmac, and exposed aggregate driveways. Our equipment and techniques are adjusted for each surface type to deliver the best result without causing damage.',
  },
  {
    q: 'How long does driveway cleaning take?',
    a: 'A standard residential driveway typically takes 1–3 hours depending on size and level of soiling. We work efficiently to minimise disruption to your day.',
  },
  {
    q: 'Are your cleaning products safe for pets and plants?',
    a: 'Yes. We use eco-friendly, biodegradable degreasers that are non-toxic and safe for children, pets, and surrounding garden areas.',
  },
  {
    q: 'Do you offer a satisfaction guarantee?',
    a: 'Absolutely. If you\'re not completely satisfied, we\'ll return and re-clean at no extra charge — no questions asked.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. S&M Powerwashing is fully licensed and carries $2M liability insurance on every job.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-gray-900">{q}</span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-brand-600 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-gray-600">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Got Questions?
          </p>
          <h2 id="faq-heading" className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div>
          {FAQS.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
