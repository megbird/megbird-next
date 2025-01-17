import type { Metadata } from 'next'
import './globals.css'
<link rel="icon" href="/favicon.ico" />

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  }
}

export const metadata: Metadata = {
  title: 'Meg Bird',
  description: 'megbird.me',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
