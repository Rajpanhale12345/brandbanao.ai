import React from 'react';
import "../components/About.css";
import founder from "../Images/amitpatil.webp";
import cofounder from '../Images/prajaktapatil.webp';
import CountUp from 'react-countup';
import Innovation from '../components/Innovation';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
  const pageUrl = "https://brandbanao.ai/about";
  const siteUrl = "https://brandbanao.ai/";
  const logoUrl = "https://brandbanao.ai/assets/logopng-CGGCs8OD.png";

  const hiddenStyle = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#aboutpage`,
        "url": pageUrl,
        "name": "About BrandBanao.ai - 360° Branding & Advertising Agency in Nashik",
        "description":
          "BrandBanao.ai is a 360-degree branding and advertising agency in Nashik, Maharashtra. Learn about our founders, expertise, and growth-driven branding, advertising, and digital marketing services.",
        "inLanguage": "en-IN",
        "about": { "@id": `${siteUrl}#organization` },
        "isPartOf": { "@id": `${siteUrl}#website` }
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        "url": siteUrl,
        "name": "BrandBanao.ai",
        "publisher": { "@id": `${siteUrl}#organization` },
        "inLanguage": "en-IN"
      },
      {
        "@type": "AdvertisingAgency",
        "@id": `${siteUrl}#organization`,
        "name": "BrandBanao.ai",
        "url": siteUrl,
        "logo": logoUrl,
        "image": logoUrl,
        "foundingDate": "2008",
        "description":
          "A 360-degree branding and advertising agency based in Nashik, Maharashtra, specializing in strategic branding, outdoor advertising, and digital marketing.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nashik",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.9975,
          "longitude": 73.7898
        },
        "founder": [
          {
            "@type": "Person",
            "name": "Amit Hemant Patil",
            "jobTitle": "Founder & CEO"
          },
          {
            "@type": "Person",
            "name": "Prajakta Amit Patil",
            "jobTitle": "Co-Founder & CFO"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/brandbanao.ai",
          "https://www.linkedin.com/company/brandbanao-ai",
          "https://www.facebook.com/brandbanao.ai"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": pageUrl
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <title>About BrandBanao.ai - 360° Branding & Advertising Agency in Nashik</title>
        <meta
          name="description"
          content="BrandBanao.ai is a 360-degree branding and advertising agency in Nashik, Maharashtra. Founded by Amit Hemant Patil, we specialize in strategic branding, digital marketing, OOH advertising, and growth-driven campaigns."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content="About BrandBanao.ai - 360° Branding Agency in Nashik" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:description"
          content="Learn about BrandBanao.ai, our founders, and our expertise in branding, advertising, outdoor campaigns, and digital marketing."
        />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:site_name" content="BrandBanao.ai" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About BrandBanao.ai - 360° Branding Agency in Nashik" />
        <meta
          name="twitter:description"
          content="Learn about BrandBanao.ai, our founders, and our expertise in branding, advertising, and digital marketing."
        />
        <meta name="twitter:image" content={logoUrl} />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main>
        <div>
          <br /><br />

          <header>
            <h1 style={hiddenStyle}>
              About BrandBanao.ai - Branding and Advertising Agency in Nashik
            </h1>
          </header>

          <section aria-label="Company achievements">
            <div className='vector-container'>
              <br /><br />
              <div className='vector'>
                <b className='count'>
                  <CountUp end={20} duration={3} />+
                </b>
                <div className='label'>Awards</div>
              </div>
              <br />
              <div className='vector-container'>
                <div className='vector' id='count'>
                  <b className='count'>
                    <CountUp end={2000} duration={3} />+
                  </b>
                  <div className='label'>Campaigns</div>
                </div>
              </div>
              <br /><br /><br />
            </div>

            <div className='vector-container'>
              <div className='vector'>
                <b className='count'>
                  <CountUp end={200} duration={3} />+
                </b>
                <div className='label'>Satisfied Clients</div>
              </div>

              <div className='vector-container'>
                <div className='vector'>
                  <b className='count'>
                    <CountUp end={16} duration={3} />+
                  </b>
                  <div className='label'>Years of experience</div>
                </div>
              </div>
            </div>
          </section>

          <br /><br /><br /><br />

          <section aria-labelledby="founder-section">
            <h2 id="founder-section" className='title' style={{ color: "#d94f5c" }}>
              Visionary Leader
            </h2>

            <div className='images'>
              <div className='image-container'>

                <img
                  src={founder}
                  title="अमित झाट्टू"
                  alt="Amit Hemant Patil, Founder and CEO of BrandBanao.ai"
                  className='founder'
                  loading="lazy"
                />

                <div className='overlay-text'>
                  <b style={{ color: "white" }}>Amit Hemant Patil</b>
                  <br />
                  Founder and CEO Amit Hemant Patil is the Founder and CEO of BrandBanao.ai,
                  a 360-degree branding company blending technical expertise
                  (Electrical Engineering, SPPU) with creative vision. Governor Nominated
                  Ex-Senate Member of SPPU (2017-2022)
                  <br />
                  He fosters entrepreneurship and innovation. His data-driven approach helps
                  businesses build authentic brands and achieve sustainable growth, making
                  BrandBanao.ai a leader in strategic branding.
                </div>
              </div>
            </div>
          </section>

          <br /><br /><br />

          <section aria-labelledby="cofounder-section">
            <h2 id="cofounder-section" className='title' style={{ color: "#d94f5c" }}>
              Co-Founder and CFO
            </h2>

            <div className='images'>
              <div className='image-container'>
                <img
                  src={cofounder}
                  alt="Prajakta Amit Patil, Co-Founder and CFO of BrandBanao.ai"
                  title="पुच्चा वासाडेल "
                  className='founder'
                  loading="lazy"
                />
                <div className='overlay-text'>
                  <b style={{ color: "white" }}>Prajakta Amit Patil</b>
                  <br />
                  A 2013 Master of Computer Management graduate, she oversees finance for
                  BrandBanao.ai and Pana Enterprises.
                  <br />
                  Focused on maintaining seamless payment cycles with clients and vendors,
                  she ensures robust financial health for the company.
                  <br />
                  Additionally, she plays a pivotal role in driving the expansion of the
                  company's new media ventures.
                </div>
              </div>
            </div>
          </section>

          <section style={hiddenStyle} aria-label="About BrandBanao.ai summary">
            <h2>About Our Agency</h2>
            <p>
              BrandBanao.ai is a branding and advertising agency in Nashik, Maharashtra,
              offering strategic branding, digital marketing, outdoor advertising, and
              integrated campaign solutions for business growth.
            </p>
            <p>
              Explore our <Link to="/services">services</Link>, visit our <Link to="/contact">contact page</Link>,
              or learn more about opportunities on our <Link to="/careers">careers page</Link>.
            </p>
          </section>

          <Innovation />
        </div>
      </main>
    </>
  );
};

export default About;