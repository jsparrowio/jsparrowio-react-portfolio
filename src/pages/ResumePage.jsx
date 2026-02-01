import { resumeSkills } from "../data/resume";

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-header">
        <div className="resume-hero">
          <div className="resume-hero-text">
            <h2 className="hero-title">Resume</h2>
            <p>
              Full-stack developer focused on scalable web apps, backend systems,
              and production-style infrastructure.
            </p>

            <div className="resume-actions">
              <a
                className="resume-btn primary"
                href="https://docs.google.com/document/d/1uf0P3M5Li2yba6Q5snrT8aQ6-vYCIUxm/edit?usp=sharing&ouid=113933529286083268853&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.svgrepo.com/show/5908/text-document.svg"
                  alt=""
                  className="resume-icon"
                />
                Download Resume
              </a>

              <a className="resume-btn" href="#skills">
                View Skills
              </a>
            </div>
          </div>
          <aside className="resume-hero-card">
            <div className="resume-metric">
              <div className="resume-metric-value">9+ yrs</div>
              <div className="resume-metric-label">Leadership</div>
            </div>
            <div className="resume-metric">
              <div className="resume-metric-value">MERN/PERN</div>
              <div className="resume-metric-label">Full Stack</div>
            </div>
            <div className="resume-metric">
              <div className="resume-metric-value">Docker + ZFS</div>
              <div className="resume-metric-label">Infrastructure</div>
            </div>
          </aside>
        </div>
        <section className="resume-callout">
          <h3>Strength</h3>
          <p>
            I bridge full-stack web development with production-grade infrastructure, designing and operating containerized systems with secure auth, networking, and reliability—while leading technical decisions from architecture through delivery.
          </p>
        </section>
      </div>

      <section className="resume-section" id="skills">
        <h3 className="resume-section-title">Core Technical Skills</h3>

        <div className="resume-skill-grid">
          {resumeSkills.map((group) => (
            <article
              key={group.id}
              className={`resume-skill-card ${group.featured ? "featured" : ""}`}
            >
              <div className="resume-skill-card-header">
                <h4>{group.title}</h4>
                {group.featured && (
                  <span className="resume-badge">Differentiator</span>
                )}
              </div>

              <div className="resume-chip-grid">
                {group.items.map((item) => (
                  <span key={item} className="resume-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
