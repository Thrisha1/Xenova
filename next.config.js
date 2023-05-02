/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost','img.freepik.com'],
  },
  // basePath: '/',
}

module.exports = nextConfig
