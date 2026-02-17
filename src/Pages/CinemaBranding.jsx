import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import cinemaImg from "../Images/cinemabranding.webp";
import "./tvNews.css";

const CinemaBranding = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const images = useMemo(() => [cinemaImg], []);

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
  const PAGE_URL = "https://brandbanao.ai/cinema";
  const BRAND_NAME = "BrandBanao.ai";
  const OG_IMAGE = "https://brandbanao.ai/assets/cinemabranding-BROdYWzQ.webp";

  const FAQ_ITEMS = useMemo(
    () => [
      {
        question:
          "Which is the best cinema advertising agency in Nashik and Maharashtra?",
        answer:
          "BrandBanao.ai is a trusted cinema advertising partner in Nashik and across Maharashtra. We plan campaigns across multiplex and regional cinema networks (subject to inventory availability), manage creative formatting, scheduling, approvals, and execution—so your brand gets high-attention visibility in a distraction-free environment.",
      },
      {
        question:
          "Why is BrandBanao.ai considered a top cinema branding agency for high-recall advertising?",
        answer:
          "Because cinema advertising needs the right mix of screens, show timing, and frequency—not just a booking. We recommend cinemas and schedules based on audience fit, keep the ad crisp and compliant with theatre specs, and ensure smooth rollout with documentation—helping brands build strong recall and premium perception.",
      },
      {
        question:
          "How much does cinema advertising cost in Nashik? What are movie theatre advertising rates?",
        answer:
          "Cinema advertising rates depend on the cinema network, number of screens, ad duration (10/15/20 seconds), slot type (pre-show or interval), show frequency, and campaign length (7 days, 2 weeks, 1 month, etc.). We share transparent options so you can choose a plan based on expected reach and frequency.",
      },
      {
        question:
          "Can you run cinema ads in PVR, Cinépolis, and other multiplex networks?",
        answer:
          "Yes—where inventory is available in your target city. We can plan across popular multiplex networks as well as regional chains, and suggest the best network mix based on audience profile, locations, and budget for Nashik and Maharashtra.",
      },
      {
        question:
          "How fast can a cinema campaign go live, and do you provide confirmation/reporting?",
        answer:
          "Go-live timelines depend on inventory availability, creative readiness, and approvals. Once the plan is finalized, we share the start date and show schedule, and provide confirmation/documentation as available from the cinema network after execution.",
      },
    ],
    []
  );


  const keywordsContent = useMemo(
    () =>
      [
        "cinema advertising Nashik",
        "cinema branding Nashik",
        "movie theatre advertising Nashik",
        "theatre advertising",
        "multiplex advertising",
        "PVR cinema advertising",
        "Cinépolis advertising",
        "pre show ads",
        "interval ads",
        "cinema advertising rates",
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
          name: "Cinema Branding in Nashik | Cinema Advertising Services",
          headline: "Cinema Branding & Advertising Services",
          description:
            "Turn movie halls into immersive storytelling platforms with on-screen and off-screen cinema advertising, planned and executed end-to-end by BrandBanao.ai.",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://brandbanao.ai/#website" },
          about: { "@id": orgId },
          mainEntity: { "@id": serviceId },
          primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
        },
        {
          "@type": "Service",
          "@id": serviceId,
          name: "Cinema Branding & Cinema Advertising",
          serviceType: ["Cinema Advertising", "Offline Advertising", "Branding"],
          provider: { "@id": orgId },
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "State", name: "Maharashtra" },
            { "@type": "City", name: "Nashik" },
          ],
          url: PAGE_URL,
          description:
            "Cinema advertising with on-screen and off-screen placements across multiplex and regional networks, including planning, scheduling, approvals, and execution.",
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${PAGE_URL}#breadcrumbs`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}services/` },
            { "@type": "ListItem", position: 3, name: "Cinema Branding", item: PAGE_URL },
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
  }, [BRAND_NAME, FAQ_ITEMS, PAGE_URL]);

  const metaDescription =
    "Cinema Branding Services by BrandBanao.ai. Turn movie halls into immersive storytelling platforms with on-screen and off-screen cinema advertising across multiplexes and regional networks, with end-to-end planning and execution.";

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Cinema Branding in Nashik | BrandBanao.ai</title>
        <meta name="author" content={BRAND_NAME} />
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="keywords" content={keywordsContent} />
        <link rel="icon" href={OG_IMAGE} />
        <link rel="apple-touch-icon" href={OG_IMAGE} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={BRAND_NAME} />
        <meta property="og:title" content="Cinema Branding & Advertising | BrandBanao.ai" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="BrandBanao.ai - Cinema Branding" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cinema Branding | BrandBanao.ai" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="BrandBanao.ai - Cinema Branding" />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="hoarding-page">
        <h1 className="hoarding-title">Cinema Branding</h1>

        <div className="hoarding-image-wrap">
          <img
            src={cinemaImg}
            alt="Cinema Branding"
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
          <div className="gallery-overlay" onClick={() => setShowGallery(false)}>
            <div className="gallery-box" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[currentIndex]}
                alt="Cinema Branding"
                className="gallery-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}

        <div className="hoarding-content">
          <h2>Branding & Advertising Cinema</h2>
          <p>
            Cinema is the most immersive environment for brand communication;
            controlled lighting, large-format visuals, and a distraction-free
            setting create a deep emotional connection between brands and
            audiences. At Brand Banao.AI, we turn movie halls into storytelling
            platforms that drive recall, influence perception, and spur action.
          </p>

          <p>
            Unlike any other offline medium, cinema promises actual visibility.
            Viewers are seated, attentive, and receptive and, hence, it's an
            ideal space to introduce brands, reinforce campaigns, or launch
            high-impact messages. We work with top movie theater advertising
            companies to ensure smooth execution across premium multiplexes and
            regional cinema networks.
          </p>

          <h2>Why Cinema Works for Brands</h2>
          <p>
            Movie theater advertising gives rise to consistent exposure across
            shows and days for the delivery of frequency without fatigue. Being
            one of the experienced cinema advertising companies, Brand Banao.AI
            undertakes focused planning matching movie genres with show timings
            and locations to your target audience.
          </p>

          <p>
            We produce effective cinematic advertisements that incorporate
            audio, visual, and storytelling elements. All of our work – from
            branded films to animated creations – utilizes every single second
            of the commissioned content in order to aid in developing trust and
            recognition. Regional campaigns can use this level of connection to
            deeply engage local audiences, allowing for meaningful brand affinity
            at the community level.
          </p>

          <h2>End-to-End Cinema Advertising Solutions</h2>
          <p>
            We manage every aspect of a cinema advertisement campaign from
            planning through execution, so you need not worry about any part of
            the process. In addition to the cinema screen, we also coordinate
            all of the promotional efforts associated with the campaign and
            ensure that it achieves maximum visibility through the use of
            multiple touch point options within the cinema ecosystem.
          </p>

          <p>Our services range from</p>

          <ul>
            <li>
              Our regional targeting capabilities allow us to effectively reach
              audiences located in metropolitan and non-metropolitan areas.
            </li>
            <li>
              We create advertising campaigns designed for maximum viewer
              impact, which utilises the greatest amount of time possible for
              advertisement viewing.
            </li>
            <li>
              Full-service cinema advertising agency in strategic campaign
              management
            </li>
            <li>
              We also integrate offline storytelling with digital amplification
              through cinema and video advertising, extending campaign life
              beyond the theatre.
            </li>
          </ul>

          <h2>On-Screen & Off-Screen Excellence</h2>
          <p>
            We use high-definition cinema screens to display advertisements for
            the crystal-clear quality of the image and amazing audio sound
            quality. We execute campaigns across premium chains, including
            Cinépolis advertising; hence, we can reach out to the modern
            multiplex audiences. Our planning will also include impactful movie
            screen advertising for maximum brand recall.
          </p>

          <p>
            By leveraging the national footprint of established movie theatre
            advertising agencies, we offer assured execution for:
          </p>

          <ul>
            <li>High-impact on screen movie theater advertising formats</li>
            <li>Lobby displays and foyer-based theatre advertising reach</li>
            <li>
              Large-scale campaigns through trusted theatre advertising agencies
            </li>
          </ul>

          <p>
            Premium placements are also provided via PVR Cinemas advertising,
            highly suitable for brands that target the metro and high-income
            audience.
          </p>

          <h2>Results Through Strategic Planning</h2>
          <p>
            All campaigns are tailor-made according to the behavior of the
            audience, city tier, category of film, and Return on Investment.
            With Brand Banao.AI, we assist in selecting the best options for the
            most powerful mix of cinema advertising options, in terms of reach
            and frequency to engage your target market, and the desired impact
            to create lasting impressions with your customers. Through Brand
            Banao.AI, we can help you create your complete cinema advertising
            experience.
          </p>
        </div>

        <div className="hoarding-content faq-section">
          <h2>Cinema Advertising FAQs</h2>
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

export default CinemaBranding;