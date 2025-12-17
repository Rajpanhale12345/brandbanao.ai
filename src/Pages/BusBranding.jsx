import React, { useState } from "react";
import { Helmet } from "react-helmet";
import airport from "../Images/busbranding.jpg";
import "./tvNews.css"

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
        headline: "TV News Channel Branding Services - Brand Banao.Ai",
        name: "TV News Channel Branding Services - Brand Banao.Ai",
        description: "TV News Channel Branding by Brand Banao.Ai. End-to-end on-air branding, motion graphics, channel identity, lower-thirds, tickers, show packaging, and visual systems for regional and national news networks.",
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
                name: "What is TV news channel branding?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "TV news channel branding is the complete visual identity and on-air design system of a news network—logo, color system, typography, motion language, lower-thirds, tickers, transitions, show packaging, and guidelines to keep the channel consistent across programs and platforms.",
                },
            },
            {
                "@type": "Question",
                name: "What all is included in on-air branding for news channels?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "On-air branding typically includes logo development/refinement, channel identity package, lower-thirds, tickers, bugs, stings, wipes, promo templates, breaking-news packages, title sequences, and a brand guideline system for consistent execution.",
                },
            },
            {
                "@type": "Question",
                name: "Do you create motion graphics packages for 24x7 news?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes. We design scalable motion graphics systems for 24x7 news operations, including modular templates for daily bulletins, special shows, and breaking news so your team can produce fast while maintaining a premium look.",
                },
            },
            {
                "@type": "Question",
                name: "Can you brand regional language news channels (Marathi and others)?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes. We create culturally relevant branding for regional language news channels, including Marathi, with design systems that reflect audience preferences while meeting broadcast standards.",
                },
            },
            {
                "@type": "Question",
                name: "Do you handle rebranding for an existing news channel?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes. We can refresh or fully rebrand your channel with a structured approach—brand audit, identity evolution, on-air package redesign, rollout plan, and style guides to ensure a smooth transition.",
                },
            },
            {
                "@type": "Question",
                name: "Why choose Brand Banao.Ai for TV news channel branding?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Brand Banao.Ai delivers strategy-led TV news branding with strong visual systems, on-air packaging, and execution support—helping channels look credible, consistent, and distinct across platforms.",
                },
            },
        ],
    };



    const faqItems = [
        {
            question: "What is TV news channel branding?",
            answer:
                "TV news channel branding is the complete visual identity and on-air design system of a news network—logo, colors, typography, motion style, lower-thirds, tickers, transitions, show packaging, and brand guidelines for consistency.",
        },
        {
            question: "What all is included in on-air branding for news channels?",
            answer:
                "We can build a full on-air package: channel identity system, lower-thirds, tickers, bugs, stings, wipes, promos, breaking-news graphics, show openers, and an easy-to-follow style guide for daily use.",
        },
        {
            question: "Do you create motion graphics packages for 24x7 news?",
            answer:
                "Yes. We design modular motion graphics and templates that are quick to operate during live broadcasts while keeping the overall look premium and consistent.",
        },
        {
            question: "Can you brand regional language news channels (Marathi and others)?",
            answer:
                "Yes. We create culturally relevant branding for regional channels including Marathi—aligned with audience preferences while meeting broadcast standards.",
        },
        {
            question: "Do you handle rebranding for an existing news channel?",
            answer:
                "Yes. We offer refresh and full rebrand options, including audit, redesign, rollout planning, and guidelines to ensure the new identity launches smoothly.",
        },
        {
            question: "Why choose Brand Banao.Ai for TV news channel branding?",
            answer:
                "We combine strategy + design + execution support to make your channel look credible, consistent, and distinct across daily bulletins, special shows, and breaking news.",
        },
    ];




    return (
        <>
            <Helmet>
                {/* Basic SEO */}
                <title>Brand Banao.Ai | Bus Branding</title>
                <meta name="author" content="Brand Banao.AI" />
                <meta name="description" content="TV News Channel Branding by Brand Banao.Ai. On-air branding, motion graphics, lower-thirds, tickers, show packaging and channel identity systems for regional and national news networks." />
                <meta name="keywords" content="tv news channel branding, news channel branding, on-air branding, broadcast design, tv channel identity, news channel rebranding, motion graphics for news, lower thirds design, ticker design, breaking news graphics, tv news graphics package, tv channel logo design, brand banao ai" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta name="MobileOptimized" content="width" />
                <meta name="HandheldFriendly" content="true" />

                {/* Canonical */}
                <link rel="canonical" href="https://brandbanao.ai/TVNewsChanelBranding" />

                {/* Open Graph */}
                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content="BrandBanao.Ai" />
                <meta property="og:title" content="TV News Channel Branding Services" />
                <meta property="og:description" content="On-air branding and broadcast design for TV news channels: identity, motion graphics, lower-thirds, tickers, show packaging and rebranding." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://brandbanao.ai/TVNewsChanelBranding" />
                <meta property="og:image" content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1000" />
                <meta property="og:image:height" content="630" />
                <meta property="og:latitude" content="20.00293012347024" />
                <meta property="og:longitude" content="73.75462348408139" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="TV News Channel Branding Services" />
                <meta name="twitter:description" content="TV News Channel Branding by Brand Banao.Ai: on-air identity, motion graphics, lower-thirds, tickers and show packaging." />
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
                        src={airport}
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
                    <h2>TV News Channels FAQs</h2>
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
