import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'

const source_sans = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Watsons Opticians',
  description: 'Watsons Opticians',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${source_sans.className} text-grey1 ml-7 mr-7 md:ml-20 md:mr-20`}>{children}</body>
    </html>
  )
}
