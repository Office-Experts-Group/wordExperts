// redirects/pageRedirects.js
// Word Experts pages that now live on officeexperts.com.au.
// Every rule is permanent (308) and points straight at the final URL, never at another redirect.

const { permanent } = require("./helpers.js");

// Pages that kept their slug: /<slug> -> /services/microsoft-word/<slug>
const WORD_SLUGS = [
  "accessibility",
  "brand-template",
  "companies-and-organisations",
  "corporate-global-template-solution",
  "corporate-identity",
  "custom-toolbars-and-ribbons",
  "document-rebranding-services",
  "fill-in-forms",
  "google-docs-to-word-migration",
  "government-departments",
  "mail-merge",
  "popup-forms",
  "quick-parts",
  "remove-repetition-and-increase-productivity",
  "word-document-template-creation",
  "word-template-conversions",
];

const sameSlugRedirects = WORD_SLUGS.map((slug) =>
  permanent(`/${slug}`, `/services/microsoft-word/${slug}`),
);

module.exports = [
  // ── Home: the Word hub on Office Experts ──
  permanent("/", "/services/microsoft-word"),

  // ── Word pages that moved under /services/microsoft-word ──
  ...sameSlugRedirects,
  permanent(
    "/copilot-and-ai-templates",
    "/services/microsoft-word/ai-ready-word-templates",
  ),
  // New video portal: client-only link, unlinked and noindexed on the new site
  permanent("/video-portal", "/services/microsoft-word/video-portal"),

  // ── Pages folded into other Office Experts pages ──
  permanent(
    "/word-to-pdf-conversion",
    "/services/microsoft-word/word-template-conversions",
  ),

  permanent(
    "/microsoft-word-api-integrations",
    "/services/microsoft-365-api-integration",
  ),
  permanent("/upgrades-and-migration", "/services/upgrades-and-migration"),
  permanent("/training", "/microsoft-support-and-training-australia"),

  // ── Company pages: one version on officeexperts.com.au ──
  permanent("/about-us", "/about-us"),
  permanent("/meet-the-team", "/meet-the-team"),
  permanent("/client-testimonials", "/client-testimonials"),
  permanent("/contact-us", "/contact-us"),
  permanent("/contact-us/request-a-quote", "/contact-us/request-a-quote"),
  permanent("/locations", "/locations"),
  permanent("/services", "/services"),
];
