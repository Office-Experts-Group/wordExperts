export const metadata = {
  title: "Word template conversions | Word Experts",
  description:
    "Professional Word template conversion services. Convert Adobe, InDesign and other formats to fully functional Microsoft Word templates with preserved branding.",
  keywords: [
    // Core services
    "word template conversion",
  ],
  openGraph: {
    title: "Word template conversions | Word Experts",
    description:
      "Professional Word template conversion services. Convert Adobe, InDesign and other formats to fully functional Microsoft Word templates.",
    url: "https://www.wordexperts.com.au/word-template-conversions",
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
    canonical: "/word-template-conversions",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/services/microsoft-word/word-template-conversions",
      },
      {
        url: "https://www.officeexperts.com.au/services/microsoft-word/word-template-conversions",
      },
    ],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
