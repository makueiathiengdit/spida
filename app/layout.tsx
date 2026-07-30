import type { Metadata, Viewport } from 'next'
import { Poppins, Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const siteUrl = 'https://spidasystems.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Spida | Software Development Company in South Sudan',
    template: '%s | Spida',
  },
  description:
    'Spida is a South Sudan-based software company delivering custom software, web design, network infrastructure, and data systems for businesses, NGOs, banks, and government agencies in Juba and beyond.',
  keywords: [
    'software development company South Sudan',
    'software company Juba',
    'IT company South Sudan',
    'web design South Sudan',
    'web development Juba',
    'custom software development South Sudan',
    'network infrastructure South Sudan',
    'digital transformation South Sudan',
    'technology company Juba South Sudan',
  ],
  authors: [{ name: 'Spida' }],
  creator: 'Spida',
  publisher: 'Spida',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Spida',
    title: 'Spida | Software Development Company in South Sudan',
    description:
      'Custom software, web development, network infrastructure, and digital systems for businesses, NGOs, banks, and government across South Sudan.',
    images: [
      {
        url: '/images/hero/home.png',
        width: 1200,
        height: 630,
        alt: 'Spida - Foundational Systems for South Sudan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spida | Software Development Company in South Sudan',
    description:
      'Custom software, web development, network infrastructure, and digital systems for businesses, NGOs, banks, and government across South Sudan.',
    images: ['/images/hero/home.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#070738',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Spida',
  url: siteUrl,
  logo: `${siteUrl}/images/logo/spida-logo-full.png`,
  description:
    'Spida delivers custom software, web development, network infrastructure, and data systems for businesses, NGOs, banks, and government agencies across South Sudan.',
  areaServed: {
    '@type': 'Country',
    name: 'South Sudan',
  },
  knowsAbout: [
    'Web Design & Development',
    'Custom Software Development',
    'API & Integrations',
    'Data Analytics',
    'Web Hosting',
    'Network Infrastructure',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${poppins.variable} ${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
