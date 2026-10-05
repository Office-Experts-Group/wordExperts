// app/video-sitemap.xml/route.js
// Builds a valid video sitemap from videoDataMapping.js at build time

// Adjust this import path to wherever videoDataMapping.js lives
import videoMapping from "../../videoDataMapping.js";

export const dynamic = "force-static";

const SITE_URL = "https://www.wordexperts.com.au";

// Escapes characters that are not allowed in XML text
const escapeXml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

// One <video:video> block; the mp4 goes in content_loc, not player_loc
const buildVideo = (video) => `
    <video:video>
      <video:thumbnail_loc>${escapeXml(video.thumbnailUrl)}</video:thumbnail_loc>
      <video:title>${escapeXml(video.title)}</video:title>
      <video:description>${escapeXml(video.description)}</video:description>
      <video:content_loc>${escapeXml(video.playerUrl)}</video:content_loc>
      <video:duration>${video.duration}</video:duration>
      <video:publication_date>${video.uploadDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>`;

// One <url> per page, with its videos as direct children (no wrapper element)
const buildUrl = ([path, videos]) => `
  <url>
    <loc>${SITE_URL}${path}</loc>${videos.map(buildVideo).join("")}
  </url>`;

export function GET() {
  const entries = Object.entries(videoMapping).filter(([, v]) => v?.length);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${entries
    .map(buildUrl)
    .join("")}
</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
