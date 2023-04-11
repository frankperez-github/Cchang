/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'], //make it 'your-domain.com'
  },
}

module.exports = nextConfig
