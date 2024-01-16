import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oval Solutions Company',
  description: 'Oval Solutions Company Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/oval-logo.png" />
      </head>
      <body className={`${inter.className} bg-white overflow-y-scroll overflow-x-hidden`}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
