import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import "./globals.css"
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from './components/Navbar'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'GoConnect - AI Automation Reimagined',
  description: 'Supercharge your business with next-gen AI chatbots and automation. Connect, automate, and grow with GoConnect.',
  keywords: 'AI automation, chatbots, business automation, GoConnect',
  authors: [{ name: 'GoConnect' }],
  creator: 'GoConnect',
  publisher: 'GoConnect',
  robots: 'index, follow',
  openGraph: {
    title: 'GoConnect - AI Automation Reimagined',
    description: 'Supercharge your business with next-gen AI chatbots and automation.',
    url: 'https://goconnect.space',
    siteName: 'GoConnect',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'GoConnect Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoConnect - AI Automation Reimagined',
    description: 'Supercharge your business with next-gen AI chatbots and automation.',
    images: ['/logo.png'],
  },
  viewport: 'width=1366',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.botpress.cloud" />
        <link rel="dns-prefetch" href="https://cdn.botpress.cloud" />
      </head>
      <body className={`${geistSans.variable} bg-black text-white min-h-screen overflow-x-hidden`}>
        <div aria-hidden="true" className="mesh-bg" />
        {/* Google Analytics */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />

        {/* Navigation */}
        <Navbar />

        <main className="pt-0">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-900 text-gray-300 relative z-10 bg-black">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Image src="/logo.png" alt="GoConnect Logo" width={28} height={28} />
                <span className="text-lg font-bold text-white">GOCONNECT</span>
              </div>
              <p className="max-w-xs text-sm mb-4">
                Web development and AI automation for real business outcomes.
              </p>
              <div className="flex gap-4 mt-2">
                <a href="https://x.com/goconnect234" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 2.47 12 10.07 6.47 2.47H2.47l7.07 9.46L2.47 21.53h4l5.53-7.6 5.53 7.6h4l-7.07-9.6 7.07-9.46z"></path></svg>
                </a>
                <a href="https://github.com/olawanle" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.112-4.555-4.945 0-1.092.39-1.986 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.594 1.028 2.686 0 3.842-2.337 4.688-4.565 4.936.359.31.679.921.679 1.856 0 1.338-.012 2.419-.012 2.75 0 .269.18.58.688.481C19.138 20.194 22 16.44 22 12.017 22 6.484 17.523 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <span className="font-semibold text-white mb-1">Links</span>
              <Link href="/about" className="hover:text-green-300 transition">About</Link>
              <Link href="/services" className="hover:text-green-300 transition">Services</Link>

              <Link href="/#work" className="hover:text-green-300 transition">Work</Link>
              <Link href="/contact" className="hover:text-green-300 transition">Contact</Link>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <span className="font-semibold text-white mb-1">Contact</span>
              <span>
                Email: <a href="mailto:goconnect@goconnect.space" className="hover:text-green-300 transition">goconnect@goconnect.space</a>
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
