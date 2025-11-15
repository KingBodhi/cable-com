import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services, getServiceBySlug, getAllServiceSlugs } from '@/data/services'

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.name} Dallas | Cable-Com Services`,
    description: service.description,
    openGraph: {
      title: `${service.name} Dallas | Cable-Com Services`,
      description: service.description,
      type: 'website',
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/services"
                className="text-primary-200 hover:text-white transition-colors flex items-center gap-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                All Services
              </Link>
            </div>
            <h1 className="mb-6">{service.name}</h1>
            <p className="text-xl text-gray-200 mb-8">{service.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get Free Quote
              </Link>
              <a href="tel:+14696531275" className="btn btn-secondary btn-lg">
                📞 (469) 653-1275
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">
              Our {service.name.toLowerCase()} services deliver enterprise-grade reliability and performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="card card-hover">
                <div className="w-12 h-12 bg-gradient-cta rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Why Choose Our {service.name} Services?</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg text-gray-700">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Service Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-texas-gold text-2xl">⚡</span>
                  <span className="text-gray-700">24/7 Emergency Support Available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-texas-gold text-2xl">🏆</span>
                  <span className="text-gray-700">BICSI Certified Technicians</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-texas-gold text-2xl">✓</span>
                  <span className="text-gray-700">Lifetime Warranty on Labor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-texas-gold text-2xl">📋</span>
                  <span className="text-gray-700">Complete Documentation Included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Perfect For These Applications</h2>
            <p className="text-xl text-gray-600">
              Our {service.name.toLowerCase()} services are ideal for a wide range of business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.applications.map((application, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3">💼</div>
                <h4 className="font-bold text-gray-900">{application}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600">
              We follow a systematic approach to ensure flawless execution and maximum reliability.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative">
                  <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto">
                    {index + 1}
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-200" />
                  )}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Transparent Pricing</h2>
            <p className="text-xl text-gray-200 mb-8">{service.pricing.description}</p>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-12 mb-8">
              <div className="text-6xl font-bold mb-4">{service.pricing.starting}</div>
              <p className="text-xl text-gray-200 mb-6">Starting Price</p>
              <p className="text-gray-300">
                Final pricing depends on project scope, complexity, and specific requirements. Get a detailed quote
                tailored to your needs.
              </p>
            </div>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <details key={index} className="card group">
                  <summary className="cursor-pointer list-none flex items-center justify-between">
                    <h4 className="font-bold text-gray-900">{faq.question}</h4>
                    <svg
                      className="w-6 h-6 text-primary-600 transform transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your {service.name.toLowerCase()} project. Our experts are ready to
            help you achieve your goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Get Free Quote
            </Link>
            <a href="tel:+14696531275" className="btn btn-ghost btn-lg border-2 border-white text-white hover:bg-white hover:text-primary-600">
              📞 (469) 653-1275
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="mb-8 text-center">Explore More Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  className="card card-hover group"
                >
                  <div className="text-4xl mb-4">{relatedService.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {relatedService.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{relatedService.description.substring(0, 120)}...</p>
                  <div className="text-primary-600 font-semibold flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
