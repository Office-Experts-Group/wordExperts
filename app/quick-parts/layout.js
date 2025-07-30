export const metadata = {
  title: "Microsoft Word Document Quick Parts Services | Word Experts",
  description:
    "Expert Microsoft Word Quick Parts implementation. Enhance document creation with pre-built content and automated building blocks.",
  keywords: [
    // Core features
    "Microsoft Word quick parts",
  ],
  openGraph: {
    title: "Microsoft Word Document Quick Parts Services | Word Experts",
    description:
      "Expert Microsoft Word Quick Parts implementation. Enhance document creation with pre-built content and automated building blocks.",
    url: "https://www.wordexperts.com.au/quick-parts",
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
    canonical: "/quick-parts",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
