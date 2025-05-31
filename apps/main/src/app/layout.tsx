import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import './globals.css'
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'SUNGWOOK.DEV',
  description: 'Portfolio of Sungwook Kim'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = cookies()
  const isDark = cookieStore.get('mode')?.value === 'true' ? true : false
  return (
    <html
      lang="ko"
      className={`${isDark ? 'dark' : ''} bg-white dark:bg-black`}
    >
      <body className="text-black dark:text-white">
        <Header isDark={isDark} />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
