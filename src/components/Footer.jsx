// Footer.jsx
import React from "react";
import "./Footer.css";

 function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      <div className="sf-accent" aria-hidden="true" />

      <div className="sf-inner">
        {/* Brand / tagline / social */}


        {/* Link columns */}
        <div className="sf-grid">
         
          <Column
            title="Company"
            links={[
              ["About", "/about"],          
              ["Contact", "/contact"],
            ]}
          />
          <Column
            title="Other"
            links={[
            ["Sitemap", "/sitemap"],
            ]}
          />
           <Column
            title="Social Links"
            links={[
             ["Instagram", "https://www.instagram.com/brandbanao.ai/?hl=en"],
             ["Youtube", "https://www.youtube.com/@BrandBanao-Ai"],
             ["Facebook", "https://www.facebook.com/brandbanaoai/"],
             ["Linkedin", "https://in.linkedin.com/company/brand-banao-ai"]
            ]}
          />  
          <div className="sf-cta">
               <h4 style={{color : "white"}}>Reach us out  </h4>
            <a className="sf-pill" href="mailto:clientservicing@brandbanao.ai">
              clientservicing@brandbanao.ai
            </a>
            
           <a className="sf-pill" href="tel:9156784242 ">
             91 5678 4242
            </a>
           
           <a className="sf-pill" href="tel:9156784242" style={{textAlign : "left"}}>
             The Hub, B-603, Samartha Nagar, Mahatma Nagar, Parijat Nagar, Nashik, Maharashtra 422005
            </a>
         
          </div>
         
        </div>

        {/* Bottom row */}
        <div className="sf-bottom">
          <p  style={{color : "white"}}>© {year} brandbanao.ai. All rights reserved.</p>
          <ul className="sf-legal" role="list">
            {/* <li><a href="#"  style={{color : "white"}}>Privacy</a></li>
            <li><a href="#"  style={{color : "white"}}  >Terms</a></li> */}
           
          </ul>
        </div>
      </div>
    </footer>
  );
}

function Column({ title, links }) {
  return (
    <div className="sf-col">
      <h4>{title}</h4>
      <ul role="list">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.19-3.37-1.19-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05 .9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.36-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .85-.27 2.77 1.02A9.64 9.64 0 0 1 12 6.84c.86 0 1.73.12 2.54.36 1.92-1.29 2.77-1.02 2.77-1.02 .55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.92.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 3H22l-7.04 8.05L22.4 21h-7.2l-4.5-5.63L5.4 21H2l7.52-8.6L2.4 3h7.26l4.07 5.16L18.9 3zm-2.52 16h1.52L7.72 5H6.2l10.18 14z"/>
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.84v2.18h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.66 4.8 6.11V24h-4v-6.94c0-1.65-.03-3.76-2.29-3.76-2.29 0-2.64 1.79-2.64 3.64V24h-4V8z"/>
    </svg>
  );
}


export default Footer;

