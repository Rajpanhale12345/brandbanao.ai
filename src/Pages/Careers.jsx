import React, { useMemo, useState } from "react";
import "../components/Careers.css"
import { Link } from "react-router-dom";

const JOBS = [
  {
    id: "designer-senior",
    title: "Media Planner",
    type: "Full-time",
    location: "Nashik (India)",
 comp: "01 - 05 years",
    tags: ["design"],
  
  },
  {
    id: "fe-senior",
    title: "Sales Executive (Female)",
    type: "Full-time",
    location: "Nashik (India)",
   comp: "01 - 05 years",
    tags: ["sales"],
  
  },
  {
    id: "be-platform",
    title: "Digital Marketer - Senior Level",
    type: "Full-time",
    location: "Nashik (India)",
    comp: "05+  years",
    tags: ["sales"],
  
  },
  

  
  
];

const FILTERS = [
  // { key: "all", label: "All" },
  // { key: "Sales", label: "Sales" },
  // { key: "Client Co-ordinator", label: "Client Co-ordinator" },
  // { key: "Digital Marketer", label: "Digital Marketer" }
];

export default function Careers() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return JOBS;
    return JOBS.filter(j => j.tags.includes(active));
  }, [active]);

  return (
    <div className="careers-page">
      <header className="site-header" role="banner">
        {/* <div className="container nav">
          <a className="logo" href="#top" aria-label="Home">
            <span className="logo-dot" aria-hidden="true" />
           
          </a>
          <nav aria-label="primary">
            <a className="btn" href="#open-roles">View Open Roles</a>
          </nav>
        </div> */}
      </header>

      <main id="main" className="container" role="main">
        <section className="hero" aria-labelledby="hero-title" style={{marginTop:"-120px"}}>
          
          <h1 id="hero-title" style={{color : "#d94f5c"}}>Careers</h1>
         
          <div className="perks" id="life" aria-label="Perks">
            <div className="perk">
              <h2>Career growth</h2>
              <p>We invest in your training with development programs and mentorship</p>
            </div>
            <div className="perk">
              <h2>Wellness & growth</h2>
              <p>Collaborative environment with passionate, supportive colleagues</p>
            </div>
            <div className="perk">
              <h2>Impactful work</h2>
              <p>Your contributions will directly shape our products and services</p>
            </div>
          </div>
        </section>

        <section id="open-roles" aria-labelledby="roles-title">
          <div className="section-head">
            <h2 id="roles-title">Open roles</h2>
            <div className="filters" role="group" aria-label="Filters">
              {FILTERS.map(f => (
                <button
                  key={f.key}
                  className={`chip ${active === f.key ? "active" : ""}`}
                  data-filter={f.key}
                  type="button"
                  aria-pressed={active === f.key}
                  onClick={() => setActive(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="jobs" role="list">
            {filtered.map(job => (
              <article className="job" role="listitem" data-tags={job.tags.join(",")} key={job.id}>
                <div className="job-head">
                  <div className="job-title">
                    <span className="pill">{job.type}</span>
                    <h3 className="job-h3">{job.title}</h3>
                  </div>
                  <div className="meta" aria-label="Job metadata">
                    <span>{job.location}</span>
                    <span>{job.team}</span>
                    <span>{job.comp}</span>
                  </div>
                </div>
                <p className="desc">{job.desc}</p>
                <div className="actions">
                  <Link to="/contact"><button className="apply" onClick={() => alert(`Redirecting to Contact page!`)}>
                    Apply
                  </button></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

       
      </main>

      <footer role="contentinfo">
        {/* <div className="container">
          <div className="note" role="note" aria-label="Diversity and inclusion statement">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="#d94f5c" strokeWidth="2"/>
              <path d="M12 7v6M12 17h.01" stroke="#d94f5c" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p className="note-text">
              <b>We’re an equal opportunity employer.</b> We celebrate diversity and are committed to a
              respectful, inclusive workplace. If you’re excited about a role but don’t meet
              100% of the requirements, we’d still love to hear from you.
            </p>
          </div>
        </div> */}
      </footer>
    </div>
  );
}
