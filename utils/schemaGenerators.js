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
