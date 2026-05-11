/* ─── Navbar ─── */
/* Unit 3: Props, Router, Redux state */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../store/actions';
import { NAV_LINKS } from '../data';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Lifecycle: scroll watcher */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      /* Update Redux active section based on scroll position */
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          dispatch(setActiveSection(id));
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    dispatch(setActiveSection(id));
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#home" className="navbar__logo" onClick={() => handleNavClick('#home')}>
          <span className="navbar__logo-bracket mono">&lt;</span>
          <span className="navbar__logo-name">YourName</span>
          <span className="navbar__logo-bracket mono">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={() => handleNavClick(link.href)}
              >
                <span className="navbar__link-num mono">0{i + 1}.</span>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="navbar__resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link, i) => (
            <li key={i}>
              <a href={link.href} onClick={() => handleNavClick(link.href)}>
                <span className="mono">0{i + 1}. </span>{link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
