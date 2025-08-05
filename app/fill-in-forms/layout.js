export const metadata = {
  title: "Expert Creation of Word Fill in Forms | Word Experts",
  description:
    "Professional Microsoft Word form creation services. Custom fillable forms with data validation and protection. Improve data entry efficiency and accuracy.",
  keywords: [
    // Core services
    "word fill in forms",
  ],
  openGraph: {
    title: "Expert Creation of Word Fill in Forms | Word Experts",
    description:
      "Professional Microsoft Word form creation services. Custom fillable forms with data validation and protection.",
    url: "https://www.wordexperts.com.au/fill-in-forms",
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
    canonical: "/fill-in-forms",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
