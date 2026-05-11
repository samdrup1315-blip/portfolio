/* ─── Skills Section ─── */
/* Unit 3: Rendering Lists, Props, State */
import React, { useState } from 'react';
import { SKILLS } from '../data';
import './Skills.css';

/* SkillBar — child component receiving props */
const SkillBar = ({ name, level, category }) => (
  <div className="skill-bar">
    <div className="skill-bar__header">
      <span className="skill-bar__name">{name}</span>
      <span className="skill-bar__level mono">{level}%</span>
    </div>
    <div className="skill-bar__track">
      <div
        className="skill-bar__fill"
        style={{ '--target-width': `${level}%` }}
      />
    </div>
  </div>
);

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Tools'];

const Skills = () => {
  /* Local state: active filter */
  const [active, setActive] = useState('All');

  /* Rendering Lists: filter then map */
  const filtered = active === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === active);

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-num mono accent">02.</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>

        {/* Category filter pills */}
        <div className="skills__filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`skills__filter ${active === cat ? 'skills__filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Render the filtered skills list */}
        <div className="skills__grid">
          {filtered.map((skill, i) => (
            <SkillBar
              key={skill.name}   /* unique key for list rendering */
              name={skill.name}
              level={skill.level}
              category={skill.category}
            />
          ))}
        </div>

        {/* Tech stack icons row */}
        <div className="skills__stack">
          {['React', 'Redux', 'Node', 'Express', 'MongoDB', 'Git'].map(tech => (
            <div className="skills__tech-chip mono" key={tech}>{tech}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
