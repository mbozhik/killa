import type {Metadata} from 'next'
import {SuisseIntl} from '@/app/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Killa Club',
    default: 'Killa Club',
  },
  description: "Sui's elite circle",
  metadataBase: new URL('https://killaclub.com'),
  keywords: 'killa nft, killa club nft, killa club, killa nft, solana, solana nft',
}

import Loader from '#/ui/loader'
import Container from '@/components/Wrapper'
import YandexMetrika from '#/Analytics'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`text-custom-black bg-custom-f3 overflow-x-hidden ${SuisseIntl.className}`}>
        {process.env.NODE_ENV === 'production' && <Loader />}
        <Container>{children}</Container>

        {process.env.NODE_ENV === 'production' && <YandexMetrika />}
      </body>
    </html>
  )
}
