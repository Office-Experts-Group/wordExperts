export const metadata = {
  title: "Word Template Designers | Word Experts",
  description:
    "Professional Word template solutions for companies and organizations. Custom document templates that protect corporate identity and improve efficiency.",

  keywords: [
    // Business focus
    "corporate word templates",
    // "business document solutions",
    // "enterprise word services",
    // "Word solutions for companies",
    // "Word solutions for organisations",

    // // Service types
    // "Word template design services",
    // "Word document standardization",
    // "Word document automation",
    // "microsoft Word template management",
  ],
  openGraph: {
    title: "Word Template Designers | Word Experts",
    description:
      "Professional Word template solutions for companies and organizations. Custom document templates that protect corporate identity.",
    url: "https://www.wordexperts.com.au/companies-and-organisations/",
  },
  metadataBase: new URL("https://www.wordexperts.com.au"),
  alternates: {
    canonical: "/companies-and-organisations",
    languages: {
      "en-AU": "/companies-and-organisations",
    },
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
