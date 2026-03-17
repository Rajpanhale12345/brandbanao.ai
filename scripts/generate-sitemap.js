import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { HOARDINGS_CITIES } from "../src/data/hoardingsCities.js";

const SITE_URL = "https://brandbanao.ai";

// ✅ Routes first
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

  "/careers/digital-marketing-executive",
  "/careers/digital-marketing-manager",
  "/careers/media-planner",
  "/careers/sales-marketing-executive-female",
  "/careers/sales-marketing-manager",
  "/careers/operations-head",

  "/sitemap",
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: SITE_URL });
  const writeStream = createWriteStream("./public/sitemap.xml");

  sitemap.pipe(writeStream);

  // ✅ Static routes
  routes.forEach((route) => {
    sitemap.write({
      url: route,
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.8,
    });
  });

  // ✅ Dynamic city pages (THIS WAS MISSING PROPERLY)
  Object.keys(HOARDINGS_CITIES).forEach((citySlug) => {
    sitemap.write({
      url: `/hoardings/${citySlug}`,
      changefreq: "weekly",
      priority: 0.7,
    });
  });

  sitemap.end();
  await streamToPromise(sitemap);

  console.log("✔ Sitemap Generated: public/sitemap.xml");
}

generateSitemap().catch(console.error);