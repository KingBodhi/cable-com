import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Client Testimonials & Reviews | Cable-Com Services Dallas',
  description:
    '127 five-star reviews from satisfied clients. Read what Pentagon, Fortune 500, and Dallas businesses say about our network cabling services. 4.9★ rating.',
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "Cable-Com Services delivered flawless execution on our classified network upgrade. Their attention to security protocols and zero-defect installation met our stringent Pentagon standards. Simply outstanding.",
      author: "Colonel James Morrison",
      title: "Facility Director",
      company: "U.S. Department of Defense",
      rating: 5,
    },
    {
      quote:
        "For an 18,000-seat arena, network reliability is non-negotiable. Cable-Com upgraded our entire infrastructure with zero downtime during the season. Their team worked overnight shifts to ensure fans never noticed. Professional doesn't begin to describe it.",
      author: "Sarah Chen",
      title: "VP of Operations",
      company: "Staples Center",
      rating: 5,
    },
    {
      quote:
        "When you're coordinating air traffic, network failures can have serious consequences. Cable-Com's fiber optic installation across our three facilities was executed with military precision. Documentation was impeccable, testing exceeded standards, and they finished ahead of schedule.",
      author: "Michael Rodriguez",
      title: "IT Director",
      company: "Federal Aviation Administration",
      rating: 5,
    },
    {
      quote:
        "We manufacture food products for 850 restaurants—our network can't go down. Cable-Com installed a redundant system with 99.9% uptime guarantee and backed it with 24/7 support. Six months in, we haven't had a single outage. Worth every penny.",
      author: "David Park",
      title: "CTO",
      company: "Golden West Food Group",
      rating: 5,
    },
    {
      quote:
        "Securing a military base requires specialized expertise. Cable-Com's security clearances, experience with classified systems, and commitment to NISPOM compliance made them the obvious choice. The installation exceeded all expectations.",
      author: "Lt. Col. Robert Hayes",
      title: "Base Communications Officer",
      company: "Camp Pendleton",
      rating: 5,
    },
    {
      quote:
        "We needed 400 Cat6a drops across three floors in a historic building—without damaging the architecture. Cable-Com's solution was creative, clean, and completed in four days. Their technicians were respectful, professional, and detail-oriented.",
      author: "Jennifer Walsh",
      title: "Facilities Manager",
      company: "Heritage Financial Services",
      rating: 5,
    },
    {
      quote:
        "As a growing tech startup, we needed infrastructure that could scale. Cable-Com designed a flexible system that tripled our capacity for 20% more cost. One year later, we've doubled our team size and the network handles it effortlessly.",
      author: "Alex Thompson",
      title: "CEO",
      company: "TechNova Solutions",
      rating: 5,
    },
    {
      quote:
        "Our data center migration was nightmare-level complex—600 servers, 40TB of data, zero downtime tolerance. Cable-Com orchestrated it flawlessly over a weekend. Monday morning, everything worked perfectly. I can't recommend them highly enough.",
      author: "Marcus Johnson",
      title: "Senior Network Engineer",
      company: "DataVault Systems",
      rating: 5,
    },
    {
      quote:
        "Patient data security is our top priority. Cable-Com not only delivered HIPAA-compliant cabling but educated our staff on best practices. Their ongoing support and documentation have been invaluable for our audits.",
      author: "Dr. Patricia Martinez",
      title: "CISO",
      company: "Dallas Regional Medical Center",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold mb-6">
              4.9★ Average Rating
            </div>
            <h1 className="mb-6">What Our Clients Say</h1>
            <p className="text-xl text-gray-200">
              Don't just take our word for it. Read what the Pentagon, Fortune 500 companies, and Dallas businesses say
              about working with Cable-Com Services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">127</div>
              <div className="text-gray-600">Five-Star Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">1,000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-texas-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {testimonial.author.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Join Our Growing List of Satisfied Clients</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the same level of service that earned us 127 five-star reviews. Get your free quote today.
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
