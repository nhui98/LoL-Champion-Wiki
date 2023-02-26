/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.communitydragon.org',
      },
      {
        protocol: 'https',
        hostname: 'raw.communitydragon.org',
      },
    ],
  },
};

module.exports = nextConfig;
