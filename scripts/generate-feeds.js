// scripts/generate-feeds.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = "https://brandbanao.ai";

// --------- helper to build RSS XML ----------
function buildRss({ title, link, description, items }) {
  const itemXml = items
    .map((item) => {
      const pubDate = new Date(item.pubDate).toUTCString();
      const url = `${SITE_URL}${item.path}`;

      return `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(item.description || "")}</description>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${SITE_URL}${link}</link>
    <description>${escapeXml(description)}</description>
    <language>en-us</language>
${itemXml}
  </channel>
</rss>
`;
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// --------- data for main site feed ----------
const siteUpdates = [
  {
    title: "Welcome to BrandBanao",
    path: "/",
    description: "Your trusted advertising and branding partner.",
    pubDate: "2025-01-20",
  },
  {
    title: "Cinema Branding Services",
    path: "/cinema",
    description: "Engaging cinema advertising solutions across key locations.",
    pubDate: "2025-01-21",
  },
  {
    title: "Radio Branding Campaigns",
    path: "/radio",
    description: "Targeted radio campaigns to amplify your brand voice.",
    pubDate: "2025-01-22",
  },
];

// --------- data for careers feed ----------
const careerJobs = [
  {
    title: "Digital Marketing Executive",
    path: "/Careers/DigitalMarketingExecutive",
    description:
      "We are looking for a skilled Digital Marketing Executive to join our team.",
    pubDate: "2025-01-20",
  },
  {
    title: "Digital Marketing Manager",
    path: "/Careers/DigitalMarketingManager",
    description:
      "Lead digital strategy and performance marketing for our clients.",
    pubDate: "2025-01-21",
  },
  {
    title: "Media Planner",
    path: "/Careers/MediaPlanner",
    description: "Plan and optimize media campaigns across multiple channels.",
    pubDate: "2025-01-22",
  },
  {
    title: "Sales & Marketing Executive (Female)",
    path: "/Careers/SalesMarketingExecutiveFemale",
    description:
      "Client-facing role focusing on sales and relationship management.",
    pubDate: "2025-01-23",
  },
  {
    title: "Sales & Marketing Manager",
    path: "/Careers/SalesMarketingManager",
    description: "Manage the sales team and drive revenue growth.",
    pubDate: "2025-01-24",
  },
  {
    title: "Operations Head",
    path: "/Careers/OperationsHead",
    description: "Oversee operations and ensure flawless campaign execution.",
    pubDate: "2025-01-25",
  },
];

// --------- write feeds to /public ----------
function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(relativePath, content) {
  const outputPath = path.join(__dirname, "..", "public", relativePath);
  ensureDir(path.dirname(outputPath));
  fs.writeFileSync(outputPath, content, "utf8");
  console.log(`✅ Generated: ${outputPath}`);
}

function main() {
  const mainFeed = buildRss({
    title: "BrandBanao – Updates",
    link: "/",
    description: "Latest updates from BrandBanao",
    items: siteUpdates,
  });

  const careersFeed = buildRss({
    title: "BrandBanao – Careers",
    link: "/careers",
    description: "Latest job openings at BrandBanao",
    items: careerJobs,
  });

  // public/feed.xml
  writeFile("feed.xml", mainFeed);

  // public/careers/feed.xml
  writeFile(path.join("careers", "feed.xml"), careersFeed);
}

main();
