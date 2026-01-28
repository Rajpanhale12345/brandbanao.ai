import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../components/Services.css";

import busshelter from "../Images/busshelter.jpg";
import hoarding from "../Images/hoarding.jpg";
import cinema from "../Images/cinemabranding.webp";
import radio from "../Images/radio.jpg";
import railway from "../Images/railwaybranding.jpg";
import cycle from "../Images/cycle.jpg";
import auto from "../Images/autobranding.jpg";
import airportImg from "../Images/airport.jpg"; // ✅ FIX: rename to avoid confusion
import digital from "../Images/digital.jpg";
import bus from "../Images/busbranding.jpg";
import app from "../Images/app.png";
import news from "../Images/news.png";

const SITE_URL = "https://brandbanao.ai";
const PAGE_URL = `${SITE_URL}/services`;
const BRAND_NAME = "Brand Banao.Ai";
const OG_IMAGE = `${SITE_URL}/assets/logopng-CGGCs8OD.png`;

export default function Services() {
  // ✅ FIX: Single source of truth for cards + schema + SEO
  const SERVICES = useMemo(
    () => [
      { title: "Hoardings/Billboards", image: hoarding, path: "/hoardings" },
      { title: "Bus Shelter", image: busshelter, path: "/bus-shelter" },
      { title: "Cinema Branding", image: cinema, path: "/CinemaBranding" },
      { title: "Radio FM Branding", image: radio, path: "/radio" },
      { title: "Airport Branding", image: airportImg, path: "/AirportBranding" },
      { title: "Digital Marketing", image: digital, path: "/DigitallMarketing" },
      { title: "Railway Branding", image: railway, path: "/RailwayyBranding" },
      { title: "Bus Branding", image: bus, path: "/BusBranding" },
      {
        title: "TV News Channel Branding",
        image: news,
        path: "/TVNewsChanelBranding",
        imgStyle: { objectFit: "contain", background: "#fff" },
      },
      { title: "Auto Branding", image: auto, path: "/auto-branding" },
      { title: "Website/App Development", image: app, path: "/WebDevelopment" },
      { title: "Cycle Branding", image: cycle, path: "/CycleeBranding" },
    ],
    []
  );

  const metaDescription =
    "Explore Brand Banao.Ai services: hoardings, bus shelter ads, cinema branding, radio FM campaigns, airport branding, digital marketing, railway branding, bus and auto branding, TV news channel branding, web/app development, and cycle branding.";

  // ✅ FIX: JSON-LD: Organization + WebPage + Breadcrumb + ItemList
  const structuredData = useMemo(() => {
    const orgId = `${SITE_URL}/#organization`;
    const webPageId = `${PAGE_URL}#webpage`;

    const breadcrumb = {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
        { "@type": "ListItem", position: 2, name: "Services", item: PAGE_URL },
      ],
    };

    const itemList = {
      "@type": "ItemList",
      name: "Brand Banao.Ai Services",
      itemListElement: SERVICES.map((s, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: s.title,
        url: SITE_URL + s.path,
      })),
    };

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": orgId,
          name: BRAND_NAME,
          url: SITE_URL + "/",
          logo: OG_IMAGE,
          sameAs: [
            "https://www.instagram.com/brandbanao.ai",
            "https://www.linkedin.com/company/brandbanao-ai",
            "https://www.facebook.com/brandbanao.ai",
          ],
        },
        {
          "@type": "WebPage",
          "@id": webPageId,
          url: PAGE_URL,
          name: "Services | Brand Banao.Ai",
          description: metaDescription,
          isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
          about: { "@id": orgId },
          inLanguage: "en-IN",
          primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
        },
        breadcrumb,
        itemList,
      ],
    };
  }, [SERVICES, metaDescription]);

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-IN" }}>
        <title>Best Outdoor Services in Nashik | Brand Banao.Ai</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="author" content={BRAND_NAME} />
        <meta name="publisher" content={BRAND_NAME} />
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="outdoor advertising Nashik, hoardings, bus shelter advertising, cinema branding, radio advertising, airport branding, digital marketing, railway branding, bus branding, auto branding, TV news channel branding, web development, app development, cycle branding"
        />

        <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="theme-color" content="#0d1117" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={BRAND_NAME} />
        <meta property="og:title" content="Services | Brand Banao.Ai" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Brand Banao.Ai - Services" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Brand Banao.Ai" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Brand Banao.Ai - Services" />

        {/* ✅ Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div style={{ minHeight: "100vh", background: "#fafafa" }}>
        <StyleBlock />

        {/* Hero */}
        <section style={{ position: "relative" }}>
          <div className="container">
            <h1 className="title" style={{ color: "#d94f5c" }}>Our Services</h1>
          </div>
        </section>

        {/* Grid */}
        <section>
          <div className="container">
            <div className="grid">
              {/* Each card declared separately so you can give unique links */}
              <ServiceCard
                title="Hoardings/Billboards"
                image={hoarding}
                path="/Hoardings"
                style={{ height: "200px" }}
              />

              <ServiceCard
                title="Bus Shelter"
                image={busshelter}
                path="/Bus_Shelter"
              />

              <ServiceCard
                title="Cinema Branding"
                image={cinema}
                path="/Cinema"

              />

              <ServiceCard
                title="Radio FM Branding"
                image={radio}
                path="/Radio"
              />

              <ServiceCard
                title="Airport Branding"
                image={airportImg}
                path="/AirportBranding"
              />

              <ServiceCard
                title="Digital Marketing"
                image={digital}
                path="/DigitalMarketing"
              />

              <ServiceCard
                title="Railway Branding"
                image={railway}
                path="/RailwayBranding"
              />

              <ServiceCard
                title="Bus Branding"
                image={bus}
                path="/BusBranding"
              />

              <ServiceCard
                title="TV News Channel Branding"
                image={news}
                path="/TVNewsChanelBranding"
                // example of custom img style on a single card:
                imgStyle={{ objectFit: "contain", background: "#fff" }}
              />

              <ServiceCard
                title="Auto Branding"
                image={auto}
                path="/AutoBranding"
              />

              <ServiceCard
                title="Website/App Development"
                image={app}
                path="/WebDevelopment"
              />

              <ServiceCard
                title="Cycle Branding"
                image={cycle}
                path="/CycleBranding"
              />
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

