import type { Metadata, Viewport } from 'next'
import React from 'react'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000'
}

export const metadata: Metadata = {
  title: 'Mon Application PWA',
  description: 'Une application Progressive Web App avec Next.js',
  manifest: '/manifest.json',
  icons: {
    apple: '/icons/icon-192x192.png',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>{children}</body>
    </html>
  )
} 