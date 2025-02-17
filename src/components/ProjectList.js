// import screenshots to be used inside the project objects
import wdss from '../assets/wdss.png';
import pflss from '../assets/pflss.png';
import ccss from '../assets/ccss.png';

// exports the project list to be used elsewhere
export const ProjectList = [
    {
        id: 'port-1',
        name: 'Social Network API',
        deployedLink: '',
        gitHubLink: 'https://github.com/jsparrowio/social-network-api',
        screenshot: 'https://github.com/jsparrowio/social-network-api/raw/main/assets/snapiss.png',
        contributors: 'Witten code by Josh Garrett (jsparrowio)',
        techUsed: 'TypeScript, express.js, and mongoDB/mongoose',
        description: 'The social network API is a basic express.js and MongoDB based API server that handles requests to view, add, update, or delete several key social network data points such as: Users, friends, thoughts, and reactions. This API server has no front end, so much be tested using a REST API request creator such as Insomnia',
    },
    {
        id: 'port-2',
        name: 'Candidate Search',
        deployedLink: 'https://candidate-search-xray.onrender.com/',
        gitHubLink: 'https://github.com/jsparrowio/candidate-search',
        screenshot: 'https://github.com/jsparrowio/candidate-search/raw/main/src/assets/candsearchss.png',
        contributors: 'Base code provided by edX and their respective developers. Remainder of code written by Josh Garrett (jsparrowio)',
        techUsed: 'React, CSS, TypeScript, and GitHub APIs',
        description: 'This project can be used to find potential coding candidates for any coding projects. It pulls potential candiates from GitHub, puts them on a single card with their avatar and pertinent info, and allows the user to accept (to be reviewed later) or reject the candidate. Then, the user can review all saved candidates to pursue or finally reject.',
    },
    {
        id: 'port-3',
        name: 'CosmoCommute',
        deployedLink: '',
        gitHubLink: 'https://github.com/jsparrowio/cosmocommute',
        screenshot: ccss,
        contributors: 'Josh Garrett, Ka Vue, Nic Blaize, and Sierra Bjorlin',
        techUsed: 'React, TypeScript, express.js, postgreSQL, jwt auth, and NASA APIs',
        description: 'CosmoCommute is an app designed for space travelers, offering updates on interstellar traffic and space weather events. This enables users to plan safe and efficient routes for their space journeys, ensuring a seamless and informed trave; experience among the stars. Note: Due to certain factors, this app is not currently deployed. Feel free to check out the code, or even clone to run locally!',
    },
    {
        id: 'port-4',
        name: 'Weather Dashboard',
        deployedLink: 'https://weather-dashboard-uhei.onrender.com/',
        gitHubLink: 'https://github.com/jsparrowio/weather-dashboard',
        screenshot: wdss,
        contributors: 'Base code by edX and their respective developers, written code by jsparrowio (Josh Garrett). Written code was also written with assistance from cohort instructors, TAs, and classmates.',
        techUsed: 'TypeScript, JavaScript, HTML, CSS',
        description: 'The weather dashboard was completed for our challenge of Module 9 for the UoM/edX Coding Bootcamp. It is used to find the current weather and weather forecase of a searched city. The application uses typeScript, express.js, and external API calls from OpenWeather.',
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
