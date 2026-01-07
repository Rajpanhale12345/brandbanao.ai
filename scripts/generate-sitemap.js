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

  "/Cinema",
  "/Radio",
  "/Hoardings",
  "/Bus_Shelter",
  "/AirportBranding",
  "/TVNewsChanelBranding",

  "/BusBranding",
  "/AutoBranding",
  "/CycleBranding",
  "/RailwayBranding",
  "/DigitalMarketing",
  "/WebDevelopment",

  // Career pages
  "/Careers/DigitalMarketingExecutive",
  "/Careers/DigitalMarketingManager",
  "/Careers/MediaPlanner",
  "/Careers/SalesMarketingExecutiveFemale",
  "/Careers/SalesMarketingManager",
  "/Careers/OperationsHead",
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
