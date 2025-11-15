import { Metadata } from 'next'
import Link from 'next/link'
import { caseStudies, getFeaturedCaseStudies } from '@/data/case-studies'

export const metadata: Metadata = {
  title: 'Portfolio - Elite Network Infrastructure Projects | Cable-Com Services Dallas',
  description:
    'Explore our portfolio of Pentagon-grade network cabling projects. Pentagon, Staples Center, FAA, Camp Pendleton, Golden West. 1,000+ successful installations in Dallas-Fort Worth.',
  openGraph: {
    title: 'Portfolio - Elite Network Infrastructure Projects | Cable-Com Services Dallas',
    description: 'Pentagon-grade network cabling projects trusted by government and Fortune 500 companies.',
    type: 'website',
  },
}

export default function PortfolioPage() {
  const featured = getFeaturedCaseStudies()
  const industries = Array.from(new Set(caseStudies.map((cs) => cs.industry)))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Elite Project Portfolio
            </div>
            <h1 className="mb-6">Pentagon-Grade Network Infrastructure</h1>
            <p className="text-xl text-gray-200 mb-8">
              Explore our portfolio of mission-critical network cabling projects. From the Pentagon to Staples Center,
              we've delivered flawless execution on some of the nation's most demanding installations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start Your Project
              </Link>
              <a href="tel:+14696531275" className="btn btn-secondary btn-lg">
                📞 (469) 653-1275
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">1,000+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
              <div className="text-gray-600">Elite Showcase Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Average</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Featured Elite Projects</h2>
            <p className="text-xl text-gray-600">
              These showcase projects represent the pinnacle of network infrastructure complexity and reliability
              requirements.
            </p>
          </div>
          <div className="space-y-8">
            {featured.map((project, index) => (
              <Link
                key={project.slug}
                href={`/portfolio/case-studies/${project.slug}`}
                className="card card-hover group block"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div
                    className={`${
                      index % 2 === 1 ? 'md:order-2' : ''
                    } bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-12 flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-4">
                        {project.industry === 'Federal Government' && '🏛️'}
                        {project.industry === 'Sports & Entertainment' && '🏟️'}
                        {project.industry === 'Transportation' && '✈️'}
                        {project.industry === 'Food Manufacturing' && '🏭'}
                        {project.industry === 'Military' && '🎖️'}
                      </div>
                      <div className="text-2xl font-bold text-primary-900">{project.client}</div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-3 self-start">
                      {project.industry}
                    </div>
                    <h3 className="text-3xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{project.challenge.substring(0, 200)}...</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {project.stats.slice(0, 4).map((stat, i) => (
                        <div key={i}>
                          <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-primary-600 font-semibold flex items-center gap-2">
                      View Case Study
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">All Case Studies</h2>
            <p className="text-xl text-gray-600">
              Browse our complete portfolio of network infrastructure projects across multiple industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/case-studies/${project.slug}`}
                className="card card-hover group"
              >
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl h-48 mb-6 flex items-center justify-center">
                  <div className="text-6xl">
                    {project.industry === 'Federal Government' && '🏛️'}
                    {project.industry === 'Sports & Entertainment' && '🏟️'}
                    {project.industry === 'Transportation' && '✈️'}
                    {project.industry === 'Food Manufacturing' && '🏭'}
                    {project.industry === 'Military' && '🎖️'}
                  </div>
                </div>
                <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {project.industry}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.client}</p>
                <div className="pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {project.stats.slice(0, 2).map((stat, i) => (
                      <div key={i}>
                        <div className="text-lg font-bold text-primary-600">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-primary-600 font-semibold flex items-center gap-2">
                  View Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Our expertise spans across critical sectors requiring the highest levels of reliability and security.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <div key={industry} className="bg-white rounded-full px-6 py-3 shadow-md">
                <span className="font-semibold text-gray-900">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Highlight */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Why Elite Organizations Choose Us</h2>
            <p className="text-xl text-gray-200">
              When failure is not an option, these are the standards we bring to every project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🔒',
                title: 'Security Clearance',
                description: 'Top Secret clearance for federal and defense projects',
              },
              {
                icon: '⚡',
                title: '99.9% Uptime',
                description: 'Mission-critical reliability you can depend on',
              },
              {
                icon: '🏆',
                title: 'BICSI Certified',
                description: 'Industry-leading certifications and expertise',
              },
              {
                icon: '✓',
                title: 'Zero Defects',
                description: 'Rigorous testing and quality assurance',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring Pentagon-grade reliability to your network infrastructure. Get a free
            consultation and quote today.
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
    </div>
  )
}
