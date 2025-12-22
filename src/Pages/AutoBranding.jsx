import React, { useState } from "react";
import { Helmet } from "react-helmet";
import airport from "../Images/autobranding.jpg";
import "./tvNews.css";

const AutoooBranding = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  // You can add more auto branding images here later if you have them
  const images = [airport];

  const openGallery = (index) => {
    setCurrentIndex(index);
    setShowGallery(true);
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    headline: "Auto Branding Services - Brand Banao.Ai",
    name: "Auto Branding - Brand Banao.Ai",
    description:
      "Auto branding and auto rickshaw advertising by Brand Banao.Ai. High-visibility mobile ads with wraps, back panels, and route-based campaigns with reporting for hyperlocal reach.",
    image: "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
    url: "https://brandbanao.ai/AutoBranding",
    publisher: {
      "@type": "Organization",
      name: "Brand Banao.Ai",
      url: "https://brandbanao.ai/",
      logo: {
        "@type": "ImageObject",
        url: "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
      },
    },
    author: {
      "@type": "Organization",
      name: "Brand Banao.Ai",
    },
  };

  // ✅ This was "erroring" because it was defined but not used.
  // Fix: we render it inside Helmet as JSON-LD below.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Auto Branding & Auto Rickshaw Advertising",
    serviceType: "Outdoor Advertising",
    provider: {
      "@type": "Organization",
      name: "Brand Banao.Ai",
      url: "https://brandbanao.ai/",
      logo: {
        "@type": "ImageObject",
        url: "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
      },
    },
    areaServed: "IN",
    url: "https://brandbanao.ai/AutoBranding",
    description:
      "Mobile outdoor advertising using auto rickshaw branding: full wraps, back panels, side panels, route-based hyperlocal campaigns with monitoring and reporting.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is auto branding?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Auto branding is a form of mobile outdoor advertising where auto-rickshaws display your brand using wraps and panels, generating repeated local visibility across busy streets and neighborhoods.",
        },
      },
      {
        "@type": "Question",
        name: "What branding options are available for auto rickshaws?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Common options include full wraps, back panels, and side panels. Campaigns can also be route-based to focus on specific localities for hyperlocal reach.",
        },
      },
      {
        "@type": "Question",
        name: "How many people can an auto branding campaign reach?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Reach varies by city and routes, but auto ads can generate high-frequency impressions daily as autos travel through markets, residential areas, and traffic hotspots.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide reporting for auto branding campaigns?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Campaigns can include monitoring, mapping, and reporting to track coverage and ensure consistent visibility across target areas.",
        },
      },
      {
        "@type": "Question",
        name: "Why choose Brand Banao.Ai for auto branding?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Brand Banao.Ai combines creative execution with on-ground operations to deliver durable, high-visibility auto branding campaigns designed for strong local recall and measurable coverage.",
        },
      },
    ],
  };

  const faqItems = [
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
      question: "Why choose Brand Banao.Ai for auto branding?",
      answer:
        "We blend strategy, creative execution, and operations to deliver strong street-level visibility, brand recall, and consistent campaign coverage.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Auto Branding | Brand Banao.Ai</title>
        <meta name="author" content="Brand Banao.AI" />
        <meta name="description" content="Auto branding and auto rickshaw advertising by Brand Banao.Ai. High-visibility mobile ads with wraps, back panels, and route-based hyperlocal campaigns with reporting for hyperlocal reach." />
        <meta name="keywords" content="auto branding, auto rickshaw advertising, auto advertising, auto wrap ads, mobile outdoor advertising, back panel branding, side panel branding, hyperlocal advertising, brand banao ai" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <link rel="canonical" href="https://brandbanao.ai/AutoBranding" />

        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="BrandBanao.Ai" />
        <meta property="og:title" content="Auto Branding Services" />
        <meta property="og:description" content="Auto branding and auto rickshaw advertising: wraps, panels, route-based hyperlocal campaigns with monitoring and reporting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandbanao.ai/AutoBranding" />
        <meta property="og:image" content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="630" />
        <meta property="og:latitude" content="20.00293012347024" />
        <meta property="og:longitude" content="73.75462348408139" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Auto Branding Services" />
        <meta name="twitter:description" content="Auto branding and auto rickshaw advertising by Brand Banao.Ai: wraps, panels, route-based hyperlocal campaigns with monitoring and reporting." />
        <meta name="twitter:image" content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />

        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
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
                        {faqItems.map((faq, index) => {
                            const isActive = activeFaqIndex === index;

                            return (
                                <div
                                    className={`faq-item ${isActive ? "active" : ""}`}
                                    key={index}
                                >
                                    <button
                                        type="button"
                                        className="faq-question"
                                        onClick={() =>
                                            setActiveFaqIndex(isActive ? null : index)
                                        }
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



                <div className="hoarding-content">
                    {/* Reserved for any additional blocks, forms, CTAs, etc. */}
                </div>
            </div>
        </>
    );
};

export default AutoooBranding;
