import React from "react";
import { Link } from "react-router-dom";

/**
 * Media Planner Executive — Role Page (Verbatim Content)
 * - Keeps ALL provided copy exactly as-is.
 * - Clean, responsive layout using #d94f5c (primary) and a yellow accent.
 * - Self-contained styles, print-friendly.
 */

export default function MediaPlannerExecutive() {


  return (
    <main className="mpe">
      <header className="mpe-hero" role="banner" aria-label="Media Planner Executive" id="header" style={{
  background: "linear-gradient(90deg, #e6eb8eff, #f9ceceff)"
}}>
        <span className="mpe-badge">Role</span>
        <h1 className="mpe-title">Media Planner Executive</h1>
<br />
        <ul className="dmm-meta" aria-label="Role details">
          <li><b>Location:</b> Nashik (In person)</li>
          <li><b>Experience:</b> 2-3 years (Agency / Marketing Leadership)</li>
          <li><b>Type:</b> Full-time</li>
       
        </ul>
        <br />
        <Link to="/contact">
        <button type="button" style={{backgroundColor : "#d94f5c"}}>Apply</button></Link>
      </header>

      {/* Role Definition (verbatim) */}
      <section id="role-definition" className="mpe-panel">
        <h2 className="mpe-h2">Role Definition</h2>
        <p className="mpe-paragraph">
          The Media planner is a person who is responsible for creating strategic media plan, media buying at right rate from right vendor, coordination with management for creating proposals and completing the loop for printing, mounting and monitoring, invoice checking.
        </p>
      </section>

      {/* Key Responsibilities (verbatim) */}
      <section id="key-resp" className="mpe-panel">
        <h2 className="mpe-h2">Key Responsibilities</h2>
        <ol className="mpe-ol">
          <li> Preparing media plans</li>
          <li> Negotiating with other media owners/ agencies</li>
          <li> Prepare master data for cities/ hoardings/ other medias/ new media owners added in the Master media list every month with details</li>
          <li> Maintaining Current media</li>
          <li> Printing, mounting and monitoring execution work</li>
          <li> Checking of media owners/ agencies bills</li>
          <li> Handling enquries calls and attending new leads through hoardings cover flex</li>
          <li> Clients vendor coordination</li>
        </ol>
      </section>

      {/* Key Tasks & Activities (verbatim bullets including "• -") */}
      <section id="tasks" className="mpe-panel">
        <h2 className="mpe-h2">Key Tasks & Activities</h2>
        <ul className="mpe-ul">
          <li>• - Daily Hoardings Availability Plan – Nashik City</li>
          <li>• - Weekly Hoarding Availability Plan – Nashik Districts Rural</li>
          <li>• - Weekly Hoarding Availability Plan – North Maharashtra</li>
          <li>• - Monthly Hoarding Availability Plan – North Maharashtra + Marathwada</li>
          <li>• - Bi-Monthly Hoarding Availability Plan – Pan Maharashtra excluding Mumbai</li>
          <li>• - Monthly Hoarding Availability Plan – Mumbai</li>
          <li>• - Weekly Bus Shelters Plan – Nashik City</li>
          <li>• - Weekly Cinema Offscreen Plan – Nashik City</li>
          <li>• - Monthly Review of Hoardings Rates of Agencies in Maharashtra</li>
          <li>• - Monthly Review of Printers & Mounters in Maharashtra</li>
          <li>• - Monthly Review of BTL Vendors in Maharashtra</li>
          <li>• - Monthly Review of Radio Stations, News Channels</li>
          <li>• - Complete Coordination with Printers</li>
          <li>• - Complete Coordination with Mounters</li>
          <li>• - Hoarding Creatives adaptation work</li>
          <li>• - Forwarding Datasheet of every deal with Accountant for generation of PO</li>
          <li>• - Forwarding Monitoring Photos file to Accounts</li>
          <li>• - Forwarding Monitoring Photos file to Clients</li>
          <li>• - Reprinting Procedures</li>
          <li>• - Proposal Preparation and Forwarding to Sales as per Timeline Mentioned in Mail</li>
          <li>• - Any Changes in Existing PO such as Add-Ons, Reprinting Details to Accounts</li>
          <li>• - Weekly Score Board</li>
          <li>• - Monthly Presentation</li>
          <li>• - Rechecking of Invoice Before Submitting to Client</li>
          <li>• - Rechecking of Vendor Invoices After Receiving from Accounts</li>
          <li>• - Every Month Submitting Vrindawan Sites Data Before 5th</li>
        </ul>
      </section>

      {/* Measurement Metrics (verbatim) */}
      <section id="metrics" className="mpe-panel">
        <h2 className="mpe-h2">Measurement Metrics</h2>
        <ul className="mpe-metrics">
          <li>Monitoring photos</li>
          <li>Current media</li>
          <li>Score card</li>
          <li>Total proposal made (monthly, weekly)</li>
          <li>Printing and mounting data monthly</li>
          <li>No. of cities/ hoardings/ other medias/ new media owners added in the Master media list every month with details</li>
        </ul>
      </section>

      {/* Salary (verbatim) */}
      <section id="salary" className="mpe-panel mpe-panel--accent">
       
        <div className="mpe-comp">
          <span className="mpe-comp-label">Salary Range</span>
          <span className="mpe-comp-value">₹ 1.8 LPA – ₹ 3.0 LPA</span>
        </div>
      </section>
<br /><br />
 <Link to="/contact"><button type="button" style={{backgroundColor : " #d94f5c"}}>Apply</button></Link>
      {/* Optional CTA: hook to your unique route/form for this role */}
     

     

      {/* Inline styles to ensure consistent layout without touching global CSS */}
      <style>{`
        :root{
          --primary:#d94f5c;
          --primary-700:#b03b46;
          --accent:#FFD84D;
          --ink:#1b1b1b;
          --muted:#626262;
          --bg:#fff7f6;
          --card:#ffffff;
          --line:#f0e3e2;
          --radius:16px;
          --shadow:0 12px 24px rgba(217,79,92,.12), 0 2px 6px rgba(0,0,0,.05);
        }
        *{ box-sizing: border-box }
        html, body, #root{ height: 100% }
        body{ margin:0;  background: var(--bg); color: var(--ink) }

        .mpe{ max-width: 1040px; margin: 0 auto; padding: 22px }

        .mpe-hero{
          border-radius: 22px;
          padding: 28px 24px;
          color: #fff;
          background:
            radial-gradient(900px 260px at 85% -10%, rgba(255,216,77,.35), transparent 60%),
            linear-gradient(135deg, var(--primary) 0%, var(--primary-700) 100%);
          box-shadow: var(--shadow);
        }
        .mpe-badge{ display:inline-block; background:#fff; color:var(--primary); font-weight:900; border-radius:999px; padding:6px 12px }
        .mpe-title{ margin: 12px 0 2px; font-size: clamp(28px,4.6vw,44px); line-height: 1.08 }
        .mpe-actions{ margin-top: 16px; display:flex; gap:10px; flex-wrap:wrap }
        .mpe-btn{
          display:inline-flex; align-items:center; gap:8px; border-radius:10px; padding:10px 14px; font-weight:800; cursor:pointer; text-decoration:none;
          border:2px solid rgba(255,255,255,.9); color:#fff; background:transparent; transition: transform .14s ease, background .2s ease, color .2s ease;
        }
        .mpe-btn:hover{ transform: translateY(-1px) }
        .mpe-btn--primary{ background:#fff; color: var(--primary); border-color:#fff }
        .mpe-btn--ghost{ background: rgba(255,255,255,.08) }
  .dmm-meta{ list-style:none; padding:0; margin: 0; display:flex; flex-wrap:wrap; gap: 10px 16px; font-weight:600 }
        .dmm-meta li{ background: rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.28); border-radius: 10px; padding: 8px 10px; backdrop-filter: blur(2px) }
        .mpe-panel{
          margin-top: 22px; padding: 18px 16px; background: var(--card);
          border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow);
        }
        .mpe-panel--accent{ background: #fffbe6; border-color: #ffe29a }

        .mpe-h2{ margin: 0 0 8px 0; font-size: 22px; color: var(--primary) }
        .mpe-h3{ margin: 4px 0 8px 0; font-size: 18px; color: #8f2a35 }
        .mpe-paragraph{ margin: 0 }
        .mpe-paragraph.small{ font-size: 14px; color: var(--muted) }

        .mpe-ol{ margin: 0; padding: 0 0 0 20px }
        .mpe-ol li{ padding: 6px 0 }

        .mpe-ul{ list-style: none; margin: 0; padding: 0 }
        .mpe-ul li{
          padding: 8px 10px;
          background: linear-gradient(180deg, #fff, #fffdf8);
          border: 1px solid #f3e7d0;
          border-radius: 12px;
          margin-top: 8px;
          white-space: pre-wrap; /* preserve the "• -" style nicely */
        }

        .mpe-metrics{ list-style: none; margin: 0; padding: 0; display:grid; grid-template-columns: 1fr; gap: 10px }
        @media (min-width:720px){ .mpe-metrics{ grid-template-columns: 1fr 1fr } }
        .mpe-metrics li{
          background: linear-gradient(180deg, #fff, #fffdf8);
          border: 1px solid #f3e7d0;
          border-radius: 12px;
          padding: 10px 12px;
        }

        .mpe-comp{
          display:flex; align-items:center; justify-content:space-between; gap:12px; background:#fff; border:2px dashed #ffc933; border-radius:14px; padding:14px
        }
        .mpe-comp-label{ color: var(--muted); font-weight: 700 }
        .mpe-comp-value{
          background: var(--primary); color: #fff; font-weight: 900; border-radius: 10px; padding: 8px 12px;
          box-shadow: 0 6px 16px rgba(217,79,92,.25);
        }

        .mpe-cta .mpe-cta-inner{ display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap }
        .mpe-apply{
          display:inline-flex; align-items:center; justify-content:center;
          min-width: 120px; padding: 10px 14px; border-radius: 12px; font-weight: 900; text-decoration:none;
          background: var(--primary); color:#fff; border:2px solid var(--primary);
          transition: transform .14s ease, box-shadow .14s ease;
          box-shadow: 0 6px 16px rgba(217,79,92,.25);
        }
        .mpe-apply:hover{ transform: translateY(-2px); box-shadow: 0 8px 22px rgba(217,79,92,.35) }
        .mpe-apply:focus-visible{ outline: 3px solid var(--accent); outline-offset: 3px }

        .mpe-footer{ text-align:center; color: var(--muted); font-size: 13px; padding: 20px 0 8px }

        :focus-visible{ outline: 3px solid var(--accent); outline-offset: 3px; border-radius: 6px }

        /* Print styles */
        @media print{
          .mpe-btn,.mpe-actions{ display:none !important }
          .mpe,.mpe-panel,.mpe-hero{ box-shadow:none }
          .mpe-hero{ -webkit-print-color-adjust: exact; print-color-adjust: exact }
        }
      `}</style>
    </main>
  );
}
