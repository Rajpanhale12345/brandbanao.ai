import React, { useState } from "react";
import "./Contact.css";



const initialState = {
  officeLocation: "MUMBAI",
  topic: "Business",
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

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const touch = (key) => () => setTouched((t) => ({ ...t, [key]: true }));

  const errors = {
    fullName: form.fullName.trim() ? "" : "Full name is required.",
    phone: /^\+?[0-9 ()-]{7,20}$/.test(form.phone)
      ? ""
      : "Enter a valid phone number.",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
      ? ""
      : "Enter a valid email.",
    message: form.message.trim() ? "" : "Please tell us how we can help.",
  };

  const hasErrors = Object.values(errors).some(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    // mark all as touched so errors show if user tries to submit early
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      message: true,
    });
    if (hasErrors) return;

    // simulate submit
    console.log("Form submitted:", form);
    alert("Thanks! We'll be in touch soon.");
    setForm(initialState);
    setTouched({});
  };

  return (

<>
   <section className="hero" aria-labelledby="hero-title" style={{marginTop:"-120px"}}>
          
          <h1 id="hero-title" style={{color : "#d94f5c"}}>Contact us</h1>
         
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
              Office Location<span aria-hidden="true">*</span>
            </label>
            <select
              id="officeLocation"
              value={form.officeLocation}
              onChange={set("officeLocation")}
              className="select"
            >
              <option value="MUMBAI">MUMBAI</option>
              <option value="DELHI">DELHI</option>
              <option value="BENGALURU">BENGALURU</option>
              <option value="PUNE">PUNE</option>
              <option value="REMOTE">REMOTE</option>
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
              placeholder="+91 98765 43210"
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
              placeholder="you@company.com"
            />
            {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>

          {/* Company */}
          <div className="field">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              value={form.company}
              onChange={set("company")}
              className="input"
            />
          </div>

          {/* Designation */}
          <div className="field">
            <label htmlFor="designation">Designation</label>
            <input
              id="designation"
              type="text"
              value={form.designation}
              onChange={set("designation")}
              className="input"
            />
          </div>

          {/* Message */}
          <div className="field span-2">
            <label htmlFor="message">How can we help? </label>
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
          <button type="submit" disabled={hasErrors}>
            Submit
          </button>
          <button
            type="button"
            className="ghost"
            onClick={() => {
              setForm(initialState);
              setTouched({});
            }}
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
