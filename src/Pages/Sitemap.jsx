import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Sitemap() {
  const BASE_URL = "https://brandbanao.ai";

  const sections = [
    {
      title: "Main Pages",
      links: [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/services", label: "Services" },
        { path: "/contact", label: "Contact" },
        { path: "/careers", label: "Careers" },
      ],
    },
    {
      title: "Branding Services",
      links: [
        { path: "/hoardings", label: "Hoardings Branding" },
        { path: "/bus-shelter", label: "Bus Shelter Branding" },
        { path: "/airport-branding", label: "Airport Branding" },
        { path: "/cinema", label: "Cinema Branding" },
        { path: "/radio", label: "Radio Branding" },
        { path: "/tv-news-chanel-branding", label: "TV & News Channel Branding" },
        { path: "/bus-branding", label: "Bus Branding" },
        { path: "/auto-branding", label: "Auto Branding" },
        { path: "/cycle-branding", label: "Cycle Branding" },
        { path: "/railway-branding", label: "Railway Branding" },
        { path: "/digital-marketing", label: "Digital Marketing" },
        { path: "/web-development", label: "Web Development" },
      ],
    },
    {
      title: "Career Openings",
      links: [
        { path: "/careers/digital-marketing-executive", label: "Digital Marketing Executive" },
        { path: "/careers/digital-marketing-manager", label: "Digital Marketing Manager" },
        { path: "/careers/media-planner", label: "Media Planner" },
        { path: "/careers/sales-marketing-executive-female", label: "Sales & Marketing Executive (Female)" },
        { path: "/careers/sales-marketing-manager", label: "Sales & Marketing Manager" },
        { path: "/careers/operations-head", label: "Operations Head" },
      ],
    },
  ];

  const PAGE_TITLE = "Sitemap | Brand Banao.Ai";
  const PAGE_DESC =
    "Browse all pages on Brand Banao.Ai including services, branding solutions, digital marketing, web development, and careers.";

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/sitemap`} />
      </Helmet>

      <style>{`
        .sitemap-wrap{
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(18px, 3vw, 48px) clamp(14px, 2vw, 22px);
        }
        .sitemap-hero{
          display:flex;
          flex-direction:column;
          gap:10px;
          margin-bottom: 18px;
        }
        .sitemap-title{
          font-size: clamp(26px, 3.2vw, 44px);
          line-height: 1.15;
          margin: 0;
        }
        .sitemap-desc{
          margin: 0;
          font-size: clamp(14px, 1.6vw, 18px);
          opacity: 0.85;
          max-width: 70ch;
        }
        .sitemap-grid{
          display:grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-top: 18px;
        }
        @media (min-width: 640px){
          .sitemap-grid{ grid-template-columns: 1fr 1fr; gap: 16px; }
        }
        @media (min-width: 1024px){
          .sitemap-grid{ grid-template-columns: 1fr 1fr 1fr; gap: 18px; }
        }
        .sitemap-card{
          border: 1px solid rgba(0,0,0,0.12);
          border-radius: 14px;
          padding: 14px;
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(8px);
        }
        .sitemap-card h2{
          margin: 0 0 10px 0;
          font-size: clamp(16px, 1.8vw, 20px);
          line-height: 1.2;
        }
        .sitemap-list{
          list-style: none;
          padding: 0;
          margin: 0;
          display:flex;
          flex-direction:column;
          gap: 10px;
        }
        .sitemap-item{
          display:flex;
          flex-direction:column;
          gap: 4px;
          padding: 10px 10px;
          border-radius: 10px;
          transition: background 0.15s ease;
        }
        .sitemap-item:hover{
          background: rgba(0,0,0,0.04);
        }
        .sitemap-link{
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          line-height: 1.2;
        }
        .sitemap-url{
          font-size: 12px;
          opacity: 0.75;
          word-break: break-word;
          text-decoration: none;
        }
        .sitemap-actions{
          margin-top: 22px;
          display:flex;
          flex-wrap:wrap;
          gap: 10px;
          align-items:center;
        }
        .btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.14);
          text-decoration:none;
          font-weight:600;
          font-size: 14px;
          cursor:pointer;
        }
        .btn:active{ transform: translateY(1px); }
      `}</style>

      <div className="sitemap-wrap">
        <div className="sitemap-hero">
          <h1 className="sitemap-title">Sitemap</h1>
          <p className="sitemap-desc">{PAGE_DESC}</p>

          <div className="sitemap-actions">
            <Link className="btn" to="/">Go to Home</Link>
            <a className="btn" href={`${BASE_URL}/sitemap.xml`} target="_blank" rel="noreferrer">
              Open sitemap.xml
            </a>
            <a className="btn" href={`${BASE_URL}/robots.txt`} target="_blank" rel="noreferrer">
              Open robots.txt
            </a>
          </div>
        </div>

        <div className="sitemap-grid">
          {sections.map((section) => (
            <section className="sitemap-card" key={section.title}>
              <h2>{section.title}</h2>

              <ul className="sitemap-list">
                {section.links.map((item) => (
                  <li className="sitemap-item" key={item.path}>
                    <Link className="sitemap-link" to={item.path}>
                      {item.label}
                    </Link>
                    <a
                      className="sitemap-url"
                      href={`${BASE_URL}${item.path}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {`${BASE_URL}${item.path}`}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
