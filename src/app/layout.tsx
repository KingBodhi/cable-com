import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cable-comservices.com'),
  title: {
    default: 'Cable-Com Services Dallas | Pentagon-Grade Network Cabling',
    template: '%s | Cable-Com Services Dallas',
  },
  description: 'BICSI-certified network cabling for Dallas-Fort Worth businesses. Trusted by Pentagon, Staples Center, FAA. 1,000+ projects, 24/7 support. Enterprise structured cabling, fiber optic, data center.',
  keywords: [
    'network cabling dallas',
    'structured cabling dallas',
    'fiber optic installation dallas',
    'data center cabling dallas',
    'cat6 installation dallas',
    'network infrastructure dallas',
    'BICSI certified dallas',
    'cable installation fort worth',
  ],
  authors: [{ name: 'Cable-Com Services Dallas' }],
  creator: 'Cable-Com Services Dallas',
  publisher: 'Cable-Com Services Dallas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cable-comservices.com',
    title: 'Cable-Com Services Dallas | Pentagon-Grade Network Cabling',
    description: 'BICSI-certified network cabling for Dallas-Fort Worth. Pentagon, Staples Center, FAA trusted us. 1,000+ projects completed.',
    siteName: 'Cable-Com Services Dallas',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cable-Com Services - Pentagon-Grade Network Cabling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cable-Com Services Dallas | Pentagon-Grade Network Cabling',
    description: 'BICSI-certified network cabling for Dallas-Fort Worth businesses.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Cable-Com Services Dallas',
              image: 'https://cable-comservices.com/images/logo.png',
              '@id': 'https://cable-comservices.com',
              url: 'https://cable-comservices.com',
              telephone: '+14696531275',
              priceRange: '$$-$$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Network Drive',
                addressLocality: 'Dallas',
                addressRegion: 'TX',
                postalCode: '75201',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 32.7767,
                longitude: -96.797,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '07:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '08:00',
                  closes: '14:00',
                },
              ],
              sameAs: [
                'https://www.facebook.com/cablecomservicesdallas',
                'https://www.linkedin.com/company/cable-com-services-dallas',
                'https://twitter.com/cablecomdallas',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
