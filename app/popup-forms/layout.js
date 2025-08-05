export const metadata = {
  title: "Word Popup Form | Word Experts",
  description:
    "Professional Microsoft Word popup form development. Custom data entry forms with validation and automation. Improve efficiency and data accuracy.",
  keywords: [
    // Core features
    "word popup forms",
  ],
  openGraph: {
    title: "Word Popup Form | Word Experts",
    description:
      "Professional Microsoft Word popup form development. Custom data entry forms with validation and automation.",
    url: "https://www.wordexperts.com.au/popup-forms",
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
    canonical: "/popup-forms",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
