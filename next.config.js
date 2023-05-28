/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'img.freepik.com', 'upload.wikimedia.org', '.freepik.com'],
  },
  // basePath: '/',
  distDir: 'dist'
}

module.exports = nextConfig
