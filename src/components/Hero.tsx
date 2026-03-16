import InstantQuoteCalculator from './InstantQuoteCalculator'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left: Headline + trust */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-100 backdrop-blur-sm">
              <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 8 8" aria-hidden="true">
                <circle cx="4" cy="4" r="3" />
              </svg>
              Licensed &amp; Insured Serving the Greater Area
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Power Washing that 
              <span className="text-brand-300"> turns heads</span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-blue-100">
              We deliver expert residential and commercial power washing that blasts away oil stains, mold, and years of built-up grime.
              Get your instant price estimate in seconds, no sign-up required.
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: '🛡️', text: '$2M Liability Insurance' },
                { icon: '✅', text: 'Satisfaction Guaranteed' },
                { icon: '⚡', text: 'Same-Week Service' },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                  <span>{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-8">
              {[
                { value: '50+', label: 'Happy Clients' },
                { value: '3+', label: 'Years Experience' },
                { value: '100%', label: 'Satisfaction Rate' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="mt-0.5 text-xs text-blue-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quote Calculator */}
          <div className="w-full rounded-2xl bg-white p-6 shadow-2xl sm:p-8" aria-label="Instant price estimator">
            <InstantQuoteCalculator />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60" aria-hidden="true">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
