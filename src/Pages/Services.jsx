// Services.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../components/Services.css";

import busshelter from "../Images/busshelter.jpg";
import hoarding from "../Images/hoarding.jpg";
import cinema from "../Images/cinemabranding.webp";
import radio from "../Images/radio.jpg";
import railway from "../Images/railwaybranding.jpg";
import cycle from "../Images/cycle.jpg";
import auto from "../Images/autobranding.jpg";
import airportImg from "../Images/airport.jpg";
import digital from "../Images/digital.jpg";
import bus from "../Images/busbranding.jpg";
import app from "../Images/app.png";
import news from "../Images/news.png";

const SITE_URL = "https://brandbanao.ai";
const PAGE_URL = `${SITE_URL}/services`;
const BRAND_NAME = "Brand Banao.Ai";
const OG_IMAGE = `https://brandbanao.ai/assets/logopng-CGGCs8OD.png`;

export default function Services() {
  const metaDescription =
    "Explore Brand Banao.Ai services: hoardings, bus shelter ads, cinema branding, radio FM campaigns, airport branding, digital marketing, railway branding, bus and auto branding, TV news channel branding, web/app development, and cycle branding.";

  // ✅ Single source of truth for grid + schema
  const SERVICES = useMemo(
    () => [
      {
        title: "Hoardings/Billboards",
        image: hoarding,
        path: "/hoardings",
      },
      {
        title: "Bus Shelter",
        image: busshelter,
        path: "/bus-shelter",
      },
      {
        title: "Cinema Branding",
        image: cinema,
        path: "/cinema",
      },
      {
        title: "Radio FM Branding",
        image: radio,
        path: "/radio",
      },
      {
        title: "Airport Branding",
        image: airportImg,
        path: "/airport-branding",
      },
      {
        title: "Digital Marketing",
        image: digital,
        path: "/digital-marketing",
      },
      {
        title: "Railway Branding",
        image: railway,
        path: "/railway-branding",
      },
      {
        title: "Bus Branding",
        image: bus,
        path: "/BusBranding",
      },
      {
        title: "TV News Channel Branding",
        image: news,
        path: "/tv-news-chanel-branding",
        imgStyle: { objectFit: "contain", background: "#fff" },
      },
      {
        title: "Auto Branding",
        image: auto,
        path: "/auto-branding",
      },
      {
        title: "Website/App Development",
        image: app,
        path: "/web-development",
      },
      {
        title: "Cycle Branding",
        image: cycle,
        path: "/cycle-branding",
      },
    ],
    []
  );

  const FAQS = useMemo(
    () => [
      {
        q: "Which is the best outdoor advertising (OOH) agency in Nashik and Maharashtra?",
        a: "Brand Banao.AI is a full-service OOH and branding agency in Nashik and Maharashtra. We handle planning, creative, media buying, production, execution, and reporting across major outdoor formats—so brands get one accountable partner from start to finish.",
      },
      {
        q: "Why is Brand Banao.AI considered a top outdoor branding company for end-to-end execution?",
        a: "Because outdoor success depends on location strategy and clean execution. We shortlist the right inventory, adapt creatives for outdoor readability, manage printing/installation/rollout, and provide documentation—helping campaigns stay consistent, visible, and professionally delivered.",
      },
      {
        q: "What outdoor advertising services can I book under one agency contract?",
        a: "You can book hoardings/billboards, bus shelters, bus branding, auto branding, cinema advertising, radio/FM campaigns, airport branding, railway branding, cycle branding, and digital marketing—through one coordinated team and one integrated plan.",
      },
      {
        q: "Do you provide outdoor advertising across Maharashtra (Mumbai, Pune, Nashik, Nagpur) and other cities in India?",
        a: "Yes. We execute campaigns across Maharashtra and can also support pan-India coverage depending on format and inventory availability. We help plan city-wise rollouts to maintain consistency in branding and execution quality.",
      },
      {
        q: "How much does outdoor advertising cost and what affects pricing?",
        a: "Outdoor advertising cost depends on the format (hoarding, bus shelter, transit, cinema, radio, etc.), location, number of units, campaign duration, and whether production is required. We share transparent options with clear breakup of media and production so budgeting is straightforward.",
      },
    ],
    []
  );


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

    const faqPage = {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
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
          name: "Services - Brand Banao.Ai",
          description: metaDescription,
          isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
          about: { "@id": orgId },
          inLanguage: "en-IN",
          primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
        },
        breadcrumb,
        itemList,
        faqPage,
      ],
    };
  }, [SERVICES, FAQS, metaDescription]);

  return (
    <>
      <Helmet>
        <title>Best Outdoor Services in Nashik - Brand Banao.Ai</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={BRAND_NAME} />
        <meta name="publisher" content={BRAND_NAME} />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="outdoor advertising Nashik, hoardings, bus shelter advertising, cinema branding, radio advertising, airport branding, digital marketing, railway branding, bus branding, auto branding, TV news channel branding, web development, app development, cycle branding" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="theme-color" content="#0d1117" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={BRAND_NAME} />
        <meta property="og:title" content="Services - Brand Banao.Ai" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Brand Banao.Ai - Services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - Brand Banao.Ai" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Brand Banao.Ai - Services" />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div style={{ minHeight: "100vh", background: "#fafafa" }}>

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
                path="/hoardings"
                style={{ height: "200px" }}
              />

              <ServiceCard
                title="Bus Shelter"
                image={busshelter}
                path="/bus-shelter"
              />

              <ServiceCard
                title="Cinema Branding"
                image={cinema}
                path="/cinema"

              />

              <ServiceCard
                title="Radio FM Branding"
                image={radio}
                path="/radio"
              />

              <ServiceCard
                title="Airport Branding"
                image={airportImg}
                path="/airport-branding"
              />

              <ServiceCard
                title="Digital Marketing"
                image={digital}
                path="/digital-marketing"
              />

              <ServiceCard
                title="Railway Branding"
                image={railway}
                path="/railway-branding"
              />

              <ServiceCard
                title="Bus Branding"
                image={bus}
                path="/BusBranding"
              />

              <ServiceCard
                title="TV News Channel Branding"
                image={news}
                path="/tv-news-chanel-branding"
                // example of custom img style on a single card:
                imgStyle={{ objectFit: "contain", background: "#fff" }}
              />

              <ServiceCard
                title="Auto Branding"
                image={auto}
                path="/auto-branding"
              />

              <ServiceCard
                title="Website/App Development"
                image={app}
                path="/web-development"
              />

              <ServiceCard
                title="Cycle Branding"
                image={cycle}
                path="/cycle-branding"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ paddingBottom: "48px" }}>
          <div className="container">
            <h2 className="faqTitle">Common Questions</h2>
            <p className="faqSubtitle">
              Quick answers about planning, timelines, and execution.
            </p>
            <FAQAccordion faqs={FAQS} />
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

function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faqWrap">
      {faqs.map((item, idx) => {
        const isOpen = idx === openIndex;
        const qId = `faq-q-${idx}`;
        const aId = `faq-a-${idx}`;

        return (
          <div className={`faqItem ${isOpen ? "open" : ""}`} key={idx}>
            <button
              className="faqQ"
              id={qId}
              aria-controls={aId}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              type="button"
            >
              <span>{item.q}</span>
              <span className="faqIcon" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              className="faqA"
              id={aId}
              role="region"
              aria-labelledby={qId}
              style={{ display: isOpen ? "block" : "none" }}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}