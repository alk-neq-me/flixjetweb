import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Provider from '@/components/Provider'
import Navbar from '@/components/Navbar'
// import SlideBar from '@/components/Slidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flixjet Net',
  description: 'Movie application',
  icons: {
    icon: "./favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={cn('text-slate-900 antialiased dark', inter.className)}>
      <body className="min-h-screen antialiased flex flex-row">
        <Navbar />
        {/* <SlideBar /> */}
        <Provider>
          <div className='container max-w-7xl mx-auto h-full pt-12'>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
