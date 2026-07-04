function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <div className="project-header">
        <div>
          <p className="project-type">{project.type}</p>
          <h3>{project.title}</h3>
        </div>
        <span className="status-pill">{project.status}</span>
      </div>
      <p>{project.description}</p>
      <div className="badge-row" aria-label={`${project.title} tech stack`}>
        {project.stack.map((item) => (
          <span className="badge" key={item}>
            {item}
          </span>
        ))}
      </div>
      {project.note ? <p className="project-note">{project.note}</p> : null}
      {project.actions?.length ? (
        <div className="project-actions" aria-label={`${project.title} links`}>
          {project.actions.map((action) => (
            <a
              className={`button project-button ${
                action.variant === 'primary' ? 'button-primary' : 'button-secondary'
              }`}
              href={action.href}
              key={action.label}
              rel={action.external ? 'noopener noreferrer' : undefined}
              target={action.external ? '_blank' : undefined}
            >
              {action.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default ProjectCard;
