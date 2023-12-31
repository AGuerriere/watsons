import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'

const source_sans = Source_Sans_3({ subsets: ['latin'] })


export const metadata = {
  title: 'Watsons Opticians',
  description: 'Watsons Opticians. Family opticians based in Ballycastle and Portrush',
  keywords: ['Opticians', 'Optometrists', 'Frames', 'Contact Lenses'],
  metadataBase: new URL('https://watsonsopticians.com/'),
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/images/logo.webp',
    title: 'Watsons Opticians',
    description: 'Watsons Opticians. Family opticians based in Ballycastle and Portrush',
    url: 'https://watsonsopticians.com/',
    siteName: 'Watsons Opticians',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${source_sans.className} text-grey1 ml-7 mr-7 md:ml-20 md:mr-20 overflow-x-hidden`}>{children}</body>
    </html>
  )
}
