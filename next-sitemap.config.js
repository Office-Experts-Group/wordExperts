/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.wordexperts.com.au",
  generateRobotsTxt: true,
  // Optional: other configuration
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  generateIndexSitemap: false,
  trailingSlash: false,
};
