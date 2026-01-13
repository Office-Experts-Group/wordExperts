const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const REDIRECTS = [
  {
    source: "/https/officeexperts.com.au",
    destination: "https://www.officeexperts.com.au",
    permanent: true,
  },
  {
    source: "/home/",
    destination: "https://www.wordexperts.com.au",
    permanent: true,
  },
  {
    source: "/convert-canva-to-word",
    destination: "https://www.wordexperts.com.au/blog/convert-canva-to-word",
    permanent: true,
  },
  {
    source: "/vba-and-macro-development/",
    destination: "https://www.excelexperts.com.au/vba-and-macro-development",
    permanent: true,
  },
  {
    source: "/privacy-policy/",
    destination: "https://www.officeexperts.com.au/privacy-policy",
    permanent: true,
  },
  {
    source: "/reference-request-form/",
    destination: "https://www.wordexperts.com.au/contact-us/request-a-quote",
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
        // Match all routes including static files and images
        source: "/:all*(svg|jpg|png|webp|css|js|woff|woff2|ttf|eot)",
        locale: false,
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow, noimageindex",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        // Regular routes
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow, noimageindex",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vimeo.com *.googletagmanager.com *.google-analytics.com analytics.ahrefs.com https://www.googleadservices.com https://www.google.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net *.bing.com *.bat.bing.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com data:; img-src 'self' data: https: *.google-analytics.com *.googletagmanager.com *.google.com *.doubleclick.net *.bing.com; connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com analytics.ahrefs.com *.bing.com *.bat.bing.com; frame-src 'self' *.vimeo.com *.google.com; media-src 'self' blob:",
          },
        ],
      },
      {
        // Specific headers for video files
        source: "/videos/:path*.mp4",
        headers: [
          {
            key: "Content-Type",
            value: "video/mp4",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Accept-Ranges",
            value: "bytes",
          },
        ],
      },
      {
        // Specific headers for video thumbnails
        source: "/videos/thumbnails/:path*.webp",
        headers: [
          {
            key: "Content-Type",
            value: "image/webp",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimizer.push(new CssMinimizerPlugin());
    }
    return config;
  },
};

module.exports = nextConfig;
