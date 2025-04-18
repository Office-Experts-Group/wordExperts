export const metadata = {
  title: "Word Corporate Global Template Solution | Word Experts",
  description:
    "Professional corporate identity protection through Microsoft Word templates. Ensure brand consistency and document compliance across your organisation.",
  keywords: [
    // Core services
    "corporate document control",
  ],
  openGraph: {
    title: "Word Corporate Global Template Solution | Word Experts",
    description:
      "Professional corporate identity protection through Microsoft Word templates. Ensure brand consistency and document compliance.",

    url: "https://www.wordexperts.com.au/corporate-identity",
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
    canonical: "/corporate-identity",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/services/microsoft-word/corporate-identity",
      },
      {
        url: "https://www.officeexperts.com.au/services/microsoft-word/corporate-identity",
      },
    ],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
