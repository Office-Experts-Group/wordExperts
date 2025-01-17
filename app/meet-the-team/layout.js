export const metadata = {
  title: "Meet The Team | Word Experts",
  description:
    "Meet our expert team of Microsoft Word consultants, developers, and designers. Professional Word template and document specialists across Australia.",
  keywords: [
    // Team expertise
    "word experts team",
    // "microsoft consultants",
    // "word document specialists",
    // "word template developers",
    // "word professionals",

    // // Professional roles
    // "word designers",
    // "word template specialists",
    // "word document consultants",

    // // Expertise areas
    // "template development experts",
    // "corporate word template experts",

    // // Location specific
    // "australian word experts",
    // "sydney microsoft consultants",
    // "perth word professionals",
  ],
  openGraph: {
    title: "Meet The Team | Word Experts",
    description:
      "Meet our expert team of Microsoft Word consultants, developers, and designers. Professional Word specialists across Australia.",
    url: "https://www.wordexperts.com.au/meet-the-team/",
  },
  metadataBase: new URL("https://www.wordexperts.com.au"),
  alternates: {
    canonical: "/meet-the-team/",
    languages: {
      "en-AU": "/meet-the-team/",
    },
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
