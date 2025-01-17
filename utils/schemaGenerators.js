// utils/schemaGenerators.js
export const generateProfessionalServiceSchema = () => ({
  "@type": "ProfessionalService",
  "@id": `https://www.wordexperts.com.au/#business`,
  name: "Microsoft Word Consulting Services",
  url: "https://www.wordexperts.com.au/",
  description: "Professional Microsoft Word consulting and support services",
  priceRange: "$$",
  serviceType: "Microsoft Word Consulting",
  availableService: {
    "@type": "Service",
    name: "Remote Consulting",
    description: "Australia-wide remote Microsoft Word consulting services",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Australia",
    },
    {
      "@type": "AdministrativeArea",
      name: "New South Wales",
    },
    {
      "@type": "AdministrativeArea",
      name: "Victoria",
    },
    {
      "@type": "AdministrativeArea",
      name: "Queensland",
    },
    {
      "@type": "AdministrativeArea",
      name: "Western Australia",
    },
    {
      "@type": "AdministrativeArea",
      name: "South Australia",
    },
    {
      "@type": "AdministrativeArea",
      name: "Tasmania",
    },
    {
      "@type": "AdministrativeArea",
      name: "Australian Capital Territory",
    },
    {
      "@type": "AdministrativeArea",
      name: "Northern Territory",
    },
  ],
  provider: {
    "@type": "Organization",
    "@id": `https://www.wordexperts.com.au/#organization`,
  },
  telephone: "1300 122 038",
  email: "consult@wordexperts.com.au",
});

export const generateOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://www.wordexperts.com.au/#organization",
  name: "Word Experts Group",
  url: "https://www.wordexperts.com.au/",
  telephone: "1300 122 038",
  email: "consult@wordexperts.com.au",
  // Enhanced contact point information
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "1300 122 038",
      email: "consult@wordexperts.com.au",
      availableLanguage: ["en", "en-AU"],
      contactOption: "TollFree",
      hoursAvailable: "Mo,Tu,We,Th,Fr 09:00-17:00",
    },
  ],
  // Remote service availability
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Remote Microsoft Word Consulting",
          description:
            "Australia-wide remote Microsoft Word consulting and support",
        },
      },
    ],
  },
  // Comprehensive area coverage
  areaServed: [
    {
      "@type": "Country",
      name: "Australia",
    },
    {
      "@type": "AdministrativeArea",
      name: "New South Wales",
    },
    {
      "@type": "AdministrativeArea",
      name: "Victoria",
    },
    {
      "@type": "AdministrativeArea",
      name: "Queensland",
    },
    {
      "@type": "AdministrativeArea",
      name: "Western Australia",
    },
    {
      "@type": "AdministrativeArea",
      name: "South Australia",
    },
    {
      "@type": "AdministrativeArea",
      name: "Tasmania",
    },
    {
      "@type": "AdministrativeArea",
      name: "Australian Capital Territory",
    },
    {
      "@type": "AdministrativeArea",
      name: "Northern Territory",
    },
  ],
  // Rest of your existing organization properties
  logo: {
    "@type": "ImageObject",
    inLanguage: "en-AU",
    "@id": "https://www.wordexperts.com.au//logo.webp",
    url: "/logo.webp",
    contentUrl: "/logo.webp",
    width: 1200,
    height: 630,
    caption: "Word Experts Group",
  },
  image: {
    "@id": "https://www.wordexperts.com.au/logo.webp",
  },
  sameAs: [
    "https://www.facebook.com/MSOfficeExperts",
    "https://x.com/OfficeExpertsG1",
    "https://www.instagram.com/officeexpertsgroup",
    "https://www.linkedin.com/company/office-experts-group",
    "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
  ],
});
