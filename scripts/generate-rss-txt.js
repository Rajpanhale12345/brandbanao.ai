// scripts/generate-rss-txt.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Domain
const SITE_URL = "https://brandbanao.ai";

// Public directory (Vite serves /public at site root)
const PUBLIC_DIR = path.join(__dirname, "..", "public");

// Define possible feeds (only included if the file exists in /public)
const candidateFeeds = [
  {
    path: "/feed.xml",
    type: "rss",
    title: "Brand Banao.Ai — Updates",
    description: "Latest updates, insights, and announcements from Brand Banao.Ai.",
    language: "en-IN",
    tags: ["marketing", "advertising", "outdoor", "branding", "nashik", "maharashtra"],
  },
  {
    path: "/careers/feed.xml",
    type: "rss",
    title: "Brand Banao.Ai — Careers",
    description: "Latest job openings and hiring updates.",
    language: "en-IN",
    tags: ["careers", "jobs", "hiring", "marketing", "nashik"],
  },

  // Optional future feeds (won't be listed unless you actually generate these files)
  // { path: "/feed.atom", type: "atom", title: "...", description: "...", language: "en-IN", tags: ["..."] },
  // { path: "/feed.json", type: "json", title: "...", description: "...", language: "en-IN", tags: ["..."] },
];

function existsInPublic(feedPath) {
  // Convert "/careers/feed.xml" => "<repo>/public/careers/feed.xml"
  const fsPath = path.join(PUBLIC_DIR, feedPath.replace(/^\//, ""));
  return fs.existsSync(fsPath);
}

function buildRssTxt(feeds) {
  const lines = [];
  lines.push("# rss.txt");
  lines.push(`# Feeds for ${SITE_URL}`);
  lines.push("# Format:");
  lines.push("# <feed-url>");
  lines.push("# type: rss|atom|json");
  lines.push("# title: ...");
  lines.push("# description: ...");
  lines.push("# language: ...");
  lines.push("# tags: ...");
  lines.push("");

  for (const feed of feeds) {
    const fullUrl = `${SITE_URL}${feed.path}`;
    lines.push(fullUrl);
    lines.push(`type: ${feed.type}`);
    if (feed.title) lines.push(`title: ${feed.title}`);
    if (feed.description) lines.push(`description: ${feed.description}`);
    if (feed.language) lines.push(`language: ${feed.language}`);
    if (feed.tags?.length) lines.push(`tags: ${feed.tags.join(", ")}`);
    lines.push("");
  }

  return lines.join("\n");
}

function main() {
  // Only publish feeds that exist in /public
  const feedsToPublish = candidateFeeds.filter((f) => existsInPublic(f.path));

  const content = buildRssTxt(feedsToPublish);

  const outputPath = path.join(PUBLIC_DIR, "rss.txt");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, content, "utf8");

  console.log(`✅ rss.txt generated at: ${outputPath}`);
  console.log(`✅ Feeds listed: ${feedsToPublish.length}`);
  for (const f of feedsToPublish) console.log(`   - ${SITE_URL}${f.path}`);
}

main();
