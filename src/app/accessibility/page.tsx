import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Cable-Com Services Dallas',
  description:
    'Cable-Com Services Dallas is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility efforts.',
}

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-4">Accessibility Statement</h1>
            <p className="text-xl text-gray-200">Our Commitment to Digital Accessibility</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Our Commitment</h2>
            <p>
              Cable-Com Services Dallas is committed to ensuring digital accessibility for people with disabilities. We
              are continually improving the user experience for everyone and applying the relevant accessibility
              standards to ensure we provide equal access to all of our users.
            </p>

            <h2>Conformance Status</h2>
            <p>
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. These guidelines
              explain how to make web content more accessible for people with disabilities and more user-friendly for
              everyone.
            </p>

            <h2>Measures to Support Accessibility</h2>
            <p>Cable-Com Services Dallas takes the following measures to ensure accessibility:</p>
            <ul>
              <li>Include accessibility as part of our mission statement</li>
              <li>Integrate accessibility into our procurement practices</li>
              <li>Provide continual accessibility training for our staff</li>
              <li>Assign clear accessibility goals and responsibilities</li>
              <li>Employ formal accessibility quality assurance methods</li>
            </ul>

            <h2>Accessibility Features</h2>
            <p>Our website includes the following accessibility features:</p>

            <h3>Navigation and Structure</h3>
            <ul>
              <li>Clear and consistent navigation throughout the site</li>
              <li>Logical heading structure for screen reader users</li>
              <li>Descriptive page titles and link text</li>
              <li>Skip navigation links for keyboard users</li>
              <li>Breadcrumb trails for easy orientation</li>
            </ul>

            <h3>Visual Design</h3>
            <ul>
              <li>High contrast color ratios meeting WCAG AA standards</li>
              <li>Resizable text without loss of functionality</li>
              <li>No reliance on color alone to convey information</li>
              <li>Clear focus indicators for keyboard navigation</li>
              <li>Responsive design that works at various zoom levels</li>
            </ul>

            <h3>Content and Media</h3>
            <ul>
              <li>Descriptive alternative text for images</li>
              <li>Transcripts for audio content (when applicable)</li>
              <li>Captions for video content (when applicable)</li>
              <li>Clear and simple language</li>
              <li>Properly structured data tables</li>
            </ul>

            <h3>Forms and Interaction</h3>
            <ul>
              <li>Clear form labels and instructions</li>
              <li>Error messages that clearly identify problems</li>
              <li>Keyboard-accessible interactive elements</li>
              <li>Sufficient time to complete forms</li>
              <li>Input assistance to prevent errors</li>
            </ul>

            <h2>Technical Specifications</h2>
            <p>
              Accessibility of our website relies on the following technologies to work with the particular combination
              of web browser and assistive technologies or plugins installed on your computer:
            </p>
            <ul>
              <li>HTML5</li>
              <li>WAI-ARIA</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <p>
              These technologies are relied upon for conformance with the accessibility standards used. Our website is
              designed to work with modern browsers and assistive technologies.
            </p>

            <h2>Limitations and Alternatives</h2>
            <p>
              Despite our best efforts to ensure accessibility, there may be some limitations. If you experience any
              difficulty accessing our website or services, please contact us using one of the methods below, and we
              will work with you to provide the information or service you need through an alternative communication
              method.
            </p>

            <h2>Assessment Approach</h2>
            <p>Cable-Com Services Dallas assessed the accessibility of this website through:</p>
            <ul>
              <li>Self-evaluation</li>
              <li>Automated testing tools</li>
              <li>Manual testing with assistive technologies</li>
              <li>User testing with people with disabilities</li>
            </ul>

            <h2>Feedback Process</h2>
            <p>
              We welcome your feedback on the accessibility of our website. Please let us know if you encounter
              accessibility barriers:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h3 className="mt-0">Contact Information</h3>
              <ul className="mb-0">
                <li>
                  <strong>Email:</strong> accessibility@cable-comservices.com
                </li>
                <li>
                  <strong>Phone:</strong> (469) 653-1275
                </li>
                <li>
                  <strong>Address:</strong> 123 Network Drive, Dallas, TX 75201
                </li>
              </ul>
            </div>

            <p>We aim to respond to accessibility feedback within 5 business days.</p>

            <h2>Physical Accessibility</h2>
            <p>Our physical office location is also accessible:</p>
            <ul>
              <li>Wheelchair-accessible entrance and parking</li>
              <li>Accessible restroom facilities</li>
              <li>Elevator access to all floors</li>
              <li>Service animals welcome</li>
              <li>Accessible meeting rooms available</li>
            </ul>

            <h2>Formal Complaints</h2>
            <p>
              If you are not satisfied with our response to your accessibility feedback, you have the right to file a
              complaint with:
            </p>
            <ul>
              <li>
                <strong>U.S. Department of Justice</strong>
                <br />
                Civil Rights Division
                <br />
                950 Pennsylvania Avenue NW
                <br />
                Washington, DC 20530
                <br />
                <a href="https://civilrights.justice.gov/" target="_blank" rel="noopener noreferrer">
                  civilrights.justice.gov
                </a>
              </li>
            </ul>

            <h2>Ongoing Efforts</h2>
            <p>
              Accessibility is an ongoing effort. We regularly review our website and services to identify and resolve
              accessibility issues. Our commitment includes:
            </p>
            <ul>
              <li>Regular accessibility audits</li>
              <li>Continuous staff training</li>
              <li>Staying informed of evolving accessibility standards</li>
              <li>Incorporating user feedback into improvements</li>
              <li>Documenting and sharing accessibility best practices</li>
            </ul>

            <h2>Third-Party Content</h2>
            <p>
              Some content on our website may be provided by third parties. We are working with our partners and vendors
              to ensure their content meets accessibility standards as well.
            </p>

            <h2>Date and Review</h2>
            <p>
              <strong>This statement was last reviewed and updated:</strong> January 2025
              <br />
              <strong>Next scheduled review:</strong> July 2025
            </p>

            <h2>Additional Resources</h2>
            <p>Learn more about web accessibility:</p>
            <ul>
              <li>
                <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer">
                  Web Accessibility Initiative (WAI)
                </a>
              </li>
              <li>
                <a href="https://www.ada.gov/" target="_blank" rel="noopener noreferrer">
                  Americans with Disabilities Act (ADA)
                </a>
              </li>
              <li>
                <a href="https://www.section508.gov/" target="_blank" rel="noopener noreferrer">
                  Section 508 Accessibility Program
                </a>
              </li>
            </ul>

            <div className="bg-primary-50 p-6 rounded-lg my-8">
              <h3 className="mt-0">Need Immediate Assistance?</h3>
              <p className="mb-4">
                If you need immediate assistance accessing our services or information, please call us directly:
              </p>
              <p className="text-2xl font-bold text-primary-600 mb-2">(469) 653-1275</p>
              <p className="mb-0">Available Monday-Friday, 7:00 AM - 6:00 PM CT</p>
              <p className="mb-0">24/7 emergency service available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="mb-6">Questions or Suggestions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're committed to improving accessibility for all users. Your feedback helps us make our website better.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Contact Us About Accessibility
          </Link>
        </div>
      </section>
    </div>
  )
}
