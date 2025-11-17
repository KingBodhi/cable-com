'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsMobileServicesOpen(false)
    }
  }, [isMobileMenuOpen])

  const handleMobileNavSelection = () => {
    setIsMobileMenuOpen(false)
  }

  const services = [
    { name: 'Structured Cabling', slug: 'structured-cabling', icon: '🔌' },
    { name: 'Fiber Optic', slug: 'fiber-optic', icon: '🌐' },
    { name: 'Data Center', slug: 'data-center', icon: '🖥️' },
    { name: 'Security Systems', slug: 'security-systems', icon: '🔒' },
    { name: 'Voice & Telephony', slug: 'voice-telephony', icon: '📞' },
    { name: 'Network Infrastructure', slug: 'network-infrastructure', icon: '🌐' },
    { name: 'Starlink Installation', slug: 'starlink-installation', icon: '🛰️' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 relative group-hover:scale-110 transition-transform">
              <Image
                src="/images/cable-com-logo-green.png"
                alt="Cable-Com Services"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900 leading-tight">Cable-Com Services</div>
              <div className="text-xs text-gray-600">Dallas-Fort Worth</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`font-medium transition-colors hover:text-primary-600 ${
                pathname === '/' ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`font-medium transition-colors hover:text-primary-600 flex items-center gap-1 ${
                  pathname?.startsWith('/services') ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white rounded-xl shadow-2xl p-6 animate-fade-in">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary-50 transition-colors group"
                      >
                        <div className="text-2xl">{service.icon}</div>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-600">Learn more →</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link
                      href="/services"
                      className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-2"
                    >
                      View All Services
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={`font-medium transition-colors hover:text-primary-600 ${
                pathname?.startsWith('/portfolio') ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              className={`font-medium transition-colors hover:text-primary-600 ${
                pathname === '/about' ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`font-medium transition-colors hover:text-primary-600 ${
                pathname === '/contact' ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+14696531275"
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-semibold">(469) 653-1275</span>
            </a>

            <Link href="/contact" className="btn btn-primary btn-md">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-up">
            <div className="max-h-[70vh] overflow-y-auto pr-1">
              <nav className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="p-3 rounded-lg hover:bg-gray-100 font-medium text-gray-900"
                  onClick={handleMobileNavSelection}
                >
                  Home
                </Link>

                <div className="border-t border-gray-200 my-2" />

                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between p-3 rounded-lg hover:bg-gray-100 font-medium text-gray-900"
                  aria-expanded={isMobileServicesOpen}
                >
                  <span>Services</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isMobileServicesOpen && (
                  <div className="flex flex-col gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="p-3 pl-6 rounded-lg hover:bg-gray-100 text-gray-700 flex items-center gap-2"
                        onClick={handleMobileNavSelection}
                      >
                        <span>{service.icon}</span>
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}

                <div className="border-t border-gray-200 my-2" />

                <Link
                  href="/portfolio"
                  className="p-3 rounded-lg hover:bg-gray-100 font-medium text-gray-900"
                  onClick={handleMobileNavSelection}
                >
                  Portfolio
                </Link>

                <Link
                  href="/about"
                  className="p-3 rounded-lg hover:bg-gray-100 font-medium text-gray-900"
                  onClick={handleMobileNavSelection}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="p-3 rounded-lg hover:bg-gray-100 font-medium text-gray-900"
                  onClick={handleMobileNavSelection}
                >
                  Contact
                </Link>

                <div className="border-t border-gray-200 my-2" />

                <a
                  href="tel:+14696531275"
                  className="p-3 rounded-lg bg-primary-50 text-primary-700 font-semibold text-center"
                  onClick={handleMobileNavSelection}
                >
                  📞 Call (469) 653-1275
                </a>

                <Link
                  href="/contact"
                  className="btn btn-primary btn-md w-full"
                  onClick={handleMobileNavSelection}
                >
                  Get Free Quote
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
