import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Cable-Com Services Dallas',
  description: 'Terms of Service for Cable-Com Services Dallas. Read our service terms and conditions.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  const lastUpdated = 'November 17, 2024'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6">Terms of Service</h1>
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
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using the Cable-Com Services Dallas website (cable-comservices.com) or engaging our services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our website or use our services.
              </p>

              <h2>2. Services Offered</h2>
              <p>
                Cable-Com Services Dallas provides professional network cabling and infrastructure services, including but not limited to:
              </p>
              <ul>
                <li>Structured cabling installation and design</li>
                <li>Fiber optic installation and termination</li>
                <li>Data center cabling and infrastructure</li>
                <li>Network infrastructure design and implementation</li>
                <li>Security system installation</li>
                <li>Voice and telephony systems</li>
                <li>Starlink satellite internet installation</li>
              </ul>

              <h2>3. Service Agreements</h2>
              <h3>3.1 Quotes and Proposals</h3>
              <p>
                All quotes and proposals are valid for 30 days from the date of issue unless otherwise stated. Quotes are estimates based on the information provided and may be adjusted based on site conditions and project scope changes.
              </p>

              <h3>3.2 Project Scope</h3>
              <p>
                Detailed project specifications will be outlined in a separate service agreement or work order. Any changes to the project scope must be approved in writing and may result in additional costs.
              </p>

              <h3>3.3 Payment Terms</h3>
              <p>
                Unless otherwise agreed in writing:
              </p>
              <ul>
                <li>A deposit may be required before work begins</li>
                <li>Payment is due upon completion of work or as outlined in the service agreement</li>
                <li>Late payments may incur interest charges</li>
                <li>We reserve the right to suspend services for non-payment</li>
              </ul>

              <h2>4. Client Responsibilities</h2>
              <p>Clients agree to:</p>
              <ul>
                <li>Provide accurate project information and requirements</li>
                <li>Ensure site access for our technicians during scheduled work hours</li>
                <li>Provide necessary permits and approvals</li>
                <li>Ensure a safe working environment</li>
                <li>Notify us of any site hazards or special requirements</li>
                <li>Protect and not interfere with installed cabling and equipment</li>
              </ul>

              <h2>5. Warranties and Guarantees</h2>
              <h3>5.1 Workmanship Warranty</h3>
              <p>
                We guarantee our workmanship for a period specified in your service agreement (typically 1-5 years). This warranty covers defects in installation but does not cover damage caused by:
              </p>
              <ul>
                <li>Normal wear and tear</li>
                <li>Misuse or abuse of equipment</li>
                <li>Unauthorized modifications</li>
                <li>Acts of God or environmental factors</li>
                <li>Third-party actions</li>
              </ul>

              <h3>5.2 Equipment Warranty</h3>
              <p>
                Equipment and materials are covered by manufacturers' warranties. We will assist with warranty claims but are not responsible for manufacturer defects.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law:
              </p>
              <ul>
                <li>Our total liability shall not exceed the amount paid for the specific service</li>
                <li>We are not liable for indirect, consequential, or incidental damages</li>
                <li>We are not liable for business interruption or data loss</li>
                <li>We are not liable for damages caused by events beyond our control</li>
              </ul>

              <h2>7. Insurance and Indemnification</h2>
              <p>
                Cable-Com Services Dallas maintains appropriate liability insurance. Clients agree to indemnify and hold harmless Cable-Com Services Dallas from claims arising from:
              </p>
              <ul>
                <li>Client's misrepresentation of project requirements</li>
                <li>Client's failure to maintain installed systems</li>
                <li>Unauthorized modifications to our work</li>
                <li>Client's violation of applicable laws or regulations</li>
              </ul>

              <h2>8. Intellectual Property</h2>
              <p>
                Design documents, network diagrams, and technical specifications remain the property of Cable-Com Services Dallas unless otherwise agreed in writing. Clients receive a license to use these materials for the installed system only.
              </p>

              <h2>9. Confidentiality</h2>
              <p>
                Both parties agree to maintain confidentiality of proprietary information, trade secrets, and sensitive business data exchanged during the course of service delivery.
              </p>

              <h2>10. Cancellation and Termination</h2>
              <h3>10.1 Client Cancellation</h3>
              <p>
                Clients may cancel services with written notice. Cancellation fees may apply based on work completed and materials ordered.
              </p>

              <h3>10.2 Our Right to Terminate</h3>
              <p>
                We reserve the right to terminate services if:
              </p>
              <ul>
                <li>Payment terms are not met</li>
                <li>Client violates these terms</li>
                <li>Site conditions are unsafe</li>
                <li>Client engages in abusive or threatening behavior</li>
              </ul>

              <h2>11. BICSI Standards Compliance</h2>
              <p>
                All work is performed in accordance with BICSI (Building Industry Consulting Service International) standards and applicable building codes. Our certified technicians ensure installations meet industry best practices.
              </p>

              <h2>12. Website Use</h2>
              <h3>12.1 Acceptable Use</h3>
              <p>You agree not to:</p>
              <ul>
                <li>Use our website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with website operation or security</li>
                <li>Collect user information without consent</li>
                <li>Transmit viruses or malicious code</li>
              </ul>

              <h3>12.2 Content Accuracy</h3>
              <p>
                While we strive to provide accurate information, we make no warranties about the completeness or accuracy of website content. Service specifications, pricing, and availability are subject to change.
              </p>

              <h2>13. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external sites.
              </p>

              <h2>14. Dispute Resolution</h2>
              <h3>14.1 Governing Law</h3>
              <p>
                These Terms of Service are governed by the laws of the State of Texas, United States.
              </p>

              <h3>14.2 Dispute Resolution Process</h3>
              <p>
                In the event of a dispute:
              </p>
              <ol>
                <li>Parties will attempt good-faith negotiation</li>
                <li>If unresolved, parties may pursue mediation</li>
                <li>Legal action may be pursued in Tarrant County, Texas</li>
              </ol>

              <h2>15. Force Majeure</h2>
              <p>
                We are not liable for delays or failures in performance resulting from circumstances beyond our control, including natural disasters, pandemics, labor disputes, or government actions.
              </p>

              <h2>16. Severability</h2>
              <p>
                If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>

              <h2>17. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to this page. Continued use of our services constitutes acceptance of modified terms.
              </p>

              <h2>18. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
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
