// RadioBranding.jsx

import React, { useState } from "react";
import radioimg from "../Images/radio.jpg";
import { Helmet } from "react-helmet";

const RadioFMBranding = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  // You can add more bus shelter images here later if you have them
  const images = [radioimg];

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
    image: "https://brandbanao.ai/images/finallogo1.png",
    url: "https://brandbanao.ai/bus%20shelter.html",
    publisher: {
      "@type": "Organization",
      name: "Brand Banao.AI",
      url: "https://brandbanao.ai/",
      logo: "https://brandbanao.ai/images/finallogo.png",
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
          text: "For effective outdoor marketing, Brand Banao.AI is the finest bus shelter advertisement agency in Nashik and among the most reliable in Maharashtra. With an emphasis on innovative designs, optimal positioning, and maximum exposure, the agency ensures that businesses reach their target audience efficiently through bus shelter campaigns. Its planning and execution skill sets Brand Banao.AI, the best bus shelter branding company in Nashik, delivering campaigns that create brand recall and drive measurable results. For companies seeking to own the local and regional market with innovative OOH advertising, Brand Banao.AI is a perfect partner in Maharashtra.",
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

  // const faqItems = [
  //   {
  //     question: "What is bus shelter advertising and how does it work?",
  //     answer:
  //       "Bus shelter advertising refers to a form of advertising where messages of your brand are displayed on front panels, side panels, back drop panels, or as full wraps at busy junctions, markets, residential zones, school and college routes, and high-traffic roads. Thousands of people view these shelters daily while waiting for buses, walking, or stopping at signals; this creates strong visibility and recall for your brand.",
  //   },
  //   {
  //     question: "Which locations and cities do you cover for bus shelter advertising?",
  //     answer:
  //       "Brand Banao.AI operates bus shelter media services in Maharashtra and is significantly present in Konkan, North Maharashtra, West Maharashtra, Marathwada, and Vidarbha. We take care of main and tier-2/tier-3 cities, along with the most frequented corridors that encircle residential areas, business areas, dense school/college areas, hospital areas, and market roads that link to your brand's geography and audience.",
  //   },
  //   {
  //     question: "What types of bus shelter formats do you offer?",
  //     answer:
  //       "We provide non-lit and backlit bus shelters, which are very eye-catching at night compared to regular non-lit bus shelters, which provide more economical and economy-long-term campaigns. Digital bus shelters provide new opportunities to changing messaging, and full panel/side panel branding would cover the most reach per dollar spend to your audience daily. We will work with you to find the right mix of available options based on your brand objectives and the budget available.",
  //   },
  //   {
  //     question: "Do you provide creative design and printing support for bus shelter ads?",
  //     answer:
  //       "Yes, of course, our in-house creative team can develop the concept, adapt the layouts for the various shelter sizes, and provide print-ready artwork. We also handle high-quality printing on durable outdoor materials so that your creatives stay sharp, visible, and weather-resistant throughout the campaign.",
  //   },
  //   {
  //     question: "How do you monitor and report bus shelter campaigns?",
  //     answer:
  //       "We offer total execution and tracking: install checks, lighting and visibility for the backlit and digital shelters, photo documentation, maintenance visits, and proof-of-performance report. Our reporting will ensure your brand is clean, visible, and running as intended.",
  //   },
  //   {
  //     question: "Why should I choose Brand Banao.AI for bus shelter advertising?",
  //     answer:
  //       "Brand Banao.AI brings together 15+ years of OOH experience, a large owned-media bus shelter network across Maharashtra, formidable creative capabilities, and transparent reporting. Because we own the media, we assure better pricing, faster turnaround, and tighter control on quality and performance.",
  //   },
  // ];

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Brand Banao.ai | Radio &amp; FM Branding</title>
        <meta
          name="description"
          content="Boost your brand visibility with Bus Shelter Advertising by Brand Banao.Ai. 24x7 street-level ads with wide reach, local targeting, PAN India presence, and complete campaign execution."
        />
        <meta
          name="keywords"
          content="best bus shelter advertising mumbai, top bus shelter branding in mumbai, best bus shelter branding in nashik, top bus shelter advertising in nashik, best bus stop advertising in Nashik, bus shelter advertising in mumbai, bus shelter branding nashik, bus shelter advertising cost, bus shelter advertising price, bus stop cover, shelter bus, bus shelter advertising company near me, bus shelter branding agency near me, bus shelter branding company in nashik, best bus shelter advertising agency in nashik, best digital bus shelter advertising agency in nashik, top digital bus shelter branding agency in nashik, best outdoor bus shelter branding in nashik, best outdoor bus shelter advertising agency in nashik, outdoor advertising India, OOH advertising, affordable advertising, street level ads, local targeting ads, brand visibility, real estate advertising, healthcare ads, education advertising, fashion advertising, jewellery advertising, hotel advertising, restaurant advertising, BrandBanao.Ai"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-video-preview:-1"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        {/* Canonical */}
        <link rel="canonical" href="https://brandbanao.ai/bus-shelter" />

        {/* Open Graph */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="BrandBanao.Ai" />
        <meta property="og:title" content="Bus Shelter" />
        <meta
          property="og:description"
          content="Make your brand unforgettable with Bus Shelter Ads by BrandBanao.Ai. Low cost, 24x7 visibility, local targeting, and PAN India reach — ideal for Real Estate, Healthcare, Education, Fashion, Hotels & more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandbanao.ai/bus-shelter" />
        <meta
          property="og:image"
          content="https://brandbanao.ai/images/finallogo1.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="630" />
        <meta property="og:latitude" content="20.00293012347024" />
        <meta property="og:longitude" content="73.75462348408139" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bus Shelter" />
        <meta
          name="twitter:description"
          content="Make your brand unforgettable with Bus Shelter Ads by BrandBanao.Ai. Low cost, 24x7 visibility, local targeting, and PAN India reach — ideal for Real Estate, Healthcare, Education, Fashion, Hotels & more."
        />
        <meta
          name="twitter:image"
          content="https://brandbanao.ai/images/homemainimage.png"
        />

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
        <h1 className="hoarding-title">Radio &amp; FM Branding</h1>

        <div className="hoarding-image-wrap">
          <img
            src={radioimg}
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
          <h2>What We Create</h2>
          <p>
            At Brand Banao.AI, we write radio advertisements that sound like everyday 
            conversation, not like commercial scripts. Our method is about clarity, 
            rhythm, natural voice flow, and ease of listening with each word. Every 
            single script is crafted to make the most tremendous impact in the few 
            seconds a brand has on air.
          </p>

          <h2>Why radio still works</h2>
          <p>
            Radio continues to be one of India's most trusted mediums because it 
            reaches people when they are least distracted, driving, commuting, getting 
            ready, or working. If screens are in action, ears are free. This is why a 
            good radio script can achieve higher recall than a lengthy digital ad. We 
            write content that intelligently uses this listening window.
          </p>

          <h2>Why Our Radio Ads Are Unique</h2>

          <p>We don't do overacting, dramatic voices or forced humour. But what we do is 
            write for one strong idea and with total certainty. Our scripts are based on 
            real behaviours, the ways that people listen, the places they stay, and exactly 
            what they remember. It takes place in an uncomplicated, conversational style that 
            any voice artist can naturally deliver.</p>

          <h2>Our Process</h2>
          <p>
            We start by getting to know the brand’s core message and the emotion behind it. 
            Then we find the listening moment, morning drive, evening traffic, weekend radio, 
            and retail hour slots. With that context in place, we write the script carefully 
            (it includes a proper opening hook and an endpoint that leaves the listener with a 
            takeaway). Only once all are locked into the script do we let it go to voice and 
            sound design.
          </p>         

          <h2>What You Might Expect</h2>
          
          <p>We expect scripts that don’t waste words, voices that know they’re being spoken 
            in a trusty voice and the kind of messaging that won’t even hurt, even with fast 
            pacing. Be it a 10-second shop floor push for retail or a 30-second storytelling 
            ad, our focus is always on making the audience catch on with no effort. Every ad 
            is meant to stay embedded in our minds as a memorable piece of memory as long as 
            possible.</p>
                      
        </div>

        
        {/* <div className="hoarding-content faq-section">
          <h2>Radio &amp; FM Branding FAQs</h2>
          <div className="faq-list">
            {faqItems.map((faq, index) => {
              const isActive = activeFaqIndex === index;

              return (
                <div className={`faq-item ${isActive ? "active" : ""}`} key={index} >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() =>
                      setActiveFaqIndex(isActive ? null : index)
                    }
                  >
                    <span className="faq-question-text">
                      {faq.question}
                    </span>
                    <span className="faq-icon">
                      {isActive ? "−" : "+"}
                    </span>
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
        </div> */}

        <div className="hoarding-content">
          {/* Reserved for any additional blocks, forms, CTAs, etc. */}
        </div>
      </div>
    </>
  );
};

export default RadioFMBranding;
