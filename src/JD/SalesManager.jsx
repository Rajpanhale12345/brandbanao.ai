import React from "react";
import { Link } from "react-router-dom";

/**
 * Sales & Marketing Manager — Role Page (Verbatim Content)
 * - All provided copy is kept exactly as-is.
 * - Clean, responsive layout using #d94f5c (primary) and a yellow accent.
 * - Self-contained styles, accessible, and print-friendly.
 */

export default function SalesMarketingManager() {


  return (
    <main className="smm">
      <header className="smm-hero" role="banner" aria-label="Sales & Marketing Manager"   id="header"   style={{
  background: "linear-gradient(90deg, #e6eb8eff, #f9ceceff)"
}}>
        <span className="smm-badge">Role</span>
        <h1 className="smm-title">Sales &amp; Marketing Manager</h1>
<br />
        <ul className="smm-meta" aria-label="Role details">
          <li><b>Location:</b> Nashik (In-person)</li>
          <li><b>Type:</b> Full-time</li>
          <li><b>Experience:</b> 8–12 years (Advertising / Media / Marketing / Agency Sales)</li>
          <li><b>Pay:</b> Upto 7.5  LPA (Based on experience &amp; performance)</li>
        </ul>

       <br />
               <Link to="/contact">
       <button type="button" style={{backgroundColor : "#d94f5c"}}>Apply</button></Link>
      </header>

      {/* About the Role (verbatim) */}
      <section id="about" className="smm-panel">
        <h2 className="smm-h2">About the Role</h2>
        <p className="smm-paragraph">
          We’re looking for an experienced Sales &amp; Marketing Manager to lead business growth and client relationships for BrandBanao.ai. The role demands strategic thinking, strong leadership, and hands-on execution to drive revenue across OOH, Digital, Print, Cinema, FM, and Activation verticals. You’ll oversee a team, build key partnerships, and ensure sales targets are consistently met through structured planning and effective coordination.
        </p>
      </section>

      {/* Key Responsibilities (verbatim) */}
      <section id="responsibilities" className="smm-panel">
        <h2 className="smm-h2">Key Responsibilities</h2>

        <h3 className="smm-h3">Strategy &amp; Leadership</h3>
        <ul className="smm-ul">
          <li>•&nbsp;Develop monthly and quarterly Sales &amp; Marketing strategies with management.</li>
          <li>•&nbsp;Define regional, category-wise, and media-wise targets and ensure consistent achievement.</li>
          <li>•&nbsp;Lead and mentor the sales team with clear KPIs and structured follow-ups.</li>
          <li>•&nbsp;Oversee campaign performance, lead management, and client satisfaction.</li>
        </ul>

        <h3 className="smm-h3">Client &amp; Business Development</h3>
        <ul className="smm-ul">
          <li>•&nbsp;Drive new client acquisition through strategic outreach, partnerships, and market mapping.</li>
          <li>•&nbsp;Build and nurture long-term relationships with key clients across sectors.</li>
          <li>•&nbsp;Present proposals, negotiate deals, and ensure seamless handover to execution teams.</li>
          <li>•&nbsp;Identify opportunities for upselling and cross-selling within existing accounts.</li>
        </ul>

        <h3 className="smm-h3">Team Coordination &amp; Execution</h3>
        <ul className="smm-ul">
          <li>•&nbsp;Coordinate with Operations for campaign status and missing ads.</li>
          <li>•&nbsp;Work closely with Media Planning and Digital Marketing teams for timely proposals.</li>
          <li>•&nbsp;Ensure accurate and prompt submission of quotations, reports, and POs.</li>
          <li>•&nbsp;Align creative and marketing teams for category-based promotional material.</li>
        </ul>

        <h3 className="smm-h3">Performance Tracking &amp; Reporting</h3>
        <ul className="smm-ul">
          <li>•&nbsp;Monitor sales funnel, pipeline progress, and conversion metrics.</li>
          <li>•&nbsp;Review and report performance to the CEO weekly and CFO monthly.</li>
          <li>•&nbsp;Track category and regional performance, ensuring goal alignment.</li>
          <li>•&nbsp;Maintain strong relations with vendors, media houses, and key industry stakeholders.</li>
        </ul>
      </section>

      {/* Measurement Metrics (verbatim) */}
      <section id="kpis" className="smm-panel">
        <h2 className="smm-h2">Measurement Metrics (KPIs)</h2>
        <ul className="smm-ul">
          <li>•&nbsp;Achievement of revenue and growth targets.</li>
          <li>•&nbsp;Lead conversion and client retention rates.</li>
          <li>•&nbsp;Quality and timeliness of reporting and campaign execution.</li>
          <li>•&nbsp;Efficiency in cross-functional coordination.</li>
          <li>•&nbsp;Overall business expansion and client satisfaction.</li>
        </ul>
      </section>

      {/* You Are (verbatim) */}
      <section id="you-are" className="smm-panel">
        <h2 className="smm-h2">You Are</h2>
        <ul className="smm-ul">
          <li>•&nbsp;A strategic leader with a strong command of media and marketing operations.</li>
          <li>•&nbsp;A results-oriented manager who thrives on targets and accountability.</li>
          <li>•&nbsp;Excellent in negotiation, communication, and client engagement.</li>
          <li>•&nbsp;Skilled at building high-performing teams and scalable sales processes.</li>
          <li>•&nbsp;Passionate about integrated marketing and brand growth.</li>
        </ul>
      </section>
<br /><br />
 <Link to="/contact"><button type="button" style={{backgroundColor : " #d94f5c"}}>Apply</button></Link>
      {/* CTA — replace href with your per-role application route/form */}
    

     

      {/* Inline styles to ensure consistent layout without touching global CSS */}
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
        body { margin: 0;  background: var(--bg); color: var(--ink) }

        .smm { max-width: 1040px; margin: 0 auto; padding: 22px }

        .smm-hero{
          border-radius: 22px;
          padding: 28px 24px;
          color:#fff;
          background:
            radial-gradient(900px 260px at 85% -10%, rgba(255,216,77,.35), transparent 60%),
            linear-gradient(135deg, var(--primary) 0%, var(--primary-700) 100%);
          box-shadow: var(--shadow);
        }
        .smm-badge{ display:inline-block; background:#fff; color:var(--primary); font-weight:900; border-radius:999px; padding:6px 12px }
        .smm-title{ margin: 12px 0 10px; font-size: clamp(28px,4.6vw,44px); line-height: 1.08 }

        .smm-meta{
          list-style:none; padding:0; margin:0;
          display:flex; flex-wrap:wrap; gap:10px 16px; font-weight:600
        }
        .smm-meta li{
          background: rgba(255,255,255,.12);
          border:1px solid rgba(255,255,255,.28);
          border-radius: 10px; padding: 8px 10px; backdrop-filter: blur(2px)
        }

        .smm-actions{ margin-top: 18px; display:flex; gap:10px; flex-wrap:wrap }
        .smm-btn{
          display:inline-flex; align-items:center; gap:8px; border-radius:10px; padding:10px 14px; font-weight:800; cursor:pointer; text-decoration:none;
          border:2px solid rgba(255,255,255,.9); color:#fff; background:transparent; transition: transform .14s ease, background .2s ease, color .2s ease;
        }
        .smm-btn:hover{ transform: translateY(-1px) }
        .smm-btn--primary{ background:#fff; color: var(--primary); border-color:#fff }
        .smm-btn--ghost{ background: rgba(255,255,255,.08) }

        .smm-panel{
          margin-top: 22px; padding: 18px 16px; background: var(--card);
          border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow);
        }
        .smm-panel--accent{ background: #fffbe6; border-color: #ffe29a }
        .smm-h2{ margin: 0 0 8px 0; font-size: 22px; color: var(--primary) }
        .smm-h3{ margin: 12px 0 8px 0; font-size: 18px; color: #8f2a35 }
        .smm-paragraph{ margin: 0 }
        .smm-paragraph.small{ font-size: 14px; color: var(--muted) }

        .smm-ul{ list-style: none; padding: 0; margin: 0 }
        .smm-ul li{
          padding: 8px 10px;
          background: linear-gradient(180deg, #fff, #fffdf8);
          border: 1px solid #f3e7d0;
          border-radius: 12px;
          margin-top: 8px;
        }

        .smm-cta .smm-cta-inner{ display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap }
        .smm-apply{
          display:inline-flex; align-items:center; justify-content:center;
          min-width: 120px; padding: 10px 14px; border-radius: 12px; font-weight: 900; text-decoration:none;
          background: var(--primary); color:#fff; border:2px solid var(--primary);
          box-shadow: 0 6px 16px rgba(217,79,92,.25);
          transition: transform .14s ease, box-shadow .14s ease, background .2s ease;
        }
        .smm-apply:hover{ transform: translateY(-2px); box-shadow: 0 8px 22px rgba(217,79,92,.35) }
        .smm-apply:focus-visible{ outline: 3px solid var(--accent); outline-offset: 3px }

     

        :focus-visible{ outline:3px solid var(--accent); outline-offset:3px; border-radius:6px }

        /* Print styles */
        @media print{
          .smm-btn,.smm-actions{ display:none !important }
          .smm,.smm-panel,.smm-hero{ box-shadow:none }
          .smm-hero{ -webkit-print-color-adjust: exact; print-color-adjust: exact }
        }
      `}</style>
    </main>
  );
}
