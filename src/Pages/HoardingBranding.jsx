import React, { useState } from "react";
import hoarding from "../Images/hoarding.jpg";
import hoarding2 from "../Images/award2.png";
import hoarding3 from "../Images/award5.png";
import hoarding4 from "../Images/busbranding.jpg";
import { Helmet } from "react-helmet";

const HoardingBranding = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [hoarding, hoarding2, hoarding3, hoarding4];

  const openGallery = (index) => {
    setCurrentIndex(index);
    setShowGallery(true);
  };

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <Helmet>
        <title>Hoarding | Brand Banao.ai</title>
      </Helmet>

      <div className="hoarding-page">
        <h1 className="hoarding-title">Hoarding / Billboard Advertising</h1>

        <div className="hoarding-image-wrap">
          <img
            src={hoarding}
            alt="Hoarding Branding"
            className="hoarding-image"
            onClick={() => openGallery(0)}
          />
        </div>

        {showGallery && (
          <div className="gallery-overlay" onClick={() => setShowGallery(false)}>
            <div className="gallery-box" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[currentIndex]}
                alt="Gallery"
                className="gallery-img"
              />

              {/* <button className="gallery-prev" onClick={prevImage}>❮</button>
              <button className="gallery-next" onClick={nextImage}>❯</button>
              <button className="gallery-close" onClick={() => setShowGallery(false)}>✕</button> */}
            </div>
          </div>
        )}

        <div className="hoarding-content">
          <h2>About Our Hoarding Services</h2>
          <p>
            Every morning, Nashik wakes up to a city full of stories. Some fade with
            the sunlight, some whisper behind the billboards, but some? Some own the
            streets. Their colors spread across crossroads, their words walk through
            the traffic, and their impact spills over long after people have already
            passed.
          </p>
          <p>That is what a hoarding done right can do.</p>
          <p>That is the magic BrandBanao.ai brings to your brand.</p>
          <p>We don't put up hoardings, we create landmarks.</p>

          <h2>Our Approach to Hoarding Advertising</h2>
          <p>At BrandBanao.ai, every hoarding is a conversation with the city.</p>
          <p>It begins with your brand story yet doesn't end with it.</p>
          <p>
            It speaks in visuals, in fonts, in emotions, everything that transcends
            noise and compels people to look up.
          </p>
          <p>
            We are the hoarding advertising company that ensures your brand not only
            “appears” but arrives.
          </p>

          <h2>Complete Hoarding Advertising Services</h2>
          <ul>
            <li>Creative hoarding design</li>
            <li>High-quality printing</li>
            <li>Outdoor installation</li>
            <li>Daily/weekly/monthly maintenance</li>
            <li>LED hoarding advertising</li>
            <li>Temporary hoardings for building sites</li>
            <li>Creative hoarding design templates</li>
          </ul>
          <p>
            Every BrandBanao.ai hoarding turns your story into a silhouette across the
            skyline.
          </p>

          <h2>Hoardings Created with Care; Placed for Purpose</h2>
          <p>We ask: “What do you want people to feel when they look up?”</p>
          <p>This transforms:</p>
          <ul>
            <li>Real estate hoardings into construction site love letters</li>
            <li>3D hoardings into dimension-shifting monologues</li>
            <li>Eco-friendly hoardings into literary experiments</li>
            <li>Luxury brand hoardings into poetry a million eyes read</li>
          </ul>
          <p>Every frame holds a thought and every thought counts.</p>

          <h2>Precision, Quality &amp; Consistency</h2>
          <p>Our strength: precision.</p>
          <p>
            Every campaign, LED hoarding advertising, outdoor hoarding services, daily
            maintenance checklists are all managed with care.
          </p>
          <p>Freshness stays from day one to day 30.</p>

          <h2>Strategic Hoarding Locations</h2>
          <p>Every corner has a story. Let yours be the loudest.</p>
          <p>We don't just find you a spot; we find you a presence.</p>
          <ul>
            <li>Prime hoarding locations in Nashik</li>
            <li>High-traffic hoarding sites across Maharashtra</li>
            <li>Busy roads, near malls, prime real estate corridors</li>
          </ul>
          <p>
            Presence isn't about going everywhere. It's about going exactly where you
            should.
          </p>

          <h2>Transparent Pricing &amp; Measurable Impact</h2>
          <p>Numbers Matter - But Impact Matters More.</p>
          <p>Transparent execution includes:</p>
          <ul>
            <li>Hoarding board material types</li>
            <li>Printing costs</li>
            <li>Daily rates</li>
            <li>ROI on hoarding advertisement</li>
          </ul>
          <p>Our goal: make every impression measurable and meaningful.</p>

          <h2>Why Brands Choose Hoardings Over Billboards</h2>
          <p>Billboards talk. Hoardings converse.</p>
          <p>A billboard yells from far away.</p>
          <p>A hoarding stands right where decisions are made.</p>
          <p>A well-designed hoarding says: We're here. We're trusted. We belong.</p>

          <h2>Industries We Serve</h2>
          <ul>
            <li>Real Estate</li>
            <li>Retail</li>
            <li>Healthcare</li>
            <li>Education</li>
          </ul>
          <p>Our designs have:</p>
          <ul>
            <li>Sold homes</li>
            <li>Launched hospitals</li>
            <li>Promoted schools</li>
            <li>Celebrated causes</li>
          </ul>
          <p>
            Creative hoardings for new property launches, construction safety boards,
            and corporate campaigns.
          </p>

          <h2>Brand Impact</h2>
          <p>A brand that stands tall, literally.</p>
          <p>Bold. Alive. Un-missable.</p>
          <p>For one second, the city freezes, and your message stays.</p>

          <h2>Why BrandBanao.ai</h2>
          <p>Not just billboards, opportunities for awareness.</p>
          <p>Your story. Our skyline.</p>
          <p>From blueprints to publishing.</p>
          <p>From economical to premium hoarding installation in Nashik.</p>
          <p>We make your brand rise visibly, beautifully, and responsibly.</p>

          <h2>24/7 Outdoor Presence</h2>
          <p>In a digital-cluttered world, the billboard stands straight.</p>
          <p>24 hours a day.</p>
          <p>7 days a week.</p>
          <p>Wordlessly telling your story to the world passing by.</p>

          <h2>Final Note</h2>
          <p>BrandBanao.ai - Best Hoarding Advertising Company in Nashik.</p>
          <p>For brands that want to be acknowledged and heard.</p>
          <p>
            For those who believe great advertising belongs in the sky, not just the
            screen.
          </p>
          <p>Let's create your brand, the city's heritage.</p>
        </div>

        <div className="hoarding-content">
          {/* left intentionally empty as in your original code */}
        </div>
      </div>
    </>
  );
};

export default HoardingBranding;
