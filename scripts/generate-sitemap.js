import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const SITE_URL = "https://brandbanao.ai"; // no trailing slash is cleaner

// Routes from App.jsx (match EXACT paths/case)
const routes = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/careers",

  "/cinema",
  "/radio",
  "/hoardings",
  "/bus-shelter",
  "/airport-branding",
  "/tv-news-chanel-branding",

  "/bus-branding",
  "/auto-branding",
  "/cycle-branding",
  "/railway-branding",
  "/digital-marketing",
  "/web-development",

  // Career pages
  "/careers/digital-marketing-executive",
  "/careers/digital-marketing-manager",
  "/careers/media-planner",
  "/careers/sales-marketing-executive-female",
  "/careers/sales-marketing-manager",
  "/careers/operations-head",

  // Optional but recommended
  "/sitemap",
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: SITE_URL });

  const writeStream = createWriteStream("./public/sitemap.xml");
  sitemap.pipe(writeStream);

  for (const route of routes) {
    sitemap.write({
      url: route,
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.8,
    });
  }

  sitemap.end();
  await streamToPromise(sitemap);

  console.log("✔ Sitemap Generated: public/sitemap.xml");
}

generateSitemap().catch(console.error);
