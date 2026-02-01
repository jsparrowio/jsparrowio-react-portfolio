import Skills from '../components/SkillList';
import me from '../assets/me.jpg';

export default function AboutMePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-left">
          <p className="kicker">Hi — I’m Josh.</p>
          <h2 className="hero-title">Full-Stack Developer & Systems Builder</h2>
          <p className="hero-subtitle">
            I build scalable web apps, APIs, and production-style self-hosted infrastructure.
            I’m strongest on the backend, and I love shipping clean, reliable systems.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-secondary"
              href="https://github.com/jsparrowio"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-secondary"
              href="https://www.linkedin.com/in/joshua-garrett-121790297/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-card">
            <div className="user" style={{ backgroundImage: `url(${me})` }} />
            <div className="profile-meta">
              <h3 className="profile-name">Joshua Garrett</h3>
              <ul className="profile-list">
                <li>
                  <b>Location:</b> San Francisco Bay Area, CA
                </li>
                <li>
                  <b>Status:</b> Open to opportunities
                </li>
                <li>
                  <b>Email:</b>{' '}
                  <a href="mailto:jsparrowio@outlook.com">jsparrowio@outlook.com</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2 className="section-title">About</h2>

        <div className="content-grid">
          <div className="content-card">
            <h3>What I do</h3>
            <p>
              I’m a full-stack developer specializing in MERN and PERN stacks, with a focus on
              backend architecture, APIs, and auth flows. I like building systems that are
              dependable, understandable, and easy to maintain.
            </p>
            <ul className="bullets">
              <li>Backend APIs (REST/GraphQL), auth (JWT/OIDC), data modeling</li>
              <li>Frontend UI in React with TypeScript when it helps the product</li>
              <li>Deployment + operations with Docker and production-style tooling</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>My edge</h3>
            <p>
              Before software, I spent 9+ years in retail leadership. That taught me how to run
              complex operations, lead teams, and ship changes with real users in mind.
            </p>
            <ul className="bullets">
              <li>Strong communication + ownership</li>
              <li>Comfortable with ambiguity and troubleshooting</li>
              <li>Business + customer empathy baked into engineering decisions</li>
            </ul>
          </div>

          <div className="content-card content-card--wide">
            <h3>Skills</h3>
            <div className="skills-row">
              <Skills />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
