import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { caseStudies } from '@/data/case-studies'

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = caseStudies.find((cs) => cs.slug === slug)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${caseStudy.title} - Case Study | Cable-Com Services Dallas`,
    description: caseStudy.challenge.substring(0, 160),
    openGraph: {
      title: `${caseStudy.title} - Case Study`,
      description: caseStudy.challenge.substring(0, 160),
      type: 'article',
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = caseStudies.find((cs) => cs.slug === slug)

  if (!caseStudy) {
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
                href="/portfolio"
                className="text-primary-200 hover:text-white transition-colors flex items-center gap-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Portfolio
              </Link>
            </div>
            <div className="inline-block bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {caseStudy.industry}
            </div>
            <h1 className="mb-6">{caseStudy.title}</h1>
            <div className="flex flex-wrap gap-6 text-lg mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span>{caseStudy.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{caseStudy.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{caseStudy.projectDuration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {caseStudy.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <section className="bg-gradient-to-br from-primary-100 to-primary-200">
        <div className="container-custom py-24">
          <div className="text-center">
            <div className="text-9xl mb-6">
              {caseStudy.industry === 'Federal Government' && '🏛️'}
              {caseStudy.industry === 'Sports & Entertainment' && '🏟️'}
              {caseStudy.industry === 'Transportation' && '✈️'}
              {caseStudy.industry === 'Food Manufacturing' && '🏭'}
              {caseStudy.industry === 'Military' && '🎖️'}
            </div>
            <div className="text-2xl font-bold text-primary-900">{caseStudy.client}</div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">The Challenge</h2>
            <p className="text-xl text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Our Solution</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">{caseStudy.solution}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Technologies Deployed</h3>
                <ul className="space-y-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Services Provided</h3>
                <ul className="space-y-2">
                  {caseStudy.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">The Results</h2>
            <p className="text-xl text-gray-700 leading-relaxed">{caseStudy.results}</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="section-padding bg-primary-900 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl mb-6 text-center">"</div>
              <blockquote className="text-2xl md:text-3xl font-light text-center mb-8 leading-relaxed">
                {caseStudy.testimonial.quote}
              </blockquote>
              <div className="text-center">
                <div className="font-bold text-xl mb-1">{caseStudy.testimonial.author}</div>
                <div className="text-gray-300">
                  {caseStudy.testimonial.title}, {caseStudy.testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">Project Details</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="text-4xl mb-3">📅</div>
                <h4 className="font-bold text-gray-900 mb-2">Completion Date</h4>
                <p className="text-gray-600">
                  {new Date(caseStudy.completionDate).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-3">⏱️</div>
                <h4 className="font-bold text-gray-900 mb-2">Project Duration</h4>
                <p className="text-gray-600">{caseStudy.projectDuration}</p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-3">👥</div>
                <h4 className="font-bold text-gray-900 mb-2">Team Size</h4>
                <p className="text-gray-600">{caseStudy.teamSize} technicians</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Need Similar Results for Your Project?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring the same level of excellence and reliability to your network infrastructure
            project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Get Free Quote
            </Link>
            <a
              href="tel:+14696531275"
              className="btn btn-ghost btn-lg border-2 border-white text-white hover:bg-white hover:text-primary-600"
            >
              📞 (469) 653-1275
            </a>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="mb-8 text-center">More Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies
              .filter((cs) => cs.slug !== caseStudy.slug)
              .slice(0, 3)
              .map((related) => (
                <Link key={related.slug} href={`/portfolio/case-studies/${related.slug}`} className="card card-hover group">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl h-48 mb-6 flex items-center justify-center">
                    <div className="text-6xl">
                      {related.industry === 'Federal Government' && '🏛️'}
                      {related.industry === 'Sports & Entertainment' && '🏟️'}
                      {related.industry === 'Transportation' && '✈️'}
                      {related.industry === 'Food Manufacturing' && '🏭'}
                      {related.industry === 'Military' && '🎖️'}
                    </div>
                  </div>
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {related.industry}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{related.client}</p>
                </Link>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portfolio" className="btn btn-primary btn-lg">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
