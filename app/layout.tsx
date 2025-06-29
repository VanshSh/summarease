import type { Metadata } from 'next'
import { Source_Sans_3 as fontSS } from 'next/font/google'
import './globals.css'

const fontSourceSans3 = fontSS({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'SummarEase',
  description:
    'SummarEase is a tool that helps you summarize text quickly and easily.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${fontSourceSans3.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
