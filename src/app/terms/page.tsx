import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Cable-Com Services Dallas',
  description: 'Terms of Service for Cable-Com Services Dallas. Important legal information about using our services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-200">Last Updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using Cable-Com Services Dallas's website and services, you agree to be bound by these
              Terms of Service and all applicable laws and regulations. If you do not agree with these terms, please do
              not use our services.
            </p>

            <h2>2. Services Description</h2>
            <p>
              Cable-Com Services Dallas provides professional network cabling and infrastructure services including:
            </p>
            <ul>
              <li>Structured cabling installation and maintenance</li>
              <li>Fiber optic installation and testing</li>
              <li>Data center infrastructure services</li>
              <li>Network design and consulting</li>
              <li>Security system installation</li>
              <li>Related telecommunications services</li>
            </ul>

            <h2>3. Service Agreements</h2>
            <h3>3.1 Quotes and Proposals</h3>
            <p>
              All quotes and proposals are valid for 30 days unless otherwise specified. Final pricing may vary based on
              actual site conditions and project scope changes.
            </p>

            <h3>3.2 Contract Terms</h3>
            <p>
              Service contracts will specify project scope, timeline, pricing, payment terms, and warranty information.
              Both parties must sign the contract before work begins.
            </p>

            <h3>3.3 Changes to Scope</h3>
            <p>
              Any changes to the agreed-upon scope of work must be documented in writing and may result in adjusted
              pricing and timelines.
            </p>

            <h2>4. Payment Terms</h2>
            <ul>
              <li>Deposits may be required before work begins</li>
              <li>Progress payments will be outlined in the service contract</li>
              <li>Final payment is due upon project completion and acceptance</li>
              <li>Late payments may incur interest charges as permitted by law</li>
              <li>We accept checks, wire transfers, and major credit cards</li>
            </ul>

            <h2>5. Warranties</h2>
            <h3>5.1 Labor Warranty</h3>
            <p>
              We provide a lifetime warranty on our workmanship for all properly maintained installations. This warranty
              covers defects in our installation work but does not cover damage from abuse, misuse, or unauthorized
              modifications.
            </p>

            <h3>5.2 Product Warranties</h3>
            <p>
              Products and materials are covered by manufacturer warranties (typically 15-25 years). We will assist with
              warranty claims but do not extend the manufacturer's warranty terms.
            </p>

            <h2>6. Limitations of Liability</h2>
            <p>
              To the maximum extent permitted by law, Cable-Com Services Dallas shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>

            <h2>7. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul>
              <li>Providing accurate information about site conditions and requirements</li>
              <li>Ensuring access to work areas during scheduled times</li>
              <li>Obtaining necessary building permits (unless otherwise agreed)</li>
              <li>Maintaining installed systems according to manufacturer guidelines</li>
              <li>Timely payment according to contract terms</li>
            </ul>

            <h2>8. Intellectual Property</h2>
            <p>
              All designs, drawings, specifications, and documentation created by Cable-Com Services Dallas remain our
              intellectual property unless explicitly transferred in writing. Clients receive a license to use these
              materials for the specific project only.
            </p>

            <h2>9. Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding all client information, projects, and proprietary data. This
              includes compliance with security clearance requirements for federal and military projects.
            </p>

            <h2>10. Termination</h2>
            <p>
              Either party may terminate a service contract for cause with written notice. Termination terms, including
              payment for work completed, will be governed by the specific service contract.
            </p>

            <h2>11. Force Majeure</h2>
            <p>
              We are not liable for delays or failure to perform due to circumstances beyond our reasonable control,
              including natural disasters, labor disputes, material shortages, or government actions.
            </p>

            <h2>12. Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms or our services will first be addressed through good-faith
              negotiation. If negotiation fails, disputes will be resolved through binding arbitration in Dallas County,
              Texas, under the rules of the American Arbitration Association.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the State of Texas, without regard to conflict of law
              principles.
            </p>

            <h2>14. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Updated terms will be posted on our website with a
              revised "Last Updated" date. Continued use of our services after changes constitutes acceptance of the new
              terms.
            </p>

            <h2>15. Severability</h2>
            <p>
              If any provision of these terms is found to be unenforceable, the remaining provisions will continue in
              full force and effect.
            </p>

            <h2>16. Contact Information</h2>
            <p>For questions about these Terms of Service, contact us:</p>
            <ul>
              <li>
                <strong>Email:</strong> legal@cable-comservices.com
              </li>
              <li>
                <strong>Phone:</strong> (469) 653-1275
              </li>
              <li>
                <strong>Address:</strong> 2101 Joel East Road, Dallas, TX 75201
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
