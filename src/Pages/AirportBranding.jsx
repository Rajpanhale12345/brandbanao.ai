import React, { useState } from "react";
import { Helmet } from "react-helmet";
import airport from "../Images/airport.jpg";
import "./busShelter.css"

const AirportBranding = () => {
    const [showGallery, setShowGallery] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);


    // You can add more bus shelter images here later if you have them
    const images = [airport];

    const openGallery = (index) => {
        setCurrentIndex(index);
        setShowGallery(true);
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        headline: "Airport Branding Services - Brand Banao.Ai",
        name: "Airport Branding Services - Brand Banao.Ai",
        description:
            "Airport Branding Services by Brand Banao.Ai. Reach premium travelers with high-impact airport advertising across terminals, lounges, baggage belts, and digital screens with end-to-end planning, creatives, permissions, and execution.",
        image: "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
        url: "https://brandbanao.ai/AirportBranding",
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
                name: "What is airport branding and how does it work?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Airport branding is advertising inside airport environments such as terminals, check-in zones, security lanes, boarding gates, lounges, baggage claim, and digital screens. Since travelers spend 90–120 minutes in the airport, your brand gets repeated visibility that builds strong recall and trust.",
                },
            },
            {
                "@type": "Question",
                name: "Which airport touchpoints are best for high visibility?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "High-visibility airport touchpoints include Arrival & Departure Terminals, check-in counters, security lanes, boarding gates, baggage claim & conveyor belts, premium lounges, and digital LED screens. The best mix depends on your audience and campaign objective.",
                },
            },
            {
                "@type": "Question",
                name: "Do you handle permissions, creatives, printing and installation?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes. Brand Banao.Ai provides end-to-end airport branding execution: media planning, creative design, approvals/permissions, printing/production, logistics, and on-ground installation for a smooth campaign rollout.",
                },
            },
            {
                "@type": "Question",
                name: "Is airport branding useful for premium brands and partnerships?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes. Airports are aspirational and premium environments, which elevates the credibility of your message. Airport presence signals scale, seriousness, and market maturity—helpful for investors, JV discussions, partnerships, and high-end collaborations.",
                },
            },
            {
                "@type": "Question",
                name: "Can airport branding help with talent acquisition?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes. Many senior professionals, consultants, and international experts travel through airports daily. Airport branding boosts employer branding by positioning your organization as elite, growth-driven, and globally engaged.",
                },
            },
            {
                "@type": "Question",
                name: "Why choose Brand Banao.Ai for airport branding?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "With 15+ years of OOH experience, Brand Banao.Ai offers pan-India airport media access, data-driven placement strategy, premium creative support, end-to-end execution, and performance reporting with campaign documentation and post-campaign analysis.",
                },
            },
        ],
    };


    const faqItems = [
        {
            question: "What is airport branding and how does it work?",
            answer:
                "Airport branding is advertising inside airports across terminals, check-in zones, security lanes, boarding gates, lounges, baggage claim areas, and digital screens. Since travelers spend 90–120 minutes inside airports, your brand gets repeated, high-quality exposure that builds strong recall and trust.",
        },
        {
            question: "Which airport touchpoints give the best visibility?",
            answer:
                "The best touchpoints include Arrival & Departure Terminals, check-in counters, security lanes, boarding gates, premium lounges, baggage claim & conveyor belts, and digital LED screens. We recommend the mix based on your audience, budget, and objective (awareness, premium positioning, launch, etc.).",
        },
        {
            question: "Do you provide creative design and production support?",
            answer:
                "Yes. Our team supports premium airport-ready creatives with high visual impact. We also coordinate with production requirements so your brand looks sharp, clean, and premium across formats.",
        },
        {
            question: "Do you handle media booking, permissions and execution?",
            answer:
                "Yes. We provide end-to-end execution: planning, media booking, permissions, production coordination, logistics, and on-ground installation for a smooth rollout.",
        },
        {
            question: "Is airport branding useful for premium brands and partnerships?",
            answer:
                "Absolutely. Airports are aspirational, secure, and premium environments. Advertising here improves perceived credibility and helps you impress investors, partners, and high-value audiences.",
        },
        {
            question: "Why choose Brand Banao.Ai for airport branding?",
            answer:
                "With 15+ years in OOH, we bring data-driven planning, pan-India airport media access, premium creative support, smooth coordination, and reporting with campaign documentation and post-campaign analysis.",
        },
    ];



    return (
        <>
            <Helmet>
                {/* Basic SEO */}
                <title>Brand Banao.Ai | Airport Branding</title>
                <meta name="author" content="Brand Banao.AI" />
                <meta name="description" content="Airport Branding Services by Brand Banao.Ai. Reach premium travelers with high-impact airport advertising across terminals, lounges, baggage belts, and digital screens. End-to-end planning, creatives, permissions, and execution." />
                <meta name="keywords" content="airport branding, airport advertising, airport media, airport hoarding, airport digital screens advertising, airport LED advertising, baggage belt branding, baggage claim advertising, lounge branding, check-in counter branding, boarding gate branding, terminal branding, airport OOH, out of home advertising, premium advertising, brand banao ai, brand banao airport branding, airport branding agency india, airport branding pan india, airport advertising company" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta name="MobileOptimized" content="width" />
                <meta name="HandheldFriendly" content="true" />

                {/* Canonical */}
                <link rel="canonical" href="https://brandbanao.ai/AirportBranding" />

                {/* Open Graph */}
                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content="BrandBanao.Ai" />
                <meta property="og:title" content="Airport Branding Service" />
                <meta property="og:description" content="Airport Branding Services by Brand Banao.Ai. Premium visibility across terminals, lounges, baggage belts, and digital screens with end-to-end execution." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://brandbanao.ai/AirportBranding" />
                <meta property="og:image" content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1000" />
                <meta property="og:image:height" content="630" />
                <meta property="og:latitude" content="20.00293012347024" />
                <meta property="og:longitude" content="73.75462348408139" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Airport Branding Service" />
                <meta name="twitter:description" content="Reach premium travelers with airport branding across terminals, lounges, baggage belts and digital screens. End-to-end execution by Brand Banao.Ai." />
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
                <h1 className="hoarding-title">Airport Branding</h1>

                <div className="hoarding-image-wrap">
                    <img
                        src={airport}
                        alt="Airport Branding"
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
                                alt="Airport Branding"
                                className="gallery-img"
                            />
                        </div>
                    </div>
                )}

                <div className="hoarding-content">
                    <h2>Airport Branding Services - Brand Banao.Ai</h2>
                    <p>
                        The airport is a crazy powerful ad playground in today's fast world. It
                        pulls in a premium crowd: business travelers, pros, high-earning families,
                        NRIs, international visitors, and decision-makers who move markets. At Brand
                        Banao.Ai, we tap into this high-value setup with strategic, high-impact
                        Airport Branding that puts your brand exactly where people are looking.
                    </p>
                    <p>
                        <b>Airports naturally mean minimum 90 minutes to 120 minutes spans: travelers
                        hang out in check-in lines, lounge areas near boarding gates, at baggage
                        belts, and scrolling digital screens around the terminal.</b> That extra exposure
                        will stick better, build real brand connection, and beat traditional outdoor
                        ads. Our aim is to have your brand part of every traveler's journey-from the
                        time they land to when they take off.
                    </p>

                    <h2>Why Airports' Unique Branding Opportunities</h2>
                    <p>
                        The extended unit of time that people have in airports, <b>usually 90 minutes to
                        2 hours before their flight, provides an opportunity for branding</b> that cannot
                        be missed, avoided, or passed up. This is a perfect setting for building brand
                        recognition and advocacy through repeated exposure to your brand in an
                        uninterrupted manner and creating trust.
                    </p>
                    <p>
                        Additionally, when people consider the image of an airport, they see a combination
                        of being a secure, aspirational, international, and premium location that
                        automatically enhances both the perceived quality and how credible each piece
                        of advertising is. Therefore, <b>if you are looking to impress your probable investors,
                        joint ventures (JV), partnerships, or high-end collaborations, having a presence in
                        an airport indicates size, seriousness, and market maturity</b>.
                    </p>

                    <h2>Talent Acquisition: An Effective Method</h2>
                    <p>
                        Branding through an airport is undervalued yet a very effective method to attract
                        talent. Many high-level professionals, international experts, consultants, and leaders
                        travel through airports on a daily basis.
                    </p>

                    <p>
                        An airport branding strategy builds a perception of your organization as:
                    </p>

                    <ul>
                        <li>Select/Elite</li>
                        <li>Growth-Driven</li>
                        <li>Internationally Engaged</li>
                    </ul>

                    <p>
                        Increased presence for employer branding creates interest in your organization from
                        top-level talent who wish to be associated with an organization that is viewed as
                        credible, visible, and equipped to meet the future.
                    </p>

                    <h2>Elevate Your Brand with These Strategic Airport Touchpoints</h2>
                    <p>
                        With Brand Banao.Ai, your brand gets multiple high-visibility spots across domestic
                        and international airports. Every placement is hand-picked to maximize visibility,
                        relevance, and impact:
                    </p>

                    <ol>
                        <li><b>Arrival & Departure Terminals</b>  <br />
                            These are the busiest spots in any airport. Branding here hits travelers at those
                            emotional highs of arrival excitement and departure anticipation, thus driving
                            strong recall.</li>  <br />
                        <li><b>Check-in counters, security lanes and boarding gates</b>  <br />
                            These are places where people wait the most. Branding at these touchpoints creates
                            repeated impressions and bigger brand engagement.</li>   <br />
                        <li><b>Premium Lounges</b>  <br />
                            Lounges attract corporate travelers and people ready to spend. Branding here ties
                            your business to comfort, exclusivity, and top-tier service.</li>   <br />
                        <li><b>Baggage Claim & Conveyor Belts</b>  <br />
                            Baggage claim and baggage conveyor belts provide many opportunities for advertisement
                            placement, everything that is on or near/around a baggage claim and baggage conveyor
                            belt stays in front of passengers and customers longer than any other location in
                            the airport.</li>   <br />
                        <li><b>Digital Displays & LED Screens</b>  <br />
                            Digital displays and LEDs are bright, dynamic and visually interesting; making them
                            ideal for providing stories, launches, offers and high-impact brand messages.</li>
                    </ol>

                    <h2>Why airport branding works.</h2>

                    <p>
                        Airport branding isn't just advertising, it's influence. Travellers are more focused, less
                        distracted and ready to engage. The environment itself heightens how people perceive your
                        brand, making your message feel premium and credible.
                    </p>

                    <p>
                        By utilizing airport advertising, Brands develop trust, establish awareness and confirm
                        their place as industry leaders in sectors such as healthcare, housing, hospitality, finance,
                        education, FMCG, retail, automotive and technology.
                    </p>


                    <h2>Why would Brand Banao.Ai be your Airport branding solution?</h2>

                    <p>
                        With 15+ years of experience in OOH (Out Of Home) Media, and knowledge of creating and executing
                        airport branding solutions, Brand Banao.Ai provides an all-inclusive approach to airport branding:
                    </p>

                    <ul>
                        <li><b>Access to Airports Pan India:</b> Huge inventories of Inventory for Domestic and International
                            Airports</li>
                        <li><b>Complete End-to-End Execution:</b> Planning, Creative Design, Media Booking and Installation
                            of airport media</li>
                        <li><b>Data driven planning:</b> Audience Insights, Foot Traffic mapping, Dwell Time Analysis, Placement
                            Strategies</li>
                        <li><b>Premium Creative Support:</b> Customised Creative Support for Premium Image and Heavy Visuals to
                            fit the Airport Vibe.</li>
                        <li><b>Seamless Coordination:</b> All Permissions are Managed through our Company as well as managing
                            all Logistics for the Smooth Roll-out of Campaigns.</li>
                        <li><b>Performance Tracking:</b> Clear reporting, including photos and metrics with post-campaign
                            analysis.</li>
                    </ul>

                    <h2>Take Your Brand to New Heights</h2>
                    <p>
                        Airport branding offers unparalleled visibility and credibility, and with Brand Banao.Ai, it runs your
                        campaign with precision, creativity, and measurable impact. Whether you want to reach high-income
                        travellers, build a national presence, launch a new product, or establish yourself as a premium brand,
                        airport media is the perfect stage for you.
                    </p>

                    <h3 style={{ textAlign: "center" }}><i><b>Brand Banao.Ai stands for making every journey memorable, one traveller at a time.</b></i></h3>
                </div>

                {/* BOTTOM FAQ SECTION – ACCORDION STYLE */}
                <div className="hoarding-content faq-section">
                    <h2>Airport Branding FAQs</h2>
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

export default AirportBranding;
