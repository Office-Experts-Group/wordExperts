// redirects/locationRedirects.js
// /word-consultants-{city} -> the matching Office Experts city hub, /microsoft-consultants-{city}.
// Not listed on purpose: Cairns (Word Experts never had a Cairns page).

const { permanent } = require("./helpers.js");

// Every city that had a Word Experts page. Each one has a live Office Experts hub.
const CITIES = [
  "adelaide",
  "brisbane",
  "canberra",
  "central-coast-nsw",
  "darwin",
  "gold-coast",
  "melbourne",
  "northern-rivers-nsw",
  "perth",
  "richmond",
  "sydney",
  "wollongong",
];

module.exports = CITIES.map((city) =>
  permanent(`/word-consultants-${city}`, `/microsoft-consultants-${city}`),
);
