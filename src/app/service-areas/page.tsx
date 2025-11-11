import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Service Areas - Network Cabling Dallas-Fort Worth | Cable-Com Services',
  description:
    'Professional network cabling throughout Dallas-Fort Worth metroplex. Serving Dallas, Fort Worth, Plano, Irving, Frisco, McKinney, Arlington, Denton, and 20+ cities.',
}

export default function ServiceAreasPage() {
  const cities = [
    { name: 'Dallas', population: '1.3M', description: 'Full-service network infrastructure for downtown to suburbs' },
    { name: 'Fort Worth', population: '935K', description: 'Commercial, industrial, and government installations' },
    { name: 'Plano', population: '287K', description: 'Corporate headquarters and enterprise networks' },
    { name: 'Irving', population: '240K', description: 'Business district and data center cabling' },
    { name: 'Frisco', population: '207K', description: 'Fast-growing commercial and tech sector' },
    { name: 'McKinney', population: '199K', description: 'Expanding business parks and medical facilities' },
    { name: 'Arlington', population: '394K', description: 'Sports venues, entertainment, and corporate' },
    { name: 'Denton', population: '148K', description: 'Educational institutions and healthcare' },
    { name: 'Allen', population: '105K', description: 'Corporate campuses and commercial centers' },
    { name: 'Carrollton', population: '134K', description: 'Manufacturing and distribution facilities' },
    { name: 'Richardson', population: '121K', description: 'Tech corridor and telecommunications' },
    { name: 'Lewisville', population: '111K', description: 'Industrial and commercial sectors' },
    { name: 'Garland', population: '239K', description: 'Manufacturing and logistics infrastructure' },
    { name: 'Grand Prairie', population: '197K', description: 'Industrial and entertainment complexes' },
    { name: 'Mesquite', population: '144K', description: 'Commercial and retail network installations' },
    { name: 'Flower Mound', population: '79K', description: 'Corporate offices and medical facilities' },
    { name: 'Coppell', population: '42K', description: 'Business parks and corporate headquarters' },
    { name: 'The Colony', population: '45K', description: 'Mixed commercial and residential development' },
    { name: 'Grapevine', population: '54K', description: 'Hospitality and corporate sectors' },
    { name: 'Southlake', population: '32K', description: 'Premium commercial and medical facilities' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Serving the Dallas-Fort Worth Metroplex</h1>
            <p className="text-xl text-gray-200">
              Pentagon-grade network cabling services throughout the DFW area. We serve 20+ cities with the same level
              of expertise and reliability, whether you're in downtown Dallas or the surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">9,200</div>
              <div className="text-gray-600">Square Miles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">7.6M</div>
              <div className="text-gray-600">Population Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Service Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Cities We Serve</h2>
            <p className="text-xl text-gray-600">
              Professional network infrastructure services throughout the Dallas-Fort Worth metroplex and surrounding
              communities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <div key={index} className="card">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{city.name}</h3>
                  <span className="text-sm bg-primary-100 text-primary-700 px-2 py-1 rounded">{city.population}</span>
                </div>
                <p className="text-gray-600 text-sm">{city.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Radius */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">60-Mile Service Radius</h2>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-12 text-center">
              <div className="text-9xl mb-6">📍</div>
              <p className="text-xl text-gray-700 mb-6">
                We proudly serve all businesses within a 60-mile radius of downtown Dallas, covering the entire
                Dallas-Fort Worth metroplex and surrounding communities.
              </p>
              <p className="text-gray-600">
                Don't see your city listed? Contact us—we may still be able to serve your location or recommend a
                trusted partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="mb-4">Why Choose a Local Provider?</h2>
            <p className="text-xl text-gray-600">
              Working with a Dallas-Fort Worth based company means faster response times, local expertise, and
              personalized service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '⚡',
                title: 'Rapid Response',
                description: 'On-site within hours for emergencies, not days',
              },
              {
                icon: '🏢',
                title: 'Local Knowledge',
                description: 'Familiar with DFW building codes and regulations',
              },
              {
                icon: '🤝',
                title: 'Community Focus',
                description: 'Invested in the success of local businesses',
              },
              {
                icon: '📞',
                title: 'Direct Access',
                description: 'Talk to decision-makers, not distant call centers',
              },
            ].map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries by Area */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="mb-8 text-center">Industries We Serve Across DFW</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Corporate & Enterprise</h3>
              <p className="text-gray-600 mb-4">
                Plano, Irving, Richardson, Frisco tech corridors and corporate headquarters
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Fortune 500 headquarters</li>
                <li>• Tech company offices</li>
                <li>• Financial services</li>
                <li>• Corporate campuses</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Healthcare & Education</h3>
              <p className="text-gray-600 mb-4">
                Medical districts in Dallas, Fort Worth, Denton, and surrounding areas
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Hospitals and clinics</li>
                <li>• Medical office buildings</li>
                <li>• Universities and colleges</li>
                <li>• Research facilities</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Industrial & Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Grand Prairie, Garland, Carrollton industrial sectors
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Manufacturing plants</li>
                <li>• Distribution centers</li>
                <li>• Food processing</li>
                <li>• Logistics facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether you're in downtown Dallas or anywhere in the metroplex, we're ready to serve you with Pentagon-grade
            network infrastructure.
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
