export const metadata = {
  title: "Microsoft Word Accessibility | Word Experts",
  description:
    "Professional accessible Word document creation and template services. WCAG compliant documents, accessibility audits, and remediation services for government and enterprise.",

  keywords: [
    // Core accessibility
    "word accessibility solutions",
  ],
  openGraph: {
    title: "Microsoft Word Accessibility | Word Experts",
    description:
      "Professional accessible Word document creation and template services. WCAG compliant documents and accessibility solutions.",
    url: "https://www.wordexperts.com.au/accessibility",
    siteName: "Word Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Word Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },
  alternates: {
    canonical: "/accessibility",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/services/microsoft-word/accessibility",
      },
      {
        url: "https://www.excelexperts.com.au/services/microsoft-word/accessibility",
      },
    ],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
