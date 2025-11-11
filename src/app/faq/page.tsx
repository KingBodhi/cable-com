import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ - Network Cabling Questions Answered | Cable-Com Services Dallas',
  description:
    'Get answers to common network cabling questions. Installation costs, timelines, certifications, warranties, and more. Expert advice from Pentagon-grade installers.',
}

export default function FAQPage() {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'How quickly can you start my network cabling project?',
          a: 'For most standard commercial projects, we can begin within 1-2 weeks of contract signing. Larger projects may require additional planning time. Emergency services are available 24/7 for critical infrastructure failures.',
        },
        {
          q: 'What areas do you serve?',
          a: 'We serve the entire Dallas-Fort Worth metroplex including Dallas, Fort Worth, Plano, Irving, Frisco, McKinney, Arlington, Denton, and surrounding communities within a 60-mile radius.',
        },
        {
          q: 'Do you work on weekends or after hours?',
          a: 'Yes! We understand many businesses need installations done outside normal business hours to minimize disruption. Weekend and after-hours installations are available with advance scheduling.',
        },
      ],
    },
    {
      category: 'Services & Installation',
      questions: [
        {
          q: 'What types of cabling do you install?',
          a: 'We install all types of structured cabling including Cat5e, Cat6, Cat6a, Cat7, fiber optic (single-mode and multi-mode), coaxial, and specialty cables for specific applications. All installations meet or exceed TIA/EIA-568 standards.',
        },
        {
          q: 'Can you work with existing infrastructure?',
          a: 'Absolutely. We can integrate with existing cabling systems, perform upgrades, add capacity, and remediate problematic installations. We'll assess your current infrastructure and recommend the best path forward.',
        },
        {
          q: 'Do you provide cable testing and certification?',
          a: 'Yes, all installations include comprehensive testing using Fluke Network certification equipment. You receive complete test reports showing pass/fail results for every cable run, documenting performance to manufacturer specifications.',
        },
      ],
    },
    {
      category: 'Pricing & Timeline',
      questions: [
        {
          q: 'How much does network cabling installation cost?',
          a: 'Costs vary based on cable type, number of drops, building structure, and project complexity. Typical office installations range from $150-300 per drop for Cat6, $250-500 for fiber. We provide detailed quotes after site assessment.',
        },
        {
          q: 'How long does a typical installation take?',
          a: 'A 50-drop office installation typically takes 3-5 business days. Larger projects are scheduled based on scope. Data center installations may take several weeks. We provide detailed project timelines during planning.',
        },
        {
          q: 'Do you offer financing options?',
          a: 'Yes, we work with several financing partners to offer flexible payment options for qualified businesses. Contact us to discuss financing options for your project.',
        },
      ],
    },
    {
      category: 'Certifications & Quality',
      questions: [
        {
          q: 'What certifications do your technicians hold?',
          a: 'All our technicians are BICSI certified, including RCDD (Registered Communications Distribution Designer), DCDC (Data Center Design Consultant), and Installer 2 certifications for both copper and fiber optic systems.',
        },
        {
          q: 'What warranties do you provide?',
          a: 'We provide a lifetime warranty on our labor and workmanship. Manufacturer warranties on materials range from 15-25 years depending on the product line (CommScope, Panduit, Belden, etc.). Extended warranty options are available.',
        },
        {
          q: 'Are you licensed and insured?',
          a: 'Yes, we are fully licensed, bonded, and insured with $5 million in general liability coverage. We also carry workers' compensation insurance and can provide certificates of insurance for your facility.',
        },
      ],
    },
    {
      category: 'Technical & Design',
      questions: [
        {
          q: 'Should I choose Cat6 or Cat6a cabling?',
          a: 'Cat6 supports 10 Gigabit up to 55 meters and is suitable for most office environments. Cat6a supports 10 Gigabit up to 100 meters and is recommended for data centers, high-performance applications, or future-proofing installations.',
        },
        {
          q: 'When should I use fiber optic instead of copper?',
          a: 'Fiber is recommended for distances over 100 meters, high-bandwidth applications (10/40/100 Gigabit), electromagnetic interference environments, inter-building connections, and maximum future-proofing. We'll recommend the best solution for your needs.',
        },
        {
          q: 'Do you provide network design services?',
          a: 'Yes, our RCDD-certified designers create comprehensive network infrastructure designs including topology planning, equipment room layout, cable pathway design, and complete specifications. Design services are included with installation or available standalone.',
        },
      ],
    },
    {
      category: 'Special Projects',
      questions: [
        {
          q: 'Can you handle government and military projects?',
          a: 'Yes, we have Top Secret clearance capabilities and extensive experience with federal, military, and classified installations. Our portfolio includes the Pentagon, FAA centers, and Camp Pendleton.',
        },
        {
          q: 'Do you work on data center projects?',
          a: 'Absolutely. We specialize in data center cabling including high-density fiber arrays, structured copper systems, cable management, and hot/cold aisle containment. We're experienced with colocation facilities, enterprise data centers, and edge computing sites.',
        },
        {
          q: 'Can you relocate existing network infrastructure?',
          a: 'Yes, we handle office moves, data center migrations, and equipment relocations. We'll document your existing setup, carefully disconnect and label everything, transport if needed, and reinstall at the new location with full testing.',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200">
              Get answers to common questions about network cabling installation, pricing, timelines, and our services.
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="mb-6 pb-4 border-b-2 border-primary-600">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="card group">
                      <summary className="cursor-pointer list-none flex items-center justify-between">
                        <h3 className="font-bold text-gray-900 pr-4">{faq.q}</h3>
                        <svg
                          className="w-6 h-6 text-primary-600 transform transition-transform group-open:rotate-180 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our network infrastructure experts are here to help. Get in touch for personalized answers to your specific
            situation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Contact Us
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
