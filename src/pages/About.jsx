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
    I'm <strong>Yeshey Samdrup</strong>, a <strong>{PROFILE.year}</strong> student at{' '}
    <strong>SRM University, Sikkim</strong>, passionate about full-stack web development.
  </p>
  <p>
    I enjoy working with the <span className="accent">MERN stack</span> (MongoDB, Express, React, Node.js) 
    along with Python and PHP. My goal is to build clean, efficient, and user-centric web applications.
  </p>
  <p>
    When I'm not coding, I love exploring the World around me, reading Manhwa's, 
    and working on real-world projects.
  </p>

  <div className="about__tech">
    <p className="about__tech-label mono">Technologies I work with:</p>
    <ul className="about__tech-list">
      {[
        'React JS', 'JavaScript', 'Node.js', 'Express.js',
        'MongoDB', 'Python', 'PHP', 'Redux / Saga'
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
