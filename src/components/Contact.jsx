import React, { useState } from "react";
import "./Contact.css";
import { Helmet } from "react-helmet";

/**
 * SheetDB setup
 * Google Sheet headers (row 1) MUST be exactly:
 * officeLocation | topic | fullName | phone | email | company | designation | message | created_at
 *
 * Endpoint you provided:
 * https://sheetdb.io/api/v1/svdrh2yfsfqkm
 *
 * If your SheetDB API uses auth, put the bearer token below.
 */
const SHEETDB_URL = "https://sheetdb.io/api/v1/svdrh2yfsfqkm";
const SHEETDB_TOKEN = ""; // e.g. "your_long_bearer_token" if enabled; otherwise leave empty

const initialState = {
  officeLocation: "NASHIK",
  fullName: "",
  phone: "",
  email: "",
  company: "",
  designation: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const touch = (key) => () => setTouched((t) => ({ ...t, [key]: true }));

  const errors = {
    fullName: form.fullName.trim() ? "" : "Full name is required.",
    phone: /^\+?[0-9 ()-]{7,20}$/.test(form.phone) ? "" : "Enter a valid phone number.",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "" : "Enter a valid email.",
    message: form.message.trim() ? "" : "Please tell us how we can help.",
  };

  const hasErrors = Object.values(errors).some(Boolean);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // mark fields as touched to surface errors
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      message: true,
    });
    if (hasErrors) return;

    setIsSubmitting(true);
    try {
      // SheetDB expects { data: [ { ...row } ] }
      const payload = {
        data: [
          {
            officeLocation: form.officeLocation,
            topic: form.topic,
            fullName: form.fullName,
            phone: form.phone,
            email: form.email,
            company: form.company,
            designation: form.designation,
            message: form.message,
            created_at: new Date().toISOString(),
          },
        ],
      };

      const res = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(SHEETDB_TOKEN ? { Authorization: `Bearer ${SHEETDB_TOKEN}` } : {}),
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`SheetDB error: ${res.status} ${text}`);
      }

      alert("Thanks! We've received your message.");
      setForm(initialState);
      setTouched({});
    } catch (err) {
      console.error(err);
      alert("Oops—couldn't submit right now. Please try again in a bit.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const PAGE_URL = "https://brandbanao.ai/contact";
  const OG_IMAGE = "https://brandbanao.ai/assets/logopng-CGGCs8OD.png";
  
  return (
    <>

      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <title>Contact | Brand Banao.ai</title>
        <meta name="description" content="Contact Brand Banao.ai for branding, marketing, and AI-driven growth. Reach our team in Nashik and Mumbai for campaigns, design, and outdoor advertising." />
        <meta name="author" content="Brand Banao.AI" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
        <meta name="theme-color" content="#d94f5c" />
        <meta name="application-name" content="Brand Banao.ai" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Brand Banao.ai" />
        <meta property="og:title" content="Contact | Brand Banao.ai" />
        <meta property="og:description" content="Get in touch with Brand Banao.ai. Tell us your requirement and we'll respond quickly." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Brand Banao.ai - Contact" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Brand Banao.ai" />
        <meta name="twitter:description" content="Contact Brand Banao.ai for branding, marketing, and AI-driven growth." />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Brand Banao.ai - Contact" />
        <meta name="twitter:url" content={PAGE_URL} />
      </Helmet>


      <section className="hero" aria-labelledby="hero-title" style={{ marginTop: "-120px" }}>
        <h1 id="hero-title" style={{ color: "#d94f5c" }}>Contact us</h1>
        <div className="perks" id="life" aria-label="Perks">
          <div className="perk">
            <h2> 📍 Command - Registered office</h2>
            <p>502, Buildarch Olive, Dadasaheb Rege Marg, Dadar West, Mumbai</p>
          </div>
          <div className="perk">
            <h2>📍 Basecamp - Headquarters</h2>
            <p>B-603, The Hub, Mahatma Nagar, Nashik</p>
          </div>
          <div className="perk">
            <h2>📍 Launchpad </h2>
            <p>B-605, The Hub, Mahatma Nagar, Nashik</p>
          </div>
        </div>
      </section>

      <div className="contact-page">
        <form className="contact" onSubmit={handleSubmit} noValidate>
          <div className="grid">
            {/* Office Location */}
            <div className="field">
              <label htmlFor="officeLocation">
                Location<span aria-hidden="true">*</span>
              </label>
              <select
                id="officeLocation"
                value={form.officeLocation}
                onChange={set("officeLocation")}
                className="select"
              >
                <option value="NASHIK">NASHIK</option>
                <option value="MUMBAI">MUMBAI</option>
                <option value="BENGALURU">CHHATRAPATI SAMBHAJI NAGAR</option>
                <option value="PUNE">PUNE</option>
                <option value="REMOTE">Other</option>
              </select>
            </div>

            {/* Full Name */}
            <div className="field">
              <label htmlFor="fullName">
                Full Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={form.fullName}
                onChange={set("fullName")}
                onBlur={touch("fullName")}
                className={`input ${touched.fullName && errors.fullName ? "invalid" : ""}`}
              />
              {touched.fullName && errors.fullName && (
                <p className="error">{errors.fullName}</p>
              )}
            </div>

            {/* Phone */}
            <div className="field">
              <label htmlFor="phone">
                Phone <span aria-hidden="true">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                value={form.phone}
                onChange={set("phone")}
                onBlur={touch("phone")}
                className={`input ${touched.phone && errors.phone ? "invalid" : ""}`}
                placeholder="+91 91567 85678"
              />
              {touched.phone && errors.phone && (
                <p className="error">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div className="field span-2">
              <label htmlFor="email">
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                type="email"
                inputMode="email"
                value={form.email}
                onChange={set("email")}
                onBlur={touch("email")}
                className={`input ${touched.email && errors.email ? "invalid" : ""}`}

                required
              />
              {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>

            {/* Company */}


            {/* Designation */}


            {/* Message */}
            <div className="field span-2">
              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={set("message")}
                onBlur={touch("message")}
                className={`input textarea ${touched.message && errors.message ? "invalid" : ""}`}
              />
              {touched.message && errors.message && (
                <p className="error">{errors.message}</p>
              )}
            </div>
          </div>


          <div className="actions">
            <button type="submit" disabled={hasErrors || isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            <button
              type="button"
              className="ghost"
              onClick={() => {
                setForm(initialState);
                setTouched({});
              }}
              disabled={isSubmitting}
            >
              Reset
            </button>
          </div>
        </form>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.1335766335305!2d73.7520522737645!3d20.002907722223778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x26ef329dafe0db95%3A0x5c70a29058bce542!2sBrand%20Banao.Ai!5e0!3m2!1sen!2sin!4v1758287654363!5m2!1sen!2sin"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Brand Banao.Ai Location"
          />
        </div>
      </div>
    </>
  );
}
