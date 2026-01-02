import React, { useState } from "react";
import { Helmet } from "react-helmet";
import airport from "../Images/cycle.jpg";
import "./tvNews.css";

const CycleeBranding = () => {
    const [showGallery, setShowGallery] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    // You can add more auto branding images here later if you have them
    const images = [airport];

    const openGallery = (index) => {
        setCurrentIndex(index);
        setShowGallery(true);
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Cycle Branding - Brand Banao.Ai",
        headline: "Cycle Branding Services - Brand Banao.Ai",
        description:
            "Cycle branding and branded cycle advertising by Brand Banao.Ai. Eco-friendly, hyperlocal mobile ads with route planning, repeated exposure in neighborhoods, deployment, monitoring, and reporting.",
        image: "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
        url: "https://brandbanao.ai/CycleeBranding",
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
        name: "Auto Branding & Auto Rickshaw Advertising",
        serviceType: "Outdoor Advertising",
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
        url: "https://brandbanao.ai/CycleeBranding",
        description:
            "Mobile outdoor advertising using auto rickshaw branding: full wraps, back panels, side panels, route-based hyperlocal campaigns with monitoring and reporting.",
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is cycle branding?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Cycle branding is a form of mobile outdoor advertising where branded bicycles carry your message through neighborhoods, markets, campuses, and community areas to create repeated local visibility and brand recall.",
                },
            },
            {
                "@type": "Question",
                name: "Where does cycle advertising work best?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Cycle advertising works best in residential neighborhoods, markets, campuses, housing societies, and local hotspots where people repeatedly encounter the brand during daily routines.",
                },
            },
            {
                "@type": "Question",
                name: "What types of campaigns are suitable for cycle branding?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Cycle branding is ideal for local product launches, retail promotions, public awareness and CSR campaigns, real estate site launches, healthcare and education awareness, and event promotions.",
                },
            },
            {
                "@type": "Question",
                name: "Do you provide route planning and campaign management?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes. We handle route planning, campaign duration, branding production, deployment, monitoring, and reporting to ensure consistent coverage and maximum impressions.",
                },
            },
            {
                "@type": "Question",
                name: "Is cycle branding eco-friendly?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes. Cycle branding is an eco-friendly advertising medium that delivers high visibility without fuel consumption or emissions, making it suitable for sustainable brand campaigns.",
                },
            },
            {
                "@type": "Question",
                name: "Why choose Brand Banao.Ai for cycle branding?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Brand Banao.Ai combines strategic planning, creative execution, and on-ground operations to deliver scalable, hyperlocal cycle branding campaigns with measurable reach and strong brand recall.",
                },
            },
        ],
    };


    const faqItems = [
        {
            question: "What is cycle branding?",
            answer:
                "Cycle branding is a form of mobile outdoor advertising where branded bicycles carry your message through neighborhoods, markets, campuses, and other high-footfall areas to build repeated local visibility.",
        },
        {
            question: "Where does cycle advertising work best?",
            answer:
                "Cycle advertising performs best in neighborhoods, markets, campuses, housing areas, community spaces, and locations where people repeatedly see the message during daily routines.",
        },
        {
            question: "What campaign types can cycle branding support?",
            answer:
                "Cycle branding is ideal for local product launches, retail and showroom promotions, public awareness and CSR initiatives, real estate site launches, education and healthcare awareness, and event promotions.",
        },
        {
            question: "Do you handle route planning and deployment?",
            answer:
                "Yes. We plan routes based on target areas, schedule campaign timing and duration, produce branding materials, and manage on-ground deployment.",
        },
        {
            question: "Do you provide monitoring and reporting?",
            answer:
                "Yes. Campaigns include monitoring and reporting to help ensure cycles follow planned routes and deliver consistent visibility and frequency in target areas.",
        },
        {
            question: "Why choose Brand Banao.Ai for cycle branding?",
            answer:
                "Brand Banao.Ai combines strategy, creative execution, and on-ground operations to deliver consistent hyperlocal visibility with scalable campaigns and measurable coverage.",
        },
    ];

    return (
        <>
            <Helmet>
                <title>Cycle Branding | Brand Banao.Ai</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="publisher" content="Brand Banao.Ai" />
                <meta name="creator" content="Brand Banao.Ai" />
                <meta name="googlebot" content="index, follow, max-image-preview:large, max-video-preview:-1" />
                <meta name="theme-color" content="#0d1117" />
                <meta name="color-scheme" content="light dark" />
                <meta name="author" content="Brand Banao.AI" />
                <meta name="description" content="Cycle branding and branded cycle advertising by Brand Banao.Ai. Eco-friendly, hyperlocal mobile ads with route planning, repeated exposure in neighborhoods, deployment, monitoring, and reporting." />
                <meta name="keywords" content="cycle branding, branded cycle advertising, cycle advertising, bicycle advertising, hyperlocal advertising, eco friendly advertising, mobile outdoor advertising, neighborhood marketing, route based advertising, local promotions, Brand Banao Ai" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta name="MobileOptimized" content="width" />
                <link rel="icon" href="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />
                <link rel="apple-touch-icon" href="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />
                <meta name="twitter:image:alt" content="Brand Banao.Ai logo" />
                <meta name="twitter:site" content="@BrandBanaoAi" />
                <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
                <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
                <meta name="HandheldFriendly" content="true" />
                <link rel="canonical" href="https://brandbanao.ai/CycleeBranding" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-title" content="Brand Banao.Ai" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content="BrandBanao.Ai" />
                <meta property="og:title" content="Cycle Branding Services" />
                <meta property="og:description" content="Cycle branding and branded cycle advertising by Brand Banao.Ai. Eco-friendly, hyperlocal mobile ads with route planning, repeated exposure in neighborhoods, deployment, monitoring, and reporting." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://brandbanao.ai/CycleeBranding" />
                <meta property="og:image" content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1000" />
                <meta property="og:image:height" content="630" />
                <meta property="og:latitude" content="20.00293012347024" />
                <meta property="og:longitude" content="73.75462348408139" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Cycle Branding Services" />
                <meta name="twitter:description" content="Cycle branding and branded cycle advertising by Brand Banao.Ai. Eco-friendly, hyperlocal mobile ads with route planning, repeated exposure in neighborhoods, deployment, monitoring, and reporting." />
                <meta name="twitter:image" content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />

                <script type="application/ld+json">
                    {JSON.stringify(webPageSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <div className="hoarding-page">
                <h1 className="hoarding-title">Cycle Branding</h1>

                <div className="hoarding-image-wrap">
                    <img
                        src={airport}
                        alt="Auto Branding"
                        className="hoarding-image"
                        onClick={() => openGallery(0)}
                    />
                </div>

                {showGallery && (
                    <div className="gallery-overlay" onClick={() => setShowGallery(false)}>
                        <div className="gallery-box" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={images[currentIndex]}
                                alt="Auto Branding Gallery"
                                className="gallery-img"
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

                {/* BOTTOM FAQ SECTION – ACCORDION STYLE */}
                <div className="hoarding-content faq-section">
                    <h2>Cycle Branding FAQs</h2>
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

export default CycleeBranding;
