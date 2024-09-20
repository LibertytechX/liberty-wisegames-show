/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'media.api-sports.io',
      'media-1.api-sports.io',
      'media-2.api-sports.io',
      'media-3.api-sports.io',
      'res.cloudinary.com',
      'cdn.shopify.com',
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);

module.exports = {
  distDir: 'build',
}