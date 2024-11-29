import { Metadata } from 'next';

const website = {
  title: 'Killa Club',
  description: "Sui's elite circle",
  keywords: 'killa nft, killa club nft, killa club, killa nft, solana, solana nft',
  url: 'https://killaclub.com',
  generator: 'nextjs, react, landing page',
};

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
};