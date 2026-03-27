import React, { useMemo, useState, useCallback } from "react";
import "../components/Careers.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://brandbanao.ai";
const CANONICAL_URL = `${SITE_URL}/careers`;
const OG_IMAGE = `${SITE_URL}/assets/logopng-CGGCs8OD.png`;

const JOBS = [
  {
    id: "media-planner",
    title: "Media Planner",
    type: "Full-time", 
    location: "Nashik (India)",
    exp: "01 - 05 years", 
    tags: ["media"],
    link: "careers/media-planner#header", 
    desc: "Own media planning, buying coordination, budgeting support, and channel mix for client campaigns.",
  },
  {
    id: "sales-executive-female",
    title: "Sales Executive (Female)",
    type: "Full-time",
    location: "Nashik (India)",
    exp: "01 - 05 years",
    tags: ["sales"],
    link: "careers/sales-marketing-executive-female#header",
    desc: "Drive new business, manage leads, and maintain client relationships.",
  },
  {
    id: "digital-marketing-executive",
    title: "Digital Marketing Executive",
    type: "Full-time",
    location: "Nashik (India)",
    exp: "02+ years",
    tags: ["marketing", "digital"],
    link: "careers/careers/digital-marketing-executive#header", 
    desc: "Execute digital campaigns, content plans, and performance tracking for growth.",
  },
  {
    id: "digital-marketing-manager",
    title: "Digital Marketing Manager",
    type: "Full-time",
    location: "Nashik (India)",
    exp: "05+ years",
    tags: ["marketing", "digital"],
    link: "careers/digital-marketing-manager#header", 
    desc: "Lead strategy across paid, owned, and earned channels; manage team and reporting.",
  },
  {
    id: "operations-head",
    title: "Operations Head",
    type: "Full-time",
    location: "Nashik (India)",
    exp: "02+ years",
    tags: ["operations"],
    link: "careers/operations-head#header", 
    desc: "Own operational excellence, vendor coordination, timelines, and campaign execution quality.",
  },
  {
    id: "sales-marketing-manager",
    title: "Sales & Marketing Manager",
    type: "Full-time",
    location: "Nashik (India)",
    exp: "02+ years",
    tags: ["sales", "marketing"],
    link: "careers/sales-marketing-manager#header", 
    desc: "Lead sales pipeline + marketing alignment to scale revenue and partnerships.",
  },
];

const FILTERS = [ 
  { key: "all", label: "All" },
  { key: "sales", label: "Sales" },
  { key: "marketing", label: "Marketing" },
  { key: "digital", label: "Digital" },
  { key: "media", label: "Media" },
  { key: "operations", label: "Operations" },
];

export default function Careers() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return JOBS;
    return JOBS.filter((j) => j.tags?.includes(active));
  }, [active]);
 
  const isExternal = useCallback((url = "") => {
    try {
      const u = new URL(url, SITE_URL);  
      return u.origin !== new URL(SITE_URL).origin;
    } catch {
      return false;
    }
  }, []);
 
  const toAbsolute = useCallback((url = "") => {
    try {
      return new URL(url, SITE_URL).toString();
    } catch {
      return url;
    }
  }, []);
 
  const schema = useMemo(() => {
    const orgId = `${SITE_URL}/#organization`;
    const websiteId = `${SITE_URL}/#website`;
    const pageId = `${CANONICAL_URL}#webpage`;

    const org = {
      "@type": "Organization",
      "@id": orgId,
      name: "Brand Banao.Ai",
      url: SITE_URL,
      logo: OG_IMAGE,  
      sameAs: [
        "https://www.instagram.com/brandbanao.ai",
        "https://www.linkedin.com/company/brandbanao-ai",
        "https://www.facebook.com/brandbanao.ai",
      ],
    };

    const webPage = {
      "@type": "WebPage",
      "@id": pageId,
      url: CANONICAL_URL,
      name: "Careers - Brand Banao.Ai",
      description:
        "Explore open roles at Brand Banao.Ai in Nashik, India. Join our team in media planning, sales, digital marketing, and operations.",
      isPartOf: { "@id": websiteId },
      about: { "@id": orgId },
      inLanguage: "en-IN",  
    };
 
    const jobPostings = JOBS.map((job) => ({
      "@type": "JobPosting",
      title: job.title,
      employmentType: job.type,
      hiringOrganization: { "@id": orgId },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nashik",
          addressRegion: "MH",  
          addressCountry: "IN",
        },
      },
      applicantLocationRequirements: {
        "@type": "Country",
        name: "India",
      },
      url: toAbsolute(job.link),  
      description: job.desc || `Apply for the ${job.title} position at Brand Banao.Ai in Nashik, India.`,
      identifier: {
        "@type": "PropertyValue",
        name: "Brand Banao.Ai",
        value: job.id,  
      },
       
      // "datePosted": "2026-01-01",
      // "validThrough": "2026-12-31T23:59",
    }));

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": websiteId,
          url: SITE_URL,
          name: "Brand Banao.Ai",
          publisher: { "@id": orgId },
          inLanguage: "en-IN",
        },
        org,
        webPage,
       
        ...jobPostings,
        {
          "@type": "ItemList",
          name: "Open roles at Brand Banao.Ai",
          itemListElement: jobPostings.map((jp, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            item: { "@id": jp.url }, 
          })),
        },
      ],
    };
  }, [toAbsolute]);

  const metaDescription =
    "Explore open roles at BrandBanao.ai in Nashik, India. Join our team in media planning, sales, digital marketing, and operations.";

  return (
    <>
      <Helmet> 
        <title>Careers - Brand Banao.Ai</title>
        <meta name="description" content={metaDescription} />
        <meta name="author" content="Brand Banao.Ai" />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta name="theme-color" content="#d94f5c" />
        <link rel="canonical" href={CANONICAL_URL} /> 
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Brand Banao.Ai" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:title" content="Careers - Brand Banao.Ai" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Brand Banao.Ai" /> 
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers - Brand Banao.Ai" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(schema)}</script> 
      </Helmet>

      <div className="careers-page">
        <header className="site-header" role="banner">
 
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
        </footer>
      </div>
    </>
  );
}
