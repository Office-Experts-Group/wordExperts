export const metadata = {
  title: "Meet The Team | Word Experts",
  description:
    "Meet our expert team of Microsoft Word consultants, developers, and designers. Professional Word template and document specialists across Australia.",
  keywords: [
    // Team expertise
    "meet the experts team",
  ],
  openGraph: {
    title: "Meet The Team | Word Experts",
    description:
      "Meet our expert team of Microsoft Word consultants, developers, and designers. Professional Word specialists across Australia.",
    url: "https://www.wordexperts.com.au/meet-the-team",
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
    canonical: "/meet-the-team",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
