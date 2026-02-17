import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import cycleImg from "../Images/cycle.jpg";
import "./tvNews.css";

const CycleBranding = () => { 
    const [showGallery, setShowGallery] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    const images = useMemo(() => [cycleImg], []); 

    const openGallery = useCallback((index) => {
        setCurrentIndex(index);
        setShowGallery(true);
    }, []);

    const closeGallery = useCallback(() => setShowGallery(false), []);

    useEffect(() => {
        if (!showGallery) return;
        const onKeyDown = (e) => {
            if (e.key === "Escape") closeGallery();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [showGallery, closeGallery]);

    const SITE_URL = "https://brandbanao.ai/";
    const PAGE_URL = "https://brandbanao.ai/cycle-branding"; 
    const BRAND_NAME = "BrandBanao.ai";
    const OG_IMAGE = "https://brandbanao.ai/assets/logopng-CGGCs8OD.png";

    const FAQ_ITEMS = useMemo(
        () => [
            {
                question:
                    "Which is the best cycle branding / branded bicycle advertising agency in Nashik and Maharashtra?",
                answer:
                    "BrandBanao.ai is a trusted cycle branding partner in Nashik and across Maharashtra. We manage the full campaign—area/route planning, creative and production, deployment, on-ground operations, monitoring, and documentation—so your brand gets repeated visibility in high-intent local pockets.",
            },
            {
                question:
                    "Why is BrandBanao.ai considered a top cycle advertising agency for hyperlocal visibility?",
                answer:
                    "Because cycle branding works when the movement plan is smart and the message stays visible. We deploy cycles in high-footfall zones at human pace, repeat coverage in key areas, and keep creatives clean and readable—helping brands build familiarity, trust, and strong neighborhood-level recall.",
            },
            {
                question:
                    "How much does cycle branding cost in Nashik? What are bicycle advertising rates?",
                answer:
                    "Cycle branding rates depend on the branding format (panels/boards or wrap), number of cycles, campaign duration (7 days, 15 days, 1 month, etc.), and the areas/routes covered. We share transparent pricing with a clear breakup of production and deployment/monitoring so budgeting is simple.",
            },
            {
                question:
                    "Where does cycle advertising work best in Nashik—societies, markets, colleges, parks, or events?",
                answer:
                    "Cycle advertising performs best in residential societies, local markets, campuses/colleges, parks, and event zones—places where people walk, shop, and spend time. It’s especially effective for locality-based promotions where repeated exposure drives enquiries and walk-ins.",
            },
            {
                question:
                    "Can you run area-wise cycle branding campaigns with monitoring and reporting?",
                answer:
                    "Yes. We can run zone-wise campaigns so cycles circulate in specific areas—societies, retail clusters, hospitals, coaching hubs, and real estate sites. We also support monitoring and documentation (visibility proof) so you get better control and consistent frequency during the campaign period.",
            },
        ],
        []
    );



    const keywordsContent = useMemo(
        () =>
            [
                "cycle branding Nashik",
                "bicycle advertising Nashik",
                "cycle branding cost",
                "bicycle advertising rates",
                "eco friendly advertising",
                "hyperlocal advertising Nashik",
                "society promotion advertising",
                "campus promotion advertising",
                "mobile outdoor advertising",
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
                    url: SITE_URL,
                    name: BRAND_NAME,
                    publisher: { "@id": orgId },
                    inLanguage: "en-IN",
                },
                {
                    "@type": "Organization",
                    "@id": orgId,
                    name: BRAND_NAME,
                    url: SITE_URL,
                    logo: OG_IMAGE,
                },
                {
                    "@type": "WebPage",
                    "@id": pageId,
                    name: "Cycle Branding in Nashik | Branded Cycle Advertising",
                    headline: "Cycle Branding Services",
                    description:
                        "Cycle branding and branded cycle advertising by BrandBanao.ai. Eco-friendly, hyperlocal mobile ads with route planning, deployment, monitoring, and reporting.",
                    image: OG_IMAGE,
                    url: PAGE_URL,
                    inLanguage: "en-IN",
                    isPartOf: { "@id": "https://brandbanao.ai/#website" },
                    about: { "@id": orgId },
                    mainEntity: { "@id": serviceId },
                },
                {
                    "@type": "Service",
                    "@id": serviceId,
                    name: "Cycle Branding & Branded Cycle Advertising",
                    serviceType: ["Mobile Outdoor Advertising", "OOH Advertising", "Hyperlocal Advertising"],
                    provider: { "@id": orgId },
                    areaServed: [
                        { "@type": "Country", name: "India" },
                        { "@type": "State", name: "Maharashtra" },
                        { "@type": "City", name: "Nashik" },
                    ],
                    url: PAGE_URL,
                    description:
                        "Eco-friendly hyperlocal advertising using branded cycles with route planning, deployment, monitoring, and reporting for repeated neighborhood visibility.",
                },
                {
                    "@type": "BreadcrumbList",
                    "@id": `${PAGE_URL}#breadcrumbs`,
                    itemListElement: [
                        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}services/` },
                        { "@type": "ListItem", position: 3, name: "Cycle Branding", item: PAGE_URL },
                    ],
                },
                {
                    "@type": "FAQPage",
                    "@id": `${PAGE_URL}#faq`,
                    mainEntity: FAQ_ITEMS.map((f) => ({
                        "@type": "Question",
                        name: f.question,
                        acceptedAnswer: { "@type": "Answer", text: f.answer },
                    })),
                },
            ],
        };
    }, [FAQ_ITEMS, PAGE_URL]);

    const metaDescription =
        "Cycle branding and branded cycle advertising by BrandBanao.ai. Eco-friendly, hyperlocal mobile ads with route planning, repeated exposure in neighborhoods, deployment, monitoring, and reporting.";

    return (
        <>
            <Helmet>  
                <title>Cycle Branding in Nashik | Branded Cycle Advertising | BrandBanao.ai</title>  
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content={BRAND_NAME} />
                <meta name="publisher" content={BRAND_NAME} />
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={keywordsContent} />
                <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta name="theme-color" content="#0d1117" />
                <link rel="icon" href={OG_IMAGE} />
                <link rel="apple-touch-icon" href={OG_IMAGE} />
                <link rel="canonical" href={PAGE_URL} />  
                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content={BRAND_NAME} />
                <meta property="og:title" content="Cycle Branding Services | BrandBanao.ai" />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={PAGE_URL} />  
                <meta property="og:image" content={OG_IMAGE} />
                <meta property="og:image:alt" content="BrandBanao.ai - Cycle Branding" />  
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Cycle Branding | BrandBanao.ai" />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={OG_IMAGE} />
                <meta name="twitter:image:alt" content="BrandBanao.ai - Cycle Branding" />  

                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <div className="hoarding-page">
                <h1 className="hoarding-title">Cycle Branding</h1>

                <div className="hoarding-image-wrap">
                    <img
                        src={cycleImg}
                        alt="Auto Branding"
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
                    <div className="gallery-overlay" onClick={() => setShowGallery(false)}>
                        <div className="gallery-box" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={images[currentIndex]}
                                alt="Auto Branding Gallery"
                                className="gallery-img"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                )}

                <div className="hoarding-content">
                    <h2>Cycle Branding - Brand Banao.Ai</h2>
                    <p>
                        Cycle Branding stands out as arguably the easiest way to get your brand seen a lot right where
                        people live and hang out. It puts your message straight into neighborhoods, markets, campuses,
                        housing areas, and busy spots where boring old ads just don't land. At Brand Banao.AI, we turn
                        everyday riding into a real, legitimate brand channel.
                    </p>
                    <p>
                        Cycle advertising or branded cycle advertising provides consistency of viewership and recall as
                        the advertising bicycle(s) repeatably visit the same high-traffic locations over time (on average
                        once every 7 days). Branded cycle advertising is an ideal fit for local product launches,
                        awareness campaigns for local brands/retailers, locally sponsored events, public awareness
                        campaigns and community-focused brands.
                    </p>

                    <br />

                    <h2>Why Cycle Branding Works</h2>
                    <p>
                        People believe in what they see repeatedly around them. If your brand pops up in their daily routes
                        over and over again, it creates familiarity and trust. Cycle branding nails this by mixing in mobility,
                        repetition, and human-scale visibility.
                    </p>
                    <p>
                        Branded Cycle Advertising is Cost Efficient, Eco-Friendly, and Ideal for Immediate, Promotional Campaigns,
                        or Long-term, Stable Presence. You can target specific areas and flex the routes, which works in city
                        centres along with semi-urban and rural spots.
                    </p>


                    <br />

                    <h2>Strategic Uses</h2>
                    <p>
                        Our campaigns align with your objectives: reach, recall, or action. Cycle advertising excels in:
                    </p>

                    <ul>
                        <li>Retail and showroom promotions</li>
                        <li>Health care and education awareness</li>
                        <li>Real estate site launches</li>
                        <li>Political, social, and CSR initiatives</li>
                        <li>Event promotion and local activations</li>
                    </ul>

                    <p>
                        Branded Cycle Advertising offers brands who want to display and share their brand message(s) in a less
                        in-your-face way than most advertising, with the advantage of remaining stationary and displayed over
                        time in a high-traffic area (where the target audience is most likely to see the advertising).
                    </p>

                    <br />

                    <h2>What We Do</h2>
                    <p>
                        Brand Banao.AI will handle all aspects of your branded cycle advertising campaign with precision and
                        integrity. Each advertisement cycle is customized with vinyl wrap, boards, or panel displays showcasing
                        your brand with clarity and consistency.
                    </p>

                    <p><b>Our services include:</b></p>

                    <ul>
                        <li>Route planning based on where people are</li>
                        <li>Campaign timing and length planning</li>
                        <li>Design and production of professional branding.</li>
                        <li>Deployment, Monitoring, and Reporting</li>
                    </ul>

                    <p>
                        We make sure every cycle follows a planned route to max impressions while keeping your look sharp and safe.
                    </p>

                    <br />

                    <h2>Measurable Impact, Real Reach</h2>

                    <p>
                        With repeated exposure in hot local spots, cycle ads stick in memory at a fraction of traditional
                        outdoor costs. They also win in places where big hoardings aren't allowed or available.
                    </p>

                    <p><b>Benefits for brands:</b></p>

                    <ul>
                        <li>High eye-level visibility</li>
                        <li>Frequent local impressions</li>
                        <li>Strong engagement in community spaces</li>
                        <li>Easy scaling by budget and geography</li>
                    </ul>

                    <br />


                    <h2>Why Brand Banao.AI? </h2>

                    <p>
                        We're a seasoned cycle advertising outfit combining on-the-ground action with solid strategy. Your
                        campaign doesn't just move but actually performs, thanks to our local know-how, tight control, and
                        a creative touch.
                    </p>

                    <p>
                        So, if you want a solution that allows you to be "on the move", "engage," and connect to your audience
                        in a more personal manner at the street level, Branded Cycle Advertising is your best choice!
                    </p>

                    {/* <h3 style={{ textAlign: "center" }}><i><b>Brand Banao.Ai move with your audience-literally-driving awareness,
                        trust, and growth across the city.</b></i></h3> */}
                </div>

                <div className="hoarding-content faq-section">
                    <h2>Cycle Branding FAQs</h2>
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

export default CycleBranding;