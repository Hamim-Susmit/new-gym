import type { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Gym Platform',
  description: 'Cloud-native gym management platform',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  )
}
