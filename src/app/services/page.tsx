import { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Network Cabling Services Dallas | Cable-Com Services',
  description:
    'Complete network infrastructure services in Dallas-Fort Worth. Structured cabling, fiber optic, data center, security systems. BICSI certified, trusted by Pentagon & Fortune 500.',
  openGraph: {
    title: 'Network Cabling Services Dallas | Cable-Com Services',
    description: 'Pentagon-grade network infrastructure services for Dallas-Fort Worth businesses.',
    type: 'website',
  },
}

export default function ServicesPage() {
  const capabilities = [
    {
      icon: '🎯',
      title: 'Industry Expertise',
      description: 'Over 20 years serving government, healthcare, finance, and enterprise clients',
    },
    {
      icon: '🏆',
      title: 'BICSI Certified',
      description: 'All technicians hold industry-recognized certifications and continuous training',
    },
    {
      icon: '⚡',
      title: '24/7 Support',
      description: 'Emergency service available around the clock for critical infrastructure needs',
    },
    {
      icon: '✓',
      title: 'Lifetime Warranty',
      description: 'Industry-leading lifetime warranty on labor with 25-year product warranties',
    },
  ]

  const industries = [
    { name: 'Government & Military', icon: '🏛️' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Financial Services', icon: '🏦' },
    { name: 'Education', icon: '🎓' },
    { name: 'Corporate', icon: '🏢' },
    { name: 'Data Centers', icon: '💾' },
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Hospitality', icon: '🏨' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Pentagon-Grade Network Solutions
            </div>
            <h1 className="mb-6">Network Cabling Services Dallas</h1>
            <p className="text-xl text-gray-200 mb-8">
              Enterprise-grade network infrastructure services for Dallas-Fort Worth businesses. From structured cabling
              to data centers, we deliver Pentagon-level reliability and performance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get Free Quote
              </Link>
              <a href="tel:+12145551234" className="btn btn-secondary btn-lg">
                📞 (214) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">1,000+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">4.9★</div>
              <div className="text-gray-600">Client Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Complete Network Infrastructure Solutions</h2>
            <p className="text-xl text-gray-600">
              From design to deployment, we provide end-to-end network cabling services with enterprise-grade quality
              and reliability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="card card-hover group">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-6 pt-4 border-t border-gray-200">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-primary-600 font-semibold flex items-center gap-2">
                  Learn More
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Why Choose Cable-Com Services?</h2>
            <p className="text-xl text-gray-600">
              We bring Pentagon-level expertise and reliability to every project, no matter the size.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Trusted by government agencies, Fortune 500 companies, and businesses across all sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-2">{industry.icon}</div>
                <div className="font-semibold text-gray-900">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600">
              Every project follows our rigorous 5-phase methodology to ensure flawless execution.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { title: 'Discovery', description: 'Site assessment and requirements analysis', icon: '🔍' },
              { title: 'Design', description: 'Custom network architecture planning', icon: '📐' },
              { title: 'Deploy', description: 'Professional installation and testing', icon: '🔧' },
              { title: 'Document', description: 'Complete as-built documentation', icon: '📋' },
              { title: 'Support', description: 'Ongoing maintenance and warranty', icon: '🛡️' },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center text-white text-3xl mx-auto">
                    {phase.icon}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{phase.title}</h4>
                <p className="text-sm text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Projects Showcase */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Trusted by the World's Most Demanding Organizations</h2>
            <p className="text-xl text-gray-200">
              Our portfolio includes some of the most critical and high-profile network infrastructure projects in the
              nation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Pentagon', description: 'Federal secure communications infrastructure', icon: '🏛️' },
              { name: 'Staples Center', description: '18,000-seat arena network upgrade', icon: '🏟️' },
              { name: 'FAA Centers', description: 'Multi-site mission-critical systems', icon: '✈️' },
            ].map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-5xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-200">{project.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portfolio" className="btn btn-secondary btn-lg">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Upgrade Your Network Infrastructure?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote from our network infrastructure experts. We'll help you design and deploy
            a solution that meets your exact requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Get Free Quote
            </Link>
            <a href="tel:+12145551234" className="btn btn-ghost btn-lg border-2 border-white text-white hover:bg-white hover:text-primary-600">
              📞 (214) 555-1234
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-300">
            Available 24/7 for emergency service • BICSI certified technicians • Lifetime warranty on labor
          </div>
        </div>
      </section>
    </div>
  )
}
