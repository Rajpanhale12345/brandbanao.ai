import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import airport from "../Images/autobranding.jpg";
import "./tvNews.css";

const FAQ_ITEMS = [
  {
    question: "What is auto branding?",
    answer:
      "Auto branding is mobile outdoor advertising using auto-rickshaw wraps and panels to promote your brand across streets, markets, and neighborhoods with repeated daily visibility.",
  },
  {
    question: "What branding options are available for auto rickshaws?",
    answer:
      "You can choose full wraps, back panels, or side panels. We can also plan route-based campaigns to focus on hyperlocal areas.",
  },
  {
    question: "How many people can an auto branding campaign reach?",
    answer:
      "Reach depends on routes and city density, but autos generate frequent daily impressions as they move through high-traffic areas and local hotspots.",
  },
  {
    question: "Do you provide reporting for auto branding campaigns?",
    answer:
      "Yes. We provide monitoring, mapping, and analytical reporting to ensure maximum coverage and frequency.",
  },
  {
    question: "Why choose Brand Banao.AI for auto branding?",
    answer:
      "We blend strategy, creative execution, and operations to deliver strong street-level visibility, brand recall, and consistent campaign coverage.",
  },
];

const AutoooBranding = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const images = [airport];

  const openGallery = (index) => {
    setCurrentIndex(index);
    setShowGallery(true);
  };

  const SITE_URL = "https://brandbanao.ai/";
  const PAGE_URL = "https://brandbanao.ai/auto-branding";
  const BRAND_NAME = "Brand Banao.AI";
  const OG_IMAGE = "https://brandbanao.ai/assets/logopng-CGGCs8OD.png";

  const schemas = useMemo(() => {
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Auto Branding in Nashik | Brand Banao.AI",
      headline: "Auto Branding & Auto Rickshaw Advertising",
      description:
        "Auto branding and auto rickshaw advertising by Brand Banao.AI. High-visibility mobile ads with wraps, back panels, and route-based campaigns with monitoring and reporting for hyperlocal reach.",
      image: OG_IMAGE,
      url: PAGE_URL,
      inLanguage: "en-IN",
      publisher: {
        "@type": "Organization",
        name: BRAND_NAME,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: OG_IMAGE },
      },
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Auto Branding & Auto Rickshaw Advertising",
      serviceType: ["Mobile Outdoor Advertising", "OOH Advertising"],
      provider: {
        "@type": "Organization",
        name: BRAND_NAME,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: OG_IMAGE },
      },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "State", name: "Maharashtra" },
        { "@type": "City", name: "Nashik" },
      ],
      url: PAGE_URL,
      description:
        "Mobile outdoor advertising using auto rickshaw branding: full wraps, back panels, side panels, route-based hyperlocal campaigns with monitoring and reporting.",
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}services` },
        { "@type": "ListItem", position: 3, name: "Auto Branding", item: PAGE_URL },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    };

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
      logo: OG_IMAGE,
      sameAs: [
        "https://www.instagram.com/brandbanao.ai",
        "https://www.linkedin.com/company/brandbanao-ai",
        "https://www.facebook.com/brandbanao.ai",
      ],
    };

    return { webPageSchema, serviceSchema, breadcrumbSchema, faqSchema, organizationSchema };
  }, [BRAND_NAME, OG_IMAGE, PAGE_URL, SITE_URL]);

  return (
    <>
      <Helmet>
        <title>Auto Branding in Nashik | Auto Rickshaw Advertising | Brand Banao.AI</title>
        <meta name="description" content="Auto branding and auto rickshaw advertising by Brand Banao.AI in Nashik & Maharashtra. High-visibility mobile ads with wraps, back panels, route-based hyperlocal campaigns, monitoring and reporting." />
        <meta name="keywords" content="auto branding Nashik, auto rickshaw advertising, mobile outdoor advertising, hyperlocal advertising, auto wrap advertising, back panel auto ads, Brand Banao AI" />
        <meta name="author" content={BRAND_NAME} />
        <meta name="publisher" content={BRAND_NAME} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="theme-color" content="#000000" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nashik" />
        <meta name="geo.position" content="19.9975;73.7898" />
        <meta name="ICBM" content="19.9975, 73.7898" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={BRAND_NAME} />
        <meta property="og:title" content="Auto Branding in Nashik | Brand Banao.AI" />
        <meta property="og:description" content="High-visibility auto rickshaw advertising with wraps, back panels, route-based hyperlocal campaigns, monitoring and reporting by Brand Banao.AI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Brand Banao.AI - Auto Branding Services" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Auto Branding in Nashik | Brand Banao.AI" />
        <meta name="twitter:description" content="Auto branding & auto rickshaw advertising with wraps, panels, route-based hyperlocal campaigns, monitoring and reporting." />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(schemas.organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(schemas.webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(schemas.serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(schemas.breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(schemas.faqSchema)}</script>
      </Helmet>

      <div className="hoarding-page">
        <h1 className="hoarding-title">Auto Branding</h1>

        <div className="hoarding-image-wrap">
          <img
            src={airport}
            alt="Auto Branding"
            className="hoarding-image"
            onClick={() => openGallery(0)}
          />
        </div>

        {showGallery && (
          <div className="gallery-overlay" onClick={() => setShowGallery(false)}>
            <div className="gallery-box" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[currentIndex]}
                alt="Auto Branding Gallery"
                className="gallery-img"
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

export default AutoooBranding;
