import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Helmet } from "react-helmet";
import airport from "../Images/airport.jpg";
import "./busShelter.css";


const AirportBranding = () => {
    const [showGallery, setShowGallery] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    const images = useMemo(() => [airport], []);

    const openGallery = useCallback((index) => {
        setCurrentIndex(index);
        setShowGallery(true);
    }, []);

    // ✅ FIX: Add a close function (reused in click + ESC)
    const closeGallery = useCallback(() => {
        setShowGallery(false);
    }, []);

    // ✅ FIX: ESC to close gallery (better UX)
    useEffect(() => {
        if (!showGallery) return;
        const onKeyDown = (e) => {
            if (e.key === "Escape") closeGallery();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [showGallery, closeGallery]);

    const targetCities = useMemo(
        () => [
            "Nashik",
            "Dhule",
            "Jalgaon",
            "Chhatrapati Sambhaji Nagar",
            "Pune",
            "Ahilyanagar",
            "Mumbai",
            "Thane",
            "Nandurbar",
            "Nagpur",
        ],
        []
    );

    // ✅ FIX: Keep meta keywords short (Google ignores it; very long can look spammy)
    const keywordsContent = useMemo(() => {
        const short = [
            "airport branding",
            "airport advertising",
            "airport OOH advertising",
            "airport LED advertising",
            "airport lounge branding",
            "baggage belt branding",
            "terminal branding",
            "BrandBanao.ai",
            "Maharashtra",
            "Nashik",
            "Pune",
            "Mumbai",
        ];
        return short.join(", ");
    }, []);

    // ✅ FIX: Prefer lowercase canonical for consistency (change if your real route is uppercase!)
    const canonicalUrl = "https://brandbanao.ai/airport-branding";

    // ✅ FIX: Create a REAL FAQ data array for UI rendering (your code was broken)
    const faqs = useMemo(
        () => [
            {
                question: "What is airport branding and how does it work?",
                answer:
                    "Airport branding is advertising inside airport environments such as terminals, check-in zones, security lanes, boarding gates, lounges, baggage claim, and digital screens. Since travelers spend 90–120 minutes in the airport, your brand gets repeated visibility that builds strong recall and trust.",
            },
            {
                question: "Which airport touchpoints are best for high visibility?",
                answer:
                    "High-visibility touchpoints include Arrival & Departure Terminals, check-in counters, security lanes, boarding gates, baggage claim & conveyor belts, premium lounges, and digital LED screens. The best mix depends on your audience and campaign objective.",
            },
            {
                question: "Do you handle permissions, creatives, printing and installation?",
                answer:
                    "Yes. BrandBanao.ai provides end-to-end airport branding execution: media planning, creative design, approvals/permissions, printing/production, logistics, and on-ground installation.",
            },
            {
                question: "Why choose BrandBanao.ai for airport branding?",
                answer:
                    "With 15+ years of OOH experience, BrandBanao.ai offers airport media planning, premium creative support, end-to-end execution, and campaign reporting with documentation and post-campaign analysis.",
            },
        ],
        []
    );

    // ✅ FIX: Use @graph to connect WebPage + Service + FAQPage (cleaner for SEO + AI search)
    const structuredData = useMemo(() => {
        const orgId = "https://brandbanao.ai/#organization";
        const pageId = `${canonicalUrl}#webpage`;
        const serviceId = `${canonicalUrl}#service`;

        return {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "WebPage",
                    "@id": pageId,
                    "url": canonicalUrl,
                    "name": "Airport Branding Services in Maharashtra | BrandBanao.ai",
                    "description":
                        "Reach premium travelers with high-impact airport advertising across terminals, lounges, baggage belts, and digital screens with end-to-end planning, creatives, permissions, and execution.",
                    "inLanguage": "en-IN",
                    "isPartOf": { "@id": "https://brandbanao.ai/#website" },
                    "about": { "@id": orgId },
                    "mainEntity": { "@id": serviceId },
                    "primaryImageOfPage": {
                        "@type": "ImageObject",
                        "url": "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
                    },
                },
                {
                    "@type": "Service",
                    "@id": serviceId,
                    "name": "Airport Branding Services",
                    "serviceType": "Airport Advertising / Airport Branding / OOH Media",
                    "provider": {
                        "@type": "Organization",
                        "@id": orgId,
                        "name": "BrandBanao.ai",
                        "url": "https://brandbanao.ai/",
                        "logo": "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
                    },
                    "areaServed": targetCities.map((city) => ({
                        "@type": "City",
                        "name": city,
                        "address": {
                            "@type": "PostalAddress",
                            "addressRegion": "MH",
                            "addressCountry": "IN",
                        },
                    })),
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Airport Branding Inventory",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": { "@type": "Service", "name": "Terminals (Arrival/Departure)" },
                            },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lounges" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Baggage Belts" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Check-in & Security" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital LED Screens" } },
                        ],
                    },
                },
                {
                    "@type": "FAQPage",
                    "@id": `${canonicalUrl}#faq`,
                    "mainEntity": faqs.map((f) => ({
                        "@type": "Question",
                        "name": f.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": f.answer,
                        },
                    })),
                },
            ],
        };
    }, [canonicalUrl, targetCities, faqs]);

    // ✅ FIX: GA page path should match canonical/route convention
    useEffect(() => {
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
            window.gtag("event", "page_view", { page_path: "/airport-branding" });
        }
    }, []);

    return (
        <>
            <Helmet>
                {/* ✅ FIX: More specific title (intent + location) */}
                <title>Airport Branding & Advertising in Maharashtra | BrandBanao.ai</title>

                <meta name="author" content="BrandBanao.ai" />
                <meta
                    name="description"
                    content="Airport Branding Services by BrandBanao.ai. Reach premium travelers with high-impact airport advertising across terminals, lounges, baggage belts, and digital screens. End-to-end planning, creatives, permissions, and execution."
                />

                {/* ✅ FIX: Optional; keep short (Google ignores it) */}
                <meta name="keywords" content={keywordsContent} />

                <meta name="robots" content="index, follow, max-image-preview:large" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href={canonicalUrl} />

                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content="BrandBanao.ai" />
                <meta property="og:title" content="Airport Branding & Advertising in Maharashtra | BrandBanao.ai" />
                <meta
                    property="og:description"
                    content="Premium airport branding across terminals, lounges, baggage belts and digital screens with end-to-end execution."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />
                <meta property="og:image:alt" content="BrandBanao.ai - Airport Branding Services" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Airport Branding & Advertising | BrandBanao.ai" />
                <meta
                    name="twitter:description"
                    content="Reach premium travelers with airport branding across terminals, lounges, baggage belts and digital screens. End-to-end execution by BrandBanao.ai."
                />
                <meta name="twitter:image" content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />

                {/* ✅ FIX: One JSON-LD block (connected graph) */}
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>


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

                <div className="hoarding-content faq-section">
                    <h2>Airport Branding FAQs</h2>
                    <div className="faq-list">
                        {faqs.map((faq, index) => {
                            const isActive = activeFaqIndex === index;
                            return (
                                <div className={`faq-item ${isActive ? "active" : ""}`} key={index}>
                                    <button
                                        type="button"
                                        className="faq-question"
                                        onClick={() => setActiveFaqIndex(isActive ? null : index)}
                                        aria-expanded={isActive} // ✅ FIX: accessibility
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

export default AirportBranding;