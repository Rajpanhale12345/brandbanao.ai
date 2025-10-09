import React, { useMemo, useState } from "react";
import busshelter from "../Images/busshelter.jpg"
import hoarding from "../Images/hoarding.jpg"
import cinema from "../Images/cinemabranding.webp"
import radio from "../Images/radio.jpg"
import railway from "../Images/railwaybranding.jpg";
import cycle from "../Images/cycle.jpg";
import auto from "../Images/autobranding.jpg";
import airport from "../Images/airport.jpg"
import digital from "../Images/digital.jpg"
import bus from "../Images/busbranding.jpg";
import app from "../Images/app.png"
import news from "../Images/news.png";


const demoItems = [
  { id: 1,  title: "Hoardings/billboards",  image: hoarding, },
  { id: 2,  title: "Bus Shelter",  image: busshelter,  },
  { id: 3,  title: "Cinema Branding",  image: cinema, },
  { id: 4,  title: "Radio FM Branding",  image: radio, },
  { id: 5,  title: "Airport Branding", image: airport,  },
  { id: 6,  title: "Digital Marketing",  image:digital ,  },
  { id: 7,  title: "Railway Branding",  image: railway,  },
  { id: 8,  title: "Bus Branding", image:bus  },
  { id: 10,  title: "TV News Channel Branding", image: news,  style : {objectFit:"contain"}  },
  { id: 11, title: "Auto Branding ", image: auto,  },
  { id: 12, title: "Software/App Development ", image: app,  },
  { id: 13, title: "Cycle Branding ", image: cycle,  },
]

export default function Services({ items, onServiceClick }) {
  const data = Array.isArray(items) && items.length === 14 ? items : demoItems;

  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const categories = useMemo(() => {
    const set = new Set(data.map((d) => d.category).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [data]);

  const filtered = useMemo(() => {
    return data.filter((d) => {
      const matchesQuery = `${d.title} ${d.description || ""}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCat = activeCat === "All" || d.category === activeCat;
      return matchesQuery && matchesCat;
    });
  }, [data, query, activeCat]);

  return (
    <div style={{ minHeight: "100vh", background: "#fafafa" }}>
      <StyleBlock />

      {/* Hero */}
      <section style={{ position: "relative" }}>
        <div className="container">
          <h1 className="title" style={{ color: "#d94f5c" }}>Our Services</h1>
          

          {/* Controls */}
      
        </div>
      </section>

      {/* Grid */}
      <section>
        <div className="container">
          <div className="grid">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="card"
                onClick={() => onServiceClick && onServiceClick(item)}
                role={onServiceClick ? "button" : "article"}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && onServiceClick) onServiceClick(item);
                }}
              >
                <div className="imageWrap">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="image" loading="lazy" />
                  ) : (
                    <div className="imagePlaceholder">No image</div>
                  )}
                  {item.featured && <span className="badge">★ Featured</span>}
                </div>

                <div className="cardBody">
                  <div className="cardHeader">
                    <h3 className="cardTitle">{item.title}</h3>
                    {item.category && <span className="pill">{item.category}</span>}
                  </div>
                  {item.description && <p className="cardText">{item.description}</p>}

                  <div className="cardFooter">
                    <div className="bar" />
                    <button className="linkBtn" type="button">
                      Learn more →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="empty">
              <p>No services match your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA band */}
      <section className="cta">
      
      </section>
    </div>
  );
}

/** Inline CSS (scoped via class names) */
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
      .subtitle{
        color: var(--muted);
        max-width: 720px;
        margin: 0 0 16px;
      }
      .controls{
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 16px 0 8px;
      }
      @media (min-width: 640px){
        .controls{ flex-direction: row; align-items: center; }
      }
      .searchWrap{
        position: relative;
        width: 100%;
        max-width: 380px;
      }
      .searchIcon{
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
        opacity: 0.55;
      }
      .searchInput{
        width: 100%;
        padding: 10px 12px 10px 34px;
        border: 1px solid #e5e7eb;
        border-radius: 10px;
        background: #fff;
        outline: none;
      }
      .searchInput:focus{
        box-shadow: 0 0 0 4px var(--ring);
        border-color: var(--primary);
      }
      .chips{ display: flex; flex-wrap: wrap; gap: 8px; }
      .chip{
        padding: 8px 14px;
        border-radius: 999px;
        border: 1px solid #e5e7eb;
        background: #fff;
        cursor: pointer;
        transition: box-shadow .2s, transform .06s;
      }
      .chip:hover{ box-shadow: 0 0 0 4px var(--ring); }
      .chip:active{ transform: translateY(1px); }
      .chipActive{
        background: var(--accent);
        color: #000;
        border-color: var(--accent);
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
      }
      .linkBtn:hover{ background: rgba(217,79,92,0.08); }

      .empty{ text-align: center; color: var(--muted); margin: 40px 0; }

      .cta{
        position: relative; color: #fff;
        background: linear-gradient(135deg, var(--primary), var(--primary) 50%, var(--accent));
        margin-top: 8px;
      }
      .ctaInner{ display: flex; gap: 16px; flex-direction: column; padding: 24px; }
      @media (min-width: 640px){
        .ctaInner{ flex-direction: row; align-items: center; justify-content: space-between; }
      }
      .ctaTitle{ margin: 0 0 4px; }
      .ctaText{ margin: 0; opacity: 0.95; }
      .ctaActions{ display: flex; gap: 10px; }
      .btnPrimary{
        background: #fff; color: #000;
        padding: 10px 16px; border-radius: 12px; border: 1px solid #fff; cursor: pointer; font-weight: 600;
      }
      .btnPrimary:hover{ opacity: 0.9; }
      .btnOutline{
        background: transparent; color: #fff;
        padding: 10px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.7); cursor: pointer; font-weight: 600;
      }
      .btnOutline:hover{ background: rgba(255,255,255,0.1); }
    `}</style>
  );
}
