const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
module.exports = withPWA({
  pwa: {
    dest: 'public',
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
  reactStrictMode: true,
})
