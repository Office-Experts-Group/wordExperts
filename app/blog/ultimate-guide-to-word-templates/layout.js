export const metadata = {
  title: "Ultimate Guide to Microsoft Word Templates",
  description:
    "What is a Word Template? Expert insights, tips, and guides for Microsoft Word users from Australia's leading Word specialists.",
  keywords: [
    // Reviews and feedback
    "word experts reviews",
  ],
  openGraph: {
    title: "Ultimate Guide to Microsoft Word Templates",
    description:
      "What is a Word Template? Expert insights, tips, and guides for Microsoft Word users from Australia's leading Word specialists.",
    url: "https://www.wordexperts.com.au/blog/ultimate-guide-to-word-templates",
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
    canonical: "/blog/ultimate-guide-to-word-templates",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
