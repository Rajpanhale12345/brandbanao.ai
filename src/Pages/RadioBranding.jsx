import React, { useMemo, useState, useCallback, useEffect } from "react"; // ✅ FIX
import radioimg from "../Images/radio.jpg";
import { Helmet } from "react-helmet";
import "./busShelter.css"; // ✅ FIX: ensure styles are applied (you use hoarding-page classes)

const RadioFMBranding = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const images = useMemo(() => [radioimg], []); // ✅ FIX: memoize
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
  const PAGE_URL = "https://brandbanao.ai/radio";
  const BRAND_NAME = "BrandBanao.ai"; // ✅ FIX: consistent naming
  const OG_IMAGE = "https://brandbanao.ai/assets/radio-flTFxuUH.jpg"; // ✅ FIX: consistent OG/Twitter
  const LOGO = "https://brandbanao.ai/assets/logopng-CGGCs8OD.png";

  const PAGE_TITLE = "Radio & FM Advertising in Nashik | Scripts, RJ Mentions | BrandBanao.ai"; // ✅ FIX: cleaner title
  const PAGE_DESC =
    "BrandBanao.ai creates conversational Radio & FM ads that boost recall and response. We write radio ad scripts, plan formats (10–30 sec), coordinate voice/sound, and align radio campaigns with digital.";

  const FAQ_ITEMS = useMemo(
    () => [
      {
        question:
          "Do you provide FM radio advertising in Nashik and across Maharashtra?",
        answer:
          "Yes. BrandBanao.ai plans and supports FM radio advertising in Nashik and across Maharashtra through leading FM stations and regional networks. We help with message strategy, scriptwriting, format selection, scheduling support, and radio + digital alignment for higher recall.",
      },
      {
        question:
          "What are FM radio advertising rates in Nashik? How much does radio advertising cost?",
        answer:
          "FM radio advertising cost depends on the station, time band (morning/evening drive time vs off-peak), ad duration (10/20/30 seconds), frequency (number of spots per day), and campaign length (1 week, 2 weeks, 1 month). We share transparent options so you can choose a plan based on reach + repetition and your budget.",
      },
      {
        question:
          "Which radio ad formats do you offer—spot ads, RJ mentions, jingles, contests, or sponsorships?",
        answer:
          "We support popular radio advertising formats such as spot ads (10–30 seconds), RJ mentions (where applicable), brand integrations, sponsorship tags, and jingle-style audio branding. The best format mix depends on whether your goal is awareness, footfall, leads, or a new launch.",
      },
      {
        question:
          "What is the best duration for a radio ad—10 sec, 20 sec, or 30 sec?",
        answer:
          "10 seconds works well for quick retail pushes and simple offers. 20 seconds is a strong balance for message clarity and recall. 30 seconds is best for storytelling, multiple USPs, or a stronger call-to-action. We recommend the duration based on your category and what listeners can absorb fast.",
      },
      {
        question:
          "What are the best time slots for radio advertising in Nashik (morning/evening drive time)?",
        answer:
          "Morning and evening drive-time slots usually deliver strong listener volume, while mid-day and evening slots can be cost-effective for frequency. We plan time bands based on your audience routine—students, working professionals, families, or shoppers—so the ads hit when people are most likely to respond.",
      },
      {
        question:
          "Do you create radio ad scripts and coordinate voice-over/music production?",
        answer:
          "Yes. We write voice-ready radio ad scripts in a natural, conversational style. We can also coordinate voice-over and sound elements (music beds/jingle-style audio) as needed, ensuring the final ad matches station requirements and sounds clean on-air.",
      },
      {
        question:
          "How quickly can an FM campaign go live in Nashik after approval?",
        answer:
          "Timelines depend on script finalization, voice production, station scheduling, and approvals. If your content is ready, campaigns can be planned quickly. We share a clear execution timeline once station/time bands and spot counts are locked.",
      },
      {
        question:
          "Is radio advertising effective for local businesses in Nashik (coaching, hospitals, real estate, restaurants, retail)?",
        answer:
          "Yes. FM radio advertising is strong for local businesses because it builds trust and repetition in a city audience. It’s commonly used for coaching institutes, hospitals/clinics, real estate projects, restaurants, retail stores, events, and festive offers—especially when paired with a simple offer and location-based CTA.",
      },
    ],
    []
  );


  const keywordsContent = useMemo(
    () =>
      [
        "FM radio advertising Nashik",
        "radio advertising Nashik",
        "radio ad cost",
        "FM advertising rates",
        "radio spot booking",
        "RJ mention advertising",
        "radio jingle",
        "10 second radio ad",
        "20 second radio ad",
        "30 second radio ad",
        "BrandBanao.ai",
      ].join(", "),
    []
  );


  // ✅ FIX: Single JSON-LD @graph (AI-search friendly)
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
          logo: LOGO,
        },
        {
          "@type": "WebPage",
          "@id": pageId,
          url: PAGE_URL,
          name: "Radio & FM Branding",
          headline: "Radio & FM Advertising and Branding",
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
          name: "Radio & FM Advertising",
          serviceType: ["Radio Advertising", "Audio Branding", "FM Campaigns"],
          provider: { "@id": orgId },
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "State", name: "Maharashtra" },
            { "@type": "City", name: "Nashik" },
          ],
          url: PAGE_URL,
          description:
            "Radio and FM advertising including scriptwriting, format planning (10–30 sec), RJ mentions (where applicable), voice/sound coordination, scheduling support, and radio + digital message alignment.",
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
  }, [FAQ_ITEMS, PAGE_DESC, PAGE_URL]);

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-IN" }}>
        <title>{PAGE_TITLE}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="author" content={BRAND_NAME} />
        <meta name="publisher" content={BRAND_NAME} />
        <meta name="description" content={PAGE_DESC} />
        <meta name="keywords" content={keywordsContent} />

        <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="theme-color" content="#0d1117" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        <link rel="canonical" href={PAGE_URL} />
        <link rel="icon" href={LOGO} />
        <link rel="apple-touch-icon" href={LOGO} />

        {/* Open Graph */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={BRAND_NAME} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Radio & FM Branding - BrandBanao.ai" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Radio & FM Branding - BrandBanao.ai" />

        {/* ✅ FIX: single JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Using the same structure / classes as Hoarding.jsx for styling */}
      <div className="hoarding-page">
        <h1 className="hoarding-title">Radio &amp; FM Branding</h1>

        <div className="hoarding-image-wrap">
          <img
            src={radioimg}
            alt="Radio & FM Branding example by Brand Banao.AI"
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
                alt="Radio & FM Branding gallery - Brand Banao.AI"
                className="gallery-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}

        <div className="hoarding-content">

          <h2>Introduction</h2>
          <p>At Brand Banao.AI creates radio advertising with a natural, clear and
            simple-to-follow flow that creates successful radio advertisements,
            FM ad content, and top-performing radio ads. At Brand Banao.AI, the focus
            of our work is to make a connection between the listener and the brand
            while making sure to produce radio commercials that do not sound like
            scripted messages but rather as if they are real conversations happening
            between two people. All of the words in a band advertising commercial are
            carefully selected to give the strongest impression within the brief time
            available for a brand to be heard.</p>


          <h2>What we create:</h2>
          <p>We create radio commercials that have a smooth flow and that are engaging to
            the listener. No matter the format for the type of brand radio, talk radio
            advertising, branding radio or FM radio advertising, we are focused on one
            thing: getting your message to your audience in an effective, concise and
            memorable way.</p>

          <p>Our approach ensures every script becomes the best radio commercial or a
            creative radio ad that stands out.</p>

          <h2>How We Approach Radio</h2>
          <p>We treat radio like a precision job. Every second matters.</p>

          <p>Each pause, line, and tone is designed to hold attention naturally without forcing it.</p>

          <p>We build the message first and add creativity later, ensuring the core idea is heard.
            The result is a crisp, clean, and effective ad that listeners cannot ignore, similar
            to the best radio ads ever and the best radio adverts in the industry.</p>

          <h2>Why Radio Still Works</h2>

          <p>Radio remains trusted because it reaches people when they are most attentive:</p>

          <ul>
            <li>while driving</li>
            <li>during daily routines</li>
            <li>when screens are busy, but ears are free</li>
          </ul>

          <p>This is the power of radio advertising.</p>

          <p>Scripts that are well written tend to increase recall compared with long digital ads.</p>

          <p>When establishing stronger brand visibility, we frequently combine radio advertising with
            digital advertising, and the result is that your advertisements are ingrained in the
            memories of the listeners.</p>

          <h2>Why Our Radio Ads Stand Out</h2>
          <p>
            We avoid overacting, forced humour, or dramatic effects. Instead, we focus on one strong
            idea crafted to match real listener behaviour and everyday situations. This helps us create
            top radio advertiser-level content that feels natural and easy for voice artists to deliver.
          </p>

          <p>Because of the way our advertisements sound so relatable, our ads tend to be more memorable
            than other advertisements on the radio and other digital formats, as they utilise real-life
            moments of listening.</p>

          <h2>The Steps of Our Process</h2>

          <ol>
            <li>Identify the Brand's Message and Purpose</li>
            <li>Identify the Optimal Time to listen (excluding morning drive time, evening driving,
              weekend radio).</li>
            <li>Write an Engaging Script That Clearly Defines The Message and Is Memorable.</li>
            <li>Once The Script Has Been Finalised, The Next Step Is To Ad Voice/Sound Design.</li>
          </ol>

          <p>Our structured approach allows us to continually produce the best radio ad campaigns
            and radio advertisements that consistently achieve results.</p>


          <h2>What Will You Get?</h2>

          <ul>
            <li>No fluff in your scripts, only relevant, compelling, concise words.</li>
            <li>Natural, believable voice quality.</li>
            <li>Messaging is easy to remember AND digest quickly, even if it is delivering
              on a clock of "fast-paced."</li>
            <li>Lengthy advertising options (for example, short form retail pushes --
              10-sec or longer story across 30-sec spots).</li>
          </ul>

          <p>The goal is to develop the best radio ad campaigns that resonate with listeners,
            build brands and strengthen their presence on both radio and digital platforms.</p>

          <p>If you are involved in two-way communications, we'll be able to add two-way radio
            branding, two-way radio brands and two-way radio messages to create an expanded set
            of communications-oriented promotions.</p>

          <h2 style={{ textAlign: "center" }}><b>Every ad we create is built to be remembered and to work.</b></h2>

        </div>


        <div className="hoarding-content faq-section">
          <h2>Radio &amp; FM Branding FAQs</h2>
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

export default RadioFMBranding;
