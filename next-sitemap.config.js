// next-sitemap.config.js
// Page sitemap only; videos are served separately by app/video-sitemap.xml/route.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.wordexperts.com.au",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  trailingSlash: false,
  autoLastmod: false, // Omit lastmod rather than publish the build time for every URL
  exclude: ["/api/*", "/test-page"],

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    // sitemap.xml is added automatically, so only list extra sitemaps here
    additionalSitemaps: ["https://www.wordexperts.com.au/video-sitemap.xml"],
  },
};
