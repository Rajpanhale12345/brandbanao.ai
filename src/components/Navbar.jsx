import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../Images/logopng.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const panelRef = useRef(null);
  const firstLinkRef = useRef(null);
  const location = useLocation();

  // single source of truth for links
  const links = useMemo(() => ([
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/careers", label: "Careers" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contact", label: "Contact" },
  ]), []);

  // const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen(v => !v), []);

  // lock body scroll when menu is open (mobile)
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => { document.body.style.overflow = prev || ""; };
  }, [open]);

  // close on route change
  useEffect(() => { closeMenu(); }, [location.pathname, closeMenu]);

  // esc to close + focus management
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        closeMenu();
        btnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    // move focus to first link
    const t = setTimeout(() => firstLinkRef.current?.focus(), 0);

    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeMenu]);

  // click outside to close
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target) && e.target !== btnRef.current) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open, closeMenu]);

  const renderLink = (link, idx, refIfFirst) => (
    <NavLink
      key={link.to}
      to={link.to}
      end={link.end}
      className={({ isActive }) => (isActive ? "active" : undefined)}
      ref={idx === 0 ? refIfFirst : null}
    >
      {link.label}
    </NavLink>
  );

  return (
    <nav className={`navbar ${open ? "is-open" : ""}`} aria-label="Primary">
      <div className="nav-inner">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Company logo" className="logo" />
        </NavLink>

        {/* desktop menu */}
        <ul className="menu menu--desktop" style={{color : "yellow"}}>
          {links.map((l) => (
            <li key={l.to}>{renderLink(l)}</li>
          ))}
        </ul>

        {/* hamburger */}
        <button
          className={`hamburger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={toggleMenu}
          ref={btnRef}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* overlay */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        aria-hidden={!open}
        onClick={closeMenu}
      />

      {/* mobile slide-out */}
      <aside
        id="mobile-nav"
        className={`panel ${open ? "open" : ""}`}
        aria-hidden={!open}
        ref={panelRef}
      >
        <ul
          className="menu menu--mobile"
          onClick={(e) => e.target.closest("a") && closeMenu()}
        >
          {links.map((l, idx) => (
            <li key={l.to}>{renderLink(l, idx, firstLinkRef)}</li>
          ))}
        </ul>
      </aside>
    </nav>
  );
}
