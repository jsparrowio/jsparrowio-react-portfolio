import Navigation from '../components/Navigation';

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="brand-mark" aria-hidden="true">JG</div>
        <div className="brand-text">
          <h1>Josh Garrett</h1>
          <p className="brand-subtitle">Full-Stack Developer • MERN / PERN • Systems Builder</p>
        </div>
      </div>
      <Navigation />
    </header>
  );
}
