import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Cable-Com Services Dallas',
  description: 'Privacy Policy for Cable-Com Services Dallas. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'November 17, 2024'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6">Privacy Policy</h1>
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
              <h2>1. Introduction</h2>
              <p>
                Cable-Com Services Dallas ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website cable-comservices.com or use our services.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>2.1 Information You Provide</h3>
              <p>We collect information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Submit a contact form or request a quote</li>
                <li>Sign up for our newsletter or email communications</li>
                <li>Create an account on our website</li>
                <li>Call, email, or otherwise communicate with us</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name and contact information (email, phone number, address)</li>
                <li>Company name and job title</li>
                <li>Project details and requirements</li>
                <li>Service preferences and timeline</li>
                <li>Budget information</li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p>When you visit our website, we automatically collect certain information, including:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website and search terms</li>
                <li>Geographic location (city/state level)</li>
              </ul>

              <h3>2.3 Cookies and Tracking Technologies</h3>
              <p>
                We use cookies, web beacons, and similar tracking technologies to enhance your browsing experience. You can control cookies through your browser settings.
              </p>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide quotes</li>
                <li>Deliver network cabling and infrastructure services</li>
                <li>Send project updates and service communications</li>
                <li>Improve our website and services</li>
                <li>Analyze website usage and performance</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure security</li>
              </ul>

              <h2>4. Information Sharing and Disclosure</h2>
              <p>We do not sell, rent, or trade your personal information. We may share your information with:</p>
              <ul>
                <li><strong>Service Providers:</strong> Third-party vendors who assist with website hosting, email delivery, analytics, and business operations</li>
                <li><strong>Business Partners:</strong> Trusted partners who help us deliver services (with your consent)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or legal process</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information, including:
              </p>
              <ul>
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure database storage with encryption at rest</li>
                <li>Access controls and authentication</li>
                <li>Regular security audits and updates</li>
              </ul>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>

              <h2>6. Your Privacy Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Data Portability:</strong> Request your data in a portable format</li>
                <li><strong>Object:</strong> Object to certain processing activities</li>
              </ul>
              <p>
                To exercise these rights, please contact us at <a href="mailto:contact@cable-comservices.com">contact@cable-comservices.com</a> or call <a href="tel:+14696531275">(469) 653-1275</a>.
              </p>

              <h2>7. California Privacy Rights (CCPA)</h2>
              <p>
                California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of the sale of personal information.
              </p>

              <h2>8. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>

              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies.
              </p>

              <h2>10. Google Analytics</h2>
              <p>
                We use Google Analytics to analyze website traffic. Google Analytics uses cookies to collect information about your use of our website. You can opt-out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
              </p>

              <h2>11. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>

              <h2>12. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>

              <h2>13. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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
