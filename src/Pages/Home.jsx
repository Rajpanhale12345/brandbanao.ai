import { useEffect, useRef, useState } from "react";
import "./Home.css";
import BoxCard from "../components/BoxCard";
import Carousel from "../components/Carousel";
import Work from "../components/Work";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const canvasRef = useRef(null);
  const bgRef = useRef(null);
  const belowHeroRef = useRef(null);

  const [showArrow, setShowArrow] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  const faqData = [
    {
      question: "What services does Brand Banao.Ai offer?",
      answer:
        "We provide 360° branding and advertising services including digital marketing, outdoor advertising, print media, TV, radio, branding strategy, and creative campaigns.",
    },
    {
      question: "Do you work with businesses across Maharashtra?",
      answer:
        "Yes, we work with businesses across Maharashtra and help brands grow through strategic marketing, advertising, and branding solutions.",
    },
    {
      question: "Can you help with both online and offline marketing?",
      answer:
        "Absolutely. We handle both online and offline marketing, including social media, performance marketing, websites, outdoor ads, print campaigns, and media planning.",
    },
    {
      question: "Why should I choose Brand Banao.Ai?",
      answer:
        "With 16+ years of experience, we focus on result-driven branding and advertising strategies tailored to each business, combining creativity with market understanding.",
    },
    {
      question: "How can I get started with your agency?",
      answer:
        "You can contact us through our website or inquiry form, and our team will connect with you to understand your brand goals and suggest the right marketing plan.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    headline: "Best 360° Marketing & Branding Agency",
    description:
      "Brand Banao.Ai is full 360° service of marketing agency delivering impactful branding across digital, outdoor, print, TV, & radio. With over 16+ years of experience.",
    image: "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
    url: "https://brandbanao.ai/",
    datePublished: "2024-03-05",
    dateCreated: "2024-03-05",
    dateModified: "2025-05-05",
    publisher: {
      "@type": "Organization",
      name: "Brand Banao.Ai",
      url: "https://brandbanao.ai/",
      logo: "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
    },
    author: {
      "@type": "Person",
      name: "Amit Hemant Patil",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  useEffect(() => {
    const cleanupFns = [];

    const onScroll = () => setShowArrow(window.scrollY < 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanupFns.push(() => window.removeEventListener("scroll", onScroll));

    (async () => {
      try {
        const { default: Grid2Background } = await import(
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/grid2.cdn.min.js"
        );

        const canvas = canvasRef.current;
        if (!canvas) return;

        const bg = Grid2Background(canvas);
        bgRef.current = bg;

        const target = bg?.renderer?.domElement || canvas;
        if (target && target.style) {
          target.style.pointerEvents = "auto";
          target.style.touchAction = "none";
        }

        const resize = () => {
          const w = window.innerWidth;
          const h = window.innerHeight;
          const dpr = Math.min(window.devicePixelRatio || 1, 2);

          canvas.style.width = "100vw";
          canvas.style.height = "100vh";
          canvas.width = Math.floor(w * dpr);
          canvas.height = Math.floor(h * dpr);

          bg?.renderer?.setPixelRatio?.(dpr);
          bg?.renderer?.setSize?.(w, h, false);
          if (bg?.camera) {
            bg.camera.aspect = w / h;
            bg.camera.updateProjectionMatrix?.();
          }
        };

        resize();
        window.addEventListener("resize", resize, { passive: true });
        cleanupFns.push(() => window.removeEventListener("resize", resize));

        const forward = (e) => {
          if (!e.isTrusted || !target) return;
          const evt = new e.constructor(e.type, e);
          target.dispatchEvent(evt);
        };

        const eventTypes = [
          "pointermove",
          "pointerdown",
          "pointerup",
          "mousemove",
          "touchstart",
          "touchmove",
          "touchend",
        ];

        eventTypes.forEach((t) =>
          window.addEventListener(t, forward, { passive: true })
        );

        cleanupFns.push(() =>
          eventTypes.forEach((t) => window.removeEventListener(t, forward))
        );

        const rand = () => Math.floor(Math.random() * 0xffffff);

        const handleClick = () => {
          if (!bg?.grid) return;
          bg.grid.setColors([rand(), rand(), rand()]);
          bg.grid.light1?.color?.set(rand());
          if (bg.grid.light1) bg.grid.light1.intensity = 500 + Math.random() * 1000;
          bg.grid.light2?.color?.set(rand());
          if (bg.grid.light2) bg.grid.light2.intensity = 250 + Math.random() * 250;
        };

        document.body.addEventListener("click", handleClick);
        cleanupFns.push(() =>
          document.body.removeEventListener("click", handleClick)
        );
      } catch (e) {
        console.error("Failed to initialize Grid2Background", e);
      }
    })();

    return () => {
      cleanupFns.forEach((fn) => {
        try {
          fn();
        } catch {
          // ignore
        }
      });

      const bg = bgRef.current;
      try {
        bg?.renderer?.dispose?.();
      } catch {
        // ignore
      }
      bgRef.current = null;
    };
  }, []);

  const scrollDown = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (belowHeroRef.current) {
      belowHeroRef.current.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: prefersReduced ? "auto" : "smooth",
      });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Best Branding & Advertising Agency in Maharashtra</title>
        <meta name="author" content="Brand Banao.Ai" />
        <meta
          name="description"
          content="Brand Banao.Ai is a 360° marketing and branding agency in Maharashtra delivering outdoor advertising and digital marketing with 16+ years of experience."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://brandbanao.ai/" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="publisher" content="Brand Banao.Ai" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Brand Banao.Ai" />
        <meta
          property="og:title"
          content="Brand Banao.Ai 360° Marketing & Branding Agency"
        />
        <meta
          property="og:description"
          content="A leading 360° digital & outdoor marketing agency in Maharashtra. We deliver strategic advertising & branding with over 16+ years of experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandbanao.ai/" />
        <meta
          property="og:image"
          content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nashik" />
        <meta
          name="geo.position"
          content="19.990263481422677, 73.79178939433704"
        />
        <meta
          name="ICBM"
          content="19.990263481422677, 73.79178939433704"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brand Banao.Ai 360° Marketing & Branding Agency"
        />
        <meta
          name="twitter:description"
          content="Brand Banao.Ai offers 360° expert digital, outdoor, and print marketing services across Maharashtra."
        />
        <meta
          name="twitter:image"
          content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png"
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div id="app" style={{ backgroundColor: "black" }} className="home-main">
        <canvas id="webgl-canvas" ref={canvasRef} />

        <div className="hero">
          <h1 className="title-1">THE BEST 360° BRANDING AND ADVERTISING</h1>
          <h2 className="title-2">
            AGENCY IN <br /> <span className="highlight">MAHARASHTRA</span>
          </h2>
        </div>

        <button
          className={`scroll-down ${showArrow ? "" : "hidden"}`}
          onClick={scrollDown}
          aria-label="Scroll down"
          title="Scroll down"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div ref={belowHeroRef} />

      <BoxCard />

      <h3 className="awards-text">Recognised and Awarded by</h3>

      <div className="award-container">
        <Carousel />
      </div>

      <Work />

      <section className="faq-section">
        <div className="faq-wrapper">
          <p className="faq-tag">FAQs</p>
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-subtext">
            Find answers to common questions about our branding and advertising services.
          </p>

          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div
                className={`faq-item ${openFaq === index ? "active" : ""}`}
                key={index}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openFaq === index ? "−" : "+"}</span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}