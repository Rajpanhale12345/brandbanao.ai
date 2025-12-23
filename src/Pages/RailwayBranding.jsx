import React, { useState } from "react";
import { Helmet } from "react-helmet";
import airport from "../Images/railwaybranding.jpg";
import "./tvNews.css";

const RailwayyBranding = () => {
    const [showGallery, setShowGallery] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    const images = [airport];

    const openGallery = (index) => {
        setCurrentIndex(index);
        setShowGallery(true);
    };

    // ✅ SEO: Consistent page identity for Railway Branding
    const PAGE_NAME = "Railway Branding Services";
    const PAGE_TITLE =
        "Railway Branding & Railway Station Advertising Agency | Brand Banao.Ai";
    const PAGE_DESC =
        "Railway branding and railway station advertising by Brand Banao.Ai. Train and station ads, platform branding, FOB panels, digital screens, permissions, execution, monitoring, and reporting across India.";
    const PAGE_URL = "https://brandbanao.ai/RailwayyBranding"; // update if your actual route differs
    const OG_IMAGE = "https://brandbanao.ai/assets/logopng-CGGCs8OD.png";

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Railway Branding Services - Brand Banao.Ai",
        headline: "Railway Branding & Railway Station Advertising - Brand Banao.Ai",
        description:
            "Railway branding and railway station advertising by Brand Banao.Ai. High-impact transit ads including station hoardings, platform panels, foot overbridge displays, train wraps, and digital screens with end-to-end planning, execution, and reporting.",
        image: "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
        url: "https://brandbanao.ai/RailwayBranding",
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

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Railway Branding & Railway Station Advertising",
        serviceType: "Transit & Outdoor Advertising",
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
        url: "https://brandbanao.ai/RailwayBranding",
        description:
            "Railway advertising services including station hoardings, platform branding, foot overbridge panels, waiting-area media, train wraps, and digital screens. Includes permissions support, planning, production, deployment, monitoring, and reporting.",
    };


    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is railway branding?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Railway branding is transit advertising that uses railway stations and trains to promote brands through formats like station hoardings, platform displays, foot overbridge panels, train wraps, and digital screens for repeated high-volume visibility.",
                },
            },
            {
                "@type": "Question",
                name: "Where can railway advertisements be placed?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Railway ads can be placed at entry and exit zones, station premises, platforms, foot overbridges, waiting areas, concourse locations, trains, and digital screens depending on availability and campaign objectives.",
                },
            },
            {
                "@type": "Question",
                name: "Why does railway advertising work well for brands?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Railway advertising works due to mass reach, high frequency, longer dwell time at stations, and audience diversity—helping brands build recall and trust through repeated exposure.",
                },
            },
            {
                "@type": "Question",
                name: "Do you manage permissions and end-to-end execution?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes. Brand Banao.Ai supports planning, artwork guidance, production, placement execution, monitoring, and reporting for railway branding campaigns.",
                },
            },
            {
                "@type": "Question",
                name: "What types of campaigns are suitable for railway branding?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Railway branding is suitable for FMCG promotions, retail launches, tourism campaigns, education and healthcare awareness, real estate launches, automotive promotions, and seasonal or event-based campaigns.",
                },
            },
            {
                "@type": "Question",
                name: "Why choose Brand Banao.Ai for railway advertising?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Brand Banao.Ai combines strategic planning, creative execution, and on-ground operations to deliver scalable railway branding with consistent visibility, monitoring, and measurable coverage.",
                },
            },
        ],
    };

    const faqItems = [
        {
            question: "What is railway branding?",
            answer:
                "Railway branding is transit advertising that uses railway stations and trains to promote your brand through formats like station hoardings, platform displays, foot overbridge panels, train wraps, and digital screens for repeated visibility.",
        },
        {
            question: "Where can railway advertisements be placed?",
            answer:
                "Railway ads can be placed at station entry/exit zones, concourse areas, platforms, foot overbridges, waiting areas, trains, and digital screens based on location availability and campaign goals.",
        },
        {
            question: "Which railway advertising formats do you offer?",
            answer:
                "We offer station hoardings, platform panels, foot overbridge displays, waiting-area placements, train wraps, and digital screen advertising at railway stations for targeted and mass-reach campaigns.",
        },
        {
            question: "Do you handle planning, production, and deployment?",
            answer:
                "Yes. We support end-to-end execution—campaign planning, artwork guidance, production, placement execution, on-ground coordination, and schedule management.",
        },
        {
            question: "Do you provide monitoring and reporting?",
            answer:
                "Yes. Campaigns include monitoring and reporting to help ensure placements run as planned and deliver consistent visibility and frequency in target stations and routes.",
        },
        {
            question: "Why choose Brand Banao.Ai for railway advertising?",
            answer:
                "Brand Banao.Ai combines strategy, creative execution, and on-ground operations to deliver scalable railway branding with strong recall, consistent visibility, and measurable coverage.",
        },
    ];


    return (
        <>
            <Helmet>
                {/* ✅ Primary SEO */}
                <title>{PAGE_TITLE}</title>
                <meta name="author" content="Brand Banao.Ai" />
                <meta name="description" content={PAGE_DESC} />
                <meta
                    name="keywords"
                    content="railway branding, railway station advertising, railway advertising agency, station branding, platform branding, foot overbridge advertising, train wrap advertising, railway hoarding, digital screens railway station, outdoor advertising India, transit advertising, Brand Banao Ai"
                />
                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large, max-video-preview:-1"
                />
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta name="MobileOptimized" content="width" />
                <meta name="HandheldFriendly" content="true" />

                {/* ✅ Canonical */}
                <link rel="canonical" href={PAGE_URL} />

                {/* ✅ Open Graph */}
                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content="BrandBanao.Ai" />
                <meta property="og:title" content={PAGE_TITLE} />
                <meta property="og:description" content={PAGE_DESC} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:image" content={OG_IMAGE} />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1000" />
                <meta property="og:image:height" content="630" />

                {/* (Optional) keep lat/long if you intentionally use it; otherwise remove */}
                <meta property="og:latitude" content="20.00293012347024" />
                <meta property="og:longitude" content="73.75462348408139" />

                {/* ✅ Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={PAGE_TITLE} />
                <meta name="twitter:description" content={PAGE_DESC} />
                <meta name="twitter:image" content={OG_IMAGE} />

                {/* ✅ Structured Data */}
                <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            <div className="hoarding-page">
                <h1 className="hoarding-title">Railway Branding</h1>

                <div className="hoarding-image-wrap">
                    <img
                        src={airport}
                        alt="Railway Branding"
                        className="hoarding-image"
                        onClick={() => openGallery(0)}
                    />
                </div>

                {showGallery && (
                    <div className="gallery-overlay" onClick={() => setShowGallery(false)}>
                        <div className="gallery-box" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={images[currentIndex]}
                                alt="Railway Branding Gallery"
                                className="gallery-img"
                            />
                        </div>
                    </div>
                )}

                <div className="hoarding-content">
                    <h2>Railway Branding - Brand Banao.Ai</h2>
                    <p>
                        Indian Railways still remain one of the biggest mass-connectors across the world. With daily
                        commuters and travelers in millions, plus long-distance passengers, rail branding gives brands
                        steady visibility across all sorts of people. At Brand Banao.AI, we roll out smart, railway-focused
                        campaigns that turn transit spaces into punchy brand moments.
                    </p>
                    <p>
                        Rail advertising keeps your brand in front of people along the whole journey-from walking into
                        the station to waiting on the platform and even while they're riding. It's not just a quick hit,
                        either. Station ads are longer-lasting and better-received and can reach people across city and
                        semi-urban areas.
                    </p>
                    <p>
                        We handle everything, from train ads to static and digital stuff inside the stations, with a
                        solid grasp of passenger behavior to deliver recall, trust, and engagement for rail station formats.
                    </p>

                    <br />

                    <h2>Comprehensive Railway Media Formats</h2>
                    <p>
                        We offer a wide variety of placements: train station advertisements, platform displays, foot
                        overbridge panels, and big-time train wrap adverts for large campaigns. Being one of the leading
                        railway station branding agencies in Nashik, Maharashtra, we take care of permissions, planning,
                        execution, and reporting all under one roof.
                    </p>
                    <p>
                        Our portfolio of services ranges from premium railway advertisements across India to customized
                        rail branding solutions for SMEs seeking hyperlocal targeting. Whether you are simply looking
                        for a railway station outdoor advertisement agency in your vicinity or large-format platform
                        branding and station hoardings, our team undertakes smart placements and creative excellence.
                    </p>
                    <p>
                        We provide clear understanding and transparent guidance for Nashik railway station billboard
                        advertisements to help you have seamless planning for the same. Our campaigns support railway
                        branding and engagement for FMCG brands, backed by digital screens at the railway station that
                        grab motion-driven attention.
                    </p>


                    <br />

                    <h2>Industry-specific campaign experience</h2>
                    <p>
                        We design focused railway ad strategies for travel brands and double up as a go-to railway
                        station advertising agency for national players. We are experienced in utilizing local market
                        knowledge as a rail advertising agency based in Nashik (Maharashtra, India) to run large
                        multi-city advertising campaigns through branding services across Mumbai and Nashik.
                    </p>
                    <p>
                        As an advertising agency located near the Nashik railway station, we are able to utilise
                        our vast local connections for all of our 'on-the-ground' execution requirements for clients.
                        Our team manages the railway hoarding advertisements for many cities throughout Maharashtra
                        as well as providing integrated branding services in the major metropolitan areas of
                        Maharashtra (Mumbai, Pune, Nashik).
                    </p>

                    <br />

                    <h2>Why Railway Advertising Works</h2>
                    <p>
                        People often ask why rail ads drive better brand visibility. Repetition, scale, and diversity
                        of the audience is the answer. Through our management and marketing of hoardings at railway
                        stations, we can demonstrate to local advertisers how station hoardings can be used to engage
                        consumers. We provide advertisers with accurate metrics by which to follow their ROI back to
                        their respective advertising campaigns.
                    </p>
                    <p>
                        All artwork created for railway advertisements reflects our efforts to comply with the latest
                        outdoor advertising trends and adhere to the best practices set forth in order to meet our
                        clients' needs throughout 2026. We offer sector-specific solutions for retail and hospitality,
                        rail ads for tourism, and scalable branding for FMCG.
                    </p>
                    <p>
                        In addition, we also provide clients with advertising packages for automotive launches as well
                        as providing timely and seasonal rail branding for special promotional campaigns.
                    </p>

                    <br />

                    <h2>Planning, Cost & Consultation</h2>

                    <p>
                        If you're interested in learning more about the various benefits of outdoor rail branding or
                        comparing your options between rail and airport advertising, our highly trained experts are
                        here to assist you with data-based analysis. We help brands in the planning of a station
                        branding campaign with a clear cost and budget guide.
                    </p>
                    <p>
                        From solid design examples to helping you book rail station billboards in Maharashtra, we
                        support end-to-end execution. This also includes small business railway ad proposals in India,
                        pricing estimates for rail campaigns, and personalized branding quotes and consultations in Nashik.
                    </p>

                    <h3 style={{ textAlign: "center" }}><i><b>With railway advertising media planner services from Brand
                        Banao.Ai, your brand rides where India rides-on railways.</b></i></h3>
                </div>

                {/* BOTTOM FAQ SECTION – ACCORDION STYLE */}
                <div className="hoarding-content faq-section">
                    <h2>Railways Branding FAQs</h2>
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

                <div className="hoarding-content">{/* Reserved */}</div>
            </div>
        </>
    );
};

export default RailwayyBranding;
