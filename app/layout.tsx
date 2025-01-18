import '@/styles/globals.css'
import localFont from 'next/font/local'
import type { Metadata } from 'next'

// Metadata configuration
export const metadata: Metadata = {
  title: 'Meg Bird',
  description: 'megbird.me',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'mask-icon',
      url: '/favicon.svg',
    },
  },
}

// Using Neue Haas as the primary font
const neueHaas = localFont({
  src: [
    {
      path: '../fonts/NHaasGroteskTXPro-55Rg.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/NHaasGroteskTXPro-65Md.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/NHaasGroteskTXPro-75Bd.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-neue-haas'
})

// Using SpaceMono for dates
const spacemono = localFont({
  src: [
    {
      path: '../fonts/SpaceMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-space-mono'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${neueHaas.variable} ${spacemono.variable} font-sans bg-[#fafafa]`}>{children}</body>
    </html>
  )
}

