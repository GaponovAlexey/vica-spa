/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'fr', 'ru'],
    defaultLocale: 'en-US',
  },
}

module.exports = nextConfig
