// export page to be used in the main app/router
export default function ResumePage() {

  // return the page
  return (
    <main>
      <h2>Resume</h2>
      <section className="page-section" id="aboutme">
        <div id="placeholder">
          <a href="https://docs.google.com/document/d/16_u4JoRZl38GEvdG8X8C-rB6o40_h6Nz/edit?usp=sharing&ouid=113933529286083268853&rtpof=true&sd=true"><img src="https://www.svgrepo.com/show/5908/text-document.svg" className="pdf" style={{ maxHeight: '15px', maxWidth: '15px' }}></img>Download My Resume!</a>
        </div>
        <div className="section-content-div" id="resume">
          <h3>Front End Profeciencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>Flexbox/Responsive Mobile First Design</li>
          </ul>
          <h3>Back End Profeciencies</h3>
          <ul>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>Express.js & Vite</li>
            <li>SQL, Sequalize</li>
            <li>PostgreSQL</li>
            <li>APIs and REST APIs</li>
            <li>php</li>
          </ul>
          <h3>Other Applicable Skills</h3>
          <ul>
            <li>GitHub/git</li>
            <li>npm</li>
            <li>9+ years team leadership</li>
          </ul>
        </div>
        <div className='placeholder'></div>
      </section>
    </main>
  );
}
