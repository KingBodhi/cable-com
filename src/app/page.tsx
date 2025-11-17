'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { services } from '@/data/services'
import { getFeaturedCaseStudies } from '@/data/case-studies'

// Dynamically import Map component (prevents SSR issues with Leaflet)
const Map = dynamic(() => import('@/components/ui/Map'), {
  ssr: false,
  loading: () => (
    <div className="h-full bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
      <p className="text-primary-700">Loading map...</p>
    </div>
  ),
})

type AssessmentFormData = {
  projectType: string
  facilityType: string
  dropCount: string
  timeline: string
  priorities: string[]
  compliance: string
  notes: string
  contactName: string
  company: string
  contactEmail: string
  contactPhone: string
}

const assessmentSteps = [
  {
    title: 'What type of project?',
    helper: 'Select the option that best describes your initiative.',
  },
  {
    title: 'Tell us about your facility',
    helper: 'Share a few quick details so we can scope the work.',
  },
  {
    title: 'What matters most?',
    helper: 'Highlight the priorities and standards we should plan for.',
  },
  {
    title: 'How can we reach you?',
    helper: "We'll send your tailored assessment within one business day.",
  },
  {
    title: 'Review & confirm',
    helper: 'Make sure everything looks right before submitting.',
  },
]

const projectTypeOptions = [
  { icon: '🏗️', label: 'New Installation', description: 'Full build-out for a new space or campus.' },
  { icon: '⬆️', label: 'Upgrade', description: 'Replace legacy cabling with higher performance.' },
  { icon: '➕', label: 'Expansion', description: 'Add capacity to meet growth demands.' },
  { icon: '🔧', label: 'Repair', description: 'Diagnose and fix performance issues.' },
]

const facilityTypes = [
  'Corporate HQ',
  'Data Center',
  'Industrial/Warehouse',
  'Healthcare',
  'Education Campus',
  'Government Facility',
  'Retail / Hospitality',
  'Other',
]

const timelineOptions = ['Immediately', '0-30 Days', '30-60 Days', '60-90 Days', 'Planning Phase']

const priorityOptions = [
  { label: '24/7 Uptime', description: 'Redundant pathways, zero downtime scheduling.' },
  { label: 'Speed & Bandwidth', description: '10/40/100G performance with headroom.' },
  { label: 'Security & Compliance', description: 'Meets DoD STIG, HIPAA, PCI, or FAA standards.' },
  { label: 'Budget Control', description: 'Value-engineered with transparent pricing.' },
  { label: 'Future-Proofing', description: 'Ready for Wi-Fi 7, PoE++, and IoT growth.' },
  { label: 'Rapid Deployment', description: 'Accelerated timelines and night work.' },
]

const complianceOptions = ['None / Not Sure', 'HIPAA', 'DoD / FedRAMP', 'FAA', 'PCI', 'Other']

