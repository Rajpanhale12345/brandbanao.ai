
import React from "react";
import { Link } from "react-router-dom";


/**
 * Digital Marketing Executive — Strict Content Layout
 * - Keeps ALL original copy verbatim.
 * - Clean, accessible, responsive layout.
 * - Print-ready (Save as PDF works well).
 * - Brand colors: #d94f5c (primary) + yellow accent.
 */

export default function DigitalMarketingExecutive() {
  

  return (
    <main className="dme" >
      <header className="dme-hero" role="banner" aria-label="Digital Marketing Executive"   id="header" style={{
  background: "linear-gradient(90deg, #e6eb8eff, #f9ceceff)"
}}>
        <div className="dme-hero-top">
          <span className="dme-badge">Role Definition</span>
          <h1 className="dme-title">Digital Marketing Executive</h1>
          <p className="dme-sub">
            Digital Marketing Executive Role Definition The Digital Marketing Lead is responsible for end-to-end planning, execution, and reporting of all marketing activities — both digital and offline — for Brand Banao.Ai and its clients. The role covers strategy, performance tracking, creative/content delivery, media execution, and coordination with internal and external marketing teams across platforms.
          </p>
        </div><br />
        <Link to="/contact">
<button type="button" style={{backgroundColor : "#d94f5c"}}>Apply</button></Link>
        <div className="dme-quick">
        
       
        </div>
      </header>

      {/* KEY RESPONSIBILITIES */}
      <section id="responsibilities" className="dme-panel" aria-labelledby="dme-h2-resp">
        <h2 id="dme-h2-resp" className="dme-h2">Key Responsibilities</h2>
        <ol className="dme-list">
          <li>1. Draft marketing plans and proposals.</li>
          <li>2. Oversee calendar, posting, and campaign execution.</li>
          <li>3. Lead internal marketing operations and reporting.</li>
          <li>4. Collaborate with creative, performance, and media planning teams.</li>
          <li>5. Monitor digital performance, footprint, and innovation.</li>
          <li>6. Handling leads</li>
          <li>7. Client Meeting Handling, Co-ordination &amp; Communication</li>
        </ol>
      </section>

      {/* KEY TASKS & ACTIVITIES */}
      <section className="dme-panel" aria-labelledby="dme-h2-tasks">
        <h2 id="dme-h2-tasks" className="dme-h2">Key Tasks &amp; Activities</h2>

        <article className="dme-card">
          <h3 className="dme-h3">1. Requirement Understanding &amp; Planning</h3>
          <ul className="dme-ul">
            <li>- Gather requirements from Sales/Marketing team, Assistant Manager, CEO/CFO.</li>
            <li>- Draft initial digital marketing plans and proposals.</li>
            <li>- Coordinate internal meetings with media planners.</li>
            <li>- Finalize and submit to the Master Campaign Plan.</li>
          </ul>
        </article>

        <article className="dme-card">
          <h3 className="dme-h3">2. Internal Team Coordination &amp; Execution</h3>
          <ul className="dme-ul">
            <li>- Conduct daily meetings with Assistant Manager for planning.</li>
            <li>- Delegate work to DM team post approval.</li>
            <li>- Share daily progress reports.</li>
            <li>- Ensure proper execution by freelancers; maintain backups.</li>
            <li>- Conduct DOM meeting in absence of Assistant Manager/Management.</li>
          </ul>
        </article>

        <article className="dme-card">
          <h3 className="dme-h3">3. Performance Tracking &amp; Reporting</h3>
          <ul className="dme-ul">
            <li>- Monitor and maintain daily DM reports.</li>
            <li>- Prepare and submit:</li>
            <li>&nbsp;&nbsp;○ Weekly analytics to CEO/CFO</li>
            <li>&nbsp;&nbsp;○ Monthly DM reports (BB.AI + clients)</li>
            <li>&nbsp;&nbsp;○ SEO &amp; Website performance reports</li>
            <li>&nbsp;&nbsp;○ Digital Footprint and future forecasts</li>
          </ul>
        </article>

        <article className="dme-card">
          <h3 className="dme-h3">4. Calendar, Posting &amp; Campaigns</h3>
          <ul className="dme-ul">
            <li>- Prepare content calendars in coordination with writers/designers.</li>
            <li>- Handle posting of creatives/videos across platforms.</li>
            <li>- Lead performance marketing for BB.AI and clients.</li>
            <li>- Manage CEO calendar (DM related items).</li>
          </ul>
        </article>
      </section>

      {/* MEASUREMENT METRICS */}
      <section className="dme-panel" aria-labelledby="dme-h2-metrics">
        <h2 id="dme-h2-metrics" className="dme-h2">Measurement Metrics</h2>
        <ul className="dme-grid">
          {[
            "1. Timely submission of daily/weekly/monthly reports",
            "2. Campaign and calendar accuracy and completion",
            "3. Performance improvement across digital platforms",
            "4. Adoption of new tools/methods in digital & 360 branding",
            "5. Monthly review & reports of junior team members",
            "6. Digital footprint and engagement tracking",
            "7. Execution quality and delivery timeline adherence",
            "8. Coordination with Assistant Manager and reporting accuracy",
          ].map((item, idx) => (
            <li key={idx} className="dme-metric">{item}</li>
          ))}
        </ul>
      </section>

      {/* COMPENSATION */}
      <section className="dme-panel dme-panel--accent" aria-labelledby="dme-h2-comp">
        <h2 id="dme-h2-comp" className="dme-h2">Salary – 3.5 to 4 LPA</h2>
        <div className="dme-comp">
          <span className="dme-comp-label">Salary Range</span>
          <span className="dme-comp-value">₹ 3.5 – 4.0 LPA</span>
        </div>
      </section>
<br /><br />    
     <Link to="/contact"><button type="button" style={{backgroundColor : " #d94f5c"}}>Apply</button></Link>

      {/* Styles kept inside to guarantee layout without touching your global CSS */}
      <style>{`
        :root{
          --primary:#d94f5c;
          --primary-700:#c24450;
          --accent:#FFD84D;
          --ink:#1b1b1b;
          --muted:#5d5d5d;
          --bg:#fff7f6;
          --card:#ffffff;
          --line:#f1e2e1;
          --radius:14px;
          --shadow:0 10px 22px rgba(217,79,92,.14), 0 1px 4px rgba(0,0,0,.06);
        }
        *{box-sizing:border-box}
        html,body,#root{height:100%}
        body{margin:0; background:var(--bg);color:var(--ink)}

        .dme{max-width:1000px;margin:0 auto;padding:20px}
        .dme-hero{
          background:
            radial-gradient(900px 260px at 85% -10%, rgba(255,216,77,.35), transparent 60%),
            linear-gradient(135deg,var(--primary),var(--primary-700));
          color:#fff; border-radius:20px; padding:32px; box-shadow:var(--shadow); margin-top:10px;
        }
        .dme-badge{display:inline-block;background:#fff;color:var(--primary);font-weight:800;border-radius:999px;padding:6px 12px}
        .dme-title{margin:12px 0 8px;font-size:clamp(26px,4vw,40px);line-height:1.1}
        .dme-sub{margin:0;max-width:72ch}
        .dme-quick{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}
        .dme-btn{
          display:inline-flex;align-items:center;gap:8px;border-radius:10px;padding:10px 14px;font-weight:800;cursor:pointer;text-decoration:none;border:2px solid rgba(255,255,255,.9);color:#fff; background:transparent;
          transition:transform .14s ease,background .2s ease,color .2s ease;
        }
        .dme-btn:hover{transform:translateY(-1px)}
        .dme-btn--primary{background:#fff;color:var(--primary);border-color:#fff}
        .dme-btn--ghost{background:rgba(255,255,255,.08)}

        .dme-panel{margin-top:22px;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:18px 16px;box-shadow:var(--shadow)}
        .dme-panel--accent{background:#fffbe6;border-color:#ffe29a}
        .dme-h2{margin:0 0 10px 0;font-size:22px;color:var(--primary)}
        .dme-h3{margin:6px 0 8px 0;font-size:18px;color:#902b36}
        .dme-list{margin:0;padding:0 0 0 20px}
        .dme-list li{padding:6px 0}

        .dme-card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px 14px;margin-top:12px}
        .dme-ul{margin:0;padding-left:18px}
        .dme-ul li{padding:4px 0}

        .dme-grid{list-style:none;display:grid;grid-template-columns:1fr;gap:10px;margin:0;padding:0}
        @media (min-width:720px){ .dme-grid{grid-template-columns:1fr 1fr} }
        .dme-metric{
          background:linear-gradient(180deg,#fff,#fffdf6);border:1px solid #f4e8d1;border-radius:12px;padding:10px 12px
        }

        .dme-comp{
          display:flex;align-items:center;justify-content:space-between;gap:12px;background:#fff;border:2px dashed #ffc933;border-radius:14px;padding:14px
        }
        .dme-comp-label{color:var(--muted);font-weight:700}
        .dme-comp-value{background:var(--primary);color:#fff;font-weight:900;border-radius:10px;padding:8px 12px}

        .dme-footer{text-align:center;color:var(--muted);font-size:13px;padding:20px 0 8px}

        :focus-visible{outline:3px solid var(--accent);outline-offset:3px;border-radius:6px}

        /* Print: preserve brand color blocks and remove interactive chrome */
        @media print{
          .dme-btn,.dme-quick{display:none !important}
          .dme,.dme-panel,.dme-hero{box-shadow:none}
          .dme-hero{-webkit-print-color-adjust:exact;print-color-adjust:exact}
        }
      `}</style>
    </main>
  );
}
