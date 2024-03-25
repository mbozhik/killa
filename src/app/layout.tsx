import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header/Header'

const inter = Inter({subsets: ['latin']})

const website = {
  title: 'Killa Club',
  description: 'Solana&#39;s most formidable minds',
  keywords: 'killa nft, killa club nft, killa club, killa nft, solana, solana nft',

  url: 'https://killaclub.com',
  generator: 'nextjs, react, landing page',
}

export const metadata: Metadata = {
  title: website.title,
  description: website.description,
  keywords: website.keywords,

  metadataBase: new URL(website.url),
  generator: website.generator,

  openGraph: {
    type: 'website',
    url: website.url,
    title: website.title,
    description: website.description,
    siteName: website.title,
    images: `${website.url}/og.png`,
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`text-custom-black bg-custom-f3 overflow-x-hidden ${inter.className}`}>
        <Header />
        <main className="relative tracking-tighter">{children}</main>
      </body>
    </html>
  )
}
