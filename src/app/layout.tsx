import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Script from 'next/script'
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
    default: 'Cable-Com Services Dallas | Low Voltage Network Cabling',
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
    title: 'Cable-Com Services Dallas | Low Voltage Network Cabling',
    description: 'BICSI-certified network cabling for Dallas-Fort Worth. Pentagon, Staples Center, FAA trusted us. 1,000+ projects completed.',
    siteName: 'Cable-Com Services Dallas',
    images: [
      {
        url: '/images/og/low-voltage-og.jpg',
        width: 1024,
        height: 1024,
        alt: 'Cable-Com Services neon swoosh logo over the Dallas skyline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cable-Com Services Dallas | Low Voltage Network Cabling',
    description: 'BICSI-certified network cabling for Dallas-Fort Worth businesses.',
    images: ['/images/og/low-voltage-og.jpg'],
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
  // Add Google Search Console verification code after setting up Google Search Console
  // verification: {
  //   google: 'your-google-verification-code-here',
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
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
              image: 'https://cable-comservices.com/images/og/low-voltage-og.jpg',
              '@id': 'https://cable-comservices.com',
              url: 'https://cable-comservices.com',
              telephone: '+14696689679',
              priceRange: '$$-$$$',
              // Address hidden until updated - uncomment and update when ready:
              // address: {
              //   '@type': 'PostalAddress',
              //   streetAddress: 'ADDRESS_LINE_1',
              //   addressLocality: 'CITY',
              //   addressRegion: 'STATE',
              //   postalCode: 'ZIP',
              //   addressCountry: 'US',
              // },
              // Geo coordinates hidden until address updated - uncomment when ready:
              // geo: {
              //   '@type': 'GeoCoordinates',
              //   latitude: LATITUDE,
              //   longitude: LONGITUDE,
              // },
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
                'https://www.facebook.com/profile.php?id=61575613031791',
                'https://www.instagram.com/cablecomservices',
                'https://www.linkedin.com/company/cable-com-services',
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
