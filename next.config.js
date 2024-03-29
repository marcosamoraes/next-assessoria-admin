/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  images: {
    domains: ['127.0.0.1', 'localhost', 'nextassessoria.com.br', 'api.nextassessoria.com.br']
  },
}

module.exports = nextConfig
