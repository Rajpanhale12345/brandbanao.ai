import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import busshelter from "../Images/busshelter.webp";
import "./busShelter.css"

const BusShelterBranding = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const images = useMemo(() => [busshelter], []);

  const openGallery = useCallback((index) => {
    setCurrentIndex(index);
    setShowGallery(true);
  }, []);

  const closeGallery = useCallback(() => setShowGallery(false), []);


  useEffect(() => {
    if (!showGallery) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeGallery();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showGallery, closeGallery]);

  const SITE_URL = "https://brandbanao.ai/";
  const PAGE_URL = "https://brandbanao.ai/bus-shelter";
  const BRAND_NAME = "BrandBanao.ai";
  const OG_IMAGE = "https://brandbanao.ai/assets/busshelter-Bqx2SSuA.jpg";

  const FAQ_ITEMS = useMemo(
    () => [
      {
        question:
          "Which is the best bus shelter advertising agency in Nashik and Maharashtra?",
        answer:
          "BrandBanao.ai is a trusted bus shelter advertising partner in Nashik and across Maharashtra. We manage end-to-end execution—location planning, creative, printing, installation, and photo proof—so your brand gets consistent 24x7 street-level visibility with professional control.",
      },
      {
        question:
          "Why is BrandBanao.ai considered a top bus shelter branding agency in Nashik?",
        answer:
          "Because bus shelter ads perform best when placement + readability + execution are handled properly. We shortlist shelters based on footfall, dwell time, sightline, and audience relevance, then deliver outdoor-optimised creatives, clean installation, and documentation—helping brands get stronger local recall and trust.",
      },
      {
        question:
          "What are bus shelter advertising rates in Nashik? How is the cost calculated?",
        answer:
          "Bus shelter advertising cost depends on the exact location, format (non-lit, backlit, or digital where available), number of shelters, and campaign duration (15 days, 1 month, 3 months, etc.). Pricing usually includes media rental plus production (printing) and installation. We share a clear item-wise quote so budgeting stays transparent.",
      },
      {
        question:
          "Which are the best bus stop / bus shelter locations in Nashik for maximum visibility?",
        answer:
          "High-performing shelters are usually near busy junctions, markets, schools/colleges, hospitals, commercial streets, and commuter-heavy corridors. We recommend locations using practical checks like sightline, waiting time, vehicle speed, and local audience movement—so your ad is easy to read and hard to miss.",
      },
      {
        question:
          "What is the difference between non-lit, backlit, and digital bus shelter ads—and which one is best?",
        answer:
          "Non-lit shelters are cost-effective and great for longer durations. Backlit shelters improve night visibility and boost recall. Digital shelters (where available) support multiple creatives and time-based messaging. We recommend the best option based on your goal—local awareness, store walk-ins, or launch impact—and handle creative, printing, installation, and photo reporting.",
      },
    ],
    []
  );


  const keywordsContent = useMemo(
    () =>
      [
        "bus shelter advertising Nashik",
        "bus stop advertising Nashik",
        "bus stand advertising Nashik",
        "bus shelter branding Nashik",
        "outdoor advertising Nashik",
        "OOH advertising Maharashtra",
        "transit advertising Nashik",
        "bus shelter advertising rates Nashik",
        "BrandBanao.ai",
      ].join(", "),
    []
  );


  const structuredData = useMemo(() => {
    const orgId = "https://brandbanao.ai/#organization";
    const pageId = `${PAGE_URL}#webpage`;
    const serviceId = `${PAGE_URL}#service`;

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://brandbanao.ai/#website",
          "url": SITE_URL,
          "name": BRAND_NAME,
          "publisher": { "@id": orgId },
          "inLanguage": "en-IN",
        },
        {
          "@type": "Organization",
          "@id": orgId,
          "name": BRAND_NAME,
          "url": SITE_URL,
          "logo": OG_IMAGE,
        },
        {
          "@type": "WebPage",
          "@id": pageId,
          "url": PAGE_URL,
          "name": "Bus Shelter Advertising in Nashik - Bus Shelter Branding",
          "headline": "Bus Shelter Advertising & Branding in Maharashtra",
          "description":
            "Boost visibility with bus shelter advertising: 24x7 street-level reach, hyperlocal targeting, backlit and digital options, creative support, printing, installation, and reporting.",
          "inLanguage": "en-IN",
          "isPartOf": { "@id": "https://brandbanao.ai/#website" },
          "about": { "@id": orgId },
          "mainEntity": { "@id": serviceId },
          "primaryImageOfPage": { "@type": "ImageObject", "url": OG_IMAGE },
        },
        {
          "@type": "Service",
          "@id": serviceId,
          "name": "Bus Shelter Advertising & Branding",
          "serviceType": ["OOH Advertising", "Transit Advertising", "Outdoor Advertising"],
          "provider": { "@id": orgId },
          "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "State", "name": "Maharashtra" },
            { "@type": "City", "name": "Nashik" },
          ],
          "url": PAGE_URL,
          "description":
            "Bus shelter ads with hyperlocal targeting: non-lit, backlit and digital options, creative design, printing, installation, monitoring and reporting.",
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${PAGE_URL}#breadcrumbs`,
          "itemListElement": [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}services/` },
            { "@type": "ListItem", position: 3, name: "Bus Shelter Advertising", item: PAGE_URL },
          ],
        },
        {
          "@type": "FAQPage",
          "@id": `${PAGE_URL}#faq`,
          "mainEntity": FAQ_ITEMS.map((f) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer },
          })),
        },
      ],
    };
  }, [BRAND_NAME, FAQ_ITEMS, OG_IMAGE, PAGE_URL, SITE_URL]);

  return (
    <>
      <Helmet>
        <title>Bus Shelter Advertising in Nashik - BrandBanao.ai</title>
        <meta name="author" content={BRAND_NAME} />
        <meta name="description" content="Boost your brand visibility with Bus Shelter Advertising by BrandBanao.ai. 24x7 street-level ads with wide reach, local targeting, and complete campaign execution." />
        <meta name="keywords" content={keywordsContent} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={BRAND_NAME} />
        <meta property="og:title" content="Bus Shelter Advertising & Branding - BrandBanao.ai" />
        <meta property="og:description" content="Bus shelter ads with 24x7 visibility, hyperlocal targeting, and complete execution: creative, printing, installation and reporting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="BrandBanao.ai - Bus Shelter Advertising" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bus Shelter Advertising - BrandBanao.ai" />
        <meta name="twitter:description" content="Bus shelter advertising with hyperlocal targeting, 24x7 visibility and end-to-end execution." />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="hoarding-page">
        <h1 className="hoarding-title">Bus Shelter Advertising &amp; Branding</h1>

        <div className="hoarding-image-wrap">
          <img
            src={busshelter}
            alt="Bus Shelter branding example by Brand Banao.AI"
            className="hoarding-image"
            onClick={() => openGallery(0)}
            loading="eager"
            decoding="async"
            fetchpriority="high"
            width="1200"
            height="675"
          />
        </div>

        {showGallery && (
          <div
            className="gallery-overlay"
            onClick={() => setShowGallery(false)}
          >
            <div className="gallery-box" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[currentIndex]}
                alt="Bus shelter advertising gallery - Brand Banao.AI"
                className="gallery-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}

        <div className="hoarding-content">
          <h2>Bus Shelter Advertising Services - Brand Banao.AI</h2>
          <p>
            Bus Shelter Advertising is still one of the most powerful and great
            value forms of outdoor advertising available today, especially for
            brands that require visibility, recall factor, and continuous exposure.
            Brand Banao.AI offers premium bus shelter advertising options in
            Maharashtra and beyond, helping brands engage directly with commuters,
            visiting pedestrians, and local audiences likely to be in busy locations.
          </p>
          <p>
            As an expert in OOH media with 16+ years of experience coupled with our
            own strong owned-media network, we assure you that your brand will
            be noticed where it is most important.
          </p>

          <h2>What is Bus Shelter Advertising?</h2>
          <p>
            Bus Shelter Advertising refers to marketing displays placed on the
            sides, back panels, or complete wraps of bus shelters. These
            displays are placed in high-visibility areas such as:
          </p>
          <ul>
            <li>Busy traffic junctions</li>
            <li>Commercial streets</li>
            <li>Residential zones</li>
            <li>Business districts</li>
            <li>College and school routes</li>
            <li>Markets and shopping hubs</li>
          </ul>
          <p>
            With thousands of people passing by these shelters each day, they are
            ideal for brand awareness, regional reach, and location-based marketing.
            <br />
            Bus shelters give continuous, all day and all-night visibility even
            when people are not travelling. Whether a person waits for the bus,
            walks across the road, or stops at a signal, they naturally look at
            shelter ads.
          </p>

          <h2>Why Bus Shelter Advertising Works So Well</h2>
          <ol>
            <li>
              <strong>Long Dwell Time</strong>
              <p>
                Bus shelters are where people wait so they have more time to examine
                your ad, which increases recall, learning from the message, and
                engagement based on action.
              </p>
            </li>
            <li>
              <strong>Hyperlocal Targeting</strong>
              <p>
                Bus shelters provide the opportunity to target audiences in a
                specific locality, zone, or high movement corridor, making
                it an ideal advertising channel for:
              </p>
              <ul>
                <li>Retail outlets</li>
                <li>Hospitals</li>
                <li>Schools &amp; colleges</li>
                <li>Real estate projects</li>
                <li>Hotels &amp; resorts</li>
                <li>Gyms &amp; fitness</li>
                <li>Political campaigns</li>
              </ul>
            </li>
            <br />
            <li>
              <strong>Day and Night Visibility</strong>
              <p>
                We have digital, backlit, and non-lit shelters for all
                visibility issues (day and night).
              </p>
            </li>
            <li>
              <strong>Economical OOH Media</strong>
              <p>
                Bus shelters provide a greater return rate on investment compared
                to more expensive OOH assets such as billboards or a large format
                OOH display, given their lower cost factor and repeated impressions
                relative to the same location every day.
              </p>
            </li>
            <li>
              <strong>Great for Short-term and Long-term Campaigns</strong>
              <p>
                Brands may also choose to use flexible durations based upon
                objectives, including a 15-day campaign, or year-long visibility.
              </p>
            </li>
          </ol>

          <h2>Bus Shelter Advertising by Brand Banao.AI</h2>
          <p>
            As a trusted name and top bus shelter advertising agency in nashik, Brand Banao.AI
            offers complete bus shelter advertising solutions with:
          </p>
          <ul>
            <li>Premium Media Locations</li>
            <li>Dedicated Monitoring</li>
            <li>Creative Excellence</li>
            <li>Pan-Maharashtra Placeability</li>
            <li>AI-Optimized Campaign Planning</li>
          </ul>
          <p>
            We control Digital, Backlit, and Non-Lit shelters in cities and towns
            that will provide your advertisement with consistent visibility in
            order to maximize brand recall.
          </p>

          <h2>The Bus Shelter Advertising Services will include:</h2>

          <h3>1. Planning and Geographic Strategy</h3>
          <p>
            We will examine the locations and shelters with the best value for
            impressions by analyzing the following factors:
          </p>
          <ul>
            <li>Traffic patterns</li>
            <li>Audience demographics</li>
            <li>Commercial hubs</li>
            <li>Commuting routes</li>
            <li>Alignment with brand category</li>
          </ul>
          <p>
            We will ensure your brand is in the right place, at the right
            time, in front of the right audience!
          </p>

          <h3>2. Creative Development and Execution</h3>
          <p>
            The best designs create the best outcomes! Our highly trained and
            leveraged in-house creative team will create high-contrast,
            high-quality designs that offer visual snap for outdoor viewing.
            This involves:
          </p>
          <ul>
            <li>Concept development</li>
            <li>Creative adapted for multiple sizes of shelter</li>
            <li>Print ready files</li>
            <li>Prints on durable materials with high-quality printing</li>
          </ul>

          <h3>3. End-to-End Media Execution.</h3>
          <p>Once approved, we handle:</p>
          <ul>
            <li>Material printing</li>
            <li>Installation display media</li>
            <li>Quality checks</li>
            <li>Lighting and visibility checks</li>
            <li>Final photo documentation</li>
          </ul>
          <p>Every step is treated with due care and professionalism.</p>

          <h3>4. Campaign Monitoring and Documentation</h3>
          <p>We provide:</p>
          <ul>
            <li>On-location adult review</li>
            <li>Photo documentation</li>
            <li>Maintenance checks</li>
            <li>Proofs of performance reports</li>
          </ul>
          <p>
            All of this assists in ensuring your brand is clean, vibrant
            and 100% visible throughout the campaign.
          </p>

          <h2>Types of Bus Shelter Advertising We Offer</h2>
          <ul>

            <li><strong>Backlit Bus Shelters:</strong>
              <ol>Great night visibility.</ol>
              <ol>Bright, pop, high impact look.</ol>
            </li>

            <li><strong>Non-lit Bus Shelters:</strong>
              <ol>Great for a budget-friendly campaign.</ol>
              <ol>Provides long-term visibility at a lesser cost.</ol>
            </li>


            <li><strong>Digital Bus Shelters:</strong>
              <ol>High-impact modern displays.</ol>
              <ol>Excellent for changing dynamic content or multiple creatives.</ol>
            </li>
          </ul>

          <h2>Industries that Benefit the Most From Bus Shelter Advertising</h2>
          <p>
            Bus shelters work for virtually every type of business, particularly
            businesses that are dependent on engaging a local audience. The
            following are some of the leading industries:
          </p>
          <ul>
            <li>Hospitals &amp; Clinics</li>
            <li>Educational Institutions</li>
            <li>Developments in Real Estate</li>
            <li>FMCG &amp; Retail Brands</li>
            <li>Food &amp; Beverage locations</li>
            <li>E-commerce</li>
            <li>Automotive Brands</li>
            <li>Politicians and Corporators</li>
            <li>Government Campaigns</li>
            <li>Financial &amp; Banking Services</li>
          </ul>
          <p>
            We are here to ensure that your message reaches the right audience
            through our powerful hyperlocal network.
          </p>

          {/* <h2>Why Choose Brand Banao.AI for Bus Shelter Advertising?</h2> */}
          {/* <ol>

            <li>
              <strong>Maharashtra&apos;s Largest OOH Network</strong>
              <p>
                With planetary coverage across Konkan, North Maharashtra,
                West Maharashtra, Marathwada, and Vidarbha, we provide
                exceptional geographical coverage for your brand.
              </p>
            </li>

            <li>
              <strong>Concerning 16+ Years of experience in OOH advertising</strong>
              <p>
                PANA Enterprises provides 15 years of experience in outdoor
                advertising to each and every campaign
              </p>
            </li>

            <li>
              <strong>The value of OOH homeless and target </strong>
              <p>
                Real media, Media we own. <br />
                Our own bus shelters - meaning:
              </p>
              <ul>
                <li>IMMEDIATE AVAILABILITY.</li>
                <li>BETTER PRICING.</li>
                <li>QUICKER TURNAROUND TIMES.</li>
                <li>Ongoing reporting.</li>
              </ul>
            </li>
            <br />

            <li>
              <strong>360° Campaign Support</strong>
              <p>We handle everything in-house from planning to execution.</p>
            </li>

            <li>
              <strong>High ROI and Transparency of Reporting</strong>
              <p>
                We just focus on performance-based outdoor campaigns backed by:
              </p>
              <ul>
                <li>Photo reports</li>
                <li>Monitoring updates</li>
                <li>Planning tools powered by AI</li>
              </ul>
            </li>

          </ol> */}
          {/* <p>When you compare the top 3 advertising agencies specialising in bus shelters
            within Maharashtra, it's fair to say that Brand Banao.AI is an excellent option
            because it offers an integrated solution through proprietary inventory, planning
            proficiency, creativity, and operational rigour. We have extensive on-the-ground
            activity with a performance-first outlook and are one of the leading top outdoor
            advertising agencies in Maharashtra to support brands looking for measurable
            impressions, trustworthy data, and superior placement strategies.</p> */}
        </div>

        <div className="hoarding-content faq-section">
          <h2>Bus Shelter Advertising FAQs</h2>
          <div className="faq-list">
            {FAQ_ITEMS.map((faq, index) => {
              const isActive = activeFaqIndex === index;
              return (
                <div className={`faq-item ${isActive ? "active" : ""}`} key={index}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setActiveFaqIndex(isActive ? null : index)}
                    aria-expanded={isActive}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-icon">{isActive ? "−" : "+"}</span>
                  </button>

                  <div className={`faq-answer ${isActive ? "open" : ""}`}>
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hoarding-content">{/* Reserved for CTAs/forms */}</div>
      </div>
    </>
  );
};

export default BusShelterBranding;
