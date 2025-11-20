import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const SITE_URL = "https://brandbanao.ai/"; // <-- CHANGE THIS

// All your routes
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

  // Career pages
  "/Careers/DigitalMarketingExecutive",
  "/Careers/DigitalMarketingManager",
  "/Careers/MediaPlanner",
  "/Careers/SalesMarketingExecutiveFemale",
  "/Careers/SalesMarketingManager",
  "/Careers/OperationsHead",
];

async function generateSitemap() {
  // Create stream
  const sitemap = new SitemapStream({ hostname: SITE_URL });

  // Write to public/sitemap.xml
  const writeStream = createWriteStream("./public/sitemap.xml");
  sitemap.pipe(writeStream);

  // Add each route
  for (const route of routes) {
    sitemap.write({
      url: route,
      changefreq: "weekly",
      priority: 0.8,
    });
  }

  sitemap.end();
  await streamToPromise(sitemap);

  console.log("✔ Sitemap Generated: public/sitemap.xml");
}

generateSitemap().catch(console.error);
