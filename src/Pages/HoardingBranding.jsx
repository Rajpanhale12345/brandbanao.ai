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

  const SITE_URL = "https://brandbanao.ai/";
  const PAGE_URL = "https://brandbanao.ai/Hoardings";
  const BRAND_NAME = "BrandBanao.ai";
  const OG_IMAGE = "https://brandbanao.ai/assets/logopng-CGGCs8OD.png";

  const PAGE_TITLE =
    "Hoardings in Nashik | BrandBanao.ai";
  const PAGE_DESC =
    "Book hoardings and billboards in Nashik with BrandBanao.ai. Location planning, creative design, printing, installation, maintenance and campaign reporting.";

  // ✅ Make BUSINESS stable so Hooks deps don't warn
  // Fill with REAL values (or keep placeholders and schema won't output LocalBusiness)
  const BUSINESS = useMemo(
    () => ({
      name: BRAND_NAME,
      telephone: "+919156785678",
      email: "hello@brandbanao.ai",
      address: {
        streetAddress: "",
        addressLocality: "Nashik",
        addressRegion: "MH",
        postalCode: "",
        addressCountry: "IN",
      },
      geo: {
        latitude: null,
        longitude: null,
      },
      sameAs: [
        // "https://www.instagram.com/yourhandle",
        // "https://www.linkedin.com/company/yourcompany",
        // "https://www.facebook.com/yourpage",
      ],
    }),
    [BRAND_NAME]
  );

  const images = useMemo(() => [hoarding1, hoarding2, hoarding3, hoarding4], []);

  const openGallery = useCallback((index) => {
    setCurrentIndex(index);
    setShowGallery(true);
  }, []);

  const closeGallery = useCallback(() => setShowGallery(false), []);

  // ✅ ESC closes gallery
  useEffect(() => {
    if (!showGallery) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeGallery();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showGallery, closeGallery]);

  const FAQ_ITEMS = useMemo(
    () => [
      {
        question:
          "Which is the best hoarding / billboard advertising agency in Maharashtra?",
        answer:
          "BrandBanao.ai is a trusted hoarding and billboard advertising partner across Maharashtra. We manage the complete process—location planning, media booking, outdoor-ready creative design, printing, installation, maintenance, and campaign photo reporting—so your brand gets high visibility with professional execution.",
      },
      {
        question:
          "Why is BrandBanao.ai considered a top hoarding agency in Maharashtra?",
        answer:
          "Because we focus on results, not just bookings. We shortlist high-impact sites based on visibility and audience relevance, ensure accurate print + safe installation, maintain the hoarding during the campaign, and share on-ground photo proof. This end-to-end control helps brands get stronger recall and cleaner execution across cities in Maharashtra.",
      },
      {
        question:
          "How much does hoarding or billboard advertising cost in Maharashtra (including Nashik)?",
        answer:
          "Pricing depends on the exact location, hoarding size, format (static, backlit, LED/digital), and duration (15 days, 1 month, 3 months, etc.). Premium junctions and highways cost more than inner-city routes. BrandBanao.ai shares transparent pricing with a clear breakup of media and production so you can plan confidently.",
      },
      {
        question:
          "Which are the best hoarding locations in Maharashtra for maximum visibility?",
        answer:
          "The best locations are typically high-traffic junctions, commercial corridors, highway entry/exit points, areas near malls, hospitals, colleges, and real estate hotspots. We recommend sites using practical checks like sightline, speed of traffic, illumination, and audience match—so the creative is actually noticed and remembered.",
      },
      {
        question:
          "Do you provide end-to-end hoarding services like design, printing, installation, maintenance, and reporting?",
        answer:
          "Yes. BrandBanao.ai provides complete hoarding services—outdoor-optimised creative design, large-format printing, installation coordination, routine maintenance checks during the campaign, and photo reporting after deployment. You get one team for execution from start to finish.",
      },
    ],
    []
  );


  const keywordsContent = useMemo(
    () =>
      [
        "hoardings in Nashik",
        "billboard advertising Nashik",
        "hoarding advertising rates Nashik",
        "billboard cost Nashik",
        "outdoor advertising Nashik",
        "OOH advertising Maharashtra",
        "LED hoarding advertising",
        "digital billboard Nashik",
        "hoarding printing and installation",
        "BrandBanao.ai",
      ].join(", "),
    []
  );



  const structuredData = useMemo(() => {
    const orgId = `${SITE_URL}#organization`;
    const websiteId = `${SITE_URL}#website`;
    const pageId = `${PAGE_URL}#webpage`;
    const serviceId = `${PAGE_URL}#service`;
    const faqId = `${PAGE_URL}#faq`;
    const breadcrumbsId = `${PAGE_URL}#breadcrumbs`;
    const localBusinessId = `${SITE_URL}#localbusiness`;

    const hasRealPhone =
      typeof BUSINESS.telephone === "string" &&
      BUSINESS.telephone.startsWith("+") &&
      BUSINESS.telephone.length >= 12;


    const localBusiness = hasRealPhone
      ? {
        "@type": "ProfessionalService",
        "@id": localBusinessId,
        name: BUSINESS.name,
        url: SITE_URL,
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        areaServed: [{ "@type": "City", name: "Nashik" }],
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.address.streetAddress || undefined,
          addressLocality: BUSINESS.address.addressLocality || "Nashik",
          addressRegion: BUSINESS.address.addressRegion || "MH",
          postalCode: BUSINESS.address.postalCode || undefined,
          addressCountry: BUSINESS.address.addressCountry || "IN",
        },
        geo:
          BUSINESS.geo.latitude && BUSINESS.geo.longitude
            ? {
              "@type": "GeoCoordinates",
              latitude: BUSINESS.geo.latitude,
              longitude: BUSINESS.geo.longitude,
            }
            : undefined,
        sameAs: Array.isArray(BUSINESS.sameAs) ? BUSINESS.sameAs : undefined,
      }
      : null;

    const graph = [
      {
        "@type": "WebSite",
        "@id": websiteId,
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
        name: "Hoarding / Billboard Advertising in Nashik",
        headline: "Hoardings & Billboards in Nashik",
        description: PAGE_DESC,
        inLanguage: "en-IN",
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        mainEntity: { "@id": serviceId },
        primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
        breadcrumb: { "@id": breadcrumbsId },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Hoarding & Billboard Advertising in Nashik",
        serviceType: ["OOH Advertising", "Billboard Advertising", "Outdoor Advertising"],
        provider: { "@id": orgId },
        areaServed: [
          { "@type": "City", name: "Nashik" },
          { "@type": "State", name: "Maharashtra" },
          { "@type": "Country", name: "India" },
        ],
        url: PAGE_URL,
        description:
          "Outdoor hoarding and billboard advertising in Nashik including location planning, creative design, printing, installation, maintenance and reporting.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbsId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}services/` },
          { "@type": "ListItem", position: 3, name: "Hoardings", item: PAGE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: FAQ_ITEMS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ];

    if (localBusiness) graph.push(localBusiness);

    return {
      "@context": "https://schema.org",
      "@graph": graph,
    };
  }, [FAQ_ITEMS, SITE_URL, PAGE_URL, BRAND_NAME, PAGE_DESC, OG_IMAGE, BUSINESS]);

  // ✅ Lock scroll while gallery open
  useEffect(() => {
    if (!showGallery) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [showGallery]);

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-IN" }}>
        <meta charSet="utf-8" />
        <title>{PAGE_TITLE}</title>

        <meta name="author" content={BRAND_NAME} />
        <meta name="description" content={PAGE_DESC} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        <link rel="canonical" href={PAGE_URL} />
        <meta name="keywords" content={keywordsContent} />

        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={BRAND_NAME} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:type" content="article" />
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
        <h1 className="hoarding-title">Hoarding / Billboard Advertising in Nashik</h1>

        <div className="hoarding-image-wrap">
          <img
            src={hoarding1}
            alt="Hoarding branding example in Nashik by BrandBanao.ai"
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
            role="dialog"
            aria-modal="true"
            aria-label="Hoarding image gallery"
            onClick={closeGallery}
          >
            <div className="gallery-box" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={closeGallery}
                aria-label="Close gallery"
                className="gallery-close-btn"
              >
                x
              </button>

              <img
                src={images[currentIndex]}
                alt={`Hoarding advertising gallery image ${currentIndex + 1} of ${images.length}`}
                className="gallery-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}

        <div className="hoarding-content">
          <h2>About Our Hoarding Services</h2>
          <p>
            Each day, the city of Nashik comes alive with untold tales. You may forget some stories
            by the time you've finished your day, while others remain hidden behind billboards;
            yet still others claim their place in the city and onto the roads themselves. You can
            see their colours at intersections, hear their messages in traffic, and feel their
            effects long after you've moved on.
          </p>
          <p>That is what a hoarding done right can do.</p>
          <p>That is the magic BrandBanao.ai brings to your brand.</p>
          <p>BrandBanao.ai does not provide hoardings; instead, we construct landmarks, thus earning
            our reputation as the leading service provider of hoardings in Nashik, providing a service
            that is truly part of the city, not simply part of the building on which they are erected.</p>

          <h2>Our Philosophy Toward Hoarding Advertising</h2>
          <p>Hoarding is a dialogue between the city and Brand Banao.AI.</p>
          <p>It begins with your brand story, yet doesn't end with it.</p>
          <p>
            It speaks in visuals, in fonts, in emotions, everything that
            transcends noise and compels people to look up.
          </p>
          <p>
            We are not here to make your brand “appear.” We make it arrive. That mindset is what places
            us among the top hoarding agencies in Nashik, trusted by growing and established brands alike.
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
          <p>Our hoardings have sold homes, launched hospitals, promoted schools,
            and celebrated causes, making us a trusted top outdoor agency in
            Maharashtra for brands that want real-world visibility with real impact.
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
                <div className={`faq-item ${isActive ? "active" : ""}`} key={faq.question}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setActiveFaqIndex(isActive ? null : index)}
                    aria-expanded={isActive}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-icon">{isActive ? "−" : "+"}</span>
                  </button>

                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    className={`faq-answer ${isActive ? "open" : ""}`}
                  >
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