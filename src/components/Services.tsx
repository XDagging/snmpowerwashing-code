const SERVICES = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Residential Power Washing',
    description:
      "Restore your home's curb appeal instantly. We blast away oil stains, mold, algae, and years of grime from driveways, patios, walkways, and more.",
    from: '$149',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Commercial Power Washing',
    description:
      "First impressions close deals. We keep your parking lots, loading bays, storefronts, and entrances spotless — scheduled around you, with zero disruption to your business.",
    from: '$299',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6m-6 0a1 1 0 00-1 1v1h8V4a1 1 0 00-1-1m-6 0h6" />
      </svg>
    ),
    title: 'House Powerwashing',
    description:
      "Blast years of dirt, mildew, and oxidation off your home's siding, fascia, and exterior walls. Safe for vinyl, brick, stucco, and wood — restores curb appeal in a single visit.",
    from: '$249',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            What We Offer
          </p>
          <h2 id="services-heading" className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From private homes to large commercial properties — professional power
            washing that delivers real results, every time.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{s.description}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-gray-400">Starting from</span>
                <span className="text-lg font-extrabold text-brand-700">{s.from}</span>
              </div>
              <a
                href="#contact"
                className="mt-4 block rounded-lg border border-brand-200 py-2 text-center text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
