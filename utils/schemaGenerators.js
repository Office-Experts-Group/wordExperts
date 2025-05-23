// word experts
export const generateProfessionalServiceSchema = () => ({
  "@type": "ProfessionalService",
  "@id": `https://www.wordexperts.com.au/#business`,
  name: "Microsoft Word Consulting Services",
  url: "https://www.wordexperts.com.au/",
  description: "Professional Microsoft Word consulting and support services",
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Consulting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Remote Consulting",
          description:
            "Australia-wide remote Microsoft Power Platform consulting services",
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "On-site Consulting",
          description:
            "In-house Microsoft Power Platform consulting services available in major metropolitan areas",
        }
      }
    ]
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
  location: [
    // New South Wales
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Sydney",
        postalCode: "2000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Sydney Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Grafton Region",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Newcastle Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Wollongong Metropolitan Area",
      },
    },
    // Victoria
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Melbourne",
        postalCode: "3000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Melbourne Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Richmond Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Geelong Metropolitan Area",
      },
    },
    // Queensland
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Brisbane",
        postalCode: "4000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Brisbane Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Gold Coast Metropolitan Area",
      },
    },
    // Western Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "WA",
        addressLocality: "Perth",
        postalCode: "6000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Perth Metropolitan Area",
      },
    },
    // South Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "SA",
        addressLocality: "Adelaide",
        postalCode: "5000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Adelaide Metropolitan Area",
      },
    },
    // Northern Territory
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NT",
        addressLocality: "Darwin",
        postalCode: "0800",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Darwin Metropolitan Area",
      },
    },
    // ACT
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "ACT",
        addressLocality: "Canberra",
        postalCode: "2600",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Canberra Metropolitan Area",
      },
    },
  ],
  parentOrganization: {
    "@type": "Organization",
    "@id": `https://www.powerplatformexperts.com.au#organization`,
  },
  
  telephone: "1300 102 810",
  email: "consult@officeexperts.com.au",
  telephone: "1300 122 038",
  email: "consult@wordexperts.com.au",
});

export const generateOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://www.wordexperts.com.au#organization",
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
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00"
      }    },
  ],
  // Remote service availability
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Word Document Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Excel Dashboard Creation",
          description:
            "Creation of interactive and appealing Excel dashboards to provide real-time insights in your business.",
        },
        businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Financial Modeling and Forecasting",
          description:
            "Creation of tools for financial models and forecasting using Excel for planning and strategy.",
        },
        businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Power Pivot & Power Query",
          description:
            "Development of advanced data modelling, analytics, transformations and reporting using Power Pivot & Power Query.",
        },
        businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Template Creation",
          description: "Professional Word document template development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Template Conversion",
          description: "Legacy template modernization and conversion services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Accessibility Solutions",
          description: "WCAG compliance and accessibility implementation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom UI Development",
          description: "Customised toolbar and ribbon interface development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Training Services",
          description: "Specialised Microsoft Word training programs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Form Development",
          description: "Interactive form creation and automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Government Solutions",
          description:
            "Specialised documentation solutions for government departments",
        },
      },
    ],
  },
  location: [
    // New South Wales
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Sydney",
        postalCode: "2000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Sydney Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Grafton Region",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Newcastle Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Wollongong Metropolitan Area",
      },
    },
    // Victoria
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Melbourne",
        postalCode: "3000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Melbourne Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Richmond Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Geelong Metropolitan Area",
      },
    },
    // Queensland
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Brisbane",
        postalCode: "4000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Brisbane Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Gold Coast Metropolitan Area",
      },
    },
    // Western Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "WA",
        addressLocality: "Perth",
        postalCode: "6000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Perth Metropolitan Area",
      },
    },
    // South Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "SA",
        addressLocality: "Adelaide",
        postalCode: "5000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Adelaide Metropolitan Area",
      },
    },
    // Northern Territory
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NT",
        addressLocality: "Darwin",
        postalCode: "0800",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Darwin Metropolitan Area",
      },
    },
    // ACT
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "ACT",
        addressLocality: "Canberra",
        postalCode: "2600",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Canberra Metropolitan Area",
      },
    },
  ],
  logo: {
    "@type": "ImageObject",
    inLanguage: "en-AU",
    "@id": "/logo.png",
    url: "/logo.png",
    contentUrl: "/logo.png",
    width: 1200,
    height: 630,
    caption: "Word Experts Group",
  },
  image: {
    "@id": "/logo.png",
  },
  sameAs: [
    "https://www.facebook.com/MSOfficeExperts",
    "https://x.com/OfficeExpertsG1",
    "https://www.instagram.com/officeexpertsgroup",
    "https://www.linkedin.com/company/office-experts-group",
    "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
  ],
});
