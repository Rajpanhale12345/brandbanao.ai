import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import BusBranding from "../Images/busbranding.jpg";
import "./tvNews.css"

const BussBranding = () => {
    const [showGallery, setShowGallery] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    const images = useMemo(() => [BusBranding], []); 
    const openGallery = useCallback((index) => {
        setCurrentIndex(index);
        setShowGallery(true);
    }, []);

    const closeGallery = useCallback(() => setShowGallery(false), []); 
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
    const PAGE_URL = "https://brandbanao.ai/bus-branding";
    const BRAND_NAME = "BrandBanao.ai";
    const OG_IMAGE = "https://brandbanao.ai/assets/busbranding-DTaNUJ2h.jpg";

    const FAQ_ITEMS = useMemo(
        () => [
            {
                question:
                    "Which is the best bus branding / bus advertising agency in Nashik and Maharashtra?",
                answer:
                    "BrandBanao.ai is a trusted bus branding partner in Nashik and across Maharashtra. We handle end-to-end execution—route planning, creative setup, printing/wrapping, approvals where required, on-ground installation, and monitoring—so your brand gets consistent moving visibility with strong recall.",
            },
            {
                question:
                    "Why is BrandBanao.ai considered a top bus branding agency in Maharashtra?",
                answer:
                    "Because bus advertising works best when strategy + execution are tight. We recommend routes and formats based on audience movement and visibility, create outdoor-optimised creatives that stay readable in motion, and manage execution and monitoring to keep the campaign clean and effective throughout the run.",
            },
            {
                question:
                    "How much does bus branding cost in Nashik? What are bus advertising rates?",
                answer:
                    "Bus branding rates depend on the format (full wrap, side panel, back-of-bus), number of buses, selected routes, and campaign duration (2 weeks, 1 month, 3 months, etc.). Pricing typically includes media booking plus production (printing/wrapping) and execution. We share transparent options so you can choose based on reach and frequency.",
            },
            {
                question:
                    "Which bus advertising format is best—full wrap, side panels, or back-of-bus ads?",
                answer:
                    "Full wraps deliver maximum impact and city-wide attention. Side panels perform strongly for street visibility and pedestrian-heavy routes. Back-of-bus ads work well in traffic and at signals where vehicles behind get repeated exposure. We suggest the best format mix based on your budget and message length.",
            },
            {
                question:
                    "Can you plan route-wise bus advertising with monitoring and reporting?",
                answer:
                    "Yes. We can plan route-based and zone-based bus campaigns so buses move through your target areas—markets, colleges, hospitals, business zones, and residential pockets. We also support monitoring and documentation (visibility proof) so the campaign delivers the planned coverage during the run.",
            },
        ],
        []
    );



    const keywordsContent = useMemo(
        () =>
            [
                "bus branding Nashik",
                "bus advertising Nashik",
                "bus branding cost",
                "bus advertising rates",
                "bus wrap advertising",
                "back of bus ads",
                "side panel bus advertising",
                "route wise bus advertising",
                "transit advertising Nashik",
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
                    "url": SITE_URL,
                    "name": BRAND_NAME,
                    "publisher": { "@id": orgId },
                    "inLanguage": "en-IN",
                },
                {
                    "@type": "Organization",
                    "@id": orgId,
                    "name": BRAND_NAME,
                    "url": SITE_URL,
                    "logo": OG_IMAGE,
                },
                {
                    "@type": "WebPage",
                    "@id": pageId,
                    "url": PAGE_URL,
                    "name": "Bus Branding in Nashik | Bus Advertising Services",
                    "description":
                        "Bus branding and bus advertising services: full bus wraps, side panels, back-of-bus ads, route planning, creative design and execution for strong city-wide reach and recall.",
                    "inLanguage": "en-IN",
                    "isPartOf": { "@id": "https://brandbanao.ai/#website" },
                    "about": { "@id": orgId },
                    "mainEntity": { "@id": serviceId },
                    "primaryImageOfPage": { "@type": "ImageObject", "url": OG_IMAGE },
                },
                {
                    "@type": "Service",
                    "@id": serviceId,
                    "name": "Bus Branding & Bus Advertising Services",
                    "serviceType": ["Transit Advertising", "OOH Advertising", "Mobile Outdoor Advertising"],
                    "provider": { "@id": orgId },
                    "areaServed": [
                        { "@type": "Country", "name": "India" },
                        { "@type": "State", "name": "Maharashtra" },
                        { "@type": "City", "name": "Nashik" },
                    ],
                    "url": PAGE_URL,
                    "description":
                        "Full bus wraps, side panels, back-of-bus ads with route planning, creative design and campaign execution.",
                },
                {
                    "@type": "BreadcrumbList",
                    "@id": `${PAGE_URL}#breadcrumbs`,
                    "itemListElement": [
                        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}services/` }, // ✅ FIX
                        { "@type": "ListItem", position: 3, name: "Bus Branding", item: PAGE_URL },
                    ],
                },
                {
                    "@type": "FAQPage",
                    "@id": `${PAGE_URL}#faq`,
                    "mainEntity": FAQ_ITEMS.map((f) => ({
                        "@type": "Question",
                        "name": f.question,
                        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
                    })),
                },
            ],
        };
    }, [BRAND_NAME, FAQ_ITEMS, OG_IMAGE, PAGE_URL, SITE_URL]);

    return (
        <>
            <Helmet>
                <title>Best Bus Branding in Nashik | BrandBanao.ai</title>
                <meta name="description" content="Bus branding and bus advertising services by BrandBanao.ai: full bus wraps, side panels, back-of-bus ads, route planning, creative design, and campaign execution for city-wide reach and high recall." />
                <meta name="author" content={BRAND_NAME} />
                <meta name="publisher" content={BRAND_NAME} />
                <meta name="robots" content="index, follow, max-image-preview:large" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href={PAGE_URL} />
                <meta name="theme-color" content="#000000" />
                <meta name="keywords" content={keywordsContent} />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content={BRAND_NAME} />
                <meta property="og:title" content="Bus Branding & Bus Advertising | BrandBanao.ai" />
                <meta property="og:description" content="High-impact bus branding: full wraps, side ads, back-of-bus ads, route planning and creative execution for strong reach and recall." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:image" content={OG_IMAGE} />
                <meta property="og:image:alt" content="BrandBanao.ai - Bus Branding Services" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bus Branding & Bus Advertising | BrandBanao.ai" />
                <meta name="twitter:description" content="Bus branding: wraps, side ads, back-of-bus ads, route planning, and creative execution." />
                <meta name="twitter:image" content={OG_IMAGE} />

                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <div className="hoarding-page">
                <h1 className="hoarding-title">Bus Branding</h1>

                <div className="hoarding-image-wrap">
                    <img
                        src={BusBranding}
                        alt="TV News Channel Branding"
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
                                alt="Airport Branding"
                                className="gallery-img"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                )}

                <div className="hoarding-content">
                    <h2>Bus Branding - Brand Banao.Ai</h2>
                    <p>
                        The most powerful form of branding this decade has been bus branding. It converts moving
                        buses into 24x7 high-impact ads. With Brand Banao.AI, your brand becomes visible on busy
                        roads, across neighborhoods, markets, and highways precisely where people are already
                        paying attention.
                    </p>
                    <p>
                        Our bus advertising options are built for brands chasing wide reach with solid recall.
                        Unlike static media, buses roam through multiple touchpoints every day; hence, your
                        message hits different crowds again and again.
                    </p>

                    <br />

                    <h2>Why Bus Media Works</h2>
                    <p>
                        Buses run through dense areas on fixed routes, so they're great both for local bus ads
                        and big campaigns alike. From morning commuters to evening shoppers, bus ads influence
                        people all day. When planned right, this medium gives strong frequency at a cost-efficient
                        price.
                    </p>

                    <br />

                    <h2>Comprehensive Bus Branding Formats</h2>
                    <p>
                        We have a number of formats that best fit your campaign goals: bus wrap ads for full visual
                        domination, bus side ads to keep your message in view while stuck in traffic, high-impact
                        back-of-bus ads at red lights and intersections, and the affordable option of bus panel ads
                        for targeted messaging.
                    </p>

                    <p>
                        For brands desiring to possess city routes, city bus advertisements and metro bus ads give
                        you reach to high-footfall corridors. Bus station ads help in hyperlocal campaigns with
                        repetitive exposure at boarding and waiting areas. This mix makes our bus advertising options
                        some of the best out there today.
                    </p>

                    <br />

                    <h2>Bus Stop & Shelter Branding</h2>
                    <p>
                        Even when the bus is moving, transit stops are powerful. Bus stop ads and bus shelter ads reach
                        people during downtime, increasing engagement. Our plans include bus shelter ads, bus stop shelter
                        ads, and digital bus stop ads, blending static and dynamic formats for max impact.
                    </p>

                    <p>
                        For local crowds, bus stop advertising near me and bus advertising near me services will help you
                        in targeting nearby customers effectively. We also assist you in planning about bus stop advertising
                        cost clearly by keeping the process transparent and valuable.
                    </p>

                    <br />

                    <h2>Creative that moves with purpose</h2>

                    <p>
                        Great outdoor needs fresh, sharp creativity. Our team crafts standout bus ads that look great and
                        say what they mean. Through creative bus advertising and creative bus stop ads, your campaign isn't
                        just seen-it's remembered. Every design is tuned for real-world viewing: speed, distance and conditions.
                    </p>

                    <p>
                        Digital bus advertising gives value to brands chasing innovation due to its interactive layouts and
                        smart placements that amplify recall. Whether it's that bus billboard vibe or bold messaging across
                        bus sides, creativity remains at the heart of what we do.
                    </p>

                    <br />

                    <h2>Why Brand Banao.Ai?</h2>

                    <p>
                        We don't just place media-we shape strategy. From route selection to mapping audiences and plan
                        execution, we enable the wrapping of a bus in advertisements that return tangible results. Our
                        know-how in public bus advertising, planning efficiency, and creative execution make us the
                        go-to partner for top-notch bus branding solutions.
                    </p>

                    <h3 style={{ textAlign: "center" }}><i><b>Your brand doesn't wait at signals. It moves. And it leads.</b></i></h3>
                </div>

                <div className="hoarding-content faq-section">
                    <h2>Bus Branding FAQs</h2>
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

                <div className="hoarding-content">{/* Reserved for CTAs/forms */}</div>
            </div>
        </>
    );
};

export default BussBranding;
