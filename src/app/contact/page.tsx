'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to your backend/CRM
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        projectType: '',
        timeline: '',
        budget: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Get Your Free Quote Today</h1>
            <p className="text-xl text-gray-200 mb-8">
              Pentagon-grade network cabling for your Dallas-Fort Worth business. Get expert consultation and a
              detailed quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <a href="tel:+14696531275" className="card card-hover text-center group">
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                📞
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Call Us</h3>
              <p className="text-primary-600 font-semibold text-lg">(469) 653-1275</p>
              <p className="text-sm text-gray-600 mt-2">Mon-Fri: 7AM-6PM<br />24/7 Emergency Service</p>
            </a>
            <a href="mailto:info@cable-comservices.com" className="card card-hover text-center group">
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                ✉️
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Email Us</h3>
              <p className="text-primary-600 font-semibold">info@cable-comservices.com</p>
              <p className="text-sm text-gray-600 mt-2">Response within 4 hours</p>
            </a>
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                📍
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Visit Us</h3>
              <p className="text-gray-700">123 Network Drive<br />Dallas, TX 75201</p>
              <p className="text-sm text-gray-600 mt-2">By appointment only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="mb-6">Request a Free Quote</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and one of our network infrastructure experts will contact you within 24 hours
                to discuss your project requirements.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="font-semibold">Thank you for your inquiry!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="(469) 653-1275"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Acme Corporation"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select a service...</option>
                    <option value="structured-cabling">Structured Cabling</option>
                    <option value="fiber-optic">Fiber Optic Installation</option>
                    <option value="data-center">Data Center Cabling</option>
                    <option value="security-systems">Security Systems</option>
                    <option value="voice-telephony">Voice & Telephony</option>
                    <option value="network-infrastructure">Network Infrastructure</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select type...</option>
                      <option value="new-installation">New Installation</option>
                      <option value="upgrade">Upgrade/Expansion</option>
                      <option value="maintenance">Maintenance/Repair</option>
                      <option value="emergency">Emergency Service</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select timeline...</option>
                      <option value="immediate">Immediate (1-2 weeks)</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-plus-months">6+ months</option>
                      <option value="planning">Still planning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                    Estimated Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select budget range...</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-plus">$100,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="input-field"
                    placeholder="Please describe your project requirements, including square footage, number of drops needed, existing infrastructure, etc."
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full">
                  Get Free Quote
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our{' '}
                  <Link href="/privacy" className="text-primary-600 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="card">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Choose Cable-Com Services?</h3>
                <ul className="space-y-4">
                  {[
                    { icon: '🏆', text: 'BICSI Certified Technicians' },
                    { icon: '✓', text: 'Lifetime Warranty on Labor' },
                    { icon: '⚡', text: '24/7 Emergency Service' },
                    { icon: '📋', text: 'Complete Documentation' },
                    { icon: '🎯', text: 'Pentagon-Grade Reliability' },
                    { icon: '💯', text: '100% Satisfaction Guarantee' },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-gray-700 pt-1">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trusted By */}
              <div className="card bg-gradient-to-br from-primary-900 to-primary-800 text-white">
                <h3 className="text-2xl font-bold mb-4">Trusted by Elite Organizations</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🏛️</span>
                    <span>Pentagon / U.S. DoD</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🏟️</span>
                    <span>Staples Center</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">✈️</span>
                    <span>FAA Centers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🎖️</span>
                    <span>Camp Pendleton</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="text-4xl font-bold mb-1">4.9★</div>
                  <div className="text-gray-200">127 Five-Star Reviews</div>
                </div>
              </div>

              {/* Service Area */}
              <div className="card">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Service Area</h3>
                <p className="text-gray-700 mb-4">
                  We proudly serve the entire Dallas-Fort Worth metroplex and surrounding areas:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• Dallas</div>
                  <div>• Fort Worth</div>
                  <div>• Plano</div>
                  <div>• Irving</div>
                  <div>• Frisco</div>
                  <div>• McKinney</div>
                  <div>• Arlington</div>
                  <div>• Denton</div>
                </div>
                <Link href="/service-areas" className="text-primary-600 hover:underline text-sm mt-4 block">
                  View all service areas →
                </Link>
              </div>

              {/* Emergency Service */}
              <div className="card bg-texas-red text-white">
                <h3 className="text-2xl font-bold mb-2">Need Emergency Service?</h3>
                <p className="mb-4">Network down? We're available 24/7 for critical infrastructure emergencies.</p>
                <a href="tel:+14696531275" className="btn btn-secondary btn-lg w-full">
                  📞 Call Now: (469) 653-1275
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📍</div>
            <p className="text-xl font-semibold text-gray-700">123 Network Drive, Dallas, TX 75201</p>
            <p className="text-gray-600">Interactive map would be embedded here</p>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-center">Common Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How quickly can you start my project?',
                  a: 'For most projects, we can begin within 1-2 weeks of contract signing. Emergency services are available 24/7.',
                },
                {
                  q: 'Do you provide warranties?',
                  a: 'Yes! We provide a lifetime warranty on labor and 25-year warranties on materials from manufacturers like CommScope and Panduit.',
                },
                {
                  q: 'What certifications do your technicians hold?',
                  a: 'All our technicians are BICSI certified and undergo continuous training. For federal projects, we have Top Secret clearance capabilities.',
                },
              ].map((faq, index) => (
                <details key={index} className="card group">
                  <summary className="cursor-pointer list-none flex items-center justify-between">
                    <h4 className="font-bold text-gray-900">{faq.q}</h4>
                    <svg
                      className="w-6 h-6 text-primary-600 transform transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/faq" className="btn btn-ghost btn-md">
                View All FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
