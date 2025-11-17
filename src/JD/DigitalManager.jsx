import React from "react";
import { Link } from "react-router-dom";
/**
 * Digital Marketing Manager — Role Page (Verbatim Content)
 * - Keeps ALL provided copy exactly as-is.
 * - Clean, responsive layout with #d94f5c (primary) and yellow accent.
 * - Self-contained styles, print-friendly.
 */

export default function DigitalMarketingManager() {


  return (
    <main className="dmm">
      <header className="dmm-hero" role="banner" aria-label="Digital Marketing Manager" id="header"  style={{
  background: "linear-gradient(90deg, #e6eb8eff, #f9ceceff)"
}}>
        <span className="dmm-badge">Role</span>
        <h1 className="dmm-title">Digital Marketing Manager</h1>
<br />
        <ul className="dmm-meta" aria-label="Role details">
          <li><b>Location:</b> Nashik (In person)</li>
          <li><b>Experience:</b> 6–9 years (Agency / Marketing Leadership)</li>
          <li><b>Type:</b> Full-time</li>
          <li><b>Pay:</b> Up to 60k/Month</li>
        </ul>
<br />
        <Link to="/contact">
<button type="button" style={{backgroundColor : "#d94f5c"}}>Apply</button></Link>
      
      </header>

      {/* About */}
      <section id="about" className="dmm-panel">
        <h2 className="dmm-h2">About BrandBanao.ai</h2>
        <p className="dmm-paragraph">
          BrandBanao.ai is a 360° marketing and advertising agency, is seeking a strategic yet hands-on Digital Marketing Manager to drive performance, creativity, and growth across channels. You’ll lead a talented team, manage campaigns end-to-end, and ensure our clients’ brands achieve measurable impact.
        </p>
      </section>

      {/* Key Responsibilities (verbatim with bullet dots) */}
      <section id="responsibilities" className="dmm-panel">
        <h2 className="dmm-h2">Key Responsibilities</h2>
        <ul className="dmm-ul">
          <li>•&nbsp;Strategic &amp; Team Leadership: Lead and mentor the marketing team; plan and execute growth-focused campaigns.</li>
          <li>•&nbsp;SEO &amp; SEM Management: Oversee keyword strategy, ad performance, and website optimization.</li>
          <li>•&nbsp;META &amp; PPC Campaigns: Plan and manage paid ads across Meta, Google, and LinkedIn.</li>
          <li>•&nbsp;Analytics &amp; Insights: Track performance KPIs, analyse data, and optimize ROI.</li>
          <li>•&nbsp;Content &amp; Calendar Management: Supervise monthly content strategy and ensure brand consistency.</li>
          <li>•&nbsp;Performance Optimization: Continuously improve campaign effectiveness and conversions.</li>
          <li>•&nbsp;Creative Collaboration: Work with design and content teams to deliver powerful, data-backed creatives.</li>
          <li>•&nbsp;Lead Generation &amp; Client Relations: Manage funnels, nurture leads, and maintain strong client communication.</li>
        </ul>
      </section>

      {/* Requirements (verbatim) */}
      <section className="dmm-panel">
        <h2 className="dmm-h2">Requirements</h2>
        <ul className="dmm-ul">
          <li>•&nbsp;6- 9 years of marketing experience with 3+ years in a leadership role (preferably agency-side).</li>
          <li>•&nbsp;Strong knowledge of SEO, SEM, Meta Ads, PPC, and Analytics tools.</li>
          <li>•&nbsp;Excellent communication, leadership, and stakeholder management.</li>
        </ul>
      </section>

      {/* Application Questions (verbatim) */}
      <section className="dmm-panel">
        <h2 className="dmm-h2">Application Questions</h2>
        <ul className="dmm-ul">
          <li>•&nbsp;When can you start?</li>
          <li>•&nbsp;What is your salary expectation?</li>
          <li>•&nbsp;Where are you currently located?</li>
        </ul>
      </section><br /><br />
       <Link to="/contact"><button type="button" style={{backgroundColor : " #d94f5c"}}>Apply</button></Link>

      {/* Optional CTA area (you can link this to a form/route later) */}
      
 

      

      {/* Inline styles to guarantee layout without touching global CSS */}
      <style>{`
        :root{
          --primary:#d94f5c;
          --primary-700:#b03b46;
          --accent:#FFD84D;
          --ink:#1b1b1b;
          --muted:#616161;
          --bg:#fff7f6;
          --card:#ffffff;
          --line:#f0e3e2;
          --radius:16px;
          --shadow:0 12px 24px rgba(217,79,92,.12), 0 2px 6px rgba(0,0,0,.05);
        }
        * { box-sizing: border-box }
        html, body, #root { height: 100% }
        body { margin: 0; background: var(--bg); color: var(--ink) }

        .dmm { max-width: 1040px; margin: 0 auto; padding: 22px }

        .dmm-hero{
          border-radius: 22px;
          padding: 28px 24px;
          color:#fff;
          background:
            radial-gradient(900px 260px at 85% -10%, rgba(255,216,77,.35), transparent 60%),
            linear-gradient(135deg, var(--primary) 0%, var(--primary-700) 100%);
          box-shadow: var(--shadow);
        }
        .dmm-badge{ display:inline-block; background:#fff; color:var(--primary); font-weight:900; border-radius:999px; padding:6px 12px }
        .dmm-title{ margin: 12px 0 10px; font-size: clamp(28px,4.6vw,44px); line-height: 1.08 }
        .dmm-meta{ list-style:none; padding:0; margin: 0; display:flex; flex-wrap:wrap; gap: 10px 16px; font-weight:600 }
        .dmm-meta li{ background: rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.28); border-radius: 10px; padding: 8px 10px; backdrop-filter: blur(2px) }
        .dmm-actions{ margin-top: 18px; display:flex; gap:10px; flex-wrap:wrap }
        .dmm-btn{
          display:inline-flex; align-items:center; gap:8px; border-radius:10px; padding:10px 14px; font-weight:800; cursor:pointer; text-decoration:none;
          border:2px solid rgba(255,255,255,.9); color:#fff; background:transparent; transition: transform .14s ease, background .2s ease, color .2s ease;
        }
        .dmm-btn:hover{ transform: translateY(-1px) }
        .dmm-btn--primary{ background:#fff; color: var(--primary); border-color:#fff }
        .dmm-btn--ghost{ background: rgba(255,255,255,.08) }

        .dmm-panel{
          margin-top: 22px; padding: 18px 16px; background: var(--card);
          border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow);
        }
        .dmm-panel--accent{ background: #fffbe6; border-color: #ffe29a }
        .dmm-h2{ margin: 0 0 8px 0; font-size: 22px; color: var(--primary) }
        .dmm-h3{ margin: 4px 0 8px 0; font-size: 18px; color: #8f2a35 }
        .dmm-paragraph{ margin: 0 }
        .dmm-paragraph.small{ font-size: 14px; color: var(--muted) }

        .dmm-ul{ list-style: none; padding: 0; margin: 0 }
        .dmm-ul li{
          padding: 8px 10px;
          background: linear-gradient(180deg, #fff, #fffdf8);
          border: 1px solid #f3e7d0;
          border-radius: 12px;
          margin-top: 8px;
        }

        .dmm-cta .dmm-cta-inner{ display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap }
        .dmm-apply{
          display:inline-flex; align-items:center; justify-content:center;
          min-width: 120px; padding: 10px 14px; border-radius: 12px; font-weight: 900; text-decoration:none;
          background: var(--primary); color:#fff; border:2px solid var(--primary);
          box-shadow: 0 6px 16px rgba(217,79,92,.25);
          transition: transform .14s ease, box-shadow .14s ease, background .2s ease;
        }
        .dmm-apply:hover{ transform: translateY(-2px); box-shadow: 0 8px 22px rgba(217,79,92,.35) }
        .dmm-apply:focus-visible{ outline: 3px solid var(--accent); outline-offset: 3px }

        .dmm-footer{ text-align:center; color: var(--muted); font-size: 13px; padding: 20px 0 8px }

        :focus-visible{ outline:3px solid var(--accent); outline-offset:3px; border-radius:6px }

        /* Print styles */
        @media print{
          .dmm-btn,.dmm-actions{ display:none !important }
          .dmm,.dmm-panel,.dmm-hero{ box-shadow:none }
          .dmm-hero{ -webkit-print-color-adjust: exact; print-color-adjust: exact }
        }
      `}</style>
    </main>
  );
}
