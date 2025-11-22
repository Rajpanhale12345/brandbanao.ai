// scripts/generate-rss-txt.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Change this to your real domain
const SITE_URL = 'https://brandbanao.ai';

// 2. Define the feeds you want to expose via rss.txt
// NOTE: These should be real RSS/Atom/JSON feeds,
// not just pages. For now, you can keep placeholders
// and later point them to real feed.xml files.
const feeds = [
  {
    path: '/feed.xml',
    type: 'rss',
    title: 'Main Site Feed',
    description: 'All new updates from the site.',
  },
  {
    path: '/careers/feed.xml',
    type: 'rss',
    title: 'Careers Feed',
    description: 'Job openings and career updates.',
  },
  // Add more feeds when you create them
];

// Build the rss.txt content
function buildRssTxt(feeds) {
  const lines = [];

  lines.push('# rss.txt');
  lines.push('# Auto-generated list of RSS/Atom/JSON feeds for this site.');
  lines.push('');

  for (const feed of feeds) {
    const fullUrl = `${SITE_URL}${feed.path}`;
    lines.push(fullUrl);
    lines.push(`type: ${feed.type}`);
    if (feed.title) lines.push(`title: ${feed.title}`);
    if (feed.description) lines.push(`description: ${feed.description}`);
    lines.push(''); // blank line between entries
  }

  return lines.join('\n');
}

function main() {
  const content = buildRssTxt(feeds);

  // Write to public/rss.txt so Vite serves it at /rss.txt
  const outputPath = path.join(__dirname, '..', 'public', 'rss.txt');

  // Ensure public/ exists
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`✅ rss.txt generated at: ${outputPath}`);
}

main();
