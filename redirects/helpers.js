// redirects/helpers.js
// Shared by every redirect file in this folder.
// CommonJS (module.exports / require) because next.config.js loads these files directly.

// Every Word Experts URL now lives on the main Office Experts site.
const OFFICE_EXPERTS = "https://www.officeexperts.com.au";

// Permanent redirect (308) to a path on officeexperts.com.au.
// Sources never end in "/": Next.js strips trailing slashes before matching.
const permanent = (source, destinationPath) => ({
  source,
  destination: `${OFFICE_EXPERTS}${destinationPath}`,
  permanent: true,
});

module.exports = { permanent };
