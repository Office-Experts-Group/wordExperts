// redirects/legacyRedirects.js
// Old one-off rules that used to live in next.config.js.
// Each one now points straight at its final officeexperts.com.au URL (no hop through wordexperts.com.au).

const { permanent } = require("./helpers.js");

module.exports = [
  // Junk URL: send to the Office Experts home page
  permanent("/https/officeexperts.com.au", ""),

  // Was -> wordexperts.com.au home, which now redirects to the Word hub
  permanent("/home", "/services/microsoft-word"),

  // Was -> wordexperts.com.au/blog/convert-canva-to-word
  permanent("/convert-canva-to-word", "/blog/convert-canva-to-word"),

  // Was -> excelexperts.com.au/vba-macro-development, which moves to this page in the Excel wave
  permanent("/vba-and-macro-development", "/services/vba-macro-development"),

  permanent("/privacy-policy", "/privacy-policy"),

  // Was -> wordexperts.com.au/contact-us/request-a-quote
  permanent("/reference-request-form", "/contact-us/request-a-quote"),
];
