import Skills from '../components/SkillList';

export default function AboutMePage() {
  return (
    <>
    <h2>About Me</h2>
    <section className="page-section" id="aboutme">
    <div>
    <figure className="user main-user"></figure>
      <h3>Joshua Garrett</h3>
      <ul>
        <li><b>Location:</b> San Francisco Bay Area, California</li>
        <li><b>Current Role:</b> Open to new opportunities!</li>
        <li><b>Contact:</b> <a href="mailto:jsparrowio@outlook.com">jsparrowio@outlook.com</a></li>
        <li><b>GitHub:</b> <a href="https://github.com/jsparrowio">jsparrowio</a></li>
      </ul>
    </div>
    <div className="section-content-div" id="about">
        <h3>Greetings!</h3>
        <p>My name is Josh Garrett! More details coming soon...</p>
        <p>Stay tuned!</p>
        <br />
        <h3>Skills:</h3>
        <p><Skills /></p>
    </div>
</section>
</>
  );
}