import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/layout/Sidebar'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'AI Travel Agent',
  description: 'AI-powered tourism marketing platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased bg-background text-foreground h-screen flex overflow-hidden`}>
        <Sidebar />
        <main className="flex-1 h-full overflow-y-auto w-full p-8">
          {children}
        </main>
      </body>
    </html>
  )
}
