export const metadata = {
  title: "Search | Your Site Name",
  description: "Search across our websites",
  metadataBase: new URL("https://www.wordexperts.com.au"),
  alternates: {
    canonical: "/search/",
    languages: {
      "en-AU": "/search/",
    },
  },
};

export default function SearchLayout({ children }) {
  return <>{children}</>;
}
