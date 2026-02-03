import React, { useMemo, useState, useCallback, useEffect } from "react"; // ✅ FIX: added hooks for memo/callback/esc
import { Helmet } from "react-helmet";
import railwayImg from "../Images/railwaybranding.jpg"; // ✅ FIX: rename for clarity
import "./tvNews.css";

const RailwayyBranding = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  // ✅ FIX: One consistent route URL everywhere (Helmet + schema + canonical)
  const SITE_URL = "https://brandbanao.ai/";
  const PAGE_URL = "https://brandbanao.ai/RailwayyBranding"; // ✅ FIX: match your actual route
  const BRAND_NAME = "Brand Banao.Ai";
  const OG_IMAGE = "https://brandbanao.ai/assets/logopng-CGGCs8OD.png";

  const PAGE_TITLE = "Best Railway Branding Agency in Nashik | Brand Banao.Ai";
  const PAGE_DESC =
    "Railway branding and railway station advertising by Brand Banao.Ai. Train and station ads, platform branding, FOB panels, digital screens, permissions, execution, monitoring, and reporting across India.";

  const images = useMemo(() => [railwayImg], []); // ✅ FIX: memoize images array

  const openGallery = useCallback((index) => {
    setCurrentIndex(index);
    setShowGallery(true);
  }, []);

  const closeGallery = useCallback(() => setShowGallery(false), []); // ✅ FIX: helper

  // ✅ FIX: ESC closes gallery
  useEffect(() => {
    if (!showGallery) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeGallery();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showGallery, closeGallery]);

  // ✅ FIX: ONE FAQ source (used for UI + JSON-LD)
  const FAQ_ITEMS = useMemo(
    () => [
      {
        question: "What is railway branding?",
        answer:
          "Railway branding is transit advertising that uses railway stations and trains to promote brands through formats like station hoardings, platform displays, foot overbridge panels, train wraps, and digital screens for repeated high-volume visibility.",
      },
      {
        question: "Where can railway advertisements be placed?",
        answer:
          "Railway ads can be placed at entry/exit zones, station premises, concourse areas, platforms, foot overbridges, waiting areas, trains, and digital screens depending on availability and campaign objectives.",
      },
      {
        question: "Why does railway advertising work well for brands?",
        answer:
          "Railway advertising works due to mass reach, high frequency, longer dwell time at stations, and audience diversity—helping brands build recall and trust through repeated exposure.",
      },
      {
        question: "Do you manage permissions and end-to-end execution?",
        answer:
          "Yes. Brand Banao.Ai supports planning, artwork guidance, production, permissions/coordination where applicable, placement execution, monitoring, and reporting for railway branding campaigns.",
      },
      {
        question: "What types of campaigns are suitable for railway branding?",
        answer:
          "Railway branding is suitable for FMCG promotions, retail launches, tourism campaigns, education and healthcare awareness, real estate launches, automotive promotions, and seasonal or event-based campaigns.",
      },
      {
        question: "Why choose Brand Banao.Ai for railway advertising?",
        answer:
          "Brand Banao.Ai combines strategic planning, creative execution, and on-ground operations to deliver scalable railway branding with consistent visibility, monitoring, and measurable coverage.",
      },
    ],
    []
  );

  // ✅ FIX: Single JSON-LD graph (better for AI search + consistency)
  const structuredData = useMemo(() => {
    const orgId = "https://brandbanao.ai/#organization";
    const pageId = `${PAGE_URL}#webpage`;
    const serviceId = `${PAGE_URL}#service`;
    const faqId = `${PAGE_URL}#faq`;

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
          name: "Railway Branding",
          headline: "Railway Branding & Railway Station Advertising",
          description: PAGE_DESC,
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://brandbanao.ai/#website" },
          about: { "@id": orgId },
          primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
          mainEntity: { "@id": serviceId },
        },
        {
          "@type": "Service",
          "@id": serviceId,
          name: "Railway Branding & Railway Station Advertising",
          serviceType: ["Transit Advertising", "Outdoor Advertising", "OOH Media"],
          provider: { "@id": orgId },
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "State", name: "Maharashtra" },
            { "@type": "City", name: "Nashik" },
          ],
          url: PAGE_URL,
          description:
            "Railway advertising services including station hoardings, platform branding, foot overbridge panels, waiting-area media, train wraps, and digital screens with planning, production, execution, monitoring, and reporting.",
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
      ],
    };
  }, [FAQ_ITEMS, PAGE_DESC, PAGE_URL]);

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-IN" }}> {/* ✅ FIX */}
        <title>{PAGE_TITLE}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="author" content={BRAND_NAME} /> {/* ✅ FIX */}
        <meta name="publisher" content={BRAND_NAME} /> {/* ✅ FIX */}
        <meta name="description" content={PAGE_DESC} /> {/* ✅ FIX */}
        <meta
          name="keywords"
          content="railway branding, railway station advertising, station branding, platform branding, foot overbridge advertising, train wrap advertising, transit advertising, Brand Banao Ai"
        /> {/* ✅ FIX: shorter keywords */}

        <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="theme-color" content="#0d1117" />

        <link rel="canonical" href={PAGE_URL} /> {/* ✅ FIX */}

        {/* Open Graph */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={BRAND_NAME} /> {/* ✅ FIX */}
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} /> {/* ✅ FIX */}
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Railway Branding - Brand Banao.Ai" /> {/* ✅ FIX */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Railway Branding - Brand Banao.Ai" /> {/* ✅ FIX */}

        {/* ✅ FIX: single JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="hoarding-page">
        <h1 className="hoarding-title">Railway Branding</h1>

        <div className="hoarding-image-wrap">
          <img
            src={railwayImg}
            alt="Railway Branding"
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
                alt="Railway Branding Gallery"
                className="gallery-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}

        <div className="hoarding-content">
          <h2>Railway Branding - Brand Banao.Ai</h2>
          <p>
            Indian Railways still remain one of the biggest mass-connectors across the world. With daily
            commuters and travelers in millions, plus long-distance passengers, rail branding gives brands
            steady visibility across all sorts of people. At Brand Banao.AI, we roll out smart, railway-focused
            campaigns that turn transit spaces into punchy brand moments.
          </p>
          <p>
            Rail advertising keeps your brand in front of people along the whole journey-from walking into
            the station to waiting on the platform and even while they're riding. It's not just a quick hit,
            either. Station ads are longer-lasting and better-received and can reach people across city and
            semi-urban areas.
          </p>
          <p>
            We handle everything, from train ads to static and digital stuff inside the stations, with a
            solid grasp of passenger behavior to deliver recall, trust, and engagement for rail station formats.
          </p>

          <br />

          <h2>Comprehensive Railway Media Formats</h2>
          <p>
            We offer a wide variety of placements: train station advertisements, platform displays, foot
            overbridge panels, and big-time train wrap adverts for large campaigns. Being one of the leading
            railway station branding agencies in Nashik, Maharashtra, we take care of permissions, planning,
            execution, and reporting all under one roof.
          </p>
          <p>
            Our portfolio of services ranges from premium railway advertisements across India to customized
            rail branding solutions for SMEs seeking hyperlocal targeting. Whether you are simply looking
            for a railway station outdoor advertisement agency in your vicinity or large-format platform
            branding and station hoardings, our team undertakes smart placements and creative excellence.
          </p>
          <p>
            We provide clear understanding and transparent guidance for Nashik railway station billboard
            advertisements to help you have seamless planning for the same. Our campaigns support railway
            branding and engagement for FMCG brands, backed by digital screens at the railway station that
            grab motion-driven attention.
          </p>


          <br />

          <h2>Industry-specific campaign experience</h2>
          <p>
            We design focused railway ad strategies for travel brands and double up as a go-to railway
            station advertising agency for national players. We are experienced in utilizing local market
            knowledge as a rail advertising agency based in Nashik (Maharashtra, India) to run large
            multi-city advertising campaigns through branding services across Mumbai and Nashik.
          </p>
          <p>
            As an advertising agency located near the Nashik railway station, we are able to utilise
            our vast local connections for all of our 'on-the-ground' execution requirements for clients.
            Our team manages the railway hoarding advertisements for many cities throughout Maharashtra
            as well as providing integrated branding services in the major metropolitan areas of
            Maharashtra (Mumbai, Pune, Nashik).
          </p>

          <br />

          <h2>Why Railway Advertising Works</h2>
          <p>
            People often ask why rail ads drive better brand visibility. Repetition, scale, and diversity
            of the audience is the answer. Through our management and marketing of hoardings at railway
            stations, we can demonstrate to local advertisers how station hoardings can be used to engage
            consumers. We provide advertisers with accurate metrics by which to follow their ROI back to
            their respective advertising campaigns.
          </p>
          <p>
            All artwork created for railway advertisements reflects our efforts to comply with the latest
            outdoor advertising trends and adhere to the best practices set forth in order to meet our
            clients' needs throughout 2026. We offer sector-specific solutions for retail and hospitality,
            rail ads for tourism, and scalable branding for FMCG.
          </p>
          <p>
            In addition, we also provide clients with advertising packages for automotive launches as well
            as providing timely and seasonal rail branding for special promotional campaigns.
          </p>

          <br />

          <h2>Planning, Cost & Consultation</h2>

          <p>
            If you're interested in learning more about the various benefits of outdoor rail branding or
            comparing your options between rail and airport advertising, our highly trained experts are
            here to assist you with data-based analysis. We help brands in the planning of a station
            branding campaign with a clear cost and budget guide.
          </p>
          <p>
            From solid design examples to helping you book rail station billboards in Maharashtra, we
            support end-to-end execution. This also includes small business railway ad proposals in India,
            pricing estimates for rail campaigns, and personalized branding quotes and consultations in Nashik.
          </p>

          <h3 style={{ textAlign: "center" }}><i><b>With railway advertising media planner services from Brand
            Banao.Ai, your brand rides where India rides-on railways.</b></i></h3>
        </div>

        <div className="hoarding-content faq-section">
          <h2>Railway Branding FAQs</h2>
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

        <div className="hoarding-content">{/* Reserved */}</div>
      </div>
    </>
  );
};

export default RailwayyBranding;