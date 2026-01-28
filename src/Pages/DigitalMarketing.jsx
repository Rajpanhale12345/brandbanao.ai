import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import digitalImg from "../Images/digital.jpg"; // ✅ FIX: proper variable name
import "./tvNews.css";

const DigitalMarketing = () => { // ✅ FIX: correct component name
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const images = useMemo(() => [digitalImg], []); // ✅ FIX: memoize

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
  const PAGE_URL = "https://brandbanao.ai/digital-marketing"; // ✅ FIX: lowercase canonical recommended
  const OG_IMAGE = "https://brandbanao.ai/assets/logopng-CGGCs8OD.png";
  const BRAND_NAME = "BrandBanao.ai"; // ✅ FIX: consistent naming

  const PAGE_TITLE = "Digital Marketing in Nashik | SEO, PPC & Social | BrandBanao.ai"; // ✅ FIX: less spammy
  const PAGE_DESC =
    "Grow your business with BrandBanao.ai digital marketing services: SEO, Google Ads (PPC), social media marketing, content strategy, performance marketing, analytics, and conversion rate optimisation.";

  // ✅ FIX: ONE FAQ list (used for both UI + JSON-LD)
  const FAQ_ITEMS = useMemo(
    () => [
      {
        question: "What digital marketing services does BrandBanao.ai offer?",
        answer:
          "We provide SEO, Google Ads (PPC), social media marketing, content strategy, performance marketing, analytics, conversion rate optimisation, and reporting—tailored to your goals and budget.",
      },
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO timelines vary by industry and competition, but many websites see early improvements within 8–12 weeks. Stronger results often build over 3–6 months with consistent optimisation.",
      },
      {
        question: "Do you manage Google Ads and paid social campaigns?",
        answer:
          "Yes. We plan, set up and optimise search, display and social campaigns with conversion tracking, audience targeting, creative testing, and ongoing performance optimisation.",
      },
      {
        question: "Can you help with local SEO for Nashik and nearby areas?",
        answer:
          "Yes. We improve local visibility through Google Business Profile optimisation, local keyword targeting, location pages, citations, and review strategy.",
      },
      {
        question: "How do you measure performance?",
        answer:
          "We track qualified leads, conversions, ROAS/CAC, revenue impact, traffic quality, and engagement—shared through dashboards and regular reporting.",
      },
      {
        question: "Why choose BrandBanao.ai as your digital marketing partner?",
        answer:
          "We combine strategy, creativity and analytics to build scalable growth systems, focusing on measurable outcomes, continuous optimisation, and transparent reporting.",
      },
    ],
    []
  );

  // ✅ FIX: Short keywords (optional; Google ignores meta keywords)
  const keywordsContent = useMemo(
    () =>
      [
        "digital marketing Nashik",
        "SEO services Nashik",
        "Google Ads PPC",
        "social media marketing",
        "performance marketing",
        "local SEO",
        "BrandBanao.ai",
      ].join(", "),
    []
  );

  // ✅ FIX: Single JSON-LD @graph (better for AI search understanding)
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
          name: "Digital Marketing Services in Nashik",
          headline: "Digital Marketing Services by BrandBanao.ai",
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
          name: "Digital Marketing Services",
          serviceType: ["SEO", "PPC", "Social Media Marketing", "Performance Marketing"],
          provider: { "@id": orgId },
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "State", name: "Maharashtra" },
            { "@type": "City", name: "Nashik" },
          ],
          url: PAGE_URL,
          description:
            "End-to-end digital marketing: SEO (technical & on-page), Google Ads (PPC), social media marketing, content marketing, analytics, conversion rate optimisation and reporting.",
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${PAGE_URL}#breadcrumbs`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}services/` },
            { "@type": "ListItem", position: 3, name: "Digital Marketing", item: PAGE_URL },
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
      <Helmet htmlAttributes={{ lang: "en-IN" }}> {/* ✅ FIX */}
        <title>{PAGE_TITLE}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="author" content={BRAND_NAME} />
        <meta name="publisher" content={BRAND_NAME} />
        <meta name="description" content={PAGE_DESC} />

        <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />

        {/* ✅ FIX: optional + short */}
        <meta name="keywords" content={keywordsContent} />

        <link rel="canonical" href={PAGE_URL} /> {/* ✅ FIX */}
        <link rel="icon" href={OG_IMAGE} />
        <link rel="apple-touch-icon" href={OG_IMAGE} />

        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={BRAND_NAME} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="BrandBanao.ai - Digital Marketing" /> {/* ✅ FIX */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="BrandBanao.ai - Digital Marketing" /> {/* ✅ FIX */}

        {/* ✅ FIX: single JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

            <div className="hoarding-page">
                <h1 className="hoarding-title">Digital Marketing</h1>

                <div className="hoarding-image-wrap">
                    <img
                        src={digitalImg}
                        alt="Digital Marketing"
                        className="hoarding-image"
                        onClick={() => openGallery(0)}
                    />
                </div>

                {showGallery && (
                    <div className="gallery-overlay" onClick={() => setShowGallery(false)}>
                        <div className="gallery-box" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={images[currentIndex]}
                                alt="Digital Marketing Gallery"
                                className="gallery-img"
                            />
                        </div>
                    </div>
                )}

                <div className="hoarding-content">
                    <h2>Digital Marketing - Brand Banao.Ai</h2>
                    <p>
                        In the era of fast-paced life, brands grow through precision rather than just having an existence.
                        Brand Banao.Ai's Digital Marketing team will provide brands with measurable support using the
                        platforms where brands can grow and are most visible.
                    </p>
                    <p>
                        We're a forward-thinking digital marketing agency helping businesses cruise through the online
                        world with clarity and confidence. Our unique, mix of creativity, technology and analytics creates
                        campaigns that are purposeful, scalable and results driven. We do not chase trends, we build the
                        systems that convert consumer interest to action.
                    </p>

                    <br />

                    <h2>A Strategy-First Approach</h2>
                    <p>
                        Every great campaign begins with the right strategy. We research your audience, competitors,
                        and category trends to create a plan that connects your brand objectives to tangible results.
                        If you're launching, growing, or changing, our planning drives consistency across channels and
                        clarity in how we talk to people.
                    </p>
                    <p>
                        As a trusted digital marketing company, Brand Banao.Ai is a holistic solutions provider across
                        platforms. Be it an online campaign or advanced digital advertising; rest assured that your brand
                        will say the right thing to the right people at the right time.
                    </p>

                    <br />

                    <h2>Performance-driven campaigns</h2>
                    <p>
                        With extensive expertise in Google Marketing, we are able to deliver campaigns with a high intent
                        of driving quality traffic to generate measurable return on investment. As a performance marketing
                        agency that is rising to prominence, we use the best metrics including leads, conversion and
                        revenue as our primary success indicators. Each and every investment is continually tracked,
                        updated and optimised.
                    </p>
                    <p>
                        We manage online ads, including search, display, and social, using pinpoint targeting and
                        compelling creative. Our background with digital advertising teams helps brands compete in
                        crowded markets while keeping costs in check.
                    </p>

                    <br />

                    <h2>Search, Content & Visibility</h2>
                    <p>
                        Strong visibility begins with proper search engine optimisation. At our agency, we have experienced
                        professionals that marry expertise in technical audits and content optimisation with building
                        authority to create the conditions for sustained growth. Advanced search engine optimisation,
                        combined with web services, will allow brands to be found in more locations, load their websites
                        faster, and convert at an improved rate.
                    </p>
                    <p>
                        We assist content marketing teams in developing the message and manner by which audiences connect
                        with your brand through providing them with value, and substance rather than fluff. When you mix
                        this with SEO and digital marketing, organic reach grows alongside paid efforts.
                    </p>
                    <p>
                        For region-focused brands, our local SEO solutions power up discoverability where it matters most.
                        We position ourselves as a top digital marketing company in Nashik for those seeking to own their
                        city or area.
                    </p>

                    <br />

                    <h2>Full-Service Digital Execution</h2>

                    <p>
                        As a full-service digital marketing agency, Brand Banao.Ai integrates social media marketing, digital
                        media marketing, and digital media advertising all in one seamless system. We also back brand ad
                        campaigns that boost recall and trust across digital touchpoints.
                    </p>
                    <p>
                        The digital marketing team behind our agency is full of professionals with expertise in every
                        aspect of the digital marketing process, from concept to optimization. As such, we're not just
                        vendors; instead, we are your digital partner for all your digital marketing initiatives.
                        We aren't just vendors; we're your go-to digital partner.
                    </p>

                    <br />

                    <h2>Why Brands choose Brand Banao.Ai</h2>

                    <p>
                        We are considered one of the most prominent digital marketing companies, blending speed with
                        strategy.
                    </p>

                    <p>
                        <b>Digital Marketing Partners at Every Stage of Development:</b> Our digital marketing team
                        includes highly skilled digital marketers who will help you create a complete and effective
                        online marketing strategy, as well as optimize that strategy for maximum effectiveness. By being
                        your digital partner, we provide a collaborative, consultative approach to developing an effective
                        digital marketing approach.
                    </p>

                    <p>
                        We provide our clients with the same level of clarity and effectiveness we have achieved on our site,
                        we have gained international recognition as one of the leading digital marketing agency websites,
                        along with being among the best marketing agency websites. A number of people view our multi-faceted
                        approach to be a strong frontrunner in terms of who is the best digital marketing agency in the world
                        based on the outcomes we have experience with.
                    </p>

                    <p>
                        If you need top-of-the-line digital marketing services, top-tier digital marketing services or reliable
                        digital marketing firms to strategically develop your brand, then let Brand Banao.Ai assist you in
                        achieving sustainable, intelligent growth for your company.
                    </p>

                    {/* <h3 style={{ textAlign: "center" }}><i><b>With railway advertising media planner services from Brand
                        Banao.Ai, your brand rides where India rides-on railways.</b></i></h3> */}
                </div>

                <div className="hoarding-content faq-section">
          <h2>Digital Marketing FAQs</h2>
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

export default DigitalMarketing;