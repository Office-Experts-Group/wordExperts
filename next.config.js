const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const REDIRECTS = [
  {
    source: "/https/officeexperts.com.au",
    destination: "https://officeexperts.com.au",
    permanent: true,
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  optimizeFonts: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,

  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
  },

  async redirects() {
    return REDIRECTS;
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },

  webpack: (config, { dev, isServer }) => {
    // Add CSS minification in production builds
    if (!dev && !isServer) {
      config.optimization.minimizer.push(new CssMinimizerPlugin());
    }
    return config;
  },
};

module.exports = nextConfig;
