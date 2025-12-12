import React from 'react'
import Products from '../components/Products'
import cinemaimg from "../Images/cinemabranding.webp"
import { Helmet } from 'react-helmet'

const CinemaBranding = () => {
  return (

    <>

      <Helmet>
        <title>Cinema Branding | Brand Banao.ai</title>
        <meta name="author" content="Brand Banao.AI" />
      </Helmet>


      <div>
        <Products
          title="Cinema Branding and Advertising"
          subtitle="Transform Your Brand into a Cinema Star through BrandBanao.Ai"
          image={cinemaimg}
          bold="Why Cinema Branding Works?"
          text1="1. Eyes Locked on Your Brand"
          text2="2. Moments That Stick"
          text3="3. Everywhere They Look"
          text4="4. On-Screen vs. Off-Screen Impact"
          text5="5. Engage Local and National Audiences"
          text6="6. Multi-Sensory Attractiveness"
          cta="Screen to Soul, Let Your Brand’s Story Play Where Hearts Watch."
        />
      </div>

    </>
  )
}

export default CinemaBranding
