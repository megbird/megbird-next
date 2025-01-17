import '@/styles/globals.css'
import localFont from 'next/font/local'

// Using SF Mono as the primary font
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
      <body className={`${sfMono.variable} font-mono bg-[#fafafa]`}>{children}</body>
    </html>
  )
}

