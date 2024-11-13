export const metadata = {
  title:
    "Word Accessibility Solutions | Microsoft Word Accessibility | Word Experts",
  description:
    "Professional accessible Word document creation and template services. WCAG compliant documents, accessibility audits, and remediation services for government and enterprise.",
  keywords: [
    // Core accessibility
    "word accessibility solutions",
    "accessible word documents",
    "wcag compliant templates",
    "document accessibility",
    "accessibility compliance",

    // Services
    "accessibility audits",
    "document remediation",
    "accessibility testing",
    "template compliance",
    "accessibility conversion",

    // Standards
    "wcag compliance",
    "accessibility standards",
    "document guidelines",
    "accessibility requirements",
    "compliance testing",

    // Document types
    "accessible templates",
    "compliance documents",
    "government documents",
    "enterprise templates",
    "accessible forms",

    // Technical aspects
    "screen reader compatibility",
    "alt text implementation",
    "heading structure",
    "document navigation",
    "accessibility tags",
  ],
  openGraph: {
    title:
      "Word Accessibility Solutions | Microsoft Word Accessibility | Word Experts",
    description:
      "Professional accessible Word document creation and template services. WCAG compliant documents and accessibility solutions.",
    url: "https://www.wordexperts.com.au/accessibility/",
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
    title: "Word Accessibility Solutions | Microsoft Word Accessibility",
    description:
      "Professional accessible Word document creation and template services. WCAG compliant documents and accessibility solutions.",
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
  canonical: "https://www.wordexperts.com.au/accessibility/",
};

export default function Layout({ children }) {
  return <>{children}</>;
}
