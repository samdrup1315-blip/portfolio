/* ─── Projects Section ─── */
/* Unit 3: Rendering Lists, Props, State */
import React, { useState } from 'react';
import { PROJECTS } from '../data';
import './Projects.css';

/* ProjectCard — child component, receives project via props */
const ProjectCard = ({ project, featured }) => (
  <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
    <div className="project-card__top">
      <div className="project-card__icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
          <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
          <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
          <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        </svg>
      </div>
      <div className="project-card__links">
        <a href={project.github} target="_blank" rel="noreferrer" title="GitHub" className="project-card__link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href={project.live} target="_blank" rel="noreferrer" title="Live demo" className="project-card__link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 3H13V4M12 3L7 8M12 3H9M13 4V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 4H3C2.45 4 2 4.45 2 5V13C2 13.55 2.45 14 3 14H11C11.55 14 12 13.55 12 13V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </a>
      </div>
    </div>

    <h3 className="project-card__title">{project.title}</h3>
    <p className="project-card__desc">{project.description}</p>

    {/* Rendering list of tags */}
    <ul className="project-card__tags">
      {project.tags.map(tag => (
        <li key={tag}><span className="tag">{tag}</span></li>
      ))}
    </ul>

    <span className="project-card__year mono">{project.year}</span>
  </article>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  /* Rendering Lists with conditional slice */
  const displayed = showAll ? PROJECTS : PROJECTS.filter(p => p.featured);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-num mono accent">03.</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>

        <div className="projects__grid">
          {displayed.map((project, i) => (
            <ProjectCard
              key={project.id}       /* required key prop for list */
              project={project}      /* passing full object as prop */
              featured={project.featured}
            />
          ))}
        </div>

        <div className="projects__more">
          <button
            className="projects__toggle mono"
            onClick={() => setShowAll(s => !s)}
          >
            {showAll ? '↑ Show less' : '↓ Show all projects'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
