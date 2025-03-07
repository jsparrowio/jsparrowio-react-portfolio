// import portfolio UI dependencies for rendering portfolio cards and the navigation for the portfolio
import PortfolioList from '../components/PortfolioList';
import PortfolioNav from '../components/PortfolioNav';

// export page to be used in the main app/router
export default function AboutMePage() {
  // return the page
  return (
    <main>
      <h2 key='portfolio-main-header'>Portfolio</h2><br />
      <section className="page-section" id="portfolio" key='port-section'>
        <div id="port-nav-container" key='port-nav-container'>
          <figure id="port-nav" key='port-nav-figure'>
            <h3 key='port-nav-header'>Projects:</h3>
            <PortfolioNav />
          </figure>
        </div>
        <div className="section-content-div" id="portfolio-div" key='port-section-div'>
          <PortfolioList />
        </div>
      </section>
    </main>
  );
}