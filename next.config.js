/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This will completely disable ESLint during builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
