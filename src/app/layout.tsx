import type {Metadata} from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/ui/Header/Header'

const SuisseIntl = localFont({
  src: [
    {
      path: '../assets/fonts/SuisseIntl-Light.woff2',
      weight: '300',
    },
    {
      path: '../assets/fonts/SuisseIntl-Regular.woff2',
      weight: '400',
    },
    {
      path: '../assets/fonts/SuisseIntl-Book.woff2',
      weight: '450',
    },
    {
      path: '../assets/fonts/SuisseIntl-Medium.woff2',
      weight: '500',
    },
    {
      path: '../assets/fonts/SuisseIntl-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../assets/fonts/SuisseIntl-Bold.woff2',
      weight: '700',
    },
  ],
})

const website = {
  title: 'Killa Club',
  description: "Solana's most formidable minds.",
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
      <body className={`text-custom-black bg-custom-f3 overflow-x-hidden ${SuisseIntl.className}`}>
        <Header />
        <main className="relative tracking-tighter">{children}</main>
      </body>
    </html>
  )
}
