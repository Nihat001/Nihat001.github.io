import { projects } from '../data/portfolio.js';
import CaseStudySection from './CaseStudySection.jsx';
import ProjectCard from './ProjectCard.jsx';

function Projects() {
  return (
    <>
      <section id="projects" className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Featured Projects</p>
          <h2>Selected full-stack and software engineering work</h2>
          <p>
            A focused set of projects showing backend development, frontend implementation, API integration, database
            work, and team-based engineering.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
      <CaseStudySection />
    </>
  );
}

export default Projects;
