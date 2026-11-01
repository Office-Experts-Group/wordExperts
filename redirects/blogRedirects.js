// redirects/blogRedirects.js
// Word Experts blog posts keep their slug and move to officeexperts.com.au/blog/<slug>.

const { permanent } = require("./helpers.js");

const BLOG_SLUGS = [
  // If a post is not migrated, point it at "/blog" instead of losing it to a 404.
  "convert-canva-to-word",
  "fields-and-repeating-data-in-word",
  "ultimate-guide-to-word-templates",
  "word-templates-for-legal-firms",
  "document-rebranding",
  "google-docs-vs-microsoft-word",
  "microsoft-word-for-mac",
  "pdf-to-word-conversion",
  "word-desktop-vs-web",
];

// Old slugs of the templates guide (near-zero impressions in Search Console)
const OLD_TEMPLATE_GUIDE_SLUGS = [
  "ultimate-gov-templates",
  "ultimate-gov-word-templates",
  "ultimate-year-guide-to-word-templates",
];

module.exports = [
  permanent("/blog", "/blog"),
  ...BLOG_SLUGS.map((slug) => permanent(`/blog/${slug}`, `/blog/${slug}`)),
  ...OLD_TEMPLATE_GUIDE_SLUGS.map((slug) =>
    permanent(`/blog/${slug}`, "/blog/ultimate-guide-to-word-templates"),
  ),
];
