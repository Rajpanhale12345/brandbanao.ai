import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../components/Services.css"
import busshelter from "../Images/busshelter.jpg";
import hoarding from "../Images/hoarding.jpg";
import cinema from "../Images/cinemabranding.webp";
import radio from "../Images/radio.jpg";
import railway from "../Images/railwaybranding.jpg";
import cycle from "../Images/cycle.jpg";
import auto from "../Images/autobranding.jpg";
import airport from "../Images/airport.jpg";
import digital from "../Images/digital.jpg";
import bus from "../Images/busbranding.jpg";
import app from "../Images/app.png";
import news from "../Images/news.png";

export default function Services() {
  return (

    <>

      <Helmet>

        <title>Best Outdoor Services in Nashik | Brand Banao.ai</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Brand Banao.AI" />
        <meta name="publisher" content="Brand Banao.Ai" />
        <meta name="creator" content="Brand Banao.Ai" />
        <meta name="description" content="Explore Brand Banao.Ai services: hoardings, bus shelter ads, cinema branding, radio FM campaigns, airport branding, digital marketing, railway branding, bus and auto branding, TV news channel branding, web/app development, and cycle branding." />
        <meta name="keywords" content="Brand Banao services, outdoor advertising, hoardings, billboards, bus shelter advertising, cinema branding, radio FM branding, airport branding, digital marketing, railway branding, bus branding, auto branding, TV news channel branding, website development, app development, cycle branding" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="theme-color" content="#0d1117" />
        <meta name="color-scheme" content="light dark" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Brand Banao.Ai" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="canonical" href="https://brandbanao.ai/services" />
        <link rel="icon" href="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />
        <link rel="apple-touch-icon" href="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="BrandBanao.Ai" />
        <meta property="og:title" content="Services | Brand Banao.Ai" />
        <meta property="og:description" content="Explore Brand Banao.Ai services across outdoor advertising, branding, digital marketing, and web/app development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandbanao.ai/services" />
        <meta property="og:image" content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nashik" />
        <meta name="geo.position" content="19.990263481422677, 73.79178939433704" />
        <meta name="ICBM" content="19.990263481422677, 73.79178939433704" />
        <meta property="og:image:alt" content="Brand Banao.Ai - Services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Brand Banao.Ai" />
        <meta name="twitter:description" content="Explore Brand Banao.Ai services across outdoor advertising, branding, digital marketing, and web/app development." />
        <meta name="twitter:image" content="https://brandbanao.ai/assets/logopng-CGGCs8OD.png" />
        <meta name="twitter:image:alt" content="Brand Banao.Ai - Services" />
        <meta name="twitter:site" content="@BrandBanaoAi" />

      </Helmet>

      <div style={{ minHeight: "100vh", background: "#fafafa" }}>
        <StyleBlock />

        {/* Hero */}
        <section style={{ position: "relative" }}>
          <div className="container">
            <h1 className="title" style={{ color: "#d94f5c" }}>Our Services</h1>
          </div>
        </section>

        {/* Grid */}
        <section>
          <div className="container">
            <div className="grid">
              {/* Each card declared separately so you can give unique links */}
              <ServiceCard
                title="Hoardings/Billboards"
                image={hoarding}
                path="/Hoardings"
                style={{ height: "200px" }}
              />

              <ServiceCard
                title="Bus Shelter"
                image={busshelter}
                path="/Bus_Shelter"
              />

              <ServiceCard
                title="Cinema Branding"
                image={cinema}
                path="/Cinema"

              />

              <ServiceCard
                title="Radio FM Branding"
                image={radio}
                path="/Radio"
              />

              <ServiceCard
                title="Airport Branding"
                image={airport}
                path="/AirportBranding"
              />

              <ServiceCard
                title="Digital Marketing"
                image={digital}
                path="/DigitalMarketing"
              />

              <ServiceCard
                title="Railway Branding"
                image={railway}
                path="/RailwayBranding"
              />

              <ServiceCard
                title="Bus Branding"
                image={bus}
                path="/BusBranding"
              />

              <ServiceCard
                title="TV News Channel Branding"
                image={news}
                path="/TVNewsChanelBranding"
                // example of custom img style on a single card:
                imgStyle={{ objectFit: "contain", background: "#fff" }}
              />

              <ServiceCard
                title="Auto Branding"
                image={auto}
                path="/AutoBranding"
              />

              <ServiceCard
                title="Website/App Development"
                image={app}
                path="/WebDevelopment"
              />

              <ServiceCard
                title="Cycle Branding"
                image={cycle}
                path="/CycleBranding"
              />
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

/** Single reusable card that keeps your existing markup & classes */
function ServiceCard({
  title,
  image,
  path,       // internal Link (e.g., /cinema)
  url,        // external link (e.g., https://your-site)
  featured,
  category,
  description,
  imgStyle,
  onClick,    // optional: if you still want to handle a card-level click
}) {
  return (
    <article
      className="card"
      onClick={onClick}
      role={onClick ? "button" : "article"}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" && onClick) onClick();
      }}
    >
      <div className="imageWrap">
        {image ? (
          <img
            src={image}
            alt={title}
            className="image"
            loading="lazy"
            style={imgStyle}
          />
        ) : (
          <div className="imagePlaceholder">No image</div>
        )}
        {featured && <span className="badge">★ Featured</span>}
      </div>

      <div className="cardBody">
        <div className="cardHeader">
          <h3 className="cardTitle">{title}</h3>
          {category && <span className="pill">{category}</span>}
        </div>

        {description && <p className="cardText">{description}</p>}

        <div className="cardFooter">
          <div className="bar" />
          {/* Prefer internal path if provided, else external url, else disabled */}
          {path ? (
            <Link to={path} className="linkBtn" onClick={(e) => e.stopPropagation()}>
              Learn more →
            </Link>
          ) : url ? (
            <a
              href={url}
              className="linkBtn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Learn more →
            </a>
          ) : (
            <button className="linkBtn" type="button" disabled style={{ opacity: 0.5, cursor: "not-allowed" }}>
              Learn more →
            </button>
          )}
        </div>
      </div>
    </article>

  );
}

