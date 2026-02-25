import React, { useEffect, useRef, useState, useMemo } from "react";
import "./Carousel.css";
import award1 from '../Images/award1.webp';
import award2 from '../Images/award2.webp';
import award3 from '../Images/award3.webp';
import award4 from '../Images/award4.webp';
import award5 from '../Images/award5.webp';
import award6 from '../Images/award6.webp';

export default function Carousel({
  images = defaultImages,    // string[] or [{src, alt}]
  height = 160,
  itemWidth = 300,
  gap = 12,
  autoPlay = true,
  speed = 60,                // px per second (uniform speed)
  direction = "ltr",         // "ltr" or "rtl"
  pauseOnHover = true
}) {
  const trackRef = useRef(null);
  const frameRef = useRef(null);
  const lastTsRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  // duplicate slides to enable seamless loop
  const loopImages = useMemo(() => {
    const normalize = (img, i) =>
      typeof img === "string" ? { src: img, alt: `Slide ${i + 1}` } : img;
    const base = images.map(normalize);
    return [...base, ...base]; // exactly two copies
  }, [images]);

  // keep arrow keys & buttons working (manual nudge)
  const scrollByStep = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const step = itemWidth + gap;
    el.scrollBy({
      left: dir === "next" ? step : -step,
      behavior: "smooth"
    });
  };

  // core animation loop
  useEffect(() => {
    const el = trackRef.current;
    if (!el || !autoPlay) return;

    // Respect reduced motion
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const effectiveSpeed = prefersReduced ? 0 : speed;

    // Ensure we start somewhere safe
    // (place at 0 so the first wrap math is correct)
    el.scrollLeft = 0;
    lastTsRef.current = performance.now();

    const animate = (ts) => {
      const last = lastTsRef.current;
      lastTsRef.current = ts;
      const dt = Math.max(0, ts - last); // ms
      const pxPerMs = effectiveSpeed / 1000;
      const delta = (direction === "rtl" ? -1 : 1) * pxPerMs * dt;

      if (!isPaused && effectiveSpeed > 0) {
        el.scrollLeft += delta;
        // width of one set of slides (since we rendered 2x)
        const setWidth = el.scrollWidth / 2;
        // seamless wrap
        if (el.scrollLeft >= setWidth) el.scrollLeft -= setWidth;
        if (el.scrollLeft < 0) el.scrollLeft += setWidth;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    const onResize = () => {
      // Keep scrollLeft within [0, setWidth)
      const setWidth = el.scrollWidth / 2;
      if (setWidth > 0) {
        el.scrollLeft = ((el.scrollLeft % setWidth) + setWidth) % setWidth;
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [autoPlay, speed, direction, isPaused, itemWidth, gap]);

  const cssVars = {
    "--gap": `${gap}px`,
    "--slide-h": `${height}px`,
    "--slide-w": `${itemWidth}px`
  };

  return (
    <div
      className="carousel"
      style={cssVars}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") { e.preventDefault(); scrollByStep("next"); }
        if (e.key === "ArrowLeft")  { e.preventDefault(); scrollByStep("prev"); }
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="track" ref={trackRef} aria-live="off">
        {loopImages.map((img, i) => (
          <div className="slide" key={i} title={img.alt || `Slide ${i + 1}`}>
            <img src={img.src} alt={img.alt || `Slide ${i + 1}`} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>

      {/* Optional manual nav (works alongside steady motion) */}
      <button className="nav prev" aria-label="Previous" onClick={() => scrollByStep("prev")}>
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="nav next" aria-label="Next" onClick={() => scrollByStep("next")}>
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

const defaultImages = [award1, award2, award3, award4, award5, award6];
