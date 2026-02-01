function ExternalLink({ href, children }) {
  if (!href) return null;
  return (
    <a className="btn btn-secondary" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function ProjectCard({ project }) {
  const hasImage = Boolean(project.image);

  return (
    <article className="project-card" id={project.id}>
      <div className={`project-media ${hasImage ? '' : 'project-media--placeholder'}`}>
        {hasImage ? (
          <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" className="port-item-image" />
        ) : (
          <div className="project-placeholder">
            <div className="project-placeholder-title">{project.title}</div>
            <div className="project-placeholder-subtitle">{project.tagline}</div>
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-tagline">{project.tagline}</p>
        </div>

        <p className="project-description">{project.description}</p>

        {project.highlights?.length ? (
          <ul className="project-highlights">
            {project.highlights.map((h, idx) => (
              <li key={`${project.id}-h-${idx}`}>{h}</li>
            ))}
          </ul>
        ) : null}

        {project.tech?.length ? (
          <div className="project-tech">
            {project.tech.map((t) => (
              <span className="chip" key={`${project.id}-${t}`}>
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <div className="project-actions">
          <ExternalLink href={project.links?.live}>Live</ExternalLink>
          <ExternalLink href={project.links?.github}>GitHub</ExternalLink>
          <ExternalLink href={project.links?.caseStudy}>Case Study</ExternalLink>
        </div>
      </div>
    </article>
  );
}
