import { skillGroups } from '../data/portfolio.js';

function Skills() {
  return (
    <section id="skills" className="section-shell skills-section">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Technology stack</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="badge-row">
              {group.skills.map((skill) => (
                <span className="badge badge-light" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
