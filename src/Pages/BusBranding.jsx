import React, { useState } from "react";
import { Helmet } from "react-helmet";
import BusBranding from "../Images/busbranding.jpg";
import "./tvNews.css"

const BussBranding = () => {
    const [showGallery, setShowGallery] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);


    // You can add more bus shelter images here later if you have them
    const images = [BusBranding];

    const openGallery = (index) => {
        setCurrentIndex(index);
        setShowGallery(true);
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        headline: "Bus Branding & Advertising Services - Brand Banao.Ai",
        name: "Bus Branding & Advertising Services",
        description: "Bus branding and bus advertising services by Brand Banao.Ai: full bus wraps, side panels, back-of-bus ads, route planning, creative design, and campaign execution for city-wide reach and high recall.",
        image: "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
        url: "https://brandbanao.ai/BusBranding",
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
                name: "What is bus branding?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Bus branding is outdoor advertising on buses using formats like full wraps, side panels, and back-of-bus creatives. It turns moving buses into high-frequency ads across multiple locations daily.",
                },
            },
            {
                "@type": "Question",
                name: "Which bus advertising formats do you offer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "We offer full bus wraps, side ads, back-of-bus ads, panel ads, and route-wise planning for city and metro corridors—based on your campaign goals and budget.",
                },
            },
            {
                "@type": "Question",
                name: "How do you select routes and coverage?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "We plan coverage by matching routes with your target areas (markets, neighborhoods, high-footfall corridors), then balance reach + frequency for strong recall and efficient spend.",
                },
            },
            {
                "@type": "Question",
                name: "Do you also design the bus creatives?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes. We create bus ad designs optimized for real-world viewing—high contrast, bold messaging, correct sizing, and layouts that stay readable at distance and in motion.",
                },
            },
            {
                "@type": "Question",
                name: "How long should a bus branding campaign run?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Most campaigns run 2-8 weeks depending on goals. Longer durations increase frequency and recall, especially when targeting multiple routes or city zones.",
                },
            },
            {
                "@type": "Question",
                name: "Why choose Brand Banao.Ai for bus branding?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "We handle strategy, creative, planning, and execution—so your campaign gets the right routes, strong design, and consistent visibility with measurable outcomes.",
                },
            },
        ],
    };



    const faqItems = [
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
                "Most campaigns run 2-8 weeks depending on goals. Longer durations increase frequency and recall, especially when targeting multiple routes or city zones.",
        },
        {
            question: "Why choose Brand Banao.Ai for bus branding?",
            answer:
                "We handle strategy, creative, planning, and execution—so your campaign gets the right routes, strong design, and consistent visibility with measurable outcomes.",
        },
    ];





    return (
        <>
            <Helmet>
                {/* Basic SEO */}
                <title>Brand Banao.Ai | Bus Branding</title>
                <meta name="author" content="Brand Banao.Ai" />
                <meta name="description" content="Bus branding and bus advertising services by Brand Banao.Ai: full bus wraps, side panels, back-of-bus ads, route planning, creative design, and campaign execution for city-wide reach and high recall." />
                <meta name="keywords" content="bus branding, bus advertising, bus wrap advertising, full bus wrap, bus side ads, back of bus advertising, bus panel ads, city bus advertisement, metro bus ads, bus stop advertising, bus shelter ads, outdoor advertising india" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta name="MobileOptimized" content="width" />
                <meta name="HandheldFriendly" content="true" />

                {/* Canonical */}
                <link rel="canonical" href="https://brandbanao.ai/BusBranding" />

                {/* Open Graph */}
                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content="BrandBanao.Ai" />
                <meta property="og:title" content="Bus Branding & Bus Advertising Services" />
                <meta property="og:description" content="High-impact bus branding: full wraps, side ads, back-of-bus ads, route planning, and creative execution for strong reach and recall." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://brandbanao.ai/BusBranding" />
                <meta property="og:image" content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1000" />
                <meta property="og:image:height" content="630" />
                <meta property="og:latitude" content="20.00293012347024" />
                <meta property="og:longitude" content="73.75462348408139" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bus Branding & Bus Advertising Services" />
                <meta name="twitter:description" content="Bus branding by Brand Banao.Ai: wraps, side ads, back-of-bus ads, route planning, and creative execution." />
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
                <h1 className="hoarding-title">Bus Branding</h1>

                <div className="hoarding-image-wrap">
                    <img
                        src={BusBranding}
                        alt="TV News Channel Branding"
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

                {/* BOTTOM FAQ SECTION – ACCORDION STYLE */}
                <div className="hoarding-content faq-section">
                    <h2>Bus Branding FAQs</h2>
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

export default BussBranding;
