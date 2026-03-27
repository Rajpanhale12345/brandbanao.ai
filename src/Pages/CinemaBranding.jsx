import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import cinemaImg from "../Images/cinemabranding.webp";
import "./tvNews.css";

const SITE_URL = "https://brandbanao.ai";
const PAGE_PATH = "/cinema";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const BRAND_NAME = "Brand Banao.Ai";
const OG_IMAGE = "https://brandbanao.ai/assets/cinemabranding-BROdYWzQ.webp";

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

  const FAQ_ITEMS = useMemo(
    () => [
      {
        question: "Which is the best cinema advertising agency in Nashik and Maharashtra?",
        answer:
          "Brand Banao.Ai is a trusted cinema advertising partner in Nashik and across Maharashtra. We plan campaigns across multiplex and regional cinema networks, manage creative formatting, scheduling, approvals, and execution for high-attention brand visibility.",
      },
      {
        question: "Why is Brand Banao.Ai considered a top cinema branding agency for high-recall advertising?",
        answer:
          "We recommend cinema screens, show timings, and campaign frequency based on audience fit, while managing creative compliance, scheduling, and execution to improve brand recall and campaign efficiency.",
      },
      {
        question: "How much does cinema advertising cost in Nashik?",
        answer:
          "Cinema advertising rates depend on the network, number of screens, ad duration, slot type, frequency, and campaign length. We provide transparent options based on reach, frequency, and budget.",
      },
      {
        question: "Can you run cinema ads in PVR, Cinépolis, and other multiplex networks?",
        answer:
          "Yes, subject to inventory availability. We help plan across multiplex and regional cinema networks based on target audience, geography, and budget.",
      },
      {
        question: "How fast can a cinema campaign go live, and do you provide reporting?",
        answer:
          "Timelines depend on inventory, approvals, and creative readiness. Once finalized, we share schedules and available execution confirmations from the cinema network.",
      },
    ],
    []
  );

  const metaTitle = "Cinema Branding in Nashik | Cinema Advertising Services | Brand Banao.Ai";
  const metaDescription =
    "Cinema branding and advertising services in Nashik by Brand Banao.Ai. Plan on-screen and off-screen cinema campaigns across multiplex and regional theatre networks with end-to-end execution.";

  const structuredData = useMemo(() => {
    const orgId = `${SITE_URL}/#organization`;
    const websiteId = `${SITE_URL}/#website`;
    const webpageId = `${PAGE_URL}#webpage`;
    const serviceId = `${PAGE_URL}#service`;
    const breadcrumbId = `${PAGE_URL}#breadcrumbs`;
    const faqId = `${PAGE_URL}#faq`;

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": orgId,
          name: BRAND_NAME,
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: OG_IMAGE
          }
        },
        {
          "@type": "WebSite",
          "@id": websiteId,
          url: SITE_URL,
          name: BRAND_NAME,
          publisher: { "@id": orgId },
          inLanguage: "en-IN"
        },
        {
          "@type": "WebPage",
          "@id": webpageId,
          url: PAGE_URL,
          name: metaTitle,
          headline: "Cinema Branding & Advertising Services in Nashik",
          description: metaDescription,
          inLanguage: "en-IN",
          isPartOf: { "@id": websiteId },
          about: { "@id": orgId },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: OG_IMAGE
          },
          breadcrumb: { "@id": breadcrumbId },
          mainEntity: { "@id": serviceId }
        },
        {
          "@type": "Service",
          "@id": serviceId,
          name: "Cinema Branding & Advertising",
          url: PAGE_URL,
          description:
            "Cinema advertising services including on-screen and off-screen branding, campaign planning, scheduling, approvals, and execution across multiplex and regional cinema networks.",
          provider: { "@id": orgId },
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "State", name: "Maharashtra" },
            { "@type": "City", name: "Nashik" }
          ],
          serviceType: "Cinema Advertising"
        },
        {
          "@type": "BreadcrumbList",
          "@id": breadcrumbId,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${SITE_URL}/`
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Cinema Branding",
              item: PAGE_URL
            }
          ]
        },
        {
          "@type": "FAQPage",
          "@id": faqId,
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        }
      ]
    };
  }, [FAQ_ITEMS, metaDescription, metaTitle]);

  return (
    <>
      <Helmet prioritizeSeoTags>
        <html lang="en-IN" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="author" content={BRAND_NAME} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={BRAND_NAME} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Cinema branding and advertising by Brand Banao.Ai" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Cinema branding and advertising by Brand Banao.Ai" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="hoarding-page">
        <h1 className="hoarding-title">Cinema Branding in Nashik</h1>

        <div className="hoarding-image-wrap">
          <img
            src={cinemaImg}
            alt="Cinema branding advertising campaign display"
            className="hoarding-image"
            onClick={() => openGallery(0)}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width="1200"
            height="675"
          />
        </div>

        {showGallery && (
          <div className="gallery-overlay" onClick={closeGallery}>
            <div className="gallery-box" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[currentIndex]}
                alt="Cinema branding campaign visual"
                className="gallery-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}

        <div className="services-content">
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

        <div className="services-content">{/* Reserved for CTAs/forms */}</div>
      </div>
    </>
  );
};

export default CinemaBranding;