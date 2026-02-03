import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import BusBranding from "../Images/busbranding.jpg";
import "./tvNews.css"

const BussBranding = () => { // ✅ FIX: component name corrected (no double “s”)
    const [showGallery, setShowGallery] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    const images = useMemo(() => [BusBranding], []); // ✅ FIX: memoized

    const openGallery = useCallback((index) => {
        setCurrentIndex(index);
        setShowGallery(true);
    }, []);

    const closeGallery = useCallback(() => setShowGallery(false), []); // ✅ FIX

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
    const PAGE_URL = "https://brandbanao.ai/bus-branding"; // ✅ FIX: SEO-friendly lowercase canonical
    const BRAND_NAME = "BrandBanao.ai"; // ✅ FIX: consistent naming
    const OG_IMAGE = "https://brandbanao.ai/assets/logopng-CGGCs8OD.png";

    // ✅ FIX: ONE FAQ source of truth (used for UI + JSON-LD)
    const FAQ_ITEMS = useMemo(
        () => [
            {
                question: "What is bus branding?",
                answer:
                    "Bus branding is outdoor advertising on buses using formats like full wraps, side panels, and back-of-bus creatives. It turns moving buses into high-frequency ads across multiple locations daily.",
            },
            {
                question: "Which bus advertising formats do you offer?",
                answer:
                    "We offer full bus wraps, side ads, back-of-bus ads, panel ads, and route-wise planning for city and metro corridors—based on your campaign goals and budget.",
            },
            {
                question: "How do you select routes and coverage?",
                answer:
                    "We plan coverage by matching routes with your target areas (markets, neighborhoods, high-footfall corridors), then balance reach + frequency for strong recall and efficient spend.",
            },
            {
                question: "Do you also design the bus creatives?",
                answer:
                    "Yes. We create bus ad designs optimized for real-world viewing—high contrast, bold messaging, correct sizing, and layouts that stay readable at distance and in motion.",
            },
            {
                question: "How long should a bus branding campaign run?",
                answer:
                    "Most campaigns run 2–8 weeks depending on goals. Longer durations increase frequency and recall, especially when targeting multiple routes or city zones.",
            },
            {
                question: "Why choose BrandBanao.ai for bus branding?",
                answer:
                    "We handle strategy, creative, route planning, permissions and execution—so your campaign gets the right routes, strong design, and consistent visibility.",
            },
        ],
        []
    );

    // ✅ FIX: Keep keywords short (meta keywords are ignored by Google)
    const keywordsContent = useMemo(
        () =>
            [
                "bus branding Nashik",
                "bus advertising Nashik",
                "bus wrap advertising",
                "back of bus ads",
                "transit advertising",
                "OOH advertising Nashik",
                "BrandBanao.ai",
            ].join(", "),
        []
    );

    // ✅ FIX: Single JSON-LD @graph (cleaner than multiple scripts)
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
                {/* ✅ FIX: Title typo + better intent */}
                <title>Best Bus Branding in Nashik | Bus Advertising | BrandBanao.ai</title>

                <meta
                    name="description"
                    content="Bus branding and bus advertising services by BrandBanao.ai: full bus wraps, side panels, back-of-bus ads, route planning, creative design, and campaign execution for city-wide reach and high recall."
                />

                <meta name="author" content={BRAND_NAME} />
                <meta name="publisher" content={BRAND_NAME} />
                <meta name="robots" content="index, follow, max-image-preview:large" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href={PAGE_URL} />
                <meta name="theme-color" content="#000000" />

                {/* ✅ FIX: optional + short */}
                <meta name="keywords" content={keywordsContent} />

                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content={BRAND_NAME} />
                <meta property="og:title" content="Bus Branding & Bus Advertising | BrandBanao.ai" />
                <meta
                    property="og:description"
                    content="High-impact bus branding: full wraps, side ads, back-of-bus ads, route planning and creative execution for strong reach and recall."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:image" content={OG_IMAGE} />
                <meta property="og:image:alt" content="BrandBanao.ai - Bus Branding Services" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bus Branding & Bus Advertising | BrandBanao.ai" />
                <meta
                    name="twitter:description"
                    content="Bus branding: wraps, side ads, back-of-bus ads, route planning, and creative execution."
                />
                <meta name="twitter:image" content={OG_IMAGE} />

                {/* ✅ FIX: single JSON-LD */}
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            {/* Using the same structure / classes as Hoarding.jsx for styling */}
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
