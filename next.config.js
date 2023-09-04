/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com'],
  },
  env: {  
    SERVER: process.env.SERVER
  }
}

module.exports = nextConfig
