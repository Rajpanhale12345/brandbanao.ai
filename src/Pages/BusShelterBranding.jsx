import React, { useState } from "react";
import { Helmet } from "react-helmet";
import busshelter from "../Images/busshelter.jpg";
import "./busShelter.css"

const BusShelterBranding = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);


  // You can add more bus shelter images here later if you have them
  const images = [busshelter];

  const openGallery = (index) => {
    setCurrentIndex(index);
    setShowGallery(true);
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    headline: "Best Bus Shelter in Maharashtra",
    name: "Bus Shelter Advertising & Branding - Brand Banao.AI",
    description:
      "Make your brand unforgettable with Bus Shelter Ads by BrandBanao.Ai. Low cost, 24x7 visibility, local targeting, and PAN India reach — ideal for Real Estate, Healthcare, Education, Fashion, Hotels & more.",
    image: "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
    url: "https://brandbanao.ai/bus-shelter",
    publisher: {
      "@type": "Organization",
      name: "Brand Banao.AI",
      url: "https://brandbanao.ai/",
      logo: "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
    },
    author: {
      "@type": "Organization",
      name: "Brand Banao.AI",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best 360 degree advertising agency in Maharashtra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you want to find the largest 360-degree advertising agency in Maharashtra, Brand Banao.AI should stand out as a trustworthy name. Based in Mumbai and dedicated to tier 2 and tier 3 cities like Nashik, Dhule, Jalgaon, and Marathwada, we provide end-to-end advertising solutions and partnerships including digital, print, outdoor and on-ground activations. With our expertise in OOH and transit advertising, Brand Banao.AI is branded as the best bus shelter advertising agency in Nashik and the best bus shelter branding agency in Nashik that maximized outdoor campaigns for businesses through branded bus shelters. It helps businesses make a great impression to get their audiences' attention. We are data-driven, and our unique designs will ensure brands stand out but also connect impactfully with their target market across Maharashtra through a complete 360-degree approach to advertising.",
        },
      },
      {
        "@type": "Question",
        name: "Which is the best Bus Shelter company in Maharashtra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For effective outdoor marketing, Brand Banao.AI is the finest bus shelter advertisement agency in Nashik and among the most reliable in Maharashtra. With an emphasis on innovative designs, optimal positioning, and maximum exposure, the agency ensures that businesses reach their target audience efficiently through bus shelter campaigns. It's planning and execution skill sets Brand Banao.AI, the best bus shelter branding company in Nashik, delivering campaigns that create brand recall and drive measurable results. For companies seeking to own the local and regional market with innovative OOH advertising, Brand Banao.AI is a perfect partner in Maharashtra.",
        },
      },
      {
        "@type": "Question",
        name: "Which is the best Bus Shelter Branding provider company in Maharashtra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When it comes to effective outdoor advertising, Brand Banao.AI is the top bus shelter advertising agency in Nashik and all of Maharashtra. Brand Banao.AI has a strong presence in tier 1, tier 2, and tier 3 cities. The company offers innovative, high-visibility branding solutions that help businesses reach their target audience effectively. As the leading bus shelter branding agency in Nashik, Brand Banao.AI combines strategic planning, creative design, and prime advertising locations to provide great opportunities for brand exposure. The agency deeply understands out-of-home (OOH) advertising in Maharashtra and uses tools and technologies that give audiences and clients easy access to information through data point delivery. Brand Banao.AI is a trusted agency for businesses that want to boost visibility and connect with the people of Maharashtra.",
        },
      },
      {
        "@type": "Question",
        name: "Which is the best bus shelter branding provider company in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When it is about the best bus shelter brand provider in India, Brand Banao.AI is a brand to reckon with when it comes to outdoor advertising solutions. It has a high presence in tier 2 and tier 3 cities and has made a name for itself as an effective and results-driven campaign builder. Known as the leading bus shelter advertising agency in Nashik, Brand Banao.AI mixes creativity, planning, and modern design to ensure brands get maximum visibility. Their skills in local marketing and execution have also made them the top bus shelter branding agency in Nashik. They deliver consistent results that help businesses connect with their target audience across India.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the top bus shelter branding provider agency in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When it concerns the best bus shelter branding provider agency in India, Brand Banao.AI is a name that is highly recommended, particularly for companies who are seeking to make their outdoor visibility effective. Awarded as the top bus shelter ad agency in Nashik and universally accepted as the top bus shelter branding agency in Nashik, Brand Banao.AI provides creative and successful solutions to assist brands in reaching out to their customers in busy urban and semi-urban spaces. With a specialty in strategic placement, innovative design, and complete execution, the agency maximizes every campaign to achieve maximum brand exposure and customer interaction, and therefore is the top bus shelter advertising agency in India.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the top bus shelter branding provider agency in Maharashtra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When it comes to the top bus shelter branding provider in Maharashtra, Brand Banao.AI stands out as a leading name in the industry. Recognized as the best bus shelter advertising agency in Nashik, the company is trusted by businesses throughout Maharashtra. It specializes in creating effective outdoor campaigns that reach a wide range of audiences. With its innovative approach, strategic locations, and creative execution, Brand Banao.AI has built a strong reputation as the best bus shelter branding agency in Nashik. It delivers measurable results and helps brands improve their visibility in both tier-1 and tier-2 markets across the state.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the top bus shelter branding provider agency in Nashik?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When it is about successful outdoor advertisement, Brand Banao.AI is the best bus shelter advertising agency in Nashik. The company is centered around creativity, innovation, and strategic placing. This way, there is good visibility and recall of the brand for the companies within the city. Identified as the best bus shelter branding agency in Nashik, Brand Banao.AI offers customized advertising solutions that resonate with the local audience and establish a strong market presence. Their out-of-home and transit media expertise positions them as the go-to agency for businesses that seek to increase reach and build a strong brand presence through bus shelter campaigns.",
        },
      },
    ],
  };

  const faqItems = [
    {
      question: "What is bus shelter advertising and how does it work?",
      answer:
        "Bus shelter advertising refers to a form of advertising where messages of your brand are displayed on Front panels, side panels, back drop panels, or as full wraps at busy junctions, markets, residential zones, school and college routes, and high-traffic roads. Thousands of people view these shelters daily while waiting for buses, walking, or stopping at signals; this creates strong visibility and recall for your brand.",
    },
    {
      question: "Which locations and cities do you cover for bus shelter advertising?",
      answer:
        "Brand Banao.AI operates bus shelter media services in Maharashtra and is significantly present in Konkan, North Maharashtra, West Maharashtra, Marathwada, and Vidarbha. We take care of main and tier-2/tier-3 cities, along with the most frequented corridors that encircle residential areas, business areas, dense school/college areas, hospital areas, and market roads that link to your brand's geography and audience.",
    },
    {
      question: "What types of bus shelter formats do you offer?",
      answer:
        "We provide non-lit and backlit bus shelters, which are very eye-catching at night compared to regular non-lit bus shelters, which provide more economical and economy-long-term campaigns. Digital bus shelters provide new opportunities to changing messaging, and full panel/side panel branding would cover the most reach per dollar spend to your audience daily. We will work with you to find the right mix of available options based on your brand objectives and the budget available. ",
    },
    {
      question: "Do you provide creative design and printing support for bus shelter ads?",
      answer:
        "Yes, of course, our in-house creative team can develop the concept, adapt the layouts for the various shelter sizes, and provide print-ready artwork. We also handle high-quality printing on durable outdoor materials so that your creatives stay sharp, visible, and weather-resistant throughout the campaign.",
    },
    {
      question: "How do you monitor and report bus shelter campaigns?",
      answer:
        "We offer total execution and tracking: install checks, lighting and visibility for the backlit and digital shelters, photo documentation, maintenance visits, and proof-of-performance report. Our reporting will ensure your brand is clean, visible, and running as intended.",
    },
    {
      question: "Why should I choose Brand Banao.AI for bus shelter advertising?",
      answer:
        "Brand Banao.AI brings together 15+ years of OOH experience, a large owned-media bus shelter network across Maharashtra, formidable creative capabilities, and transparent reporting. Because we own the media, we assure better pricing, faster turnaround, and tighter control on quality and performance.",
    },
  ];


  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Bus Shelter | Brand Banao.ai</title>
        <meta name="author" content="Brand Banao.AI" />
        <meta name="description" content="Boost your brand visibility with Bus Shelter Advertising by Brand Banao.Ai. 24x7 street-level ads with wide reach, local targeting, PAN India presence, and complete campaign execution." />
        <meta name="keywords" content="best bus shelter advertising mumbai, top bus shelter branding in mumbai, best bus shelter branding in nashik, top bus shelter advertising in nashik, best bus stop advertising in Nashik, bus shelter advertising in mumbai, bus shelter branding nashik, bus shelter advertising cost, bus shelter advertising price, bus stop cover, shelter bus, bus shelter advertising company near me, bus shelter branding agency near me, bus shelter branding company in nashik, best bus shelter advertising agency in nashik, best digital bus shelter advertising agency in nashik, top digital bus shelter branding agency in nashik, best outdoor bus shelter branding in nashik, best outdoor bus shelter advertising agency in nashik, outdoor advertising India, OOH advertising, affordable advertising, street level ads, local targeting ads, brand visibility, real estate advertising, healthcare ads, education advertising, fashion advertising, jewellery advertising, hotel advertising, restaurant advertising, BrandBanao.Ai" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        {/* Canonical */}
        <link rel="canonical" href="https://brandbanao.ai/bus-shelter" />

        {/* Open Graph */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="BrandBanao.Ai" />
        <meta property="og:title" content="Bus Shelter" />
        <meta property="og:description" content="Make your brand unforgettable with Bus Shelter Ads by BrandBanao.Ai. Low cost, 24x7 visibility, local targeting, and PAN India reach — ideal for Real Estate, Healthcare, Education, Fashion, Hotels & more."/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandbanao.ai/bus-shelter" />
        <meta property="og:image" content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="630" />
        <meta property="og:latitude" content="20.00293012347024" />
        <meta property="og:longitude" content="73.75462348408139" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bus Shelter" />
        <meta name="twitter:description" content="Make your brand unforgettable with Bus Shelter Ads by BrandBanao.Ai. Low cost, 24x7 visibility, local targeting, and PAN India reach — ideal for Real Estate, Healthcare, Education, Fashion, Hotels & more." />
        <meta name="twitter:image" content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Using the same structure / classes as Hoarding.jsx for styling */}
      <div className="hoarding-page">
        <h1 className="hoarding-title">Bus Shelter Advertising &amp; Branding</h1>

        <div className="hoarding-image-wrap">
          <img
            src={busshelter}
            alt="Bus Shelter branding example by Brand Banao.AI"
            className="hoarding-image"
            onClick={() => openGallery(0)}
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
                alt="Bus shelter advertising gallery - Brand Banao.AI"
                className="gallery-img"
              />
            </div>
          </div>
        )}

        <div className="hoarding-content">
          <h2>Bus Shelter Advertising Services - Brand Banao.AI</h2>
          <p>
            Bus Shelter Advertising is still one of the most powerful and great
            value forms of outdoor advertising available today, especially for
            brands that require visibility, recall factor, and continuous exposure.
            Brand Banao.AI offers premium bus shelter advertising options in
            Maharashtra and beyond, helping brands engage directly with commuters,
            visiting pedestrians, and local audiences likely to be in busy locations.
          </p>
          <p>
            As an expert in OOH media with 15+ years of experience coupled with our
            own strong owned-media network, we assure you that your brand will
            be noticed where it is most important.
          </p>

          <h2>What is Bus Shelter Advertising?</h2>
          <p>
            Bus Shelter Advertising refers to marketing displays placed on the
            sides, back panels, or complete wraps of bus shelters. These
            displays are placed in high-visibility areas such as:
          </p>
          <ul>
            <li>Busy traffic junctions</li>
            <li>Commercial streets</li>
            <li>Residential zones</li>
            <li>Business districts</li>
            <li>College and school routes</li>
            <li>Markets and shopping hubs</li>
          </ul>
          <p>
            With thousands of people passing by these shelters each day, they are
            ideal for brand awareness, regional reach, and location-based marketing.
            <br />
            Bus shelters give continuous, all day and all-night visibility even
            when people are not travelling. Whether a person waits for the bus,
            walks across the road, or stops at a signal, they naturally look at
            shelter ads.
          </p>

          <h2>Why Bus Shelter Advertising Works So Well</h2>
          <ol>
            <li>
              <strong>Long Dwell Time</strong>
              <p>
                Bus shelters are where people wait so they have more time to examine
                your ad, which increases recall, learning from the message, and
                engagement based on action.
              </p>
            </li>
            <li>
              <strong>Hyperlocal Targeting</strong>
              <p>
                Bus shelters provide the opportunity to target audiences in a
                specific locality, zone, or high movement corridor, making
                it an ideal advertising channel for:
              </p>
              <ul>
                <li>Retail outlets</li>
                <li>Hospitals</li>
                <li>Schools &amp; colleges</li>
                <li>Real estate projects</li>
                <li>Hotels &amp; resorts</li>
                <li>Gyms &amp; fitness</li>
                <li>Political campaigns</li>
              </ul>
            </li>
            <li>
              <strong>Day and Night Visibility</strong>
              <p>
                We have digital, backlit, and non-lit shelters for all
                visibility issues (day and night).
              </p>
            </li>
            <li>
              <strong>Economical OOH Media</strong>
              <p>
                Bus shelters provide a greater return rate on investment compared
                to more expensive OOH assets such as billboards or a large format
                OOH display, given their lower cost factor and repeated impressions
                relative to the same location every day.
              </p>
            </li>
            <li>
              <strong>Great for Short-term and Long-term Campaigns</strong>
              <p>
                Brands may also choose to use flexible durations based upon
                objectives, including a 15-day campaign, or year-long visibility.
              </p>
            </li>
          </ol>

          <h2>Bus Shelter Advertising by Brand Banao.AI</h2>
          <p>
            As one of the most significant OOH media owners in Maharashtra,
            Brand Banao.AI has a full bus shelter advertising solution with its own:
          </p>
          <ul>
            <li>Premium Media Locations</li>
            <li>Dedicated Monitoring</li>
            <li>Creative Excellence</li>
            <li>Pan-Maharashtra Placeability</li>
            <li>AI-Optimized Campaign Planning</li>
          </ul>
          <p>
            We control Digital, Backlit, and Non-Lit shelters in cities and towns
            that will provide your advertisement with consistent visibility in
            order to maximize brand recall.
          </p>

          <h2>The Bus Shelter Advertising Services will include:</h2>

          <h3>1. Planning and Geographic Strategy</h3>
          <p>
            We will examine the locations and shelters with the best value for
            impressions by analyzing the following factors:
          </p>
          <ul>
            <li>Traffic patterns</li>
            <li>Audience demographics</li>
            <li>Commercial hubs</li>
            <li>Commuting routes</li>
            <li>Alignment with brand category</li>
          </ul>
          <p>
            We will ensure your brand is in the right place, at the right
            time, in front of the right audience!
          </p>

          <h3>2. Creative Development and Execution</h3>
          <p>
            The best designs create the best outcomes! Our highly trained and
            leveraged in-house creative team will create high-contrast,
            high-quality designs that offer visual snap for outdoor viewing.
            This involves:
          </p>
          <ul>
            <li>Concept development</li>
            <li>Creative adapted for multiple sizes of shelter</li>
            <li>Print ready files</li>
            <li>Prints on durable materials with high-quality printing</li>
          </ul>

          <h3>3. End-to-End Media Execution.</h3>
          <p>Once approved, we handle:</p>
          <ul>
            <li>Material printing</li>
            <li>Installation display media</li>
            <li>Quality checks</li>
            <li>Lighting and visibility checks</li>
            <li>Final photo documentation</li>
          </ul>
          <p>Every step is treated with due care and professionalism.</p>

          <h3>4. Campaign Monitoring and Documentation</h3>
          <p>We provide:</p>
          <ul>
            <li>On-location adult review</li>
            <li>Photo documentation</li>
            <li>Maintenance checks</li>
            <li>Proofs of performance reports</li>
          </ul>
          <p>
            All of this assists in ensuring your brand is clean, vibrant
            and 100% visible throughout the campaign.
          </p>

          <h2>Types of Bus Shelter Advertising We Offer</h2>
          <ul>

            <li><strong>Backlit Bus Shelters:</strong>
              <ol>Great night visibility.</ol>
              <ol>Bright, pop, high impact look.</ol>
            </li>

            <li><strong>Non-lit Bus Shelters:</strong>
              <ol>Great for a budget-friendly campaign.</ol>
              <ol>Provides long-term visibility at a lesser cost.</ol>
            </li>


            <li><strong>Digital Bus Shelters:</strong>
              <ol>High-impact modern displays.</ol>
              <ol>Excellent for changing dynamic content or multiple creatives.</ol>
            </li>
          </ul>

          <h2>Industries that Benefit the Most From Bus Shelter Advertising</h2>
          <p>
            Bus shelters work for virtually every type of business, particularly
            businesses that are dependent on engaging a local audience. The
            following are some of the leading industries:
          </p>
          <ul>
            <li>Hospitals &amp; Clinics</li>
            <li>Educational Institutions</li>
            <li>Developments in Real Estate</li>
            <li>FMCG &amp; Retail Brands</li>
            <li>Food &amp; Beverage locations</li>
            <li>E-commerce</li>
            <li>Automotive Brands</li>
            <li>Politicians and Corporators</li>
            <li>Government Campaigns</li>
            <li>Financial &amp; Banking Services</li>
          </ul>
          <p>
            We are here to ensure that your message reaches the right audience
            through our powerful hyperlocal network.
          </p>

          <h2>Why Choose Brand Banao.AI for Bus Shelter Advertising?</h2>
          <ol>

            <li>
              <strong>Maharashtra&apos;s Largest OOH Network</strong>
              <p>
                With planetary coverage across Konkan, North Maharashtra,
                West Maharashtra, Marathwada, and Vidarbha, we provide
                exceptional geographical coverage for your brand.
              </p>
            </li>

            <li>
              <strong>Concerning 15+ Years of experience in OOH advertising</strong>
              <p>
                PANA Enterprises provides 15 years of experience in outdoor
                advertising to each and every campaign
              </p>
            </li>

            <li>
              <strong>The value of OOH homeless and target </strong>
              <p>
                Real media, Media we own. <br />
                Our own bus shelters - meaning:
              </p>
              <ul>
                <li>IMMEDIATE AVAILABILITY.</li>
                <li>BETTER PRICING.</li>
                <li>QUICKER TURNAROUND TIMES.</li>
                <li>Ongoing reporting.</li>
              </ul>
            </li>

            <li>
              <strong>360° Campaign Support</strong>
              <p>We handle everything in-house from planning to execution.</p>
            </li>

            <li>
              <strong>High ROI and Transparency of Reporting</strong>
              <p>
                We just focus on performance-based outdoor campaigns backed by:
              </p>
              <ul>
                <li>Photo reports</li>
                <li>Monitoring updates</li>
                <li>Planning tools powered by AI</li>
              </ul>
            </li>

          </ol>
        </div>

        {/* BOTTOM FAQ SECTION – ACCORDION STYLE */}
        <div className="hoarding-content faq-section">
          <h2>Bus Shelter Advertising FAQs</h2>
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

export default BusShelterBranding;
