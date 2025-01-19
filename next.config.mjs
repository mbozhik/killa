/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'fakeimg.pl',
      },
      {
        hostname: 'ipfs.io',
      },
    ],
  },
}

export default nextConfig
