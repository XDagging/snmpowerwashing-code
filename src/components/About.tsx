const FEATURES = [
  {
    title: 'Licensed & Insured',
    desc: 'Fully licensed and carrying $2M liability insurance for your complete peace of mind.',
  },
  {
    title: 'Eco-Friendly Products',
    desc: 'Biodegradable, plant-based degreasers that are safe for your family, pets, and garden.',
  },
  {
    title: 'Satisfaction Guaranteed',
    desc: 'Not happy? We come back and re-clean at no charge — simple as that.',
  },
  {
    title: '10+ Years Experience',
    desc: 'Hundreds of satisfied customers across the region trust us year after year.',
  },
  {
    title: 'Transparent Pricing',
    desc: 'No hidden fees. You get a detailed quote before we start any work.',
  },
  {
    title: 'On-Time, Every Time',
    desc: 'We respect your schedule and always arrive within the agreed window.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Visual panel */}
          <div className="relative mb-12 lg:mb-0">
            <div className="h-[500px] w-full rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 shadow-xl flex flex-col items-center justify-center gap-8 p-10">
              <div className="grid grid-cols-2 gap-6 w-full">
                {[
                  { icon: '🛡️', label: '$2M Insured' },
                  { icon: '♻️', label: 'Eco-Friendly' },
                  { icon: '⭐', label: '5-Star Rated' },
                  { icon: '⚡', label: 'Same-Week' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2 rounded-xl bg-white/10 p-5 text-white backdrop-blur-sm">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 w-full border-t border-white/20 pt-6">
                {[
                  { value: '50+', label: 'Happy Clients' },
                  { value: '3+', label: 'Years' },
                  { value: '100%', label: 'Guaranteed' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center text-white">
                    <p className="text-2xl font-extrabold">{stat.value}</p>
                    <p className="mt-0.5 text-xs text-brand-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-brand-700 p-6 text-white shadow-xl lg:block" aria-hidden="true">
              <p className="text-4xl font-extrabold">3+</p>
              <p className="mt-1 text-sm font-medium text-brand-200">Years in Business</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Why Choose Us
            </p>
            <h2 id="about-heading" className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              A Name You Can Trust
            </h2>
            <p className="mt-4 text-lg text-gray-600">
             We have one promise and one promise only:
              leave every surface spotless and every customer smiling. We treat your property
              with the same care we'd give our own.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <dt className="font-semibold text-gray-900">{f.title}</dt>
                    <dd className="mt-0.5 text-sm text-gray-600">{f.desc}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
