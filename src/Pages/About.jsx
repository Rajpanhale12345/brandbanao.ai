import React from 'react'
import "../components/About.css"
import founder from "../Images/amitpatil.png"
import cofounder from '../Images/prajaktapatil.jpeg'
import CountUp from 'react-countup';
import Innovation from '../components/Innovation';
import { Helmet } from 'react-helmet';

const About = () => {
  return (

    <>

      <Helmet>
        <title>About | Best Branding & Advertising Agency in Nashik</title>
        <meta name="description" content="Brand Banao.AI is a leading 360-degree branding & advertising agency in Nashik, Maharashtra. Founded by Amit Hemant Patil, we specialize in strategic branding, digital marketing, OOH advertising, and growth-driven campaigns." />
        <meta name="keywords" content="Brand Banao AI, branding agency Nashik, advertising agency Nashik, digital marketing Nashik, 360 degree branding company, hoarding advertising Nashik, BrandBanao.ai" />
        <meta name="author" content="Brand Banao.AI" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://brandbanao.ai/about" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nashik" />
        <meta name="geo.position" content="19.9975;73.7898" />
        <meta name="ICBM" content="19.9975, 73.7898" />
        <meta property="og:title" content="About Brand Banao.AI | 360° Branding Agency in Nashik" />
        <meta property="og:description" content="Meet the visionaries behind Brand Banao.AI — a Nashik-based 360° branding and advertising agency delivering measurable business growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandbanao.ai/about" />
        <meta property="og:site_name" content="Brand Banao.AI" />
        <meta property="og:image" content="https://brandbanao.ai/assets/brandbanao-og.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Brand Banao.AI | Branding Agency in Nashik" />
        <meta name="twitter:description" content="Discover Brand Banao.AI — a results-driven branding and advertising agency helping businesses scale with strategy and creativity." />
        <meta name="twitter:image" content="https://brandbanao.ai/assets/brandbanao-og.jpg" />
        <meta name="application-name" content="Brand Banao.AI" />
        <meta name="theme-color" content="#d94f5c" /> 
        
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Brand Banao.AI",
            "url": "https://brandbanao.ai",
            "logo": "https://brandbanao.ai/logo.png",
            "foundingDate": "2008",
            "description": "A 360-degree branding and advertising agency based in Nashik, Maharashtra.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nashik",
              "addressRegion": "MH",
              "addressCountry": "IN"
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
          `}
        </script>
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
