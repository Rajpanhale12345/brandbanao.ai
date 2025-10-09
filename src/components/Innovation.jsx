// InnovationSection.jsx

import React from 'react';
import {motion} from 'framer-motion';
import './Innovation.css'; // For optional styling
import image from  '../Images/innovation.jpg'

const Innovation = () => {
  return (
    <div className="innovation-wrapper">
      <h2 className="innovation-title" style={{color : " black"}}>Innovation</h2>
      <div className="innovation-container">
         <motion.div
          className="innovation-image"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={image} alt="" />
        </motion.div>
        <motion.div
          className="innovation-text"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <p>
            <span style={{textAlign : "center"}}><span className='brand-name' style={{fontSize : "50px", color : ""}}>B</span>randBanao.Ai</span> is a Mumbai based branding and outdoor advertising agency operating under the umbrella of AHP Resolute Pvt. Ltd. It is powered by PANA Enterprises, an Out-of-Home (OOH) media agency with its owned media (Hoardings/Billboards) with over 16+ years of robust experience.
          </p>
        </motion.div>

       
      </div>
    </div>
  );
};

export default Innovation;
