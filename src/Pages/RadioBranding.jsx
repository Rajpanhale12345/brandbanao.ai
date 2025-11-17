import React from 'react'
import Products from '../components/Products'
import  radioimg from "../Images/radio.jpg"
import { Helmet } from 'react-helmet'

const RadioBranding = () => {
  return (

    <>

    <Helmet>
      <title>Radio & FM | Brand Banao.ai</title>      
    </Helmet>


    <div>
     <Products
       title="Radio & FM Branding"
       subtitle="It's 7:32 AM in the city. Streets are waking up, coffee is brewing, and between your favourite song and the forecast, a friendly voice pierces the morning buzz. A radio jingle is on catchy, friendly, and your brand comes to life. Not obnoxious, not aggressive, just on time, easily integrated into someone's schedule."
       image={radioimg} 
       bold="Why Radio & FM Branding Works?"
       text1="1. Personal Connection"
       text2="2. Catchy Jingles and Tales"
       text3="3. Wherever Your Audience Goes"
       text4="4. On-Air & Interactive Experiences"
       text5="5. Live RJ Mentions: Natural, friendly suggestions that create listener trust."
       text6="6. Custom Radio Jingles: Notices there are pieces that people whistle, listen to again, or ask about a lot."
       cta="Your brand and BrandBanao.ai are valued by the audience. Good experiences are created at every touchpoint, and over time, deep relationships are built. Care is infused in every interaction, and meaningful moments are created in every interaction."
     />
    </div>

    </>
  )
}

export default RadioBranding;
