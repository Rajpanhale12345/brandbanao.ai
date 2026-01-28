import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./busShelter.css";

import hoarding1 from "../Images/hoarding.jpg";
import hoarding2 from "../Images/award2.png";
import hoarding3 from "../Images/award5.png";
import hoarding4 from "../Images/busbranding.jpg";

const HoardingBranding = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const images = useMemo(() => [hoarding1, hoarding2, hoarding3, hoarding4], []);

  const openGallery = useCallback((index) => {
    setCurrentIndex(index);
    setShowGallery(true);
  }, []);

  const closeGallery = useCallback(() => setShowGallery(false), []); // ✅ FIX

  // ✅ FIX: ESC closes gallery
  useEffect(() => {
    if (!showGallery) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeGallery();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showGallery, closeGallery]);

  const SITE_URL = "https://brandbanao.ai/";
  const PAGE_URL = "https://brandbanao.ai/hoardings";
  const BRAND_NAME = "BrandBanao.ai"; // ✅ FIX: consistent naming
  const OG_IMAGE = "https://brandbanao.ai/assets/logopng-CGGCs8OD.png";

  const PAGE_TITLE = "Hoardings in Nashik | Billboard Advertising | BrandBanao.ai"; // ✅ FIX: less “Best” spam
  const PAGE_DESC =
    "Billboard and hoarding advertising by BrandBanao.ai. Prime locations, creative design, printing, installation, maintenance, and reporting for strong visibility across Maharashtra.";

  // ✅ FIX: ONE FAQ source used for UI + JSON-LD (no duplicates)
  const FAQ_ITEMS = useMemo(
    () => [
      {
        question: "Which is a trusted 360° advertising agency in Maharashtra?",
        answer:
          "BrandBanao.ai provides a 360° mix of outdoor and digital marketing services, combining strategy, creative and execution with 16+ years of experience.",
      },
      {
        question: "Do you provide hoarding and billboard advertising across Maharashtra?",
        answer:
          "Yes. We plan and execute hoarding campaigns across key cities and highways in Maharashtra, including location planning, creative support, printing, installation, and maintenance.",
      },
      {
        question: "How do you choose hoarding locations?",
        answer:
          "Locations are selected using traffic flow, sightlines, audience relevance, and proximity to commercial hubs—so campaigns balance reach and frequency effectively.",
      },
      {
        question: "Which industries benefit from hoarding advertising?",
        answer:
          "Real estate, retail, healthcare, education, hospitality, FMCG and corporate brands commonly use hoardings for high visibility and brand recall.",
      },
      {
        question: "Do you offer LED/digital hoardings?",
        answer:
          "Yes. Depending on availability, we can plan digital/LED hoardings and advise the best format based on objectives and budget.",
      },
      {
        question: "How can I book a hoarding with BrandBanao.ai?",
        answer:
          "You can connect via phone/WhatsApp or the website. Share your target locations, timeline and budget, and our team will propose the best available options.",
      },
    ],
    []
  );

  // ✅ FIX: Single JSON-LD @graph (stronger for AI search)
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
          url: SITE_URL,
          name: BRAND_NAME,
          publisher: { "@id": orgId },
          inLanguage: "en-IN",
        },
        {
          "@type": "Organization",
          "@id": orgId,
          name: BRAND_NAME,
          url: SITE_URL,
          logo: OG_IMAGE,
        },
        {
          "@type": "WebPage",
          "@id": pageId,
          url: PAGE_URL,
          name: "Hoarding / Billboard Advertising",
          headline: "Hoarding & Billboard Advertising in Maharashtra",
          description: PAGE_DESC,
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://brandbanao.ai/#website" },
          about: { "@id": orgId },
          mainEntity: { "@id": serviceId },
          primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
        },
        {
          "@type": "Service",
          "@id": serviceId,
          name: "Hoarding & Billboard Advertising",
          serviceType: ["OOH Advertising", "Billboard Advertising", "Outdoor Advertising"],
          provider: { "@id": orgId },
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "State", name: "Maharashtra" },
          ],
          url: PAGE_URL,
          description:
            "Outdoor hoarding and billboard advertising including location planning, creative design, printing, installation, maintenance and reporting across Maharashtra.",
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${PAGE_URL}#breadcrumbs`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}services/` },
            { "@type": "ListItem", position: 3, name: "Hoardings", item: PAGE_URL },
          ],
        },
        {
          "@type": "FAQPage",
          "@id": `${PAGE_URL}#faq`,
          mainEntity: FAQ_ITEMS.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        },
      ],
    };
  }, [FAQ_ITEMS, PAGE_URL, PAGE_DESC]);

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-IN" }}> 
        <meta charSet="utf-8" />
        <title>{PAGE_TITLE}</title> 
        <meta name="author" content={BRAND_NAME} /> 
        <meta name="description" content={PAGE_DESC} />         
        <meta name="keywords" content="hoardings Nashik, billboard advertising Maharashtra, outdoor advertising, OOH advertising, digital hoardings, LED billboards" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="publisher" content={BRAND_NAME} /> 
        <meta name="theme-color" content="#000000" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <link rel="canonical" href={PAGE_URL} /> 
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={BRAND_NAME} /> 
        <meta property="og:title" content={PAGE_TITLE} /> 
        <meta property="og:description" content={PAGE_DESC} /> 
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} /> 
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} /> 
        <meta name="twitter:description" content={PAGE_DESC} /> 
        <meta name="twitter:image" content={OG_IMAGE} /> 

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="hoarding-page">
        <h1 className="hoarding-title">Hoarding / Billboard Advertising</h1>

        <div className="hoarding-image-wrap">
          <img
            src={hoarding1}
            alt="Hoarding branding example by Brand Banao.AI"
            className="hoarding-image"
            onClick={() => openGallery(0)}
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
                alt="Hoarding advertising gallery - Brand Banao.AI"
                className="gallery-img"
              />
            </div>
          </div>
        )}

        <div className="hoarding-content">
          <h2>About Our Hoarding Services</h2>
          <p>
            Every morning, Nashik wakes up to a city full of stories. Some fade
            with the sunlight, some whisper behind the billboards, but some?
            Some own the streets. Their colors spread across crossroads, their
            words walk through the traffic, and their impact spills over long
            after people have already passed.
          </p>
          <p>That is what a hoarding done right can do.</p>
          <p>That is the magic BrandBanao.ai brings to your brand.</p>
          <p>We don't put up hoardings, we create landmarks.</p>

          <h2>Our Approach to Hoarding Advertising</h2>
          <p>At BrandBanao.ai, every hoarding is a conversation with the city.</p>
          <p>It begins with your brand story yet doesn't end with it.</p>
          <p>
            It speaks in visuals, in fonts, in emotions, everything that
            transcends noise and compels people to look up.
          </p>
          <p>
            We are the hoarding advertising company that ensures your brand not
            only “appears” but arrives.
          </p>

          <h2>Complete Hoarding Advertising Services</h2>
          <ul>
            <li>Creative hoarding design</li>
            <li>High-quality printing</li>
            <li>Outdoor installation</li>
            <li>Daily/weekly/monthly maintenance</li>
            <li>LED hoarding advertising</li>
            <li>Temporary hoardings for building sites</li>
            <li>Creative hoarding design templates</li>
          </ul>
          <p>
            Every BrandBanao.ai hoarding turns your story into a silhouette
            across the skyline.
          </p>

          <h2>Hoardings Created with Care; Placed for Purpose</h2>
          <p>We ask: “What do you want people to feel when they look up?”</p>
          <p>This transforms:</p>
          <ul>
            <li>Real estate hoardings into construction site love letters</li>
            <li>3D hoardings into dimension-shifting monologues</li>
            <li>Eco-friendly hoardings into literary experiments</li>
            <li>Luxury brand hoardings into poetry a million eyes read</li>
          </ul>
          <p>Every frame holds a thought and every thought counts.</p>

          <h2>Precision, Quality &amp; Consistency</h2>
          <p>Our strength: precision.</p>
          <p>
            Every campaign, LED hoarding advertising, outdoor hoarding services,
            daily maintenance checklists are all managed with care.
          </p>
          <p>Freshness stays from day one to day 30.</p>

          <h2>Strategic Hoarding Locations</h2>
          <p>Every corner has a story. Let yours be the loudest.</p>
          <p>We don't just find you a spot; we find you a presence.</p>
          <ul>
            <li>Prime hoarding locations in Nashik</li>
            <li>High-traffic hoarding sites across Maharashtra</li>
            <li>Busy roads, near malls, prime real estate corridors</li>
          </ul>
          <p>
            Presence isn't about going everywhere. It's about going exactly
            where you should.
          </p>

          <h2>Transparent Pricing &amp; Measurable Impact</h2>
          <p>Numbers Matter - But Impact Matters More.</p>
          <p>Transparent execution includes:</p>
          <ul>
            <li>Hoarding board material types</li>
            <li>Printing costs</li>
            <li>Daily rates</li>
            <li>ROI on hoarding advertisement</li>
          </ul>
          <p>Our goal: make every impression measurable and meaningful.</p>

          <h2>Why Brands Choose Hoardings Over Billboards</h2>
          <p>Billboards talk. Hoardings converse.</p>
          <p>A billboard yells from far away.</p>
          <p>A hoarding stands right where decisions are made.</p>
          <p>A well-designed hoarding says: We're here. We're trusted. We belong.</p>

          <h2>Industries We Serve</h2>
          <ul>
            <li>Real Estate</li>
            <li>Retail</li>
            <li>Healthcare</li>
            <li>Education</li>
          </ul>
          <p>Our designs have:</p>
          <ul>
            <li>Sold homes</li>
            <li>Launched hospitals</li>
            <li>Promoted schools</li>
            <li>Celebrated causes</li>
          </ul>
          <p>
            Creative hoardings for new property launches, construction safety
            boards, and corporate campaigns.
          </p>

          <h2>Brand Impact</h2>
          <p>A brand that stands tall, literally.</p>
          <p>Bold. Alive. Un-missable.</p>
          <p>For one second, the city freezes, and your message stays.</p>

          <h2>Why BrandBanao.ai</h2>
          <p>Not just billboards, opportunities for awareness.</p>
          <p>Your story. Our skyline.</p>
          <p>From blueprints to publishing.</p>
          <p>From economical to premium hoarding installation in Nashik.</p>
          <p>We make your brand rise visibly, beautifully, and responsibly.</p>

          <h2>24/7 Outdoor Presence</h2>
          <p>In a digital-cluttered world, the billboard stands straight.</p>
          <p>24 hours a day.</p>
          <p>7 days a week.</p>
          <p>Wordlessly telling your story to the world passing by.</p>

          <h2>Final Note</h2>
          <p>BrandBanao.ai - Best Hoarding Advertising Company in Nashik.</p>
          <p>For brands that want to be acknowledged and heard.</p>
          <p>
            For those who believe great advertising belongs in the sky, not just
            the screen.
          </p>
          <p>Let's create your brand, the city's heritage.</p>
        </div>


        <div className="hoarding-content faq-section">
          <h2>Hoarding Advertising FAQs</h2>
          <div className="faq-list">
            {FAQ_ITEMS.map((faq, index) => {
              const isActive = activeFaqIndex === index;

              return (
                <div className={`faq-item ${isActive ? "active" : ""}`} key={index}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setActiveFaqIndex(isActive ? null : index)}
                    aria-expanded={isActive} // ✅ FIX
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-icon">{isActive ? "−" : "+"}</span> {/* ✅ FIX: consistent */}
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

        <div className="hoarding-content">{/* Reserved */}</div>
      </div>
    </>
  );
};

export default HoardingBranding;