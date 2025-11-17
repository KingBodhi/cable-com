import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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

      {/* Trusted By - Client Logos */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Trusted by Elite Organizations</h2>
            <p className="text-xl text-gray-600">
              Proven expertise delivering mission-critical network infrastructure for government and enterprise clients
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-12">
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <Image
                src="/images/clients/pentagon.jpg"
                alt="Pentagon - U.S. Department of Defense"
                width={200}
                height={100}
                className="object-contain grayscale hover:grayscale-0 transition-all max-h-20 w-auto"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <Image
                src="/images/clients/staples-center.jpg"
                alt="Staples Center - Sports & Entertainment"
                width={200}
                height={100}
                className="object-contain grayscale hover:grayscale-0 transition-all max-h-20 w-auto"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <Image
                src="/images/clients/faa.jpeg"
                alt="Federal Aviation Administration"
                width={200}
                height={100}
                className="object-contain grayscale hover:grayscale-0 transition-all max-h-20 w-auto"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <Image
                src="/images/clients/golden-west-food.png"
                alt="Golden West Food Group"
                width={200}
                height={100}
                className="object-contain grayscale hover:grayscale-0 transition-all max-h-20 w-auto"
              />
            </div>
          </div>
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
            {featured.map((project, index) => {
              // Map client to logo image
              const logoMap: { [key: string]: string } = {
                'U.S. Department of Defense': '/images/clients/pentagon.jpg',
                'Staples Center (now Crypto.com Arena)': '/images/clients/staples-center.jpg',
                'Federal Aviation Administration': '/images/clients/faa.jpeg',
                'Golden West Food Group': '/images/clients/golden-west-food.png',
              }
              const logoSrc = logoMap[project.client]

              return (
                <Link
                  key={project.slug}
                  href={`/portfolio/case-studies/${project.slug}`}
                  className="card card-hover group block overflow-hidden p-0"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div
                      className={`${
                        index % 2 === 1 ? 'md:order-2' : ''
                      } relative h-80 md:h-auto overflow-hidden`}
                    >
                      {/* Full-screen background image */}
                      {logoSrc && (
                        <Image
                          src={logoSrc}
                          alt={project.client}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      )}
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/50 to-transparent group-hover:from-gray-900/60 group-hover:via-gray-900/30 transition-all duration-700" />
                      {/* Text overlay */}
                      <div className="absolute inset-0 flex items-center justify-center p-12">
                        <div className="text-center text-white">
                          <h3 className="text-3xl font-bold drop-shadow-lg">{project.client}</h3>
                          <p className="text-gray-200 mt-2 drop-shadow-md">{project.industry}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-12">
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
              )
            })}
          </div>
        </div>
      </section>

      {/* Installation Gallery - Real Project Photos */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Live from the Field
            </div>
            <h2 className="mb-4">Our Work in Action</h2>
            <p className="text-xl text-gray-600">
              Real photos from our network infrastructure installations. From fiber optic terminations to industrial data
              center environments, see the precision and quality we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fiber Patch Panel */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-square">
              <Image
                src="/images/installations/fiber-patch-panel.jpg"
                alt="Professional fiber optic patch panel installation with organized DIGI connections"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent group-hover:from-gray-900/80 group-hover:via-gray-900/30 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold drop-shadow-lg mb-2">Fiber Optic Infrastructure</h3>
                <p className="text-gray-200 text-sm drop-shadow-md">
                  High-density fiber patch panels with professional labeling and cable management
                </p>
              </div>
            </div>

            {/* Data Center Environment */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-square">
              <Image
                src="/images/installations/data-center-environment.jpg"
                alt="Industrial data center environment with structured cabling and security systems"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent group-hover:from-gray-900/80 group-hover:via-gray-900/30 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold drop-shadow-lg mb-2">Data Center Solutions</h3>
                <p className="text-gray-200 text-sm drop-shadow-md">
                  Secure industrial facilities with integrated network and security infrastructure
                </p>
              </div>
            </div>

            {/* Industrial Facility */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-square">
              <Image
                src="/images/installations/industrial-facility-1.jpg"
                alt="Industrial warehouse with network infrastructure and cable management systems"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent group-hover:from-gray-900/80 group-hover:via-gray-900/30 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold drop-shadow-lg mb-2">Industrial Infrastructure</h3>
                <p className="text-gray-200 text-sm drop-shadow-md">
                  Large-scale warehouse and manufacturing facility network installations
                </p>
              </div>
            </div>

            {/* Ceiling Cable Installation */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-square">
              <Image
                src="/images/installations/ceiling-cable-install.jpg"
                alt="Professional cable routing and management in industrial ceiling infrastructure"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent group-hover:from-gray-900/80 group-hover:via-gray-900/30 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold drop-shadow-lg mb-2">Overhead Cable Management</h3>
                <p className="text-gray-200 text-sm drop-shadow-md">
                  Professional cable routing and management in industrial environments
                </p>
              </div>
            </div>

            {/* Cabling Materials */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-square">
              <Image
                src="/images/installations/cabling-materials.jpg"
                alt="Professional cable bundling and materials organization for network installations"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent group-hover:from-gray-900/80 group-hover:via-gray-900/30 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold drop-shadow-lg mb-2">Enterprise-Grade Materials</h3>
                <p className="text-gray-200 text-sm drop-shadow-md">
                  Professional cable management and organized material handling for large installations
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center p-8 group hover:from-primary-500 hover:to-primary-700 transition-all duration-500">
              <div className="text-center text-white">
                <div className="text-5xl mb-4">📸</div>
                <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">See Your Project Here</h3>
                <p className="text-gray-100 mb-6 drop-shadow-md">
                  Ready to start your network infrastructure project?
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
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
            {caseStudies.map((project) => {
              // Map client to logo image
              const logoMap: { [key: string]: string } = {
                'U.S. Department of Defense': '/images/clients/pentagon.jpg',
                'Staples Center (now Crypto.com Arena)': '/images/clients/staples-center.jpg',
                'Federal Aviation Administration': '/images/clients/faa.jpeg',
                'Golden West Food Group': '/images/clients/golden-west-food.png',
              }
              const logoSrc = logoMap[project.client]

              return (
                <Link
                  key={project.slug}
                  href={`/portfolio/case-studies/${project.slug}`}
                  className="card card-hover group overflow-hidden p-0"
                >
                  <div className="relative h-64 overflow-hidden">
                    {logoSrc ? (
                      <>
                        {/* Full-screen background image */}
                        <Image
                          src={logoSrc}
                          alt={project.client}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20 group-hover:from-gray-900/80 group-hover:via-gray-900/40 transition-all duration-500" />
                        {/* Text overlay */}
                        <div className="absolute inset-0 flex items-center justify-center p-6">
                          <div className="text-center text-white">
                            <h4 className="text-xl font-bold drop-shadow-lg">{project.client}</h4>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-full flex items-center justify-center">
                        <div className="text-6xl">
                          {project.industry === 'Federal Government' && '🏛️'}
                          {project.industry === 'Sports & Entertainment' && '🏟️'}
                          {project.industry === 'Federal Government - Aviation' && '✈️'}
                          {project.industry === 'Food Manufacturing' && '🏭'}
                          {project.industry === 'Military' && '🎖️'}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {project.industry}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      {project.stats.slice(0, 2).map((stat, i) => (
                        <div key={i}>
                          <div className="text-lg font-bold text-primary-600">{stat.value}</div>
                          <div className="text-xs text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-primary-600 font-semibold flex items-center gap-2">
                      View Case Study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
              </Link>
              )
            })}
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
