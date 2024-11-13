export const metadata = {
  title: "Word Template Designers | Word Document Designer | Word Experts",
  description:
    "Professional Word template solutions for companies and organizations. Custom document templates that protect corporate identity and improve efficiency.",
  keywords: [
    // Business focus
    "corporate word templates",
    "business document solutions",
    "enterprise word services",
    "organizational templates",
    "company document design",

    // Service types
    "template design services",
    "document standardization",
    "corporate branding templates",
    "document automation",
    "template management",

    // Business benefits
    "brand consistency",
    "document efficiency",
    "corporate governance",
    "productivity improvement",
    "quality assurance",

    // Technical aspects
    "template development",
    "document controls",
    "format protection",
    "style management",
    "template automation",

    // Industry specific
    "enterprise solutions",
    "corporate documentation",
    "business templates",
    "professional documents",
    "commercial word services",
  ],
  openGraph: {
    title: "Word Template Designers | Word Document Designer | Word Experts",
    description:
      "Professional Word template solutions for companies and organizations. Custom document templates that protect corporate identity.",
    url: "https://www.wordexperts.com.au/companies-and-organisations/",
    siteName: "Word Experts",
    images: [
      {
        url: "https://www.wordexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Word Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Word Template Solutions for Companies",
    description:
      "Custom document templates and solutions for businesses and organizations.",
    images: [
      "https://www.wordexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  canonical: "https://www.wordexperts.com.au/companies-and-organisations/",
};

export default function Layout({ children }) {
  return <>{children}</>;
}
