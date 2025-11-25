import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./busShelter.css"

import hoarding from "../Images/hoarding.jpg";
import hoarding2 from "../Images/award2.png";
import hoarding3 from "../Images/award5.png";
import hoarding4 from "../Images/busbranding.jpg";

const HoardingBranding = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);;
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const images = [hoarding, hoarding2, hoarding3, hoarding4];

  const openGallery = (index) => {
    setCurrentIndex(index);
    setShowGallery(true);
  };

  // Page-specific JSON-LD schemas
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    headline: "Best Hoarding in Maharashtra",
    name: "Hoarding / Billboard Advertising - Brand Banao.AI",
    description:
      "Billboard advertising with Brand Banao.AI! From prime hoarding locations, we create lasting brand recall & unparalleled visibility across Maharashtra.",
    image: "https://brandbanao.ai/images/finallogo1.png",
    url: "https://brandbanao.ai/hoardings.html",
    publisher: {
      "@type": "Organization",
      name: "Brand Banao.AI",
      url: "https://brandbanao.ai/",
      logo: "https://brandbanao.ai/images/finallogo.png",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best 360 degree advertising agency in Maharashtra",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brand Banao.ai is a strong contender, known for its 360-degree Outdoor and digital marketing approach delivering impactful branding across digital, outdoor, print, TV, & radio with over 16+ years of experience.",
        },
      },
      {
        "@type": "Question",
        name: "Which is the best hoarding company in Maharashtra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best hoarding company in Maharashtra is undoubtedly Brand Banao.AI, known for delivering high-impact billboard advertising across Maharashtra’s prime urban and semi-urban locations. With expertise in hyperlocal OOH branding, Brand Banao.AI places your message strategically in high-traffic areas like Mumbai, Nashik, Pune, Nagpur, and Tier 2–3 cities. They offer cost-effective hoarding solutions with 24/7 visibility, massive daily impressions, and unmatched brand recall. Brand Banao.AI specializes in flexible billboard sizes, AI-powered digital hoardings (DOOH), and region-specific emotional messaging—targeting local audiences in Marathi, Hindi, and Hinglish with messages that build trust and credibility. If you're looking for a reliable hoarding advertising agency in Maharashtra that blends creative design, strategic location planning, and real-world visibility, Brand Banao.AI is your ultimate partner for budget-friendly billboard marketing with high ROI.",
        },
      },
      {
        "@type": "Question",
        name: "Which is the best hoarding provider company in Maharashtra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brand Banao.ai is one of the best hoarding-providing companies in India. BrandBanao.ai provides impactful and cost-effective out-of-home advertising platforms. They are focused on tier 2 and tier 3 cities and build visibility through a proper billboard placement strategy. Their work is actionable, and they allow for branding execution and creative assistance support. If your goals are brand awareness or measurable advertisement outcomes based on your brand's efforts, BrandBanao.ai is worth investigating.",
        },
      },
      {
        "@type": "Question",
        name: "Which is the best hoarding provider company in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Based in India, Brand Banao.ai is one of the best hoarding and the biggest providers of coverage in Maharashtra, with opportunities in Mumbai, Nagpur, and Nashik. Whether you know BrandBanao.ai for innovative outdoor advertising or 40-foot 4k digital and 3D hoarding, Brand Banao.ai provides logo brand name recognition solutions and combines data and creative strategy, delivering high-impact campaign reach to preferred local audiences.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the top hoardings provider agency in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brand Banao.ai is one of the leading hoardings provider agencies in India, providing impactful and strategic outdoor advertising solutions across tier 2 and tier 3 cities. Specializing in high-visibility hoardings in tier 2 and tier 3 cities, Brand Banao.ai provides targeted and results-oriented campaigns by advertising through high-impact metrics of out-of-home (OOH) media.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the top hoardings provider agency in Maharashtra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brand Banao.AI is one of the top hoardings provider agencies in Maharashtra for delivering impactful outdoor advertising with an emphasis on major tier 2 and tier 3 cities. The agency's competence is in Nashik, Dhule, and Jalgaon, where the company specializes in high-visibility and data-supported hoarding solutions that enable marketers to target local areas and drum up local engagement for their brand.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the top hoardings provider agency in Nashik?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brand Banao.ai is the ultimate hoardings provider agency located in Nashik. The agency delivers high-impact outdoor advertising across key cities through the ability to secure strategic placements and the strategic and creative designs for the hoardings, and offers end-to-end OOH solutions for their clients to maximize brand visibility and promote their brand. Brand Banao.ai is the agency of choice for impactful hoarding campaigns in Nashik.",
        },
      },
    ],
  };

  const faqItems = [
    {
      question: "What makes BrandBanao.ai the best hoarding advertising company in Nashik?",
      answer:
        "Brand Banao.ai blends a blend of creative storytelling, exceptional production quality, strategic placement of media, and 24/7 continuous visibility in outdoor locations by designing each static billboard or medium as a city landmark for memory and measurable brand impact.",
    },
    {
      question: "What hoarding advertising services does BrandBanao.ai offer?",
      answer:
        "Creative billboard design, top-notch printing, digital billboard advertising, outdoor installation, and maintenance services, as well as environmentally friendly options. Temporary construction hoarding and custom design templates are also available.",
    },
    {
      question: "How does BrandBanao.ai choose the best hoarding locations?",
      answer:
        "Locations are selected according to what route/location has traffic, sight angles for visibility, demographic connection of the area, and overall goal for the brand. Therefore, the best locations are offered throughout Nashik, as well as in heavily trafficked areas of Maharashtra, such as around malls and markets, and near the major corridors of real estate.",
    },
    {
      question: "Which industries do you serve with hoarding advertising?",
      answer:
        "Industries serviced include commercial property, retail, health care, education, hospitality, as well as corporate entities. Each sector gets an individualized and customized creative solution.",
    },
    {
      question: "How can I book a hoarding with BrandBanao.ai?",
      answer:
        "The team can be reached via phone, WhatsApp, or via their web page to find out how to begin developing an outdoor advertising campaign with Brand Banao.ai. Please provide the team with the goals of your brand placement, where you would like the locations to be, what your budget is, and when you would like to begin your campaign.",
    },
  ];

  return (
    <>
      <Helmet>

        <title>Hoarding | Brand Banao.AI </title>
        <meta name="description" content="Billboard advertising with Brand Banao.AI! From prime hoarding locations, we create lasting brand recall & unparalleled visibility across Maharashtra." />
        <meta name="keywords" content="best hoardings near me, best hoardings in Nashik, best billborads in nashik, top billboards in nashik, best 360 degree advertising agency in Maharashtra, best 360 degree advertisiing company in maharashtra, top 360 degree advertising agency in maharashtra, top 360 degree advertising company in maharashtra, best outdoor advertising agency in Maharashtra, top billboard advertising companies in India, digital billboard advertising services near me, affordable hoarding advertising in Mumbai, billboard advertising agency for political campaigns, programmatic DOOH advertising India, best flex printing for hoardings in Maharashtra, hoarding advertising rates in Nashik, where to rent billboards in Nashik, how effective is billboard advertising in India, billboard advertising Maharashtra, hoarding ads India, outdoor advertising agency, OOH advertising company, digital billboards Maharashtra, LED hoardings Mumbai, affordable billboard ads, programmatic DOOH India, brand visibility hoardings, hyperlocal billboard targeting, high impact OOH marketing, AI outdoor advertising, traditional vs digital billboards, billboard design experts, top hoarding agency Maharashtra" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <link rel="canonical" href="https://brandbanao.ai/hoardings" />

        {/* Open Graph */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="BrandBanao.Ai" />
        <meta property="og:title" content="Hoarding/Billboard | Brand Banao.AI" />
        <meta property="og:description" content="Billboard advertising with Brand Banao.AI! From prime hoarding locations, we create lasting brand recall & unparalleled visibility across Maharashtra." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandbanao.ai/hoardings.html" />
        <meta property="og:image" content="https://brandbanao.ai/images/finallogo1.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="630" />
        <meta property="og:latitude" content="20.00293012347024" />
        <meta property="og:longitude" content="73.75462348408139" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hoarding/Billboard | Brand Banao.AI" />
        <meta name="twitter:description" content="Brand Banao.AI provides strategic, eye-catching billboard advertising solutions virtually all across Maharashtra." />
        <meta name="twitter:image" content="https://brandbanao.ai/images/homemainimage.png" />

        {/* Page-specific structured data */}
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

      </Helmet>

      <div className="hoarding-page">
        <h1 className="hoarding-title">Hoarding / Billboard Advertising</h1>

        <div className="hoarding-image-wrap">
          <img
            src={hoarding}
            alt="Hoarding branding example by Brand Banao.AI"
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
                alt="Hoarding advertising gallery - Brand Banao.AI"
                className="gallery-img"
              />
            </div>
          </div>
        )}

        <div className="hoarding-content">
          <h2>About Our Hoarding Services</h2>
          <p>
            Every morning, Nashik wakes up to a city full of stories. Some fade
            with the sunlight, some whisper behind the billboards, but some?
            Some own the streets. Their colors spread across crossroads, their
            words walk through the traffic, and their impact spills over long
            after people have already passed.
          </p>
          <p>That is what a hoarding done right can do.</p>
          <p>That is the magic BrandBanao.ai brings to your brand.</p>
          <p>We don't put up hoardings, we create landmarks.</p>

          <h2>Our Approach to Hoarding Advertising</h2>
          <p>At BrandBanao.ai, every hoarding is a conversation with the city.</p>
          <p>It begins with your brand story yet doesn't end with it.</p>
          <p>
            It speaks in visuals, in fonts, in emotions, everything that
            transcends noise and compels people to look up.
          </p>
          <p>
            We are the hoarding advertising company that ensures your brand not
            only “appears” but arrives.
          </p>

          <h2>Complete Hoarding Advertising Services</h2>
          <ul>
            <li>Creative hoarding design</li>
            <li>High-quality printing</li>
            <li>Outdoor installation</li>
            <li>Daily/weekly/monthly maintenance</li>
            <li>LED hoarding advertising</li>
            <li>Temporary hoardings for building sites</li>
            <li>Creative hoarding design templates</li>
          </ul>
          <p>
            Every BrandBanao.ai hoarding turns your story into a silhouette
            across the skyline.
          </p>

          <h2>Hoardings Created with Care; Placed for Purpose</h2>
          <p>We ask: “What do you want people to feel when they look up?”</p>
          <p>This transforms:</p>
          <ul>
            <li>Real estate hoardings into construction site love letters</li>
            <li>3D hoardings into dimension-shifting monologues</li>
            <li>Eco-friendly hoardings into literary experiments</li>
            <li>Luxury brand hoardings into poetry a million eyes read</li>
          </ul>
          <p>Every frame holds a thought and every thought counts.</p>

          <h2>Precision, Quality &amp; Consistency</h2>
          <p>Our strength: precision.</p>
          <p>
            Every campaign, LED hoarding advertising, outdoor hoarding services,
            daily maintenance checklists are all managed with care.
          </p>
          <p>Freshness stays from day one to day 30.</p>

          <h2>Strategic Hoarding Locations</h2>
          <p>Every corner has a story. Let yours be the loudest.</p>
          <p>We don't just find you a spot; we find you a presence.</p>
          <ul>
            <li>Prime hoarding locations in Nashik</li>
            <li>High-traffic hoarding sites across Maharashtra</li>
            <li>Busy roads, near malls, prime real estate corridors</li>
          </ul>
          <p>
            Presence isn't about going everywhere. It's about going exactly
            where you should.
          </p>

          <h2>Transparent Pricing &amp; Measurable Impact</h2>
          <p>Numbers Matter - But Impact Matters More.</p>
          <p>Transparent execution includes:</p>
          <ul>
            <li>Hoarding board material types</li>
            <li>Printing costs</li>
            <li>Daily rates</li>
            <li>ROI on hoarding advertisement</li>
          </ul>
          <p>Our goal: make every impression measurable and meaningful.</p>

          <h2>Why Brands Choose Hoardings Over Billboards</h2>
          <p>Billboards talk. Hoardings converse.</p>
          <p>A billboard yells from far away.</p>
          <p>A hoarding stands right where decisions are made.</p>
          <p>A well-designed hoarding says: We're here. We're trusted. We belong.</p>

          <h2>Industries We Serve</h2>
          <ul>
            <li>Real Estate</li>
            <li>Retail</li>
            <li>Healthcare</li>
            <li>Education</li>
          </ul>
          <p>Our designs have:</p>
          <ul>
            <li>Sold homes</li>
            <li>Launched hospitals</li>
            <li>Promoted schools</li>
            <li>Celebrated causes</li>
          </ul>
          <p>
            Creative hoardings for new property launches, construction safety
            boards, and corporate campaigns.
          </p>

          <h2>Brand Impact</h2>
          <p>A brand that stands tall, literally.</p>
          <p>Bold. Alive. Un-missable.</p>
          <p>For one second, the city freezes, and your message stays.</p>

          <h2>Why BrandBanao.ai</h2>
          <p>Not just billboards, opportunities for awareness.</p>
          <p>Your story. Our skyline.</p>
          <p>From blueprints to publishing.</p>
          <p>From economical to premium hoarding installation in Nashik.</p>
          <p>We make your brand rise visibly, beautifully, and responsibly.</p>

          <h2>24/7 Outdoor Presence</h2>
          <p>In a digital-cluttered world, the billboard stands straight.</p>
          <p>24 hours a day.</p>
          <p>7 days a week.</p>
          <p>Wordlessly telling your story to the world passing by.</p>

          <h2>Final Note</h2>
          <p>BrandBanao.ai - Best Hoarding Advertising Company in Nashik.</p>
          <p>For brands that want to be acknowledged and heard.</p>
          <p>
            For those who believe great advertising belongs in the sky, not just
            the screen.
          </p>
          <p>Let's create your brand, the city's heritage.</p>
        </div>


        {/* FAQ SECTION – ACCORDION STYLE */}
        <div className="hoarding-content faq-section">
          <h2>Hoarding Advertising FAQs</h2>
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

export default HoardingBranding;
