// redirects/index.js
// Collects every redirect for next.config.js.
// Next.js uses the first rule that matches.
// All files in this folder are CommonJS (module.exports / require) because next.config.js loads them directly.
//
// There is deliberately NO catch-all rule. A URL with no rule here must return 404 (or 410),
// never a redirect to the Word hub or the home page: Google treats mass redirects of unrelated
// URLs to one page as soft 404s. robots.txt and the sitemaps are not redirected, so they keep
// working on the old domain while Google recrawls it.
const pageRedirects = require("./pageRedirects.js");
const locationRedirects = require("./locationRedirects.js");
const blogRedirects = require("./blogRedirects.js");
const legacyRedirects = require("./legacyRedirects.js");

module.exports = [
  ...pageRedirects,
  ...locationRedirects,
  ...blogRedirects,
  ...legacyRedirects,
];
