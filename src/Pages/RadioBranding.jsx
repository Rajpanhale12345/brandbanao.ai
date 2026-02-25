import React, { useMemo, useState, useCallback, useEffect } from "react";
import radioimg from "../Images/radio.webp";
import { Helmet } from "react-helmet-async";
import "./busShelter.css"; 

const RadioFMBranding = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const images = useMemo(() => [radioimg], []); 
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
  const PAGE_URL = "https://brandbanao.ai/radio";
  const BRAND_NAME = "BrandBanao.ai"; 
  const OG_IMAGE = "https://brandbanao.ai/assets/radio-flTFxuUH.jpg"; 
  const LOGO = "https://brandbanao.ai/assets/logopng-CGGCs8OD.png";

  const PAGE_TITLE = "Best Radio & FM Advertising in Nashik - Brand Banao.AI"; 
  const PAGE_DESC =
    "BrandBanao.ai creates conversational Radio & FM ads that boost recall and response. We write radio ad scripts, plan formats (10-30 sec), coordinate voice/sound, and align radio campaigns with digital.";

  const FAQ_ITEMS = useMemo(
    () => [
      {
        question:
          "Which is the best radio advertising agency in Nashik and Maharashtra for FM campaigns?",
        answer:
          "BrandBanao.ai is a trusted radio & FM advertising partner in Nashik and across Maharashtra. We help with message strategy, radio ad scriptwriting, format planning (10-30 sec), voice/sound coordination, scheduling support, and radio + digital alignment—so your campaign is memorable and built for response.",
      },
      {
        question:
          "Why is BrandBanao.ai considered a top FM radio advertising agency in Nashik?",
        answer:
          "Because radio performance depends on clarity, repetition, and the right time bands. We write conversational scripts that sound natural on-air, recommend spot duration and frequency, and plan time slots around your audience routine—helping brands improve recall and action without wasting spend.",
      },
      {
        question:
          "How much does FM radio advertising cost in Nashik? What are radio advertising rates?",
        answer:
          "FM radio advertising cost depends on the station, time band (drive time vs off-peak), ad duration (10/20/30 seconds), frequency (spots per day), and campaign length (1 week, 2 weeks, 1 month). We share transparent plan options so you can choose based on reach + repetition and budget.",
      },
      {
        question:
          "Which radio ad formats work best—spot ads, RJ mentions, jingles, contests, or sponsorships?",
        answer:
          "Spot ads (10-30 seconds) are the most common for consistent frequency. RJ mentions and integrations (where available) add trust and personality. Jingles help build audio identity, while sponsorship tags and contest-led activations boost recall. We recommend the best mix based on your goal—awareness, footfall, leads, or a new launch.",
      },
      {
        question:
          "What are the best radio time slots in Nashik, and how quickly can a campaign go live?",
        answer:
          "Morning and evening drive-time usually deliver strong listener volume, while mid-day and evening can be cost-effective for frequency. Go-live timelines depend on script finalisation, voice production, station scheduling, and approvals. Once time bands and spot counts are locked, we share a clear rollout plan and start dates.",
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
            "Radio and FM advertising including scriptwriting, format planning (10-30 sec), RJ mentions (where applicable), voice/sound coordination, scheduling support, and radio + digital message alignment.",
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
      <Helmet>
        <title>{PAGE_TITLE}</title>
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
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={BRAND_NAME} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Radio & FM Branding - BrandBanao.ai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Radio & FM Branding - BrandBanao.ai" />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

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
