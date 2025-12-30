import React, { useState } from "react";
import { Helmet } from "react-helmet";
import airport from "../Images/app.png";
import newImage from "../Images/Web Dev.png";
import NewImage from "../Images/SEO Dev.png";
import "./tvNews.css";

const WebDevelopmentt = () => {
    const [showGallery, setShowGallery] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    const images = [airport];

    const openGallery = (index) => {
        setCurrentIndex(index);
        setShowGallery(true);
    };

    // ✅ SEO: Consistent page identity for Railway Branding
    const PAGE_NAME = "Web & App Development Services";
    const PAGE_TITLE = "Website & App Development | Brand Banao.Ai";
    const PAGE_DESC = "Custom website and mobile app development by Brand Banao.AI – responsive, React-based, ecommerce-ready platforms that turn visitors into loyal customers.";
    const PAGE_URL = "https://brandbanao.ai/WebDevelopmentt";
    const OG_IMAGE = "https://brandbanao.ai/assets/logopng-CGGCs8OD.png";

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Website & App Development - Brand Banao.Ai",
        headline: "Website & App Development Services by Brand Banao.Ai",
        description: PAGE_DESC,
        image: OG_IMAGE,
        url: PAGE_URL,
        about: ["Website Development", "App Development", "Ecommerce Development", "Responsive Web Design"],
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
        name: "Website & App Development Services",
        serviceType: "Website Development, App Development, Ecommerce Development",
        provider: {
            "@type": "Organization",
            name: "Brand Banao.Ai",
            url: "https://brandbanao.ai/",
            logo: {
                "@type": "ImageObject",
                url: OG_IMAGE,
            },
        },
        url: PAGE_URL,
        description: "End-to-end website and mobile app development services, including responsive design, React-based web apps, ecommerce stores, and performance-focused digital platforms.",
    };


    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What types of websites and apps does Brand Banao.Ai develop?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "We design and develop custom websites, web applications, mobile-first apps and ecommerce platforms tailored to your business goals—whether that’s lead generation, online sales or brand building.",
                },
            },
            {
                "@type": "Question",
                name: "Which technologies do you use for web and app development?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "We leverage modern technologies with a strong focus on React for scalable, fast, and future-ready web applications, along with other reliable frameworks and tools based on project needs.",
                },
            },
            {
                "@type": "Question",
                name: "Do you build responsive and mobile-first websites?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes. Every website we build is fully responsive and optimised for mobiles, tablets and desktops, ensuring a seamless experience without zooming or layout issues on any device.",
                },
            },
            {
                "@type": "Question",
                name: "Can you develop ecommerce websites and online stores?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Absolutely. We create ecommerce websites with intuitive product displays, categories, carts, and secure payment systems—designed to shorten decision time and increase conversions.",
                },
            },
            {
                "@type": "Question",
                name: "How long does it take to develop a website or app?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Timelines depend on the scope, features and integrations. Simple websites may take a few weeks, while complex web apps or mobile apps can take several weeks to a few months. We define clear milestones before starting.",
                },
            },
            {
                "@type": "Question",
                name: "Do you provide ongoing support and maintenance?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes. We offer ongoing support, performance optimisation and feature enhancements to keep your website or app stable, secure and ready to scale as your business grows.",
                },
            },
        ],
    };

    const faqItems = [
        {
            question: "What types of websites and apps does Brand Banao.Ai develop?",
            answer:
                "We build custom business websites, web applications, mobile-first apps and ecommerce platforms aligned with goals like lead generation, online sales, brand presence and operational efficiency.",
        },
        {
            question: "Which technologies do you use for web and app development?",
            answer:
                "We use modern tech stacks with a strong focus on React for web applications, alongside robust backend and cloud technologies selected according to your project’s scale and requirements.",
        },
        {
            question: "Do you build responsive and mobile-first websites?",
            answer:
                "Yes. All our websites are responsive and mobile-first, ensuring they look clear, consistent and easy to use on phones, tablets and desktops without zooming or layout breaks.",
        },
        {
            question: "Can you develop ecommerce websites and online stores?",
            answer:
                "Yes. We create ecommerce-ready websites with product catalogues, carts, checkout flows and payment integration designed to simplify user journeys and improve conversions.",
        },
        {
            question: "How long does it take to develop a website or app?",
            answer:
                "It depends on the complexity of design, features and integrations. After understanding your requirements, we share an estimated timeline with clear phases for design, development, testing and launch.",
        },
        {
            question: "Do you provide ongoing support and maintenance?",
            answer:
                "We offer ongoing maintenance, updates and performance optimisation so your site or app remains stable, secure and capable of scaling with your business.",
        },
    ];

    return (
        <>
            <Helmet>
                {/* ✅ Primary SEO */}
                <title>{PAGE_TITLE}</title>
                <meta name="author" content="Brand Banao.Ai" />
                <meta name="description" content={PAGE_DESC} />
                <meta name="keywords" content="website development, web development company, web app development, mobile app development, app development company, ecommerce website development, responsive web design, React website development, custom web application development, web development services, app development services, performance-focused websites, UI UX design, full-cycle web development, business website development, online store development, web development agency, website design and development, web application development company" />
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
                <h1 className="hoarding-title">Website & App Development</h1>

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
                    <h2>Website and App Development - Brand Banao.Ai</h2>
                    <p>
                        Your digital platform isn't just an online presence; it's who you are as a business, your sales
                        engine, and your customer vibe. At Brand Banao.AI, we build digital ecosystems to earn trust,
                        boost conversions, and grow with your goals. Every brand has a story; we turn that story into an
                        interface people enjoy exploring.
                    </p>

                    <p>
                        We begin building custom web applications by gathering your business objectives, what your audience
                        expects, and the technology required for stable, long-term success. Every feature, layout, and
                        interaction is crafted around a single concept: Growth with a purpose. Our dedicated team of web
                        developers turns your vision into an effective, user-friendly, fast-loading site that easily converts
                        visitors into paying customers.
                    </p>

                    <p>
                        When your company needs to develop a mobile-first application, you can count on our app development
                        team. We'll brainstorm ideas, design the app and build it from the ground up to enable your users to
                        perform tasks more efficiently and streamline their experiences. Our creative developers and user
                        interface (UI) strategists work together to create product journeys that engage users with fluid and
                        effective interactions. Our dedicated application development staff work with startups or supporting
                        existing companies to ensure applications remain stable, secure and capable of being expanded as your
                        company continues to prosper.
                    </p>

                    <div style={{ textAlign: "center", margin: "30px 0" }}>
                        <img
                            src={newImage}        // change to airport if using same image
                            alt="Web Development at Brand Banao"
                            style={{ width: "100%", maxWidth: "700px", borderRadius: "10px" }}
                        />
                    </div>

                    <p>
                        It is essential that your company develop a website that has both an attractive appearance as well as
                        a great deal of usability for its users. Therefore, when developing your website we focus on delivering
                        custom created website designs, as well as attractive, engaging, simple to use user interface designs
                        that enhance the overall experience on your site while making actions like purchasing, booking, or
                        contacting your organisation simple. In addition, all of our technology used when creating your digital
                        products takes advantage of React to provide you with websites that can adapt and grow with the times;
                        therefore creating a longer life-cycle for your website.
                    </p>

                    <p>
                        With extensive expertise in Google Marketing, we are able to deliver campaigns with a high intent
                        of driving quality traffic to generate measurable return on investment. As a performance marketing
                        agency that is rising to prominence, we use the best metrics including leads, conversion and
                        revenue as our primary success indicators. Each and every investment is continually tracked,
                        updated and optimised.
                    </p>

                    <p>
                        With so many people now using a variety of mobile devices including phones, tablets and desktops,
                        our responsive web development ensures that your website appears clear and uniform regardless of
                        the device upon which it is viewed. No need to zoom in/out on text or images; all sections will
                        remain in position, therefore providing you and your customers with a seamless online experience.
                    </p>

                    <div style={{ textAlign: "center", margin: "30px 0" }}>
                        <img
                            src={NewImage}        // change to airport if using same image
                            alt="Web Development at Brand Banao"
                            style={{ width: "100%", maxWidth: "700px", borderRadius: "10px" }}
                        />
                    </div>

                    <p>
                        If you want to sell online, our web e commerce development has got you covered, creating digital
                        storefronts that feel like real shops. Product displays, categories, carts, payment systems-we
                        streamline it all to shorten decisions and boost sales. What sets us apart? We aren't just coders,
                        we think like marketers. As a web dev and digital marketing crew, we build platforms that are meant
                        to attract, engage, and convert. Architecture is SEO-friendly, content flows tell your story,
                        and smart CTA placements guide actions naturally.
                    </p>

                    <p>
                        We also do full-cycle website design and development: from wireframing to deployment. If you already
                        have a site, we can accelerate it, enhance the UI, and strengthen the structure without losing your
                        core identity.
                    </p>

                    <p>
                        All of our projects begin with establishing a website goal for our clients, whether that be generating
                        leads, increasing sales, streamlining operations, or building a better corporate brand presence. With
                        your company's goals established, we build out a digital product that either meets or exceeds your
                        expectations. This results in an application or website that is a solid platform today and ready to
                        support your company in the future.
                    </p>

                    <h3 style={{ textAlign: "center" }}><i><b>By partnering with Brand Banao.AI, you can produce memorable
                        digital experiences that people trust and will return to again.</b></i></h3>
                </div>

                {/* BOTTOM FAQ SECTION – ACCORDION STYLE */}
                <div className="hoarding-content faq-section">
                    <h2>Web/App Development FAQs</h2>
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

export default WebDevelopmentt;
