import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import FAQ from '../components/FAQ'
import QuoteForm from '../components/QuoteForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      {/* <Testimonials /> */}
      <FAQ />

      {/* Quote / Contact Section */}
      <section id="contact" className="bg-gray-50 py-24" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Ready to Book?
            </p>
            <h2 id="contact-heading" className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Confirm Your Booking
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Got your estimate? Fill out the form below and we'll confirm your appointment
              within 24 hours — no obligation, no hidden fees.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-lg sm:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
