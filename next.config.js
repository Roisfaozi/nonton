const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
module.exports = withPWA(
  {
    pwa: {
      dest: 'public',
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development',
      runtimeCaching,
      dynamicStartUrl: false,
    },
    reactStrictMode: true,
  },
  {
    webpack: (config, { isServer }) => {
      if (isServer) {
        require('./scripts/generate-sitemap')
      }

      return config
    },
    images: {
      domains: ['image.tmdb.orgs'],
      formats: ['image/avif', 'image/webp'],
    },
  }
)
