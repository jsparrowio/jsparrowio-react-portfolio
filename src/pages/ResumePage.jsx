// export page to be used in the main app/router
export default function ResumePage() {

  // return the page
  return (
    <main>
      <h2>Resume</h2>
      <section className="page-section" id="aboutme">
        <div id="placeholder">
          <a href="https://docs.google.com/document/d/1rj9FzBkYMO6F1fcSwzQUrxo-EytDBoBK/edit?usp=sharing&ouid=113933529286083268853&rtpof=true&sd=true"><img src="https://www.svgrepo.com/show/5908/text-document.svg" className="pdf" style={{ maxHeight: '15px', maxWidth: '15px' }}></img>Download My Resume!</a>
        </div>
        <div className="section-content-div" id="resume">
          <h3>Front End Profeciencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React with JS & TS</li>
            <li>JavaScript</li>
            <li>Flexbox/Responsive Mobile First Design</li>
          </ul>
          <h3>Back End Profeciencies</h3>
          <ul>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>Express.js</li>
            <li>Vite</li>
            <li>JWT Authentication with Bcrypt</li>
            <li>SQL, Sequelize</li>
            <li>PostgreSQL</li>
            <li>NoSQL with MongoDB</li>
            <li>Apollo & GraphQL</li>
            <li>APIs and REST APIs</li>
            <li>Base level Python</li>
            <li>Base level php</li>
          </ul>
          <h3>Other Applicable Skills</h3>
          <ul>
            <li>GitHub/git</li>
            <li>npm</li>
            <li>Vitest</li>
            <li>Cypress</li>
            <li>CI/CD Pipeline</li>
            <li>Prompt engineering (AI) with LLMs</li>
            <li>9+ years team leadership</li>
            <li>10+ years team collaboration</li>
            <li>Excellent time management</li>
            <li>Business acumen & experienced communication with high-level executives</li>
          </ul>
        </div>
        <div className='placeholder'></div>
      </section>
    </main>
  );
}
