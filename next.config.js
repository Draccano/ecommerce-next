const { withFrameworkConfig } = require('./framework/common/config')

/** @type {import('next').NextConfig} */
const nextConfig = withFrameworkConfig({
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
  reactStrictMode: true,
});

console.log("next.config.js", JSON.stringify(nextConfig, null, 2))
module.exports = nextConfig
