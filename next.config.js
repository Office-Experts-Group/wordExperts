/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
  },
};

// Wrap the nextConfig with next-optimized-classnames
module.exports = require("next-optimized-classnames")(nextConfig);
