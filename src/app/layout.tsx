"use client";

import localFont from 'next/font/local'
import './globals.css'
import { WalletKitProvider } from "@mysten/wallet-kit";
import Loader from '#/ui/loader'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`text-custom-black bg-custom-f3 overflow-x-hidden ${SuisseIntl.className}`}>
        <Loader />
        <WalletKitProvider>
          <main className="relative overflow-x-hidden tracking-tighter">
            {children}
          </main>
        </WalletKitProvider>
      </body>
    </html>
  )
}