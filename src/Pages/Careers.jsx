import React, { useMemo, useState } from "react";
import "../components/Careers.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { HashLink  } from 'react-router-hash-link';


const JOBS = [
  {
    id: "designer-senior",
    title: "Media Planner",
    type: "Full-time",
    location: "Nashik (India)",
    comp: "01 - 05 years",
    tags: ["design", "media"],
    link: "https://brandbanao.ai/Careers/MediaPlanner#header", // internal route example
    // desc: "Own media planning, buying, budgeting, and channel mix for client campaigns."
  },
  {
    id: "fe-senior",
    title: "Sales Executive (Female)",
    type: "Full-time",
    location: "Nashik (India)",
    comp: "01 - 05 years",
    tags: ["sales"],
    link: "https://brandbanao.ai/Careers/SalesMarketingExecutiveFemale#header", // external link example
    // desc: "Drive new business, manage leads, and maintain client relationships."
  },
  {
    id: "be-platform",
    title: "Digital Marketing Executive",
    type: "Full-time",
    location: "Nashik (India)",
    comp: "02+ years",
    tags: ["marketing", "digital"],
    link: "https://brandbanao.ai/Careers/DigitalMarketingExecutive#header", // internal route example
    // desc: "Lead end-to-end growth strategy across paid, owned, and earned channels."
  },
    {
    id: "be-platform",
    title: "Digital Marketing Manager",
    type: "Full-time",
    location: "Nashik (India)",
    comp: "05+ years",
    tags: ["marketing", "digital"],
    link: "https://brandbanao.ai/Careers/DigitalMarketingManager#header", // internal route example
    // desc: "Lead end-to-end growth strategy across paid, owned, and earned channels."
  },
    {
    id: "be-platform",
    title: "Operations Head",
    type: "Full-time",
    location: "Nashik (India)",
    comp: "02+ years",
    tags: ["marketing", "digital"],
    link: "https://brandbanao.ai/Careers/OperationsHead#header", // internal route example
    // desc: "Lead end-to-end growth strategy across paid, owned, and earned channels."
  },
     {
    id: "be-platform",
    title: "Sales & Marketing Manager",
    type: "Full-time",
    location: "Nashik (India)",
    comp: "02+ years",
    tags: ["marketing", "digital"],
    link: "https://brandbanao.ai/Careers/SalesMarketingManager#header", // internal route exampleSalesMarketingManager
    // desc: "Lead end-to-end growth strategy across paid, owned, and earned channels."
  },
];

const FILTERS = [
  // Add filters if you want chips to appear
  // { key: "all", label: "All" },
  // { key: "sales", label: "Sales" },
  // { key: "design", label: "Media/Design" },
  // { key: "marketing", label: "Marketing" },
];

export default function Careers() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return JOBS;
    return JOBS.filter((j) => j.tags?.includes(active));
  }, [active]);

  // Helper to decide internal vs external link
  const isExternal = (url = "") => /^https?:\/\//i.test(url);

  return (
    <>
      <Helmet>
        <title>Careers | Brand Banao.ai</title>
        <meta name="author" content="Brand Banao.AI" />
      </Helmet>

      <div className="careers-page">
        <header className="site-header" role="banner">
          {/* Keep header minimal per original */}
        </header>

        <main id="main" className="container" role="main">
          <section
            className="hero"
            aria-labelledby="hero-title"
            style={{ marginTop: "-120px" }}
          >
            <h1 id="hero-title" style={{ color: "#d94f5c" }}>
              Careers
            </h1>

            <div className="perks" id="life" aria-label="Perks">
              <div className="perk">
                <h2>Career growth</h2>
                <p>
                  We invest in your training with development programs and
                  mentorship
                </p>
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
                {FILTERS.map((f) => (
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
              {filtered.map((job) => (
                <article
                  className="job"
                  role="listitem"
                  data-tags={job.tags?.join(",") || ""}
                  key={job.id}
                >
                  <div className="job-head">
                    <div className="job-title">
                      <span className="pill">{job.type}</span>
                      <h3 className="job-h3">{job.title}</h3>
                    </div>
                    <div className="meta" aria-label="Job metadata">
                      <span>{job.location}</span>
                      {job.team ? <span>{job.team}</span> : null}
                      <span>{job.comp}</span>
                    </div>
                  </div>

                  {job.desc ? <p className="desc">{job.desc}</p> : null}

                  <div className="actions">
                    {isExternal(job.link) ? (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apply"
                      >
                        Apply
                      </a>
                    ) : (
                    <Link to={`/${job.link}`}>
                        <button className="apply">Apply</button>
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer role="contentinfo">
          {/* Diversity note intentionally commented as in original */}
        </footer>
      </div>
    </>
  );
}
