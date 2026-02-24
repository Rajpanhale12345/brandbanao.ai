import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Navigate, Link } from "react-router-dom";
import "./busShelter.css";
import "../components/hoardingCity.css"

import hoarding1 from "../Images/hoarding.jpg";
import hoarding2 from "../Images/award2.png";
import hoarding3 from "../Images/award5.png";
import hoarding4 from "../Images/busbranding.jpg";

import { HOARDINGS_CITIES } from "../data/hoardingsCities";

const DEFAULT_OG = "https://brandbanao.ai/assets/hoarding-DQjSSeNb.jpg";

const HoardingBrandingCity = () => {
    const { citySlug } = useParams();

    /* ---------- CITY DATA ---------- */
    const cityData = useMemo(() => {
        if (!citySlug) return null;
        return HOARDINGS_CITIES?.[citySlug] || null;
    }, [citySlug]);

    if (!cityData) return <Navigate to="/hoardings" replace />;

    /* ---------- SAFE FIELDS ---------- */
    const city = cityData.city ?? "Maharashtra";
    const state = cityData.state ?? "Maharashtra";
    const areas = Array.isArray(cityData.areas) ? cityData.areas : [];
    const intro = Array.isArray(cityData.intro) ? cityData.intro : [];
    const paragraph = cityData.paragraph ?? null;
    const conclusion = cityData.conclusion ?? null;
    const faqs = Array.isArray(cityData.faqs) ? cityData.faqs : [];
    const ogImage = cityData.ogImage ?? DEFAULT_OG;
    const altNames = Array.isArray(cityData.altNames) ? cityData.altNames : [];

    /* ---------- STATE ---------- */
    const [showGallery, setShowGallery] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    /* ---------- CONSTANTS ---------- */
    const SITE_URL = "https://brandbanao.ai";
    const PAGE_URL = `${SITE_URL}/hoardings/${citySlug}`;
    const BRAND_NAME = "BrandBanao.ai";

    const PAGE_TITLE = `Hoardings in ${city} - ${BRAND_NAME}`;
    const PAGE_DESC = `Looking for best hoardings in ${city}? ${BRAND_NAME} provides billboard advertising, outdoor hoardings, LED hoardings and prime location booking across ${city}.`;

    /* ---------- IMAGES ---------- */
    const images = useMemo(() => [hoarding1, hoarding2, hoarding3, hoarding4], []);

    const openGallery = useCallback((index) => {
        setCurrentIndex(index);
        setShowGallery(true);
    }, []);

    const closeGallery = useCallback(() => setShowGallery(false), []);

    /* ---------- ESC CLOSE ---------- */
    useEffect(() => {
        if (!showGallery) return;
        const handler = (e) => e.key === "Escape" && closeGallery();
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [showGallery, closeGallery]);

    /* ---------- DEFAULT FAQ (fallback) ---------- */
    const defaultFaq = useMemo(() => {

        const areaLine = areas.length
            ? areas.slice(0, 3).join(", ")
            : "prime junctions";

        return [

            {
                question: `Which is the best hoarding advertising in ${city}?`,
                answer: `The best hoardings in ${city} are placed in high traffic areas like ${areaLine}. Prime visibility locations give maximum reach and brand recall.`
            },

            {
                question: `What is the cost of hoarding advertising in ${city}?`,
                answer: `Hoarding cost in ${city} depends on size, location and duration. Premium locations cost more because they give higher visibility.`
            },

            {
                question: `Where can I book hoardings in ${city}?`,
                answer: `You can book hoardings in ${city} through outdoor advertising agencies that provide location selection, booking and installation services.`
            },

            {
                question: `Does billboard advertising work in ${city}?`,
                answer: `Yes. Billboard advertising in ${city} works very well because daily commuters see the same hoardings repeatedly, increasing brand recall.`
            },

            {
                question: `Which are top hoarding locations in ${city}?`,
                answer: `Top hoarding locations in ${city} are high-traffic roads, commercial zones and major junctions where maximum people pass daily.`
            }

        ];

    }, [city, areas]);

    const FAQ_ITEMS = useMemo(() => {
        // city faqs first, then fill remaining from default to make 5
        const cityFaqs = Array.isArray(faqs) ? faqs : [];
        const fallback = Array.isArray(defaultFaq) ? defaultFaq : [];

        const combined = [...cityFaqs];

        for (const item of fallback) {
            if (combined.length >= 5) break;

            // avoid duplicate questions
            const exists = combined.some(
                (x) => (x?.question || "").toLowerCase() === (item?.question || "").toLowerCase()
            );
            if (!exists) combined.push(item);
        }

        return combined;
    }, [faqs, defaultFaq]);

    /* ---------- SEO KEYWORDS ---------- */
    const keywordsContent = useMemo(() => {
        const list = [
            `hoardings in ${city}`,
            `billboard advertising ${city}`,
            `outdoor advertising ${city}`,
            `OOH advertising ${city}`,
            BRAND_NAME,
        ];

        altNames.forEach((n) => n && list.push(`hoardings in ${n}`));
        return list.join(", ");
    }, [city, altNames]);

    const structuredData = useMemo(() => ({
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": `Best Hoardings in ${city}`,
                "url": PAGE_URL,
                "description": PAGE_DESC
            },
            {
                "@type": "Service",
                "name": `Hoarding Advertising in ${city}`,
                "areaServed": { "@type": "City", "name": city },
                "provider": {
                    "@type": "Organization",
                    "name": BRAND_NAME,
                    "url": SITE_URL
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": FAQ_ITEMS.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f.answer
                    }
                }))
            }
        ]
    }), [city, FAQ_ITEMS]);

    const black = { color: "#000" };

    return (
        <>
            <Helmet>
                <title>{PAGE_TITLE}</title>
                <meta name="description" content={PAGE_DESC} />
                <link rel="canonical" href={PAGE_URL} />
                <meta name="keywords" content={keywordsContent} />
                <meta property="og:title" content={PAGE_TITLE} />
                <meta property="og:description" content={PAGE_DESC} />
                <meta property="og:image" content={ogImage} />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <div className="hoarding-page">

                {/* TITLE */}
                <h1 className="hoarding-title" style={black}>
                    Hoarding Advertising in {city}
                </h1>

                {/* HERO IMAGE */}
                <div className="hoarding-image-wrap">
                    <img
                        src={hoarding1}
                        alt={`Hoarding advertising in ${city}`}
                        className="hoarding-image"
                        onClick={() => openGallery(0)}
                    />
                </div>

                {/* GALLERY */}
                {showGallery && (
                    <div className="gallery-overlay" onClick={closeGallery}>
                        <div className="gallery-box" onClick={(e) => e.stopPropagation()}>
                            <button onClick={closeGallery}>x</button>
                            <img src={images[currentIndex]} alt="gallery" />
                        </div>
                    </div>
                )}

                {/* INTRO */}
                {intro.length > 0 && (
                    <div className="hoarding-content">
                        {intro.map((line, i) => (
                            <p key={i} style={black}>{line}</p>
                        ))}
                    </div>
                )}

                <div className="hoarding-content">
                    <h2 style={black}>Top Outdoor Advertising Services in {city}</h2>

                    <ul>
                        <li>Hoardings in {city}</li>
                        <li>Billboard advertising {city}</li>
                        <li>LED hoardings {city}</li>
                        <li>Outdoor advertising {city}</li>
                        <li>Hoarding booking {city}</li>
                    </ul>
                </div>

                <p style={black}>
                    Hoardings in {city} provide strong brand visibility because commuters pass the same routes daily.
                    Billboard advertising in {city} works best at high traffic junctions and commercial roads.
                    Outdoor advertising in {city} ensures repeated brand recall.
                </p>

                {/* LOCATIONS */}
                <div className="hoarding-content">
                    <h2 style={black}>
                        Best Hoarding Advertising Agency in {city}
                    </h2>
                    {areas.length ? (
                        <ul>
                            {areas.map((a) => (
                                <li key={a} style={black}>{a}</li>
                            ))}
                        </ul>
                    ) : (
                        <p style={black}>We select high-visibility locations across {city}.</p>
                    )}
                </div>

                {/* LOCAL NOTE (city targeted line) */}
                {cityData.localNote && (
                    <div className="hoarding-content">
                        <p style={black}>{cityData.localNote.replace("CITY_NAME", city)}</p>
                    </div>
                )}

                {/* PARAGRAPH */}
                {paragraph && (
                    <div className="hoarding-content">
                        <p style={black}>{paragraph}</p>
                    </div>
                )}

                {/* FAQ */}
                <div className="hoarding-content faq-section">
                    <h2 style={black}>FAQs :- {city}</h2>

                    {FAQ_ITEMS.map((faq, i) => {
                        const open = activeFaqIndex === i;
                        return (
                            <div key={i} className={`faq-item ${open ? "active" : ""}`}>
                                <button
                                    className="faq-question"
                                    onClick={() => setActiveFaqIndex(open ? null : i)}
                                >
                                    {faq.question}
                                </button>
                                {open && <p style={black}>{faq.answer}</p>}
                            </div>
                        );
                    })}
                </div>

                {/* CONCLUSION */}
                {conclusion && (
                    <div className="hoarding-content">
                        <h2 style={black}>Final Note</h2>
                        <p style={black}>{conclusion}</p>
                    </div>
                )}

                {/* OTHER CITIES */}

                {/* <div className="hoarding-content">
                    <h2 style={black}>Hoarding Services Across Maharashtra</h2>

                    {Object.entries(HOARDINGS_CITIES).map(([slug, c]) => (
                        <p key={slug}>
                            <Link to={`/hoardings/${slug}`} style={black}>
                                Best Hoardings in {c.city}
                            </Link>
                        </p>
                    ))}
                </div> */}

            </div>
        </>
    );
};

export default HoardingBrandingCity;