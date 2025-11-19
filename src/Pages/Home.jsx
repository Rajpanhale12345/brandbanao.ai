import { useEffect, useRef, useState } from "react";
import "./Home.css";
import BoxCard from "../components/BoxCard";
import Carousel from "../components/Carousel";
import Work from "../components/Work";
import { Helmet } from "react-helmet";

export default function Home() {
  const canvasRef = useRef(null);
  const bgRef = useRef(null);

  // NEW: target to scroll to, and visibility for arrow
  const belowHeroRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);



  // ✅ JSON-LD data (plain JS object, NOT inside <script>)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "headline": "Best 360° Marketing & Branding Agency",
    "description":
      "BrandBanao.Ai is full 360° service of marketing agency delivering impactful branding across digital, outdoor, print, TV, & radio. With over 16+ years of experience.",
    "image": "https://brandbanao.ai/images/finallogo1.png",
    "url": "https://brandbanao.ai/",
    "datePublished": "2024-03-05",
    "dateCreated": "2024-03-05",
    "dateModified": "2025-05-05",
    "publisher": {
      "@type": "Organization",
      "name": "BrandBanao.ai",
      "url": "https://brandbanao.ai/",
      "logo": "https://brandbanao.ai/images/finallogo1.png"
    },
    "author": {
      "@type": "Organization",
      "name": "Amit Hemant Patil"
    }
  };



  useEffect(() => {
    const cleanupFns = [];

    // Hide arrow after user starts scrolling down a bit
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

        // Ensure target element can receive pointer events
        const target = bg?.renderer?.domElement || canvas;
        if (target && target.style) {
          target.style.pointerEvents = "auto";
          target.style.touchAction = "none";
        }

        // Full-bleed + crisp DPR
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

        // Forward real (trusted) events only
        const forward = (e) => {
          if (!e.isTrusted) return;
          if (!target) return;
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

        // Click to randomize palette/lights
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
          //ignore
        }
      });
      const bg = bgRef.current;
      try {
        bg?.renderer?.dispose?.();
      } catch {
        //ignore
      }
      bgRef.current = null;
    };
  }, []);

  // NEW: smooth scroll helper
  const scrollDown = () => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (belowHeroRef.current) {
      belowHeroRef.current.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: prefersReduced ? "auto" : "smooth" });
    }
  };

  return (
    <>

      <Helmet>
        <title>Brand Banao.ai | 360° Marketing & Branding Agency in Maharashtra</title>
        <meta name="description" content="BrandBanao.Ai is a 360° marketing and branding agency in Maharashtra delivering outdoor advertising, hoardings, bus shelter branding, cinema ads, radio branding and digital marketing with 16+ years of experience."/>
        <meta name="keywords" content="best 360° advertising agency in nashik, best digital marketing agency in nashik, best IT company in nashik, top 360° advertising agency in nashik, top digital marketing agency in nashik" />

        <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://brandbanao.ai/" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Brand Banao.Ai" />
        <meta property="og:title" content="Brand Banao.Ai 360° Marketing & Branding Agency" />
        <meta property="og:description" content="A leading 360° digital & outdoor marketing agency in Maharashtra. We deliver strategic advertising & branding with over 16+ years of experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandbanao.ai/" />
        <meta property="og:image" content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="630" />
        <meta property="og:latitude" content="20.00293012347024" />
        <meta property="og:longitude" content="73.75462348408139" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BrandBanao.Ai 360° Marketing & Branding Agency" />
        <meta name="twitter:description" content="BrandBanao.Ai offers 360° expert digital, outdoor, and print marketing services across Maharashtra." />
        <meta name="twitter:image" content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />

        {/* ✅ Correct JSON-LD injection */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>


      </Helmet>


      <div id="app" style={{ backgroundColor: "black" }} className="home-main">
        <canvas id="webgl-canvas" ref={canvasRef} />

        <div className="hero">
          <p className="title-1">THE BEST 360° BRANDING AND ADVERTISING</p>
          <h2 className="title-2">
            AGENCY IN
            <br /><div className="highlight">MAHARASHTRA</div>
          </h2>
        </div>

        {/* NEW: floating scroll-down arrow */}
        <button
          className={`scroll-down ${showArrow ? "" : "hidden"}`}
          onClick={scrollDown}
          aria-label="Scroll down"
          title="Scroll down"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* NEW: anchor target just below the hero */}
      <div ref={belowHeroRef} />

      <BoxCard />
      <br />
      <h1 className="awards-text" style={{ textAlign: "center", color: "#d94f5c" }}>
        Recognised and Awarded by
      </h1>

      <div className="award-container">
        <br />
        <br />
        <br />
        <Carousel />
      </div>

      <br />
      <br />
      <Work />
    </>
  );
}