function ServiceCard({ title, image, path, imgStyle }) {
  return (
    <Link to={path} className="cardLink" aria-label={`Learn more about ${title}`}>
      <article className="card" role="article">
        <div className="imageWrap">
          {image ? (
            <img
              src={image}
              alt={title}
              className="image"
              loading="lazy"
              style={imgStyle}
            />
          ) : (
            <div className="imagePlaceholder">No image</div>
          )}
        </div>

        <div className="cardBody">
          <div className="cardHeader">
            <h3 className="cardTitle">{title}</h3>
          </div>

          <div className="cardFooter">
            <div className="bar" />
            <span className="linkBtn">Learn more →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

/** Inline CSS (your styling + a small fix for Link wrapper) */
function StyleBlock() {
  return (
    <style>{`
      :root{
        --primary: #d94f5c;
        --accent: rgba(169, 153, 7, 1);
        --radius: 16px;
        --text: #1f2937;
        --muted: #6b7280;
        --card: #ffffff;
      }
      * { box-sizing: border-box; }

      .container{
        max-width: 1120px;
        margin: 0 auto;
        padding: 24px;
        gap: 60px;
      }
      .title{
        font-size: 40px;
        font-weight: 800;
        margin: 24px 0 8px;
        background: linear-gradient(90deg, var(--primary), var(--accent));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .grid{
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
        margin: 16px 0 48px;
      }
      @media (min-width: 640px){
        .grid{ grid-template-columns: repeat(2, 1fr); }
      }
      @media (min-width: 1024px){
        .grid{ grid-template-columns: repeat(3, 1fr); }
      }

      /* ✅ FIX: Link wrapper should look like normal block, no underline */
      .cardLink{
        text-decoration: none;
        color: inherit;
        display: block;
      }

      .card{
        border-radius: var(--radius);
        overflow: hidden;
        background: rgba(255,255,255,0.9);
        backdrop-filter: blur(2px);
        border: 1px solid #eee;
        transition: transform .2s, box-shadow .2s, border-color .2s;
      }
      .card:hover{
        transform: translateY(-2px);
        box-shadow: 0 10px 24px rgba(0,0,0,0.08);
        border-color: var(--primary);
      }

      .imageWrap{
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 10;
        background: #f3f4f6;
      }
      .image{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .imagePlaceholder{
        width: 100%; height: 100%;
        display: grid; place-items: center;
        color: #9ca3af;
        font-size: 12px;
      }

      .cardBody{ padding: 14px 14px 16px; }
      .cardHeader{
        display: flex; align-items: center; justify-content: space-between; gap: 12px;
        margin-bottom: 6px;
      }
      .cardTitle{ margin: 0; font-size: 18px; color: var(--text); }

      .cardFooter{
        margin-top: 12px;
        display: flex; align-items: center; justify-content: space-between;
      }
      .bar{
        height: 4px; width: 96px; border-radius: 999px;
        background: linear-gradient(90deg, var(--primary), var(--accent));
      }
      .linkBtn{
        border: none; background: transparent; color: var(--primary);
        font-weight: 600; padding: 6px 8px; border-radius: 8px;
      }
      .card:hover .linkBtn{ background: rgba(217,79,92,0.08); }
    `}</style>
  );
}