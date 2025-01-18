import '@/styles/globals.css'
import localFont from 'next/font/local'

// Using Neue Haas as the primary font
const neueHaas = localFont({
  src: [
    {
      path: './fonts/NeueHaasDisplay-Roman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NeueHaasDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/NeueHaasDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-neue-haas'
})

// Using SF Mono for dates
const sfMono = localFont({
  src: [
    {
      path: './fonts/SF-Mono-Regular.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-sf-mono'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${neueHaas.variable} ${sfMono.variable} font-sans bg-[#fafafa]`}>{children}</body>
    </html>
  )
}

