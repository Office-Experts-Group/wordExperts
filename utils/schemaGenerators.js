// utils/schemaGenerators.js
// Generates reusable Organization, LocalBusiness, and WebSite schemas for Word Experts
// Part of the Office Experts Group network — wordexperts.com.au

// Shared service area used by both Organization and ProfessionalService schemas
const SERVICE_AREAS = [
  { "@type": "Country", name: "Australia" },
  { "@type": "AdministrativeArea", name: "New South Wales" },
  { "@type": "AdministrativeArea", name: "Victoria" },
  { "@type": "AdministrativeArea", name: "Queensland" },
  { "@type": "AdministrativeArea", name: "Western Australia" },
  { "@type": "AdministrativeArea", name: "South Australia" },
  { "@type": "AdministrativeArea", name: "Tasmania" },
  { "@type": "AdministrativeArea", name: "Australian Capital Territory" },
  { "@type": "AdministrativeArea", name: "Northern Territory" },
];

// Physical/operational locations for the business
const LOCATIONS = [
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NSW",
      addressLocality: "Sydney",
      postalCode: "2000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NSW",
      addressLocality: "Grafton",
      postalCode: "2460",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NSW",
      addressLocality: "Newcastle",
      postalCode: "2300",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NSW",
      addressLocality: "Wollongong",
      postalCode: "2500",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "VIC",
      addressLocality: "Melbourne",
      postalCode: "3000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "VIC",
      addressLocality: "Richmond",
      postalCode: "3121",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "VIC",
      addressLocality: "Geelong",
      postalCode: "3220",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "QLD",
      addressLocality: "Brisbane",
      postalCode: "4000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "QLD",
      addressLocality: "Gold Coast",
      postalCode: "4217",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "WA",
      addressLocality: "Perth",
      postalCode: "6000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "SA",
      addressLocality: "Adelaide",
      postalCode: "5000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NT",
      addressLocality: "Darwin",
      postalCode: "0800",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "ACT",
      addressLocality: "Canberra",
      postalCode: "2600",
    },
  },
];

// Word-specific services — using valid schema.org Service type with serviceType string
const SERVICES = [
  // Templates & Branding
  { name: "Corporate Template Creation", serviceType: "Word Consulting" },
  {
    name: "Template Conversion & Modernisation",
    serviceType: "Word Consulting",
  },
  {
    name: "Corporate Identity & Branding Documents",
    serviceType: "Word Consulting",
  },
  { name: "Global Template Solutions", serviceType: "Word Consulting" },
  {
    name: "Newsletter & Publication Templates",
    serviceType: "Word Consulting",
  },
  // Forms & Automation
  { name: "Interactive Form Development", serviceType: "Word Consulting" },
  { name: "Fill-in Form Design", serviceType: "Word Consulting" },
  { name: "Document Automation", serviceType: "Word Consulting" },
  { name: "Mail Merge Solutions", serviceType: "Word Consulting" },
  { name: "Quick Parts & Building Blocks", serviceType: "Word Consulting" },
  // Styles & Structure
  { name: "Styles & Formatting Solutions", serviceType: "Word Consulting" },
  { name: "Table of Contents Automation", serviceType: "Word Consulting" },
  {
    name: "Long Document & Report Structuring",
    serviceType: "Word Consulting",
  },
  { name: "Master Document Solutions", serviceType: "Word Consulting" },
  // Custom UI & Macros
  {
    name: "Custom Toolbar & Ribbon Development",
    serviceType: "Word Consulting",
  },
  { name: "VBA Macro Development", serviceType: "Word Consulting" },
  { name: "Add-in Development", serviceType: "Word Consulting" },
  // Accessibility & Compliance
  { name: "Accessibility & WCAG Compliance", serviceType: "Word Consulting" },
  { name: "PDF Conversion & Formatting", serviceType: "Word Consulting" },
  { name: "Adobe to Word Conversion", serviceType: "Word Consulting" },
  // Government & Enterprise
  {
    name: "Government Documentation Solutions",
    serviceType: "Word Consulting",
  },
  { name: "Corporate & Legal Document Design", serviceType: "Word Consulting" },
  { name: "Contract & Proposal Templates", serviceType: "Word Consulting" },
  // Training & Support
  { name: "Microsoft Word Training", serviceType: "Word Consulting" },
  { name: "Word Support & Troubleshooting", serviceType: "Word Consulting" },
  { name: "Upgrades & Migration", serviceType: "Word Consulting" },
  // Delivery
  {
    name: "Remote Consulting",
    serviceType: "Australia-wide Microsoft Word services",
  },
  {
    name: "On-site Consulting",
    serviceType: "In-house Microsoft Word consultation",
  },
];

// Builds an Offer node for each service in the SERVICES array
const buildOffers = () =>
  SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.name,
      serviceType: s.serviceType,
    },
  }));

// ProfessionalService schema for wordexperts.com.au
// areaServed and location are valid on LocalBusiness (ProfessionalService extends LocalBusiness)
export const generateProfessionalServiceSchema = () => ({
  "@type": "ProfessionalService",
  "@id": "https://www.wordexperts.com.au#business",
  name: "Microsoft Word Consulting Services",
  url: "https://www.wordexperts.com.au",
  description:
    "Professional Microsoft Word consulting, document design, and template development services across Australia",
  priceRange: "$$",
  telephone: "1300 122 038",
  email: "consult@wordexperts.com.au",
  areaServed: SERVICE_AREAS,
  location: LOCATIONS,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Microsoft Word Consulting Services",
    itemListElement: buildOffers(),
  },
});

// Organization schema for wordexperts.com.au — clean, no invalid nested properties
export const generateOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://www.wordexperts.com.au#organization",
  name: "Word Experts Group",
  url: "https://www.wordexperts.com.au",
  telephone: "1300 122 038",
  email: "consult@wordexperts.com.au",
  foundingDate: "2000",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "1300 122 038",
      email: "consult@wordexperts.com.au",
      availableLanguage: "en-AU",
      contactOption: "TollFree",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    },
  ],
  logo: {
    "@type": "ImageObject",
    "@id": "https://www.wordexperts.com.au/logo.png",
    url: "https://www.wordexperts.com.au/logo.png",
    contentUrl: "https://www.wordexperts.com.au/logo.png",
    width: 1200,
    height: 630,
    caption: "Word Experts Group",
  },
  image: {
    "@id": "https://www.wordexperts.com.au/logo.png",
  },
  sameAs: [
    "https://www.facebook.com/MSOfficeExperts",
    "https://x.com/OfficeExpertsG1",
    "https://www.instagram.com/officeexpertsgroup",
    "https://www.linkedin.com/company/office-experts-group",
    "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
  ],
});

// WebSite schema for wordexperts.com.au
// Parameterised to match the officeexperts template pattern
export const generateWebSiteSchema = (
  domain = "https://www.wordexperts.com.au",
  name = "Word Experts",
  description = "Your Microsoft Word Design, Development and Consulting Experts",
) => ({
  "@type": "WebSite",
  "@id": `${domain}#website`,
  url: domain,
  name,
  description,
  publisher: {
    // References the Organization node in the same @graph — no need to repeat org data
    "@id": `${domain}#organization`,
  },
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${domain}?s={search_term_string}`,
      },
      // Must be a plain string — object format (PropertyValueSpecification) causes validation errors
      "query-input": "required name=search_term_string",
    },
  ],
  inLanguage: "en-AU",
});
