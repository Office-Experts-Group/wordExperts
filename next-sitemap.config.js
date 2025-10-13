// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: "https://www.wordexperts.com.au",
//   generateRobotsTxt: true,
//   // Optional: other configuration
//   changefreq: "weekly",
//   priority: 0.7,
//   exclude: ["/api/*"],
//   generateIndexSitemap: false,
//   trailingSlash: false,
// };

// next-sitemap.config.js
// Sitemap configuration for Word Experts with video sitemap support
// Includes video metadata for SEO purposes

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.wordexperts.com.au",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  generateIndexSitemap: false,
  trailingSlash: false,

  // Custom transform function to add video metadata
  transform: async (config, path) => {
    // Get video data for this specific page path
    const videos = await getVideoDataForPath(path);

    // If no videos for this page, return normal sitemap entry
    if (!videos || videos.length === 0) {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    // Create video sitemap entries with proper formatting
    const videoTags = videos
      .map(
        (video) => `
      <video:video>
        <video:thumbnail_loc>${video.thumbnailUrl}</video:thumbnail_loc>
        <video:title>${escapeXml(video.title)}</video:title>
        <video:description>${escapeXml(video.description)}</video:description>
        <video:player_loc allow_embed="yes">${
          video.playerUrl
        }</video:player_loc>
        <video:duration>${video.duration}</video:duration>
        <video:upload_date>${video.uploadDate}</video:upload_date>
        <video:family_friendly>yes</video:family_friendly>
      </video:video>
    `
      )
      .join("");

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      additionalTags: videoTags,
    };
  },

  // Additional sitemap options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/api/"],
      },
    ],
    additionalSitemaps: ["https://www.wordexperts.com.au/sitemap.xml"],
  },
};

// Helper function to escape XML special characters
function escapeXml(unsafe) {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// This function retrieves video data for a specific page path
async function getVideoDataForPath(path) {
  // Import video data dynamically to avoid build-time issues
  try {
    const videoMapping = require("./videoDataMapping.js");
    return videoMapping[path] || [];
  } catch (error) {
    console.warn(`Could not load video data for path: ${path}`);
    return [];
  }
}
