import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mahmoud Ammar | Backend Software Engineer',
  description: 'Backend Engineer crafting scalable systems using Domain-Driven Design, Clean Architecture, and modern technologies',
  keywords: ['portfolio', 'backend engineer', 'software engineer', 'Node.js', 'NestJS', 'TypeScript', 'PostgreSQL'],
  authors: [{ name: 'Mahmoud Ammar' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: 'Mahmoud Ammar | Backend Software Engineer',
    description: 'Backend Engineer crafting scalable systems using Domain-Driven Design, Clean Architecture, and modern technologies',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0..1" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-background-light dark:bg-background-dark text-charcoal dark:text-slate-200 transition-colors duration-200 font-display overflow-x-hidden`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
