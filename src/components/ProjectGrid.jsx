import { useMemo, useState } from 'react';
import ProjectCard from './UI/ProjectCard';
import { projects, projectCategories } from '../data/projects';

export default function ProjectGrid() {
  const [category, setCategory] = useState('featured');

  const filtered = useMemo(() => {
    if (category === 'all') return projects;
    if (category === 'featured') return projects.filter((p) => p.featured);
    return projects.filter((p) => p.category === category);
  }, [category]);

  return (
    <section className="portfolio">
      <div className="portfolio-top">
        <div className="portfolio-copy">
          <h2 className="page-title">Portfolio</h2>
          <p className="page-subtitle">
            Selected work across full-stack apps, backend APIs, and infrastructure.
          </p>
        </div>

        <div className="filters" role="tablist" aria-label="Project categories">
          {projectCategories.map((c) => {
            const active = c.id === category;
            return (
              <button
                key={c.id}
                className={`chip chip-button ${active ? 'chip--active' : ''}`}
                onClick={() => setCategory(c.id)}
                type="button"
                role="tab"
                aria-selected={active}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="project-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
