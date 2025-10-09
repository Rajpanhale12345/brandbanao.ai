import React from 'react'
import "../components/About.css"
import founder from "../Images/amitpatil.png"
import cofounder from '../Images/prajaktapatil.jpeg'
import CountUp from 'react-countup';
import Innovation from '../components/Innovation';

const About = () => {
  return (
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
      <h1 className='title' style={{color : " black"}}>Visionary Leaders</h1>
      <br />

      {/* Leader Section */}
      <div className='images'>
        <div className='image-container'>
          <img src={founder} alt="Founder"  className='founder' />
          <div className='overlay-text'>Amit Hemant Patil <br />Founder and CEO</div>
        </div><br /><br />
        <div className='image-container'>
          <img src={cofounder} alt="Co-Founder" className='founder' />
          <div className='overlay-text'>Prajakta Patil <br />Co-Founder and CFO</div>
        </div>
      </div>
      <Innovation />
    </div>
  )
}

export default About;
