/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost','img.freepik.com','upload.wikimedia.org'],
  },
  // basePath: '/',
}

module.exports = nextConfig
