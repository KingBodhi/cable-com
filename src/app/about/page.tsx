import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Pentagon-Grade Network Cabling Experts | Cable-Com Services Dallas',
  description:
    'Meet the team behind Pentagon, Staples Center, and FAA network installations. 20+ years of BICSI-certified expertise serving Dallas-Fort Worth. Learn our story.',
  openGraph: {
    title: 'About Cable-Com Services Dallas - Network Cabling Experts',
    description: '20+ years delivering Pentagon-grade network infrastructure across Dallas-Fort Worth.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Since 2004
            </div>
            <h1 className="mb-6">Pentagon-Grade Excellence in Every Installation</h1>
            <p className="text-xl text-gray-200">
              For over 20 years, Cable-Com Services Dallas has been the trusted partner for mission-critical network
              infrastructure. From the Pentagon to Staples Center, we deliver flawless execution where failure is not
              an option.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">1,000+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">127</div>
              <div className="text-gray-600">Five-Star Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded in 2004, Cable-Com Services Dallas began with a simple mission: bring Pentagon-level
                reliability and excellence to network infrastructure projects across Dallas-Fort Worth. What started as
                a small team of BICSI-certified technicians has grown into the region's most trusted name in
                enterprise-grade network cabling.
              </p>
              <p>
                Our breakthrough came in 2008 when we were selected to upgrade the network infrastructure at a major
                federal facility. The project's success—completed on time, under budget, and with zero defects—opened
                doors to work with some of the nation's most demanding organizations.
              </p>
              <p>
                Today, our portfolio includes installations at the Pentagon, Staples Center, multiple FAA centers, Camp
                Pendleton, and over 1,000 commercial projects. Each installation represents our unwavering commitment to
                quality, reliability, and customer satisfaction.
              </p>
              <p>
                We're not just cabling contractors—we're infrastructure partners who understand that your network is the
                backbone of your business. That's why every project, whether it's a 50-drop office or a classified
                federal installation, receives the same level of precision, documentation, and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              These principles guide every decision we make and every installation we complete.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Excellence',
                description: 'We pursue perfection in every cable run, every termination, every detail.',
              },
              {
                icon: '🤝',
                title: 'Integrity',
                description: 'Honest communication, transparent pricing, and keeping our promises.',
              },
              {
                icon: '🔒',
                title: 'Security',
                description: 'Top Secret clearance capabilities and unwavering commitment to confidentiality.',
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'Staying ahead of technology trends to future-proof your infrastructure.',
              },
            ].map((value, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Certifications & Partnerships</h2>
            <p className="text-xl text-gray-600">
              We maintain the industry's highest standards through continuous training and elite partnerships.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-5xl mb-4 text-center">🏆</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">BICSI Certified</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• RCDD (Registered Communications Distribution Designer)</li>
                <li>• DCDC (Data Center Design Consultant)</li>
                <li>• Installer 2, Copper & Fiber</li>
                <li>• Technician (Network Transport Systems)</li>
              </ul>
            </div>
            <div className="card">
              <div className="text-5xl mb-4 text-center">🔒</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">Government Clearance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Top Secret Clearance</li>
                <li>• DoD Approved Contractor</li>
                <li>• Federal Installation Experience</li>
                <li>• NISPOM Compliant</li>
              </ul>
            </div>
            <div className="card">
              <div className="text-5xl mb-4 text-center">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">Manufacturer Partners</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• CommScope Certified Partner</li>
                <li>• Panduit Certified Installer</li>
                <li>• Belden Certified Systems Integrator</li>
                <li>• Corning Fiber Optic Specialist</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Why Organizations Choose Cable-Com Services</h2>
            <p className="text-xl text-gray-200">
              When your network infrastructure is mission-critical, these are the differentiators that matter.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Pentagon-Level Expertise',
                description:
                  'Our work at federal facilities and mission-critical sites means we understand security, redundancy, and zero-defect execution.',
              },
              {
                title: 'Complete Documentation',
                description:
                  'Every project includes as-built drawings, test results, warranty information, and maintenance recommendations.',
              },
              {
                title: 'Lifetime Labor Warranty',
                description:
                  'We stand behind our work with an industry-leading lifetime warranty on labor, plus 25-year product warranties.',
              },
              {
                title: '24/7 Emergency Service',
                description:
                  "Network failures don't wait for business hours. Neither do we. Emergency service available around the clock.",
              },
              {
                title: 'Future-Proof Design',
                description:
                  "We design infrastructure that supports not just today's needs but tomorrow's technologies and growth.",
              },
              {
                title: 'White-Glove Service',
                description:
                  "From initial consultation to post-installation support, you'll work with experienced professionals who care.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-texas-gold rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Trusted by Elite Organizations</h2>
            <p className="text-xl text-gray-600">
              Our portfolio speaks for itself. When organizations with the highest standards need network
              infrastructure, they call Cable-Com Services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Pentagon', description: 'Federal secure communications', icon: '🏛️' },
              { name: 'Staples Center', description: '18,000-seat arena network', icon: '🏟️' },
              { name: 'FAA Centers', description: 'Multi-site mission-critical', icon: '✈️' },
              { name: 'Camp Pendleton', description: 'Military installation', icon: '🎖️' },
              { name: 'Golden West', description: 'Industrial manufacturing', icon: '🏭' },
              { name: 'Fortune 500', description: 'Corporate headquarters', icon: '🏢' },
            ].map((project, index) => (
              <div key={index} className="card text-center">
                <div className="text-6xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portfolio" className="btn btn-primary btn-lg">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">Our Service Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Understand</h3>
                <p className="text-gray-700">
                  We start by deeply understanding your business needs, growth plans, and technical requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Design</h3>
                <p className="text-gray-700">
                  Custom network architecture that balances performance, scalability, and budget considerations.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Execute</h3>
                <p className="text-gray-700">
                  Flawless installation by certified technicians, with rigorous testing and complete documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Experience the Cable-Com Difference</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Ready to work with a team that brings Pentagon-level expertise to every project? Let's discuss your network
            infrastructure needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Get Free Quote
            </Link>
            <a
              href="tel:+12145551234"
              className="btn btn-ghost btn-lg border-2 border-white text-white hover:bg-white hover:text-primary-600"
            >
              📞 (214) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
