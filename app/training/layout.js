export const metadata = {
  title: "Microsoft Word Training | Word Experts",
  description:
    "Professional Microsoft Word training and support services. Expert help with templates, documents, and Word automation. Available remotely or onsite across Australia.",
  keywords: ["microsoft word training"],

  openGraph: {
    title: "Microsoft Word Training | Word Experts",
    description:
      "Professional Microsoft Word training and support services. Expert help with templates, documents, and Word automation.",
    url: "https://www.wordexperts.com.au/training",
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
    canonical: "/training",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/services/microsoft-word/training",
      },
      {
        url: "https://www.officeexperts.com.au/services/microsoft-word/training",
      },
    ],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
