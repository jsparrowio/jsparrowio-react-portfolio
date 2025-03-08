// import skill list component to render skill icons on page
import Skills from '../components/SkillList';
import me from '../assets/me.jpg'

// export page to be used in the main app/router
export default function AboutMePage() {
  // return the page
  return (
    <main>
      <h2>About Me</h2>
      <section className="page-section" id="aboutme">
        <div id="personal-info">
          <figure className="user" style={{backgroundImage: `url(${me})`}}></figure>
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
          <p>My name is Josh Garrett, and I am a Full Stack Developer, having recently earned my certificate in MERN/PERN Full Stack Web Development from the University of Minnesota/edX Coding Bootcamp. </p>
          <p>My previous professional experience has been chiefly in the retail landscape, holding 9+ years of retail leadership positions. However, I do feel this has prepared me for a future in the development world as it gave me invaluable experience working with teams, strong business acumen, developing great time management and organizational skills, and understanding the needs of clients. I also worked first-hand with ever-evolving technology in the retail landscape, often spearheading new technological rollouts and helping the team become accustom to new tech.</p>
          <p>Beyond professional experience, I have worked with tech since a young age. I repaired my first computer at an early age, wrote my first website in HTML, php, and mySQL at 14, and have done several smaller hobby projects with code and hardware since. I have strong technical acumen, am a fast paced learner, and am always ready to take on a new challenge.</p>
          <p>Look out for my future projects, and to see what comes next from Jsparrowio Website and Application Design.</p>
          <p>Stay tuned!</p>
          <br />
          <h3>Skills:</h3>
          <p><Skills /></p>
        </div>
        <div className='placeholder' id="about-right"></div>
      </section>
    </main>
  );
}