import React from "react";
import { Link } from "react-router-dom";

/**
 * Sales & Marketing Executive (Female) — Role Page (Verbatim Content)
 * - All provided copy is kept exactly as-is (including emojis and bullet symbols).
 * - Clean, responsive layout using #d94f5c and a yellow accent.
 * - Self-contained styles, accessible, and print-friendly.
 */

export default function SalesMarketingExecutiveFemale() {


  return (
    <main className="smef">
      <header className="smef-hero" role="banner" aria-label="Sales & Marketing Executive Female"   id="header"  style={{
  background: "linear-gradient(90deg, #e6eb8eff, #f9ceceff)"
}}>
        <span className="smef-badge">Role</span>
        <h1 className="smef-title">Sales &amp; Marketing Executive - Female</h1>
<br />
        <ul className="smef-meta" aria-label="Role details">
          <li><b>Location:</b> Nashik (In-person)</li>
          <li><b>Type:</b> Full-time</li>
          <li><b>Experience:</b> 2–5 years (Advertising / Media / Marketing / Agency Sales)</li>
        
        </ul>
<br />
        <Link to="/contact">
<button type="button" style={{backgroundColor : "#d94f5c"}}>Apply</button></Link>
      
      </header>

      {/* About the Role (verbatim) */}
      <section id="about" className="smef-panel">
        <h2 className="smef-h2">About the Role</h2>
        <p className="smef-paragraph">
          We’re looking for a motivated Sales &amp; Marketing Executive to support business growth and client engagement at BrandBanao.ai. The role involves lead generation, client coordination, proposal preparation, and assisting in campaign execution across OOH, Digital, Print, Cinema, FM, and Activation platforms.
        </p>
      </section>

      {/* Key Responsibilities (verbatim bullets) */}
      <section id="responsibilities" className="smef-panel">
        <h2 className="smef-h2">Key Responsibilities</h2>
        <ul className="smef-ul">
          <li>•&nbsp;Execute monthly sales &amp; marketing plans as guided by management.</li>
          <li>•&nbsp;Make daily cold calls, tele-calls, and client visits to generate leads.</li>
          <li>•&nbsp;Prepare and share quotations, proposals, and presentations.</li>
          <li>•&nbsp;Coordinate with operations, media, and digital teams for timely campaign execution.</li>
          <li>•&nbsp;Follow up on payments, POs, and approvals with clients.</li>
          <li>•&nbsp;Maintain and update the sales funnel and category-wise reports weekly.</li>
          <li>•&nbsp;Assist in preparing marketing materials like brochures, creatives, and newsletters.</li>
          <li>•&nbsp;Track missing ads/campaigns and report updates to management.</li>
          <li>•&nbsp;Support in upselling and cross-selling for existing clients.</li>
          <li>•&nbsp;Conduct basic market research and identify new business opportunities.</li>
        </ul>
      </section>

      {/* Measurement Metrics (verbatim) */}
      <section id="kpis" className="smef-panel">
        <h2 className="smef-h2">Measurement Metrics (KPIs)</h2>
        <ul className="smef-ul">
          <li>•&nbsp;Achievement of monthly and quarterly sales targets.</li>
          <li>•&nbsp;Number of calls, visits, and proposals made.</li>
          <li>•&nbsp;Lead conversion rate and client satisfaction.</li>
          <li>•&nbsp;Timeliness in reporting and coordination.</li>
          <li>•&nbsp;Contribution to new client acquisitions and repeat business.</li>
        </ul>
      </section>

      {/* You Are (verbatim) */}
      <section id="you-are" className="smef-panel">
        <h2 className="smef-h2">You Are</h2>
        <ul className="smef-ul">
          <li>•&nbsp;Energetic, confident, and self-driven.</li>
          <li>•&nbsp;Strong in communication, presentation, and follow-ups.</li>
          <li>•&nbsp;Organized and detail-oriented with multitasking ability.</li>
          <li>•&nbsp;Eager to learn and grow in the advertising and media industry.</li>
        </ul>
      </section><br /><br /> 
      <Link to="/contact"><button type="button" style={{backgroundColor : " #d94f5c"}}>Apply</button></Link>

      {/* CTA — swap href to your per-role application route/form */}
    
    

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

        .smef { max-width: 1040px; margin: 0 auto; padding: 22px }

        .smef-hero{
          border-radius: 22px;
          padding: 28px 24px;
          color:#fff;
          background:
            radial-gradient(900px 260px at 85% -10%, rgba(255,216,77,.35), transparent 60%),
            linear-gradient(135deg, var(--primary) 0%, var(--primary-700) 100%);
          box-shadow: var(--shadow);
        }
        .smef-badge{ display:inline-block; background:#fff; color:var(--primary); font-weight:900; border-radius:999px; padding:6px 12px }
        .smef-title{ margin: 12px 0 10px; font-size: clamp(28px,4.6vw,44px); line-height: 1.08 }

        .smef-meta{
          list-style:none; padding:0; margin:0;
          display:flex; flex-wrap:wrap; gap:10px 16px; font-weight:600
        }
        .smef-meta li{
          background: rgba(255,255,255,.12);
          border:1px solid rgba(255,255,255,.28);
          border-radius: 10px; padding: 8px 10px; backdrop-filter: blur(2px)
        }

        .smef-actions{ margin-top: 18px; display:flex; gap:10px; flex-wrap:wrap }
        .smef-btn{
          display:inline-flex; align-items:center; gap:8px; border-radius:10px; padding:10px 14px; font-weight:800; cursor:pointer; text-decoration:none;
          border:2px solid rgba(255,255,255,.9); color:#fff; background:transparent; transition: transform .14s ease, background .2s ease, color .2s ease;
        }
        .smef-btn:hover{ transform: translateY(-1px) }
        .smef-btn--primary{ background:#fff; color: var(--primary); border-color:#fff }
        .smef-btn--ghost{ background: rgba(255,255,255,.08) }

        .smef-panel{
          margin-top: 22px; padding: 18px 16px; background: var(--card);
          border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow);
        }
        .smef-panel--accent{ background: #fffbe6; border-color: #ffe29a }

        .smef-h2{ margin: 0 0 8px 0; font-size: 22px; color: var(--primary) }
        .smef-h3{ margin: 4px 0 8px 0; font-size: 18px; color: #8f2a35 }
        .smef-paragraph{ margin: 0 }
        .smef-paragraph.small{ font-size: 14px; color: var(--muted) }

        .smef-ul{ list-style: none; padding: 0; margin: 0 }
        .smef-ul li{
          padding: 8px 10px;
          background: linear-gradient(180deg, #fff, #fffdf8);
          border: 1px solid #f3e7d0;
          border-radius: 12px;
          margin-top: 8px;
        }

        .smef-cta .smef-cta-inner{ display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap }
        .smef-apply{
          display:inline-flex; align-items:center; justify-content:center;
          min-width: 120px; padding: 10px 14px; border-radius: 12px; font-weight: 900; text-decoration:none;
          background: var(--primary); color:#fff; border:2px solid var(--primary);
          box-shadow: 0 6px 16px rgba(217,79,92,.25);
          transition: transform .14s ease, box-shadow .14s ease, background .2s ease;
        }
        .smef-apply:hover{ transform: translateY(-2px); box-shadow: 0 8px 22px rgba(217,79,92,.35) }
        .smef-apply:focus-visible{ outline: 3px solid var(--accent); outline-offset: 3px }

        .smef-footer{ text-align:center; color: var(--muted); font-size: 13px; padding: 20px 0 8px }

        :focus-visible{ outline:3px solid var(--accent); outline-offset:3px; border-radius:6px }

        /* Print styles */
        @media print{
          .smef-btn,.smef-actions{ display:none !important }
          .smef,.smef-panel,.smef-hero{ box-shadow:none }
          .smef-hero{ -webkit-print-color-adjust: exact; print-color-adjust: exact }
        }
      `}</style>
    </main>
  );
}