const initialAssessmentData: AssessmentFormData = {
  projectType: '',
  facilityType: '',
  dropCount: '',
  timeline: '',
  priorities: [],
  compliance: '',
  notes: '',
  contactName: '',
  company: '',
  contactEmail: '',
  contactPhone: '',
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0)
  const [assessmentStep, setAssessmentStep] = useState(0)
  const [assessmentData, setAssessmentData] = useState<AssessmentFormData>(initialAssessmentData)
  const [assessmentStatus, setAssessmentStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formError, setFormError] = useState<string | null>(null)
  const featuredProjects = getFeaturedCaseStudies()
  const totalAssessmentSteps = assessmentSteps.length
  const progressPercent = Math.round(((assessmentStep + 1) / totalAssessmentSteps) * 100)
  const currentStepMeta = assessmentSteps[assessmentStep]

  const updateField = (field: keyof AssessmentFormData, value: string) => {
    setAssessmentData((prev) => ({ ...prev, [field]: value }))
    if (formError) setFormError(null)
  }

  const togglePriority = (priority: string) => {
    setAssessmentData((prev) => {
      const isSelected = prev.priorities.includes(priority)
      const priorities = isSelected ? prev.priorities.filter((item) => item !== priority) : [...prev.priorities, priority]
      return { ...prev, priorities }
    })
    if (formError) setFormError(null)
  }

  const isStepComplete = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return Boolean(assessmentData.projectType)
      case 1:
        return Boolean(assessmentData.facilityType && assessmentData.dropCount && Number(assessmentData.dropCount) > 0 && assessmentData.timeline)
      case 2:
        return assessmentData.priorities.length > 0 && Boolean(assessmentData.compliance)
      case 3:
        return Boolean(
          assessmentData.contactName &&
            assessmentData.company &&
            assessmentData.contactEmail &&
            assessmentData.contactPhone
        )
      case 4:
        return true
      default:
        return false
    }
  }

  const handleBack = () => {
    if (assessmentStep === 0 || assessmentStatus === 'submitting') return
    setAssessmentStep((prev) => Math.max(prev - 1, 0))
    setFormError(null)
  }

  const simulateSubmit = () => new Promise((resolve) => setTimeout(resolve, 1200))

  const handleSubmit = async () => {
    setAssessmentStatus('submitting')
    setFormError(null)
    try {
      await simulateSubmit()
      setAssessmentStatus('success')
    } catch (error) {
      console.error('Assessment submission failed', error)
      setAssessmentStatus('idle')
      setFormError('Something went wrong. Please try again or call (469) 653-1275.')
    }
  }

  const handleNext = async () => {
    if (!isStepComplete(assessmentStep)) {
      setFormError('Please complete the required fields to continue.')
      return
    }

    if (assessmentStep === totalAssessmentSteps - 1) {
      await handleSubmit()
      return
    }

    setAssessmentStep((prev) => Math.min(prev + 1, totalAssessmentSteps - 1))
    setFormError(null)
  }

  const handleRestart = () => {
    setAssessmentData(initialAssessmentData)
    setAssessmentStep(0)
    setAssessmentStatus('idle')
    setFormError(null)
  }

  const renderStepContent = () => {
    switch (assessmentStep) {
      case 0:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projectTypeOptions.map((option) => {
              const isActive = assessmentData.projectType === option.label
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => updateField('projectType', option.label)}
                  className={`p-5 text-left border-2 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    isActive ? 'border-primary-500 bg-primary-50 shadow-md' : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="text-3xl mb-3">{option.icon}</div>
                  <div className="font-semibold mb-1">{option.label}</div>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </button>
              )
            })}
          </div>
        )
      case 1:
        return (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Facility Type</label>
              <select
                className="input-field"
                value={assessmentData.facilityType}
                onChange={(event) => updateField('facilityType', event.target.value)}
              >
                <option value="">Select a facility</option>
                {facilityTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Approx. number of cable drops</label>
                <input
                  type="number"
                  min="1"
                  className="input-field"
                  value={assessmentData.dropCount}
                  onChange={(event) => updateField('dropCount', event.target.value)}
                  placeholder="e.g. 75"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Ideal go-live timeline</label>
                <select
                  className="input-field"
                  value={assessmentData.timeline}
                  onChange={(event) => updateField('timeline', event.target.value)}
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Top priorities (choose at least one)</p>
              <div className="grid md:grid-cols-2 gap-3">
                {priorityOptions.map((priority) => {
                  const isActive = assessmentData.priorities.includes(priority.label)
                  return (
                    <button
                      key={priority.label}
                      type="button"
                      onClick={() => togglePriority(priority.label)}
                      className={`p-4 border-2 rounded-xl text-left transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        isActive ? 'border-primary-500 bg-primary-50 shadow-sm' : 'border-gray-200 hover:border-primary-200'
                      }`}
                    >
                      <div className="font-semibold mb-1">{priority.label}</div>
                      <p className="text-sm text-gray-500">{priority.description}</p>
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Compliance requirements</label>
                <select
                  className="input-field"
                  value={assessmentData.compliance}
                  onChange={(event) => updateField('compliance', event.target.value)}
                >
                  <option value="">Select requirement</option>
                  {complianceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Anything else we should know?</label>
                <textarea
                  className="input-field"
                  rows={3}
                  value={assessmentData.notes}
                  onChange={(event) => updateField('notes', event.target.value)}
                  placeholder="Night work needed, ceiling height limits, hot aisle containment, etc."
                />
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="input-field"
                value={assessmentData.contactName}
                onChange={(event) => updateField('contactName', event.target.value)}
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
              <input
                type="text"
                className="input-field"
                value={assessmentData.company}
                onChange={(event) => updateField('company', event.target.value)}
                placeholder="Acme Logistics"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Work Email</label>
              <input
                type="email"
                className="input-field"
                value={assessmentData.contactEmail}
                onChange={(event) => updateField('contactEmail', event.target.value)}
                placeholder="jane@acme.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile or Direct Line</label>
              <input
                type="tel"
                className="input-field"
                value={assessmentData.contactPhone}
                onChange={(event) => updateField('contactPhone', event.target.value)}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
        )
      case 4:
        const summarySections = [
          {
            title: 'Project Scope',
            step: 0,
            items: [
              { label: 'Type', value: assessmentData.projectType || 'Not provided' },
              { label: 'Timeline', value: assessmentData.timeline || 'Not provided' },
            ],
          },
          {
            title: 'Facility Details',
            step: 1,
            items: [
              { label: 'Facility', value: assessmentData.facilityType || 'Not provided' },
              { label: 'Cable Drops', value: assessmentData.dropCount || 'Not provided' },
            ],
          },
          {
            title: 'Priorities',
            step: 2,
            items: [
              {
                label: 'Focus Areas',
                value: assessmentData.priorities.length ? assessmentData.priorities.join(', ') : 'Not provided',
              },
              { label: 'Compliance', value: assessmentData.compliance || 'Not provided' },
              { label: 'Notes', value: assessmentData.notes || '—' },
            ],
          },
          {
            title: 'Point of Contact',
            step: 3,
            items: [
              { label: 'Name', value: assessmentData.contactName || 'Not provided' },
              { label: 'Company', value: assessmentData.company || 'Not provided' },
              { label: 'Email', value: assessmentData.contactEmail || 'Not provided' },
              { label: 'Phone', value: assessmentData.contactPhone || 'Not provided' },
            ],
          },
        ]

        return (
          <div className="space-y-4">
            {summarySections.map((section) => (
              <div key={section.title} className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500">{section.title}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setAssessmentStep(section.step)
                      setAssessmentStatus('idle')
                    }}
                    className="text-sm font-semibold text-primary-600 hover:underline"
                  >
                    Edit
                  </button>
                </div>
                <dl className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  {section.items.map((item) => (
                    <div key={item.label}>
                      <dt className="font-semibold">{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
            <p className="text-sm text-gray-500">
              Need to make a change? Use the edit buttons above before you submit. Our team reviews every assessment and
              sends next steps within one business day.
            </p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <main className="overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white">
        <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20">
        </div>

        <div className="relative z-10 container-custom py-20 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-balance">
              Pentagon-Grade Network Cabling<br />
              <span className="text-primary-300">for Dallas-Fort Worth Businesses</span>
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-gray-200">
              BICSI-Certified Experts
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Trusted by Federal Government & Fortune 500 Companies
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get Free Quote
              </Link>
              <Link href="/portfolio" className="btn btn-secondary btn-lg">
                View Elite Projects
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-yellow-400">
              <span className="text-2xl">★★★★★</span>
              <span className="text-white">4.9/5 from 127 reviews</span>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICE PARTNERS CAROUSEL */}
      <section className="bg-white py-12 border-b border-gray-200 overflow-hidden">
        <div className="flex gap-12 md:gap-16 animate-marquee-mobile md:animate-marquee">
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-12 md:gap-16 items-center min-w-max">
              <div className="h-20 w-40 md:h-24 md:w-48 relative grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/images/services/service-6.png"
                  alt="Service Partner"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-20 w-40 md:h-24 md:w-48 relative grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/images/services/service-7.png"
                  alt="Service Partner"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-20 w-40 md:h-24 md:w-48 relative grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/images/services/service-8.png"
                  alt="Service Partner"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-20 w-40 md:h-24 md:w-48 relative grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/images/services/service-9.png"
                  alt="Service Partner"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-20 w-40 md:h-24 md:w-48 relative grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/images/services/service-10.png"
                  alt="Service Partner"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-20 w-40 md:h-24 md:w-48 relative grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/images/services/service-11.png"
                  alt="Service Partner"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: ELITE PROJECTS SHOWCASE */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Projects That Define <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From federal government to Fortune 500 — we deliver mission-critical infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.slice(0, 3).map((project) => {
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
                  key={project.id}
                  href={`/portfolio/case-studies/${project.slug}`}
                  className="card card-hover group overflow-hidden p-0"
                >
                  <div className="relative h-80 overflow-hidden">
                    {/* Full-screen background image */}
                    {logoSrc && (
                      <Image
                        src={logoSrc}
                        alt={project.client}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    {/* Gradient overlay that reduces on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/30 group-hover:from-gray-900/90 group-hover:via-gray-900/50 group-hover:to-transparent transition-all duration-500" />
                    {/* Text overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                      <h3 className="text-2xl font-bold text-center mb-2 drop-shadow-lg">{project.client}</h3>
                      <p className="text-gray-200 text-center text-sm drop-shadow-md">{project.industry}</p>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      {project.stats.slice(0, 2).map((stat, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-gray-600">{stat.label}:</span>
                          <span className="font-semibold text-gray-900">{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-primary-600 font-semibold group-hover:text-primary-700 flex items-center gap-2">
                      View Case Study
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center">
            <Link href="/portfolio" className="btn btn-primary btn-md">
              View All Elite Projects
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES GRID */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Infrastructure <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One partner for all your connectivity needs — from copper to fiber, security to voice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="card card-hover group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="btn btn-ghost btn-sm w-full group-hover:bg-primary-50"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE US */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Dallas Businesses Choose <span className="text-white">Cable-Com</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 hover:bg-white/15 transition-all">
              <div className="text-6xl text-white mb-4 font-bold">#1</div>
              <h3 className="text-2xl font-bold mb-3">BICSI Certified Excellence</h3>
              <p className="text-gray-300">
                Our technicians hold industry gold-standard BICSI certifications, ensuring every installation meets and exceeds TIA/EIA standards. Pentagon-level quality on every project.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 hover:bg-white/15 transition-all">
              <div className="text-6xl text-white mb-4 font-bold">#2</div>
              <h3 className="text-2xl font-bold mb-3">Federal Experience</h3>
              <p className="text-gray-300">
                Trusted by Pentagon, FAA, and military installations. We bring government-grade security protocols and quality standards to every commercial project.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 hover:bg-white/15 transition-all">
              <div className="text-6xl text-white mb-4 font-bold">#3</div>
              <h3 className="text-2xl font-bold mb-3">1,000+ Successful Projects</h3>
              <p className="text-gray-300">
                Proven track record across healthcare, education, manufacturing, government, and enterprise sectors. From 10-drop offices to 2,000+ drop campuses.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 hover:bg-white/15 transition-all">
              <div className="text-6xl text-white mb-4 font-bold">#4</div>
              <h3 className="text-2xl font-bold mb-3">5-Minute Response</h3>
              <p className="text-gray-300">
                Live chat, phone, email — we respond in minutes, not hours. 24/7 emergency service available. Your questions answered, your projects started fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: INTERACTIVE SERVICE AREA MAP */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Serving the Entire <span className="gradient-text">Dallas-Fort Worth Metroplex</span>
            </h2>
            <p className="text-xl text-gray-600">
              24/7 emergency service available across all DFW communities
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Cities We Serve:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Dallas', 'Fort Worth', 'Plano', 'Irving', 'Arlington', 'Frisco', 'McKinney', 'Richardson'].map((city) => (
                    <Link
                      key={city}
                      href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors group"
                    >
                      <svg className="w-4 h-4 text-primary-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {city}
                    </Link>
                  ))}
                </div>
                <Link href="/service-areas" className="mt-6 inline-block text-primary-600 font-semibold hover:text-primary-700">
                  View all 20+ service areas →
                </Link>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
                <Map
                  latitude={32.646569}
                  longitude={-97.293374}
                  zoom={10}
                  height="100%"
                  markerTitle="Cable-Com Services"
                  markerDescription="2101 Joel East Road, Fort Worth, TX 76140"
                />
              </div>
            </div>

            {/* Professional Quote */}
            <div className="mt-12 border-l-4 border-primary-500 bg-primary-50 p-6 md:p-8 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                "Our licensed technicians handle every detail from installing, labeling, and testing your cabling infrastructure to exacting standards. We provide thorough documentation, network diagrams, and post-installation support, so your team can stay focused and productive from day one."
              </p>
            </div>

            <div className="mt-12 text-center">
              <a href="tel:+14696531275" className="btn btn-emergency btn-lg">
                24/7 Emergency Service: (469) 653-1275
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: VIDEO TESTIMONIALS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Don't Just Take Our <span className="gradient-text">Word For It</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from clients who trust us with their critical infrastructure
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-400">Video Player Placeholder</p>
                  <p className="text-sm text-gray-500 mt-2">Pentagon Project Manager Testimonial</p>
                </div>
              </div>

              <div className="bg-gray-800 p-8 text-white">
                <p className="text-xl italic mb-4">
                  "Cable-Com's attention to security detail was exactly what we needed for our classified installation. Their team demonstrated exceptional professionalism in a challenging high-security environment."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <p className="font-semibold">James Mitchell</p>
                    <p className="text-gray-400 text-sm">Facilities Director, U.S. Department of Defense</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTab === i ? 'bg-primary-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-yellow-400 text-2xl mb-1">★★★★★</div>
                <p className="text-sm text-gray-600">4.9/5 Average</p>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">127</div>
                <p className="text-sm text-gray-600">Total Reviews</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/testimonials" className="btn btn-secondary btn-md">
                Read All 127 Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SMART QUOTE FORM */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get Your Free <span className="gradient-text">Network Assessment</span>
              </h2>
              <p className="text-xl text-gray-600">
                No obligation — See what your project will cost in less than 60 seconds
              </p>
            </div>

            <div className="card shadow-2xl">
              {assessmentStatus === 'success' ? (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-success/10 text-success mx-auto flex items-center justify-center text-3xl">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Assessment Request Received</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Thanks {assessmentData.contactName || 'there'}! A Cable-Com engineer will review your details and send a
                      tailored scope with pricing to {assessmentData.contactEmail || 'your inbox'} within one business day.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Project Snapshot</p>
                      <p className="font-semibold text-gray-900">{assessmentData.projectType || 'Project Type TBD'}</p>
                      <p className="text-sm text-gray-600">Timeline: {assessmentData.timeline || 'Not set'}</p>
                      <p className="text-sm text-gray-600">Facility: {assessmentData.facilityType || 'Not set'}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Primary Contact</p>
                      <p className="font-semibold text-gray-900">{assessmentData.contactName || '—'}</p>
                      <p className="text-sm text-gray-600">{assessmentData.company || 'Company TBD'}</p>
                      <p className="text-sm text-gray-600">{assessmentData.contactPhone || ''}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 justify-center">
                    <Link href="/contact" className="btn btn-primary btn-md">
                      Book Onsite Walkthrough
                    </Link>
                    <button type="button" className="btn btn-ghost btn-md" onClick={handleRestart}>
                      Start Another Assessment
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Need immediate assistance? Call{' '}
                    <a href="tel:+14696531275" className="text-primary-600 font-semibold hover:underline">
                      (469) 653-1275
                    </a>{' '}
                    and mention your assessment request.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold">
                        STEP {assessmentStep + 1} of {totalAssessmentSteps}: {currentStepMeta.title}
                      </h3>
                      <span className="text-sm text-gray-500">{progressPercent}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-primary-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }} />
                    </div>
                    <p className="text-sm text-gray-500 mt-3">{currentStepMeta.helper}</p>
                  </div>

                  <div>{renderStepContent()}</div>

                  {formError && <p className="text-sm text-red-600 mt-4">{formError}</p>}

                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    {assessmentStep > 0 && (
                      <button type="button" className="btn btn-ghost btn-md sm:flex-1" onClick={handleBack}>
                        ← Back
                      </button>
                    )}
                    <button
                      type="button"
                      className="btn btn-primary btn-md sm:flex-1"
                      onClick={handleNext}
                      disabled={assessmentStatus === 'submitting'}
                    >
                      {assessmentStep === totalAssessmentSteps - 1
                        ? assessmentStatus === 'submitting'
                          ? 'Submitting…'
                          : 'Submit Assessment'
                        : 'Next Step →'}
                    </button>
                  </div>

                  <div className="text-center space-y-2 text-sm text-gray-600 mt-6">
                    <p className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Your information is secure and never shared
                    </p>
                    <p>
                      📞 Prefer to talk? Call{' '}
                      <a href="tel:+14696531275" className="text-primary-600 font-semibold hover:underline">
                        (469) 653-1275
                      </a>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ ACCORDION */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How much does network cabling cost in Dallas?',
                a: 'Network cabling costs in Dallas typically range from $85-150 per drop for Cat6/Cat6a structured cabling. Fiber optic installations run $10-25 per foot. Data center projects are quoted based on complexity. Factors affecting price include cable type, distance, labor complexity, and volume. We provide detailed quotes after a free site assessment.',
              },
              {
                q: "What's the difference between Cat6 and Cat6a?",
                a: 'Cat6 supports up to 1 Gbps at 100 meters and 10 Gbps at 55 meters. Cat6a supports 10 Gbps at the full 100-meter distance and has better alien crosstalk protection, making it ideal for dense cable environments and future-proofing. We typically recommend Cat6a for new installations.',
              },
              {
                q: 'Do you provide after-hours installation?',
                a: 'Yes, we offer after-hours, weekend, and holiday installation services to minimize disruption to your business operations. Many of our clients prefer overnight installations for office environments. 24/7 emergency service is also available for critical issues.',
              },
              {
                q: 'Are you insured and licensed in Texas?',
                a: 'Yes, Cable-Com Services Dallas is fully licensed, bonded, and insured in Texas. We carry $2M general liability and $1M workers compensation insurance. Our technicians hold BICSI certifications and have passed background checks for work in secure facilities.',
              },
              {
                q: 'How long does a typical installation take?',
                a: 'A 50-drop office installation typically takes 3-5 business days. Larger projects (200+ drops) may take 2-4 weeks. Data center projects vary widely based on complexity. We provide detailed timelines during the planning phase and work efficiently to minimize downtime.',
              },
              {
                q: 'Do you offer maintenance contracts?',
                a: 'Yes, we offer comprehensive maintenance and support contracts including regular inspections, testing, documentation updates, priority emergency response, and discounted rates for moves/adds/changes. Contracts are customized based on your infrastructure size and support needs.',
              },
            ].map((faq, index) => (
              <details key={index} className="group card">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-semibold group-open:text-primary-600">
                    {faq.q}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/faq" className="text-primary-600 font-semibold hover:text-primary-700">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-700 to-primary-900" />

        <div className="relative z-10 container-custom text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">
            Get a free quote in less than 60 seconds
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold bg-white text-primary-900 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
          >
            Get Free Quote Now
          </Link>

          <p className="mt-8 text-lg text-gray-300">
            Or call us 24/7: <a href="tel:+14696531275" className="text-white font-bold hover:underline">(469) 653-1275</a>
          </p>
        </div>
      </section>
    </main>
  )
}
