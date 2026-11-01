// redirects/index.js
// Collects every redirect for next.config.js.
// Next.js uses the first rule that matches, so keep specific rules above the catch-all.
// All files in this folder are CommonJS (module.exports / require) because next.config.js loads them directly.
const { permanent } = require("./helpers.js");
const pageRedirects = require("./pageRedirects.js");
const locationRedirects = require("./locationRedirects.js");
const blogRedirects = require("./blogRedirects.js");

// Anything not mapped above goes to the Word hub, never the home page (migration plan, section 10.2).
// The negative lookahead leaves Next.js internals and the files search engines fetch directly alone,
// so robots.txt and the sitemaps keep working on the old domain while Google recrawls it.
const catchAll = permanent(
  "/:path((?!_next/|robots\\.txt|sitemap\\.xml|video-sitemap\\.xml).*)",
  "/services/microsoft-word",
);

module.exports = [
  ...pageRedirects,
  ...locationRedirects,
  ...blogRedirects,
  catchAll,
];
