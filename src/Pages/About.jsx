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

        <meta name="description" content="Learn about Brand Banao.Ai, a 360-degree branding and advertising agency in Nashik led by industry experts. Discover our vision, leadership, achievements, and growth journey." />

        <meta name="author" content="Brand Banao.Ai" />

        <link rel="canonical" href="https://brandbanao.ai/about" />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="About Brand Banao.Ai | 360° Branding Agency in Nashik" />
        <meta property="og:description" content="Meet the leadership and vision behind Brand Banao.Ai, a leading 360° branding and advertising agency delivering strategic growth for businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandbanao.ai/about" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Brand Banao.Ai" />
        <meta
          name="twitter:description"
          content="Discover the vision, leadership, and journey of Brand Banao.Ai, a 360° branding agency in Nashik."
        />
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
