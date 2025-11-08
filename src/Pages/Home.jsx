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
      <title>Brand Banao.ai</title>
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
