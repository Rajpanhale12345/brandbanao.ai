import React from 'react'
import "../components/About.css"
import founder from "../Images/amitpatil.png"
import cofounder from '../Images/prajaktapatil.jpeg'
import CountUp from 'react-countup';
import Innovation from '../components/Innovation';
import { Helmet } from 'react-helmet';

const About = () => {

   // ✅ FIX: Use JSON.stringify instead of template string (safer, no formatting issues)
  // ✅ FIX: Use @graph to describe AboutPage + Organization (better entity clarity)
  // ✅ FIX: Use a logo URL that actually exists on your site (update if different)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage", // ✅ FIX: More accurate than generic WebPage
        "@id": "https://brandbanao.ai/about#aboutpage",
        "url": "https://brandbanao.ai/about",
        "name": "About BrandBanao.ai | 360° Branding & Advertising Agency in Nashik",
        "description":
          "BrandBanao.ai is a 360-degree branding & advertising agency in Nashik, Maharashtra. Founded by Amit Hemant Patil, we deliver strategic branding, OOH advertising, and digital marketing for growth-driven campaigns.",
        "inLanguage": "en-IN",
        "about": { "@id": "https://brandbanao.ai/#organization" },
        "isPartOf": { "@id": "https://brandbanao.ai/#website" }
      },
      {
        "@type": "WebSite",
        "@id": "https://brandbanao.ai/#website",
        "url": "https://brandbanao.ai/",
        "name": "BrandBanao.ai",
        "publisher": { "@id": "https://brandbanao.ai/#organization" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "AdvertisingAgency", // ✅ FIX: More specific than Organization
        "@id": "https://brandbanao.ai/#organization",
        "name": "BrandBanao.ai",
        "url": "https://brandbanao.ai/",
        // ✅ FIX: Use same logo as other pages for consistency
        "logo": "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
        "image": "https://brandbanao.ai/assets/logopng-CGGCs8OD.png",
        "foundingDate": "2008",
        "description":
          "A 360-degree branding and advertising agency based in Nashik, Maharashtra, specializing in strategic branding, outdoor advertising, and digital marketing.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nashik",
          "addressRegion": "MH",
          "addressCountry": "IN"
          // ✅ FIX: Add streetAddress/postalCode if you have them (recommended)
          // "streetAddress": "YOUR STREET ADDRESS",
          // "postalCode": "YOUR PINCODE"
        },
        "geo": {
          // ✅ FIX: Use proper GeoCoordinates (you used geo meta tags only)
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
      }
    ]
  };

  return (

    <>

      <Helmet>
        <title>About BrandBanao.ai | 360° Branding & Advertising Agency in Nashik</title>
        <meta name="description" content="BrandBanao.ai is a leading 360-degree branding & advertising agency in Nashik, Maharashtra. Founded by Amit Hemant Patil, we specialize in strategic branding, digital marketing, OOH advertising, and growth-driven campaigns." />
        <meta name="author" content="BrandBanao.ai" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://brandbanao.ai/about" />
        <meta property="og:title" content="About BrandBanao.ai | 360° Branding Agency in Nashik" />
        <meta property="og:description" content="Meet the visionaries behind BrandBanao.ai — a Nashik-based 360° branding and advertising agency delivering measurable business growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandbanao.ai/about" />
        <meta property="og:site_name" content="BrandBanao.ai" />
        <meta property="og:image" content="https://brandbanao.ai/assets/brandbanao-og.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About BrandBanao.ai | Branding Agency in Nashik" />
        <meta name="twitter:description" content="Discover BrandBanao.ai — a results-driven branding and advertising agency helping businesses scale with strategy and creativity." />
        <meta name="twitter:image" content="https://brandbanao.ai/assets/brandbanao-og.jpg" />
        <meta name="application-name" content="BrandBanao.ai" />
        <meta name="theme-color" content="#d94f5c" />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>



      <div>


        <br /><br />

        {/* Vector Section */}
        <div className='vector-container'>
          <br /><br />
          <div className='vector'>
            <b className='count'>
              <CountUp end={20} duration={3} />+
            </b>
            <div className='label'>Awards</div>
          </div><br />
          <div className='vector-container'>
            <div className='vector' id='count'>
              <b className='count'>
                <CountUp end={2000} duration={3} />+
              </b>
              <div className='label'>Campaigns</div>
            </div>
          </div><br /><br /><br />
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

        <br /><br /><br /><br />
        <h1 className='title' style={{ color: " #d94f5c" }}>Visionary Leader</h1>

        {/* Leader Section */}
        <div className='images'>
          <div className='image-container'>
            <img src={founder} alt="Founder" className='founder' />

            <div className='overlay-text'><b style={{ color: "white" }}>Amit Hemant Patil</b><br />Founder and CEO
              Amit Hemant Patil is the Founder and CEO of BrandBanao.ai, <br /> a 360-degree branding company blending technical expertise (Electrical Engineering, SPPU) <br /> with creative vision. Governor Nominated Ex-Senate Member of SPPU (2017-2022) <br />

              He fosters entrepreneurship and innovation. His data-driven approach helps businesses <br /> build authentic brands and achieve sustainable growth, making BrandBanao.ai  <br />a leader in strategic branding.</div>

          </div>
        </div><br /><br /><br />
        <h1 className='title' style={{ color: "#d94f5c" }}>Co-Founder and CFO</h1>
        <div className='images'>
          <div className='image-container'>
            <img src={cofounder} alt="Co-Founder" className='founder' />
            <div className='overlay-text'>
              <b style={{ color: " white" }}> Prajakta Amit Patil</b> <br /> a 2013 Master of Computer Management graduate <br />she oversees finance for BrandBanao.ai and Pana Enterprises. <br /> Focused on maintaining seamless payment cycles with clients and vendors, she ensures robust financial health for the company. <br />
              Additionally, she plays a pivotal role in driving the expansion of the company’s new media ventures.<br /> </div>
          </div>
        </div>

        <Innovation />
      </div>

    </>
  )
}



export default About;
