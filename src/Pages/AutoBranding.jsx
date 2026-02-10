import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import Autobranding from "../Images/autobranding.jpg";
import "./tvNews.css";

const FAQ_ITEMS = [
  {
    question:
      "Do you provide auto branding and auto rickshaw advertising in Nashik and across Maharashtra?",
    answer:
      "Yes. BrandBanao.ai plans and executes auto branding campaigns in Nashik and across Maharashtra. We help you choose the right areas and routes, then manage creative, printing, pasting/wrapping, and monitoring so your brand gets consistent street-level visibility.",
  },
  {
    question:
      "What are auto branding rates in Nashik? How much does auto rickshaw advertising cost?",
    answer:
      "Auto branding cost depends on the branding type (full wrap, side panel, back panel), number of autos, campaign duration (15 days, 1 month, etc.), and the areas/routes you want to cover. We provide transparent pricing with a clear split between production (printing/wrapping) and campaign execution/monitoring.",
  },
  {
    question:
      "What auto rickshaw branding options do you offer—full wrap, back panel, or side panel?",
    answer:
      "We offer full auto wraps for maximum visibility and high recall, back panels for strong impact in traffic, and side panels for pedestrian visibility in markets and busy streets. We recommend the best format based on your budget and the kind of audience you want to reach.",
  },
  {
    question:
      "Can you run route-based or area-wise auto advertising campaigns in Nashik?",
    answer:
      "Yes. We can plan route-based and locality-focused campaigns (hyperlocal targeting) so the autos circulate in areas that matter—near markets, colleges, hospitals, business zones, and residential pockets—based on your target customer profile.",
  },
  {
    question:
      "How many autos do I need for a good campaign in Nashik?",
    answer:
      "It depends on your goal and coverage area. Smaller campaigns work well for a focused locality and repeated visibility, while larger fleets help cover multiple zones and improve frequency across the city. We suggest an optimal fleet size after understanding your target areas and campaign duration.",
  },
  {
    question:
      "How long does it take to start an auto branding campaign?",
    answer:
      "Timelines depend on creative finalisation, printing, and wrapping/pasting schedules. Once creatives and fleet count are confirmed, we share a clear rollout plan with expected start dates and monitoring checkpoints.",
  },
  {
    question:
      "Do you provide monitoring and reporting for auto branding campaigns?",
    answer:
      "Yes. We provide campaign monitoring and documentation, and can support route/area tracking and visibility proof as applicable. This helps ensure autos deliver the coverage and frequency promised during the campaign period.",
  },
  {
    question:
      "Is auto branding effective for local businesses in Nashik (real estate, coaching, hospitals, retail, restaurants)?",
    answer:
      "Yes. Auto branding is highly effective for local businesses because it builds familiarity through repeated exposure in the same neighbourhoods. It works especially well for real estate projects, coaching classes, hospitals/clinics, retail stores, restaurants, events, and festive offers—where local recall drives enquiries and walk-ins.",
  },
];




