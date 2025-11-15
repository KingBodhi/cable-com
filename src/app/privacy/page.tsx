import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Cable-Com Services Dallas',
  description: 'Privacy policy for Cable-Com Services Dallas. Learn how we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-200">Last Updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Introduction</h2>
            <p>
              Cable-Com Services Dallas ("we," "our," or "us") is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
              or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Request a quote or consultation</li>
              <li>Contact us via phone, email, or contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Engage our services</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name and contact information (email, phone, address)</li>
              <li>Company name and business information</li>
              <li>Project requirements and specifications</li>
              <li>Payment and billing information</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website or source</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our services</li>
              <li>Process your requests and respond to inquiries</li>
              <li>Send you quotes, proposals, and project updates</li>
              <li>Process payments and maintain billing records</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who assist with business operations (payment
                processing, email services, etc.)
              </li>
              <li>
                <strong>Business Partners:</strong> Manufacturers or suppliers when necessary to fulfill your project
                requirements
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our legal rights
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal
              information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>

            <h2>Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable cookies through your browser settings</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze site usage,
              and assist in our marketing efforts. You can control cookie settings through your browser preferences.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal
              information from children.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
              "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>
                <strong>Email:</strong> privacy@cable-comservices.com
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
