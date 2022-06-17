const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(
  withPWA({
    purge: [
      './pages/**/*.tsx',
      './pages/**/*.js',
      './pages/**/*.ts',
      './components/**/*.tsx',
      './components/**/*.js',
      './components/**/*.ts',
    ],

    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    },
    images: {
      domains: ['image.tmdb.org'],
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [256, 640, 750, 828, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256],
    },
    pwa: {
      dest: 'public',
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development',
      runtimeCaching,
      dynamicStartUrl: false,
    },
    reactStrictMode: true,
  })
)