const AutoBranding = () => { // ✅ FIX: cleaner component name (avoid “Autooo”)
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const images = useMemo(() => [AutoBranding], []); // ✅ FIX: memoize and use correct img

  const openGallery = useCallback((index) => {
    setCurrentIndex(index);
    setShowGallery(true);
  }, []);

  const closeGallery = useCallback(() => setShowGallery(false), []); // ✅ FIX: reusable close handler

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
  const PAGE_URL = "https://brandbanao.ai/auto-branding"; // ✅ FIX: keep lowercase canonical (best practice)
  const BRAND_NAME = "BrandBanao.ai"; // ✅ FIX: consistent naming (you mixed Brand Banao.AI / Brand Banao.Ai)
  const OG_IMAGE = "https://brandbanao.ai/assets/logopng-CGGCs8OD.png";

  const keywordsContent = useMemo(
    () =>
      [
        "auto branding Nashik",
        "auto rickshaw advertising Nashik",
        "auto branding rates",
        "auto wrap advertising",
        "auto back panel advertising",
        "mobile advertising Nashik",
        "OOH advertising Nashik",
        "BrandBanao.ai",
      ].join(", "),
    []
  );


  // ✅ FIX: One JSON-LD graph is cleaner than 5 separate blocks
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
          "sameAs": [
            "https://www.instagram.com/brandbanao.ai",
            "https://www.linkedin.com/company/brandbanao-ai",
            "https://www.facebook.com/brandbanao.ai",
          ],
        },
        {
          "@type": "WebPage",
          "@id": pageId,
          "url": PAGE_URL,
          "name": "Auto Branding in Nashik | Auto Rickshaw Advertising",
          "description":
            "Auto branding and auto rickshaw advertising for hyperlocal reach in Nashik and Maharashtra. Mobile outdoor ads with wraps, panels, route-based campaigns, monitoring and reporting.",
          "inLanguage": "en-IN",
          "isPartOf": { "@id": "https://brandbanao.ai/#website" },
          "about": { "@id": orgId },
          "mainEntity": { "@id": serviceId },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": OG_IMAGE,
          },
        },
        {
          "@type": "Service",
          "@id": serviceId,
          "name": "Auto Branding & Auto Rickshaw Advertising",
          "serviceType": ["Mobile Outdoor Advertising", "OOH Advertising"],
          "provider": { "@id": orgId },
          "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "State", "name": "Maharashtra" },
            { "@type": "City", "name": "Nashik" },
          ],
          "url": PAGE_URL,
          "description":
            "Mobile outdoor advertising using auto rickshaw branding: full wraps, back panels, side panels, and route-based hyperlocal campaigns with monitoring and reporting.",
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${PAGE_URL}#breadcrumbs`,
          "itemListElement": [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}services/` }, // ✅ FIX: trailing slash & correct path style
            { "@type": "ListItem", position: 3, name: "Auto Branding", item: PAGE_URL },
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
  }, [BRAND_NAME, OG_IMAGE, PAGE_URL, SITE_URL]);

  return (
    <>
      <Helmet>
        <title>Auto Branding in Nashik | Auto Rickshaw Advertising | BrandBanao.ai</title>

        <meta
          name="description"
          content="Auto branding and auto rickshaw advertising by BrandBanao.ai in Nashik & Maharashtra. High-visibility mobile ads with wraps, panels, route-based hyperlocal campaigns, monitoring and reporting."
        />

        <meta name="author" content={BRAND_NAME} />
        <meta name="publisher" content={BRAND_NAME} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* ✅ FIX: Optional (short) keywords */}
        <meta name="keywords" content={keywordsContent} />

        {/* ✅ FIX: Keep OG/Twitter clean */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={BRAND_NAME} />
        <meta property="og:title" content="Auto Branding in Nashik | BrandBanao.ai" />
        <meta
          property="og:description"
          content="High-visibility auto rickshaw advertising with wraps, panels, route-based hyperlocal campaigns, monitoring and reporting."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="BrandBanao.ai - Auto Branding Services" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Auto Branding in Nashik | BrandBanao.ai" />
        <meta
          name="twitter:description"
          content="Auto branding & auto rickshaw advertising with wraps, panels, route-based hyperlocal campaigns, monitoring and reporting."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* ✅ FIX: Single JSON-LD output */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="hoarding-page">
        <h1 className="hoarding-title">Auto Branding</h1>

        <div className="hoarding-image-wrap">
          <img
            src={Autobranding}
            alt="Auto Branding"
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
                alt="Auto Branding Gallery"
                className="gallery-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}

        <div className="hoarding-content">
          <h2>Auto Branding & Advertising - Brand Banao.Ai</h2>
          <p>
            Auto branding is one of the most powerful ways to turn everyday city hustle into non-stop
            brand visibility. At Brand Banao.AI, we transform ordinary auto-rickshaws into mobile brand
            assets that work for your business day in and day out. Cruising through busy streets,
            markets, neighborhoods, and traffic lights, autos give you killer exposure right at street
            level where people's buying choices often happen.
          </p>
          <p>
            Auto advertising extends the reach of your message to approximately a thousand pedestrians,
            commuters and drivers per day in multiple locations, allowing for a much broader audience to
            see your advertisement than would be possible with static ads. It creates repeated impressions,
            builds familiarity, and keeps your brand top of mind among locals without a break.
          </p>

          <br />

          <h2>Our campaigns</h2>
          <p>
            Strike a balance between creativity and practicality. With durable materials, bright colors, and
            clear messaging, we offer auto wrap ads that protect look and feel while staying highly memorable.
            Whether you're looking to generate brand awareness, store visits, or the kickoff of new products,
            our approach keeps things clear, consistent, and built for long-term impact.
          </p>
          <p>
            For brands chasing hyper-local reach, this medium hits the common “auto advertising near me” search
            by putting visibility precisely where your customers live, work, and travel. Autos cruise through
            narrow lanes, busy neighborhoods, and commercial hubs—places big media can't reach as effectively.
          </p>


          <br />

          <h2>Placement is everything</h2>
          <p>
            We increase awareness through smart positioning: back-of-auto ads that capture the attention of traffic
            and commuters, side ads that engage pedestrians and roadstop audiences when stopped or slowed. We utilize
            every surface to maximize viewing time without overwhelming anyone.
          </p>

          <br />

          <h2>What really makes auto ads effective?</h2>
          <p>
            Though, is the humanization of brands. A message seen time and again amidst familiar surroundings builds
            trust and relatability. It's a medium that just fits right into everyday life while subtly boosting brand
            presence.
          </p>

          <br />

          <h2>City auto advertising</h2>

          <p>
            It can be scaled by brands wishing to target certain geographic areas/routings usually based on density
            mapping. It can be tailored from busy hotspots to residential pockets to match business goals and how the
            audience behaves.
          </p>

          <br />


          <h2>Our agency supports</h2>

          <p>
            Brands through the use of effective auto advertising, ensuring that our clients see measurable results
            in terms of increased visibility, recall of the brand and overall effectiveness of the advertisement.
            Each auto ad campaign is provided with detailed analytical reporting and mapping to ensure that campaigns
            have maximum coverage and frequency.
          </p>

          <br />

          <h2>Why Choose Brand Banao.AI</h2>

          <p>The unique value provided by local auto advertising is its ability to position an advertisement next to the
            area where the consumer would make an immediate purchase. This allows for increased sales and service
            inquiries and customers to walk into stores. In effect, local auto advertising provides a great deal of
            cost efficiency in terms of reaching the targeted audience and is a great way for brands to establish a
            presence in the community. Mixing creative excellence with tight operations and on-the-ground know-how,
            Brand Banao.AI delivers the best auto branding solutions.</p>

          <h3 style={{ textAlign: "center" }}><i><b>Brand Banao.Ai move with your audience-literally-driving awareness,
            trust, and growth across the city.</b></i></h3>
        </div>

        {/* BOTTOM FAQ SECTION – ACCORDION STYLE */}
        <div className="hoarding-content faq-section">
          <h2>Auto Branding FAQs</h2>
          <div className="faq-list">
            {FAQ_ITEMS.map((faq, index) => {
              const isActive = activeFaqIndex === index;

              return (
                <div className={`faq-item ${isActive ? "active" : ""}`} key={index}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setActiveFaqIndex(isActive ? null : index)}
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
      </div>
    </>
  );
};

export default AutoBranding;
