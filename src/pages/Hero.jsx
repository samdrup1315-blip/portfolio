/* ─── Hero Section ─── */
import React from 'react';
import { PROFILE } from '../data';
import './Hero.css';

const Hero = () => (
  <section className="hero section" id="home">
    {/* Decorative grid background */}
    <div className="hero__grid" aria-hidden="true" />

    <div className="container hero__inner">
      <div className="hero__content">
        <p className="hero__greeting mono fade-up fade-up-1">
          <span className="accent">▸</span> Hello, world! I'm
        </p>

        <h1 className="hero__name fade-up fade-up-2">
          {PROFILE.name}<span className="accent">.</span>
        </h1>

        <h2 className="hero__role fade-up fade-up-3">{PROFILE.role}</h2>

        <p className="hero__tagline fade-up fade-up-4">
          {PROFILE.tagline}
        </p>

        <div className="hero__meta mono fade-up fade-up-5">
          <span className="hero__badge">
            <span className="hero__dot" />
            {PROFILE.available ? 'Available for internships' : 'Currently busy'}
          </span>
          <span className="hero__sep">·</span>
          <span>{PROFILE.college}</span>
          <span className="hero__sep">·</span>
          <span>{PROFILE.location}</span>
        </div>

        <div className="hero__actions fade-up fade-up-6">
          <a href="#projects" className="hero__cta">
            View my work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="hero__ghost">Get in touch</a>
        </div>
      </div>

      {/* Right: animated code block */}
      <div className="hero__code-wrap fade-up fade-up-4">
        <div className="hero__code-header">
          <span className="hero__code-dot" style={{background:'#ff5f57'}}/>
          <span className="hero__code-dot" style={{background:'#febc2e'}}/>
          <span className="hero__code-dot" style={{background:'#28c840'}}/>
          <span className="hero__code-title mono">developer.js</span>
        </div>
        <pre className="hero__code mono">
{`const developer = {
  name:   "${PROFILE.name}",
  degree: "BCA",
  stack:  [
    "React",
    "Node.js",
    "MongoDB",
    "Redux",
    "Express",
  ],
  passion: "Building things",
  status:  "open_to_work ✓",
};`}
        </pre>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="hero__scroll-hint" aria-hidden="true">
      <span className="mono">scroll</span>
      <div className="hero__scroll-line" />
    </div>
  </section>
);

export default Hero;
