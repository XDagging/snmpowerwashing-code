const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    location: 'Homeowner',
    rating: 5,
    text: "I've tried several cleaning services over the years, but S&M Powerwashing is on a completely different level. My driveway looks brand new — they removed oil stains I thought were permanent. Absolutely worth every penny!",
  },
  {
    name: 'David T.',
    location: 'Homeowner',
    rating: 5,
    text: "Used them for our home driveway and patio. The team was punctual, friendly, and worked incredibly efficiently. Neighbours have been asking who we used — I've already referred three families.",
  },
  {
    name: 'Linda K.',
    location: 'Homeowner',
    rating: 5,
    text: 'Had the driveway done before we listed our house for sale. The difference was night and day — our realtor said it was the best curb appeal on the street. Highly recommend S&M Powerwashing!',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand-800 py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-300">
            What Clients Say
          </p>
          <h2 id="testimonials-heading" className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Trusted by Hundreds
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-4 flex-1">
                <p className="text-base leading-relaxed text-blue-100">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white" aria-hidden="true">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-brand-300">{t.location}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
