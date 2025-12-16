import React, { useState } from "react";
import { Helmet } from "react-helmet";
import cinema from "../Images/cinemabranding.webp"; // <-- add/replace with your actual cinema image
import "./tvNews.css";

const CinemaBranding = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  // You can add more cinema images here later if you have them
  const images = [cinema];

  const openGallery = (index) => {
    setCurrentIndex(index);
    setShowGallery(true);
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    headline: "Cinema Branding Services - Brand Banao.Ai",
    name: "Cinema Branding Services - Brand Banao.Ai",
    description:
      "Cinema Branding Services by Brand Banao.Ai. Turn movie halls into immersive storytelling platforms with on-screen and off-screen cinema advertising across multiplexes and regional networks, with end-to-end planning and execution.",
    image: "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
    url: "https://brandbanao.ai/CinemaBranding",
    publisher: {
      "@type": "Organization",
      name: "Brand Banao.Ai",
      url: "https://brandbanao.ai/",
      logo: "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
    },
    author: {
      "@type": "Organization",
      name: "Brand Banao.Ai",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is cinema branding and how does cinema advertising work?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Cinema branding is advertising within the movie theatre ecosystem using on-screen ads (before/during intervals) and off-screen placements like lobbies, foyers, standees and displays. Viewers are seated, attentive and distraction-free, which creates strong emotional connection and high recall.",
        },
      },
      {
        "@type": "Question",
        name: "Why does cinema work better than many other offline advertising formats?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Cinema offers controlled lighting, large-format visuals and immersive audio in a captive environment. Ads run repeatedly across shows and days, delivering frequency without fatigue and ensuring real visibility and message retention.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide end-to-end cinema advertising execution?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Brand Banao.Ai handles campaign planning, creative coordination, cinema network selection, scheduling, approvals, and execution. We also coordinate multi-touchpoint placements within the cinema ecosystem to maximize visibility.",
        },
      },
      {
        "@type": "Question",
        name: "Can you run campaigns across multiplexes and regional cinema networks?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We execute campaigns across premium multiplex chains and regional cinema networks. We also support regional targeting in metro and non-metro markets for deeper local relevance and community-level brand affinity.",
        },
      },
      {
        "@type": "Question",
        name: "What on-screen and off-screen cinema advertising options do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We offer high-impact on-screen formats and off-screen options like lobby and foyer advertising placements. We also plan premium placements suited for high-income and metro audiences, depending on the theatre network and location.",
        },
      },
      {
        "@type": "Question",
        name: "How do you plan for ROI and the best cinema advertising mix?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We tailor campaigns based on audience behavior, city tier, film category, show timings, locations, reach and frequency. The goal is to build lasting impressions while optimizing the investment through a powerful mix of cinema advertising options.",
        },
      },
    ],
  };

  const faqItems = [
    {
      question: "What is cinema branding and how does cinema advertising work?",
      answer:
        "Cinema branding is advertising within the movie theatre ecosystem using on-screen ads (before/during intervals) and off-screen placements like lobbies, foyers, standees and displays. Because viewers are seated and attentive, cinema creates strong emotional connection and high recall.",
    },
    {
      question: "Why does cinema work so well for brands?",
      answer:
        "Cinema is immersive: controlled lighting, large-format visuals, and powerful sound in a distraction-free environment. Ads run repeatedly across shows and days, delivering frequency without fatigue and ensuring real visibility and message retention.",
    },
    {
      question: "Do you handle end-to-end cinema advertising solutions?",
      answer:
        "Yes. We manage planning through execution so you don’t have to worry about any part of the process. Along with on-screen ads, we coordinate cinema ecosystem touchpoints to maximize campaign visibility.",
    },
    {
      question: "Can you execute across multiplexes and regional cinema networks?",
      answer:
        "Yes. We work with premium multiplexes and regional cinema networks. Our regional targeting helps brands reach audiences in metro and non-metro markets for deeper local relevance and community-level affinity.",
    },
    {
      question: "What on-screen and off-screen options are available?",
      answer:
        "We plan high-impact on-screen formats plus off-screen placements such as lobby and foyer advertising. Campaigns can also include premium theatre network placements depending on audience, city, and objectives.",
    },
    {
      question: "How do you plan campaigns for ROI?",
      answer:
        "Campaigns are customized based on audience behavior, city tier, film category, and the ideal reach-frequency mix. We help you choose the best cinema advertising options to create lasting impressions and measurable impact.",
    },
  ];

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Brand Banao.Ai | Cinema Branding</title>
        <meta name="author" content="Brand Banao.AI" />
        <meta
          name="description"
          content="Cinema Branding Services by Brand Banao.Ai. Turn movie halls into immersive storytelling platforms with on-screen and off-screen cinema advertising across multiplexes and regional networks, with end-to-end planning and execution."
        />
        <meta
          name="keywords"
          content="cinema branding, cinema advertising, movie theater advertising, theatre advertising, movie screen advertising, on-screen advertising, off-screen advertising, lobby advertising, foyer advertising, multiplex advertising, PVR Cinemas advertising, Cinépolis advertising, cinema and video advertising, brand banao ai, cinema advertising agency india"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-video-preview:-1"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        {/* Canonical */}
        <link rel="canonical" href="https://brandbanao.ai/CinemaBranding" />

        {/* Open Graph */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="BrandBanao.Ai" />
        <meta property="og:title" content="Cinema Branding Service" />
        <meta
          property="og:description"
          content="Cinema Branding Services by Brand Banao.Ai. Immersive on-screen and off-screen theatre advertising across multiplexes and regional cinema networks with end-to-end execution."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandbanao.ai/CinemaBranding" />
        <meta
          property="og:image"
          content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="630" />
        <meta property="og:latitude" content="20.00293012347024" />
        <meta property="og:longitude" content="73.75462348408139" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cinema Branding Service" />
        <meta
          name="twitter:description"
          content="Turn movie halls into storytelling platforms with immersive cinema branding: on-screen & off-screen theatre advertising with end-to-end execution by Brand Banao.Ai."
        />
        <meta
          name="twitter:image"
          content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Same structure/classes as your other service pages */}
      <div className="hoarding-page">
        <h1 className="hoarding-title">Cinema Branding</h1>

        <div className="hoarding-image-wrap">
          <img
            src={cinema}
            alt="Cinema Branding"
            className="hoarding-image"
            onClick={() => openGallery(0)}
          />
        </div>

        {showGallery && (
          <div className="gallery-overlay" onClick={() => setShowGallery(false)}>
            <div className="gallery-box" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[currentIndex]}
                alt="Cinema Branding"
                className="gallery-img"
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

        {/* BOTTOM FAQ SECTION – ACCORDION STYLE */}
        <div className="hoarding-content faq-section">
          <h2>Cinema Advertising FAQs</h2>
          <div className="faq-list">
            {faqItems.map((faq, index) => {
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

        <div className="hoarding-content">{/* Reserved for CTAs, forms, etc. */}</div>
      </div>
    </>
  );
};

export default CinemaBranding;
