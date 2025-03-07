// import screenshots to be used inside the project objects
import pflss from '../assets/pflss.png';
import ccss from '../assets/ccss.png';
import aess from '../assets/aess.png'

// exports the project list to be used elsewhere
export const ProjectList = [
    {
        id: 'port-1',
        name: 'Arceust Era',
        deployedLink: 'https://arceust-era.onrender.com/',
        gitHubLink: 'https://github.com/jsparrowio/arceust-era',
        screenshot: aess,
        contributors: 'Backend/server code, user system code and design, and final CSS design by Joshua Garrett (jsparrowio). For additional credits, please see repository.',
        techUsed: 'MERN Stack, TypeScript, GraphQL/Apollo, JWT Auth, 3rd Party Pokémon APIs, Custom CSS, Ant Design, Render, GitHub Actions',
        description: 'Arceust Era is a browser mini-game using the Pokemon API. Walk through several areas in the Safari Zone, catch Pokemon, and set up your dream team!',
    },
    {
        id: 'port-2',
        name: 'Social Network API',
        deployedLink: '',
        gitHubLink: 'https://github.com/jsparrowio/social-network-api',
        screenshot: 'https://github.com/jsparrowio/social-network-api/raw/main/assets/snapiss.png',
        contributors: 'Witten code by Josh Garrett (jsparrowio)',
        techUsed: 'TypeScript, express.js, and mongoDB/mongoose',
        description: 'The social network API is a basic express.js and MongoDB based API server that handles requests to view, add, update, or delete several key social network data points such as: Users, friends, thoughts, and reactions. This API server has no front end, so much be tested using a REST API request creator such as Insomnia',
    },
    {
        id: 'port-3',
        name: 'Candidate Search',
        deployedLink: 'https://candidate-search-xray.onrender.com/',
        gitHubLink: 'https://github.com/jsparrowio/candidate-search',
        screenshot: 'https://github.com/jsparrowio/candidate-search/raw/main/src/assets/candsearchss.png',
        contributors: 'Base code provided by edX and their respective developers. Remainder of code written by Josh Garrett (jsparrowio)',
        techUsed: 'React, CSS, TypeScript, and GitHub APIs',
        description: 'This project can be used to find potential coding candidates for any coding projects. It pulls potential candiates from GitHub, puts them on a single card with their avatar and pertinent info, and allows the user to accept (to be reviewed later) or reject the candidate. Then, the user can review all saved candidates to pursue or finally reject.',
    },
    {
        id: 'port-4',
        name: 'CosmoCommute',
        deployedLink: '',
        gitHubLink: 'https://github.com/jsparrowio/cosmocommute',
        screenshot: ccss,
        contributors: 'A portion of the backend server code, user/auth system, and entire user system design by Joshua Garrett (jsparrowio). For additional credits, please see repository.',
        techUsed: 'React, TypeScript, express.js, postgreSQL, jwt auth, and NASA APIs',
        description: 'CosmoCommute is an app designed for space travelers, offering updates on interstellar traffic and space weather events. This enables users to plan safe and efficient routes for their space journeys, ensuring a seamless and informed trave; experience among the stars. Note: Due to certain factors, this app is not currently deployed. Feel free to check out the code, or even clone to run locally!',
    },
    {
        id: 'port-5',
        name: 'This Portfolio',
        deployedLink: 'https://jsparrowioportfolio.netlify.app/',
        gitHubLink: 'https://github.com/jsparrowio/jsparrowio-react-portfolio',
        screenshot: pflss,
        contributors: 'Witten code by Josh Garrett (jsparrowio). Some code borrowed or based on code from class activities and old challenges from the UoM/edX Coding Bootcamp. Some code based on code found on Stack Overflow.',
        techUsed: 'React, JavaScript, CSS, HTML',
        description: 'This project was a portfolio for all of my coding work completing using ReactJS, CSS, and some HTML. The portfolio is meant to showcase all of my work completing as a Full Stack Developer, including work completed in the UofM/edX Full Stack Online Coding Bootcamp. The portfolio will also be kep up to date and evolved as more projects are completed and coding technologies learned. The site also contains some personal information, contact info, a contact me section, and a resume section.',
    },
]
