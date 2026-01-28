import React, { useMemo, useState, useCallback } from "react";
import "../components/Careers.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const SITE_URL = "https://brandbanao.ai";
const CANONICAL_URL = `${SITE_URL}/careers`;
const OG_IMAGE = `${SITE_URL}/assets/logopng-CGGCs8OD.png`;

// ✅ FIX: Use PATHS for internal links (not full URLs)
// ✅ FIX: Make IDs UNIQUE (no duplicates)
const JOBS = [
  {
    id: "media-planner",
    title: "Media Planner",
    type: "Full-time",
    location: "Nashik (India)",
    exp: "01 - 05 years", // ✅ FIX: rename comp -> exp (clarity)
    tags: ["media"],
    link: "/careers/media-planner#header", // ✅ FIX: internal path
    desc: "Own media planning, buying coordination, budgeting support, and channel mix for client campaigns.",
  },
  {
    id: "sales-executive-female",
    title: "Sales Executive (Female)",
    type: "Full-time",
    location: "Nashik (India)",
    exp: "01 - 05 years",
    tags: ["sales"],
    link: "/careers/sales-marketing-executive-female#header", // ✅ FIX: internal path
    desc: "Drive new business, manage leads, and maintain client relationships.",
  },
  {
    id: "digital-marketing-executive",
    title: "Digital Marketing Executive",
    type: "Full-time",
    location: "Nashik (India)",
    exp: "02+ years",
    tags: ["marketing", "digital"],
    link: "/careers/digital-marketing-executive#header", // ✅ FIX
    desc: "Execute digital campaigns, content plans, and performance tracking for growth.",
  },
  {
    id: "digital-marketing-manager",
    title: "Digital Marketing Manager",
    type: "Full-time",
    location: "Nashik (India)",
    exp: "05+ years",
    tags: ["marketing", "digital"],
    link: "/careers/digital-marketing-manager#header", // ✅ FIX
    desc: "Lead strategy across paid, owned, and earned channels; manage team and reporting.",
  },
  {
    id: "operations-head",
    title: "Operations Head",
    type: "Full-time",
    location: "Nashik (India)",
    exp: "02+ years",
    tags: ["operations"],
    link: "/careers/operations-head#header", // ✅ FIX
    desc: "Own operational excellence, vendor coordination, timelines, and campaign execution quality.",
  },
  {
    id: "sales-marketing-manager",
    title: "Sales & Marketing Manager",
    type: "Full-time",
    location: "Nashik (India)",
    exp: "02+ years",
    tags: ["sales", "marketing"],
    link: "/careers/sales-marketing-manager#header", // ✅ FIX
    desc: "Lead sales pipeline + marketing alignment to scale revenue and partnerships.",
  },
];

const FILTERS = [
  // ✅ FIX: If you want chips visible, add filters here
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

  // ✅ FIX: Proper internal/external detection (works with relative paths too)
  const isExternal = useCallback((url = "") => {
    try {
      const u = new URL(url, SITE_URL); // supports relative paths
      return u.origin !== new URL(SITE_URL).origin;
    } catch {
      return false;
    }
  }, []);

  // ✅ FIX: Helper to normalize job URL for schema (absolute URL)
  const toAbsolute = useCallback((url = "") => {
    try {
      return new URL(url, SITE_URL).toString();
    } catch {
      return url;
    }
  }, []);

  // ✅ FIX: Single @graph schema, unique JobPosting identifiers
  const schema = useMemo(() => {
    const orgId = `${SITE_URL}/#organization`;
    const websiteId = `${SITE_URL}/#website`;
    const pageId = `${CANONICAL_URL}#webpage`;

    const org = {
      "@type": "Organization",
      "@id": orgId,
      name: "BrandBanao.ai",
      url: SITE_URL,
      logo: OG_IMAGE, // ✅ FIX: include logo
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
      name: "Careers | BrandBanao.ai",
      description:
        "Explore open roles at BrandBanao.ai in Nashik, India. Join our team in media planning, sales, digital marketing, and operations.",
      isPartOf: { "@id": websiteId },
      about: { "@id": orgId },
      inLanguage: "en-IN", // ✅ FIX
    };

    // ✅ FIX: Better JobPosting fields + absolute URL
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
          addressRegion: "MH", // ✅ FIX
          addressCountry: "IN",
        },
      },
      applicantLocationRequirements: {
        "@type": "Country",
        name: "India",
      },
      url: toAbsolute(job.link), // ✅ FIX: always absolute for schema
      description: job.desc || `Apply for the ${job.title} position at BrandBanao.ai in Nashik, India.`,
      identifier: {
        "@type": "PropertyValue",
        name: "BrandBanao.ai",
        value: job.id, // ✅ FIX: unique id
      },
      // ✅ FIX (optional but recommended): add datePosted/validThrough when you know them
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
          name: "BrandBanao.ai",
          publisher: { "@id": orgId },
          inLanguage: "en-IN",
        },
        org,
        webPage,
        // ✅ FIX: Put JobPosting objects directly in graph (clearer than ItemList wrapping)
        ...jobPostings,
        {
          "@type": "ItemList",
          name: "Open roles at BrandBanao.ai",
          itemListElement: jobPostings.map((jp, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            item: { "@id": jp.url }, // ✅ FIX: reference by URL
          })),
        },
      ],
    };
  }, [toAbsolute]);

  const metaDescription =
    "Explore open roles at BrandBanao.ai in Nashik, India. Join our team in media planning, sales, digital marketing, and operations.";

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-IN" }}> {/* ✅ FIX */}
        <title>Careers | BrandBanao.ai</title>
        <meta name="description" content={metaDescription} />
        <meta name="author" content="BrandBanao.ai" />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta name="theme-color" content="#d94f5c" />
        <link rel="canonical" href={CANONICAL_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BrandBanao.ai" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:title" content="Careers | BrandBanao.ai" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="BrandBanao.ai" /> {/* ✅ FIX */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers | BrandBanao.ai" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(schema)}</script> {/* ✅ FIX: no newline string */}
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
