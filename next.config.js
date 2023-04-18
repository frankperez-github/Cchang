/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com'],
  },
  env: {  
    serverPath: process.env.serverPath
  }
}

module.exports = nextConfig
