import React, { useState } from "react";
import { Helmet } from "react-helmet";
import airport from "../Images/digital.jpg";
import "./tvNews.css";

const DigitallMarketing = () => {
    const [showGallery, setShowGallery] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    const images = [airport];

    const openGallery = (index) => {
        setCurrentIndex(index);
        setShowGallery(true);
    };

    // ✅ SEO: Consistent page identity for Railway Branding
    const PAGE_NAME = "Digital Marketing Service";
    const PAGE_TITLE =
        "Digital Marketing | Brand Banao.Ai";
    const PAGE_DESC =
        "Grow your business with Brand Banao.Ai digital marketing services: SEO, Google Ads (PPC), social media marketing, content strategy, performance marketing, analytics and conversion optimisation.";
    const PAGE_URL = "https://brandbanao.ai/DigitallMarketing";
    const OG_IMAGE = "https://brandbanao.ai/assets/logopng-CGGCs8OD.png";

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Digital Marketing - Brand Banao.Ai",
        headline: "Digital Marketing Services by Brand Banao.Ai",
        description: PAGE_DESC,
        image: OG_IMAGE,
        url: PAGE_URL,
        publisher: {
            "@type": "Organization",
            name: "Brand Banao.Ai",
            url: "https://brandbanao.ai/",
            logo: {
                "@type": "ImageObject",
                url: OG_IMAGE,
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
        name: "Digital Marketing Services",
        serviceType: "Digital Marketing",
        provider: {
            "@type": "Organization",
            name: "Brand Banao.Ai",
            url: "https://brandbanao.ai/",
            logo: {
                "@type": "ImageObject",
                url: OG_IMAGE,
            },
        },
        areaServed: "IN",
        url: PAGE_URL,
        description:
            "End-to-end digital marketing: SEO (technical & on-page), Google Ads (PPC), social media marketing, content marketing, performance marketing, analytics, conversion rate optimisation and reporting.",
    };


    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What digital marketing services does Brand Banao.Ai offer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "We provide SEO, Google Ads (PPC), social media marketing, content strategy, performance marketing, analytics, conversion optimisation, and reporting—tailored to your goals and budget.",
                },
            },
            {
                "@type": "Question",
                name: "How long does SEO take to show results?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "SEO timelines vary by industry and competition, but many websites start seeing early improvements within 8–12 weeks, with stronger results typically building over 3–6 months through consistent optimisation.",
                },
            },
            {
                "@type": "Question",
                name: "Do you manage Google Ads and paid social campaigns?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes. We plan, set up and optimise search, display and social campaigns with conversion tracking, audience targeting, creative testing and ongoing performance optimisation.",
                },
            },
            {
                "@type": "Question",
                name: "Can you help with local SEO for Nashik and nearby areas?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes. We improve local visibility with Google Business Profile optimisation, location pages, local keyword targeting, citations, reviews strategy and local ranking improvements.",
                },
            },
            {
                "@type": "Question",
                name: "How do you measure performance?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "We track the metrics that matter—qualified leads, conversions, revenue, CAC/ROAS, traffic quality and engagement—supported by analytics dashboards and regular reporting.",
                },
            },
            {
                "@type": "Question",
                name: "Why choose Brand Banao.Ai as your digital marketing partner?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "We combine strategy, creativity and analytics to build scalable marketing systems—focusing on measurable outcomes, continuous optimisation and transparent reporting.",
                },
            },
        ],
    };

    const faqItems = [
        {
            question: "What digital marketing services does Brand Banao.Ai offer?",
            answer:
                "We provide SEO, Google Ads (PPC), social media marketing, content strategy, performance marketing, analytics, conversion optimisation and reporting—tailored to your goals.",
        },
        {
            question: "How long does SEO take to show results?",
            answer:
                "SEO results depend on competition and your starting point, but many sites see early improvements in 8–12 weeks, with stronger gains over 3–6 months of consistent work.",
        },
        {
            question: "Do you manage Google Ads and paid social campaigns?",
            answer:
                "Yes. We plan, launch and optimise paid campaigns across search, display and social with conversion tracking, targeting, creative testing and ongoing optimisation.",
        },
        {
            question: "Can you help with local SEO for Nashik?",
            answer:
                "Yes. We improve local visibility via Google Business Profile optimisation, local keywords, location pages, citations and review strategy.",
        },
        {
            question: "How do you measure performance?",
            answer:
                "We measure qualified leads, conversions, ROAS/CAC, revenue impact, traffic quality and engagement—shared via dashboards and regular reporting.",
        },
        {
            question: "Why choose Brand Banao.Ai for digital marketing?",
            answer:
                "We combine strategy, creativity and analytics to deliver scalable growth, continuous optimisation and transparent reporting.",
        },
    ];

    return (
        <>
            <Helmet>
                {/* ✅ Primary SEO */}
                <title>{PAGE_TITLE}</title>
                <meta name="author" content="Brand Banao.Ai" />
                <meta name="description" content={PAGE_DESC} />
                <meta name="keywords" content="digital marketing, digital marketing agency, online marketing, digital marketing company, online advertising, marketing strategy, google digital marketing, digital marketing services, digital advertising, online digital marketing, digital marketing website, digital marketing specialist, seo digital marketing, performance marketing agencies, best marketing agencies, digital media marketing, seo advertising, best digital marketing companies, content marketing agencies, digital advertising companies, digital marketing agency website, top digital marketing companies, seo and digital marketing, local seo agency, best marketing agency websites, digital agency services, best digital marketing websites, brand advertising,  digital marketing, digital media advertising, best digital marketing agency in the world, best local seo company, top digital marketing, best digital marketing services, full service digital marketing agency, lead digital, social media marketing, web seo services" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
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
                <h1 className="hoarding-title">Digital Marketing</h1>

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
                    <h2>Digital Marketing - Brand Banao.Ai</h2>
                    <p>
                        In the era of fast-paced life, brands grow through precision rather than just having an existence.
                        Brand Banao.Ai's Digital Marketing team will provide brands with measurable support using the
                        platforms where brands can grow and are most visible.
                    </p>
                    <p>
                        We're a forward-thinking digital marketing agency helping businesses cruise through the online
                        world with clarity and confidence. Our unique, mix of creativity, technology and analytics creates
                        campaigns that are purposeful, scalable and results driven. We do not chase trends, we build the
                        systems that convert consumer interest to action.
                    </p>

                    <br />

                    <h2>A Strategy-First Approach</h2>
                    <p>
                        Every great campaign begins with the right strategy. We research your audience, competitors,
                        and category trends to create a plan that connects your brand objectives to tangible results.
                        If you're launching, growing, or changing, our planning drives consistency across channels and
                        clarity in how we talk to people.
                    </p>
                    <p>
                        As a trusted digital marketing company, Brand Banao.Ai is a holistic solutions provider across
                        platforms. Be it an online campaign or advanced digital advertising; rest assured that your brand
                        will say the right thing to the right people at the right time.
                    </p>

                    <br />

                    <h2>Performance-driven campaigns</h2>
                    <p>
                        With extensive expertise in Google Marketing, we are able to deliver campaigns with a high intent
                        of driving quality traffic to generate measurable return on investment. As a performance marketing
                        agency that is rising to prominence, we use the best metrics including leads, conversion and
                        revenue as our primary success indicators. Each and every investment is continually tracked,
                        updated and optimised.
                    </p>
                    <p>
                        We manage online ads, including search, display, and social, using pinpoint targeting and
                        compelling creative. Our background with digital advertising teams helps brands compete in
                        crowded markets while keeping costs in check.
                    </p>

                    <br />

                    <h2>Search, Content & Visibility</h2>
                    <p>
                        Strong visibility begins with proper search engine optimisation. At our agency, we have experienced
                        professionals that marry expertise in technical audits and content optimisation with building
                        authority to create the conditions for sustained growth. Advanced search engine optimisation,
                        combined with web services, will allow brands to be found in more locations, load their websites
                        faster, and convert at an improved rate.
                    </p>
                    <p>
                        We assist content marketing teams in developing the message and manner by which audiences connect
                        with your brand through providing them with value, and substance rather than fluff. When you mix
                        this with SEO and digital marketing, organic reach grows alongside paid efforts.
                    </p>
                    <p>
                        For region-focused brands, our local SEO solutions power up discoverability where it matters most.
                        We position ourselves as a top digital marketing company in Nashik for those seeking to own their
                        city or area.
                    </p>

                    <br />

                    <h2>Full-Service Digital Execution</h2>

                    <p>
                        As a full-service digital marketing agency, Brand Banao.Ai integrates social media marketing, digital
                        media marketing, and digital media advertising all in one seamless system. We also back brand ad
                        campaigns that boost recall and trust across digital touchpoints.
                    </p>
                    <p>
                        The digital marketing team behind our agency is full of professionals with expertise in every
                        aspect of the digital marketing process, from concept to optimization. As such, we're not just
                        vendors; instead, we are your digital partner for all your digital marketing initiatives.
                        We aren't just vendors; we're your go-to digital partner.
                    </p>

                    <br />

                    <h2>Why Brands choose Brand Banao.Ai</h2>

                    <p>
                        We are considered one of the most prominent digital marketing companies, blending speed with
                        strategy.
                    </p>

                    <p>
                        <b>Digital Marketing Partners at Every Stage of Development:</b> Our digital marketing team
                        includes highly skilled digital marketers who will help you create a complete and effective
                        online marketing strategy, as well as optimize that strategy for maximum effectiveness. By being
                        your digital partner, we provide a collaborative, consultative approach to developing an effective
                        digital marketing approach.
                    </p>

                    <p>
                        We provide our clients with the same level of clarity and effectiveness we have achieved on our site,
                        we have gained international recognition as one of the leading digital marketing agency websites,
                        along with being among the best marketing agency websites. A number of people view our multi-faceted
                        approach to be a strong frontrunner in terms of who is the best digital marketing agency in the world
                        based on the outcomes we have experience with.
                    </p>

                    <p>
                        If you need top-of-the-line digital marketing services, top-tier digital marketing services or reliable
                        digital marketing firms to strategically develop your brand, then let Brand Banao.Ai assist you in
                        achieving sustainable, intelligent growth for your company.
                    </p>

                    {/* <h3 style={{ textAlign: "center" }}><i><b>With railway advertising media planner services from Brand
                        Banao.Ai, your brand rides where India rides-on railways.</b></i></h3> */}
                </div>

                {/* BOTTOM FAQ SECTION – ACCORDION STYLE */}
                <div className="hoarding-content faq-section">
                    <h2>Digital Marketing FAQs</h2>
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

export default DigitallMarketing;
