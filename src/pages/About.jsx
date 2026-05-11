/* ─── About Section ─── */
import React from 'react';
import { PROFILE, EDUCATION } from '../data';
import './About.css';

const About = () => (
  <section className="about section" id="about">
    <div className="container">
      <div className="section-header">
        <span className="section-num mono accent">01.</span>
        <h2 className="section-title">About me</h2>
        <div className="section-line" />
      </div>

      <div className="about__grid">
        {/* Left: bio text */}
        <div className="about__bio">
          <p>
            I'm a <strong>{PROFILE.year}</strong> student at{' '}
            <strong>{PROFILE.college}</strong>, passionate about building
            full-stack web applications. My current focus is the{' '}
            <span className="accent">MERN stack</span> — MongoDB, Express,
            React, and Node.js.
          </p>
          <p>
            I enjoy turning complex problems into clean, performant interfaces.
            My coursework covers React with Redux &amp; Redux Saga, Node.js
            event-driven architecture, and MongoDB for database access — all of
            which I apply in real projects.
          </p>
          <p>
            When I'm not coding, I'm reading tech blogs, contributing to
            open-source projects, or exploring new libraries.
          </p>

          <div className="about__tech">
            <p className="about__tech-label mono">Technologies I work with:</p>
            <ul className="about__tech-list">
              {[
                'React JS', 'Redux / Redux Saga', 'Immutable.js',
                'Node.js', 'Express.js', 'MongoDB / Mongoose',
              ].map(t => (
                <li key={t} className="mono">
                  <span className="accent">▸</span> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: education cards */}
        <div className="about__education">
          <p className="about__edu-label mono">Education</p>
          {EDUCATION.map((edu, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-card__year mono">{edu.year}</div>
              <h3 className="edu-card__degree">{edu.degree}</h3>
              <p className="edu-card__inst">{edu.institution}</p>
              <ul className="edu-card__highlights">
                {edu.highlights.map(h => (
                  <li key={h}>
                    <span className="tag">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