/** Inline CSS (same styling you had) */
function StyleBlock() {
  return (
    <style>{`
      :root{
        --primary: #d94f5c;
        --accent: rgba(169, 153, 7, 1);
        --radius: 16px;
        --text: #1f2937;
        --muted: #6b7280;
        --card: #ffffff;
        --ring: rgba(217, 79, 92, 0.22);
        --ring-hover: rgba(217, 79, 92, 0.35);
      }
      * { box-sizing: border-box; }
      .container{
        max-width: 1120px;
        margin: 0 auto;
        padding: 24px;
        gap: 60px;
      }
      .title{
        font-size: 40px;
        font-weight: 800;
        margin: 24px 0 8px;
        background: linear-gradient(90deg, var(--primary), var(--accent));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .grid{
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
        margin: 16px 0 48px;
      }
      @media (min-width: 640px){
        .grid{ grid-template-columns: repeat(2, 1fr); }
      }
      @media (min-width: 1024px){
        .grid{ grid-template-columns: repeat(3, 1fr); }
      }

      .card{
        border-radius: var(--radius);
        overflow: hidden;
        background: rgba(255,255,255,0.9);
        backdrop-filter: blur(2px);
        border: 1px solid #eee;
        transition: transform .2s, box-shadow .2s, border-color .2s;
        cursor: default;
      }
      .card:hover{
        transform: translateY(-2px);
        box-shadow: 0 10px 24px rgba(0,0,0,0.08);
        border-color: var(--primary);
      }
      .imageWrap{ position: relative; width: 100%; aspect-ratio: 16 / 10; background: #f3f4f6; }
      .image{ width: 100%; height: 100%; object-fit: cover; display: block; }
      .imagePlaceholder{
        width: 100%; height: 100%;
        display: grid; place-items: center;
        color: #9ca3af;
        font-size: 12px;
      }
      .badge{
        position: absolute; left: 12px; top: 12px;
        background: var(--primary);
        color: #fff; font-size: 12px; font-weight: 600;
        padding: 6px 10px; border-radius: 999px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }

      .cardBody{ padding: 14px 14px 16px; }
      .cardHeader{
        display: flex; align-items: center; justify-content: space-between; gap: 12px;
        margin-bottom: 6px;
      }
      .cardTitle{ margin: 0; font-size: 18px; color: var(--text); }
      .pill{
        display: inline-block;
        padding: 6px 10px;
        background: #f3f4f6;
        color: #111827;
        border-radius: 999px;
        font-size: 12px;
        white-space: nowrap;
      }
      .cardText{ color: var(--muted); font-size: 14px; line-height: 1.6; margin: 6px 0 0; }

      .cardFooter{
        margin-top: 12px;
        display: flex; align-items: center; justify-content: space-between;
      }
      .bar{
        height: 4px; width: 96px; border-radius: 999px;
        background: linear-gradient(90deg, var(--primary), var(--accent));
      }
      .linkBtn{
        border: none; background: transparent; color: var(--primary);
        font-weight: 600; cursor: pointer; padding: 6px 8px; border-radius: 8px;
        text-decoration: none; /* so <Link> looks same */
        display: inline-block;
      }
      .linkBtn:hover{ background: rgba(217,79,92,0.08); }
    `}</style>
  );
}
