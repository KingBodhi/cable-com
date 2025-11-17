import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Cable-Com Services Dallas',
  description: 'Cable-Com Services Dallas is committed to ensuring digital accessibility for people with disabilities.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function AccessibilityPage() {
  const lastUpdated = 'November 17, 2024'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6">Accessibility Statement</h1>
            <p className="text-xl text-gray-200">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2>Our Commitment to Accessibility</h2>
              <p>
                Cable-Com Services Dallas is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all of our users.
              </p>

              <h2>Conformance Status</h2>
              <p>
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
              </p>

              <h2>Accessibility Features</h2>
              <p>Our website includes the following accessibility features:</p>
              <ul>
                <li><strong>Semantic HTML:</strong> Proper use of HTML elements for better screen reader compatibility</li>
                <li><strong>Keyboard Navigation:</strong> Full website functionality accessible via keyboard</li>
                <li><strong>ARIA Labels:</strong> Descriptive labels for interactive elements</li>
                <li><strong>Alt Text:</strong> Descriptive alternative text for images</li>
                <li><strong>Color Contrast:</strong> Sufficient color contrast ratios for text readability</li>
                <li><strong>Responsive Design:</strong> Mobile-friendly layout that adapts to different screen sizes</li>
                <li><strong>Focus Indicators:</strong> Clear visual indicators for keyboard focus</li>
                <li><strong>Skip Links:</strong> Option to skip to main content</li>
                <li><strong>Consistent Navigation:</strong> Predictable and consistent navigation structure</li>
                <li><strong>Form Labels:</strong> Clear labels and error messages for all form fields</li>
              </ul>

              <h2>Assistive Technology Compatibility</h2>
              <p>
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              <ul>
                <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
                <li>Alternative input devices</li>
              </ul>

              <h2>Browser Compatibility</h2>
              <p>
                For the best accessibility experience, we recommend using the latest versions of:
              </p>
              <ul>
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Apple Safari</li>
                <li>Microsoft Edge</li>
              </ul>

              <h2>Third-Party Content</h2>
              <p>
                While we strive to ensure accessibility across our entire website, some third-party content (such as embedded videos or maps) may not be fully accessible. We are working to ensure all third-party content meets accessibility standards.
              </p>

              <h2>Known Limitations</h2>
              <p>
                We are aware of the following accessibility limitations and are actively working to address them:
              </p>
              <ul>
                <li>Some PDF documents may not be fully screen reader compatible - we are working to convert these to accessible formats</li>
                <li>Interactive map features may have limited keyboard accessibility</li>
                <li>Some images in our portfolio may lack detailed alternative text descriptions</li>
              </ul>

              <h2>Accessibility Tools and Resources</h2>
              <p>
                You can enhance your browsing experience using browser accessibility features:
              </p>
              <ul>
                <li><strong>Text Zoom:</strong> Use Ctrl + (Windows) or Cmd + (Mac) to increase text size</li>
                <li><strong>High Contrast Mode:</strong> Enable in your operating system settings</li>
                <li><strong>Browser Extensions:</strong> Many browsers offer accessibility-focused extensions</li>
                <li><strong>Screen Reader Software:</strong> Free options include NVDA (Windows) and VoiceOver (Mac/iOS)</li>
              </ul>

              <h2>Mobile Accessibility</h2>
              <p>
                Our website is fully responsive and accessible on mobile devices. Mobile-specific accessibility features include:
              </p>
              <ul>
                <li>Touch-friendly buttons and links with adequate spacing</li>
                <li>Responsive text sizing for readability on small screens</li>
                <li>Compatible with mobile screen readers (TalkBack, VoiceOver)</li>
                <li>Optimized performance for slower connections</li>
              </ul>

              <h2>Physical Location Accessibility</h2>
              <p>
                Our office at 2101 Joel East Road, Fort Worth, TX 76140 is committed to physical accessibility:
              </p>
              <ul>
                <li>Accessible parking available</li>
                <li>Wheelchair-accessible entrance</li>
                <li>Accessible restroom facilities</li>
                <li>Service animals welcome</li>
              </ul>
              <p>
                Please contact us in advance if you need specific accommodations for your visit.
              </p>

              <h2>Ongoing Efforts</h2>
              <p>
                We are continuously working to improve the accessibility of our website. Our ongoing efforts include:
              </p>
              <ul>
                <li>Regular accessibility audits</li>
                <li>Staff training on accessibility best practices</li>
                <li>Implementing user feedback</li>
                <li>Updating content and design for improved accessibility</li>
                <li>Testing with assistive technologies</li>
              </ul>

              <h2>Feedback and Contact Information</h2>
              <p>
                We welcome your feedback on the accessibility of cable-comservices.com. Please let us know if you encounter accessibility barriers:
              </p>
              <ul>
                <li>Email: <a href="mailto:contact@cable-comservices.com">contact@cable-comservices.com</a></li>
                <li>Phone: <a href="tel:+14696531275">(469) 653-1275</a></li>
                <li>Address: 2101 Joel East Road, Fort Worth, TX 76140</li>
              </ul>
              <p>
                We typically respond to feedback within 2-3 business days and will work with you to provide the information or service you need through an alternative communication method.
              </p>

              <h2>Formal Complaints</h2>
              <p>
                If you are not satisfied with our response to your accessibility concerns, you may file a complaint with:
              </p>
              <ul>
                <li>
                  <strong>U.S. Department of Justice</strong><br />
                  Civil Rights Division<br />
                  <a href="https://www.ada.gov/filing_complaint.htm" target="_blank" rel="noopener noreferrer">
                    ADA Information Line
                  </a>
                </li>
              </ul>

              <h2>Technical Specifications</h2>
              <p>
                Accessibility of cable-comservices.com relies on the following technologies:
              </p>
              <ul>
                <li>HTML5</li>
                <li>WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)</li>
                <li>CSS3</li>
                <li>JavaScript (with graceful degradation)</li>
              </ul>

              <h2>Assessment and Testing</h2>
              <p>
                Our accessibility has been tested using:
              </p>
              <ul>
                <li>Automated accessibility testing tools (WAVE, axe DevTools)</li>
                <li>Manual keyboard navigation testing</li>
                <li>Screen reader testing (NVDA, VoiceOver)</li>
                <li>Color contrast analysis tools</li>
                <li>Mobile accessibility testing</li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <p className="mb-2"><strong>Cable-Com Services Dallas</strong></p>
                <p className="mb-2">2101 Joel East Road<br />Fort Worth, TX 76140</p>
                <p className="mb-2">Phone: <a href="tel:+14696531275">(469) 653-1275</a></p>
                <p>Email: <a href="mailto:contact@cable-comservices.com">contact@cable-comservices.com</a></p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
