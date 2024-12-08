import pwsgss from '../assets/pwsgss.png';
import wdss from '../assets/wdss.png';
import pflss from '../assets/pflss.png';

export const ProjectList = [
    {
        id: 'port-1',
        name: 'This Portfolio',
        deployedLink: '',
        gitHubLink: 'https://github.com/jsparrowio/jsparrowio-react-portfolio',
        screenshot: pflss,
        contributors: 'Witten code by Josh Garrett (jsparrowio). Some code borrowed or based on code from class activities and old challenges from the UoM/edX Coding Bootcamp. Some code based on code found on Stack Overflow.',
        techUsed: 'React, JavaScript, CSS, HTML',
        description: 'This project was a portfolio for all of my coding work completing using ReactJS, CSS, and some HTML. The portfolio is meant to showcase all of my work completing as a Full Stack Developer, including work completed in the UofM/edX Full Stack Online Coding Bootcamp. The portfolio will also be kep up to date and evolved as more projects are completed and coding technologies learned. The site also contains some personal information, contact info, a contact me section, and a resume section.',
    },
    {
        id: 'port-2',
        name: 'Employee Tracker',
        deployedLink: '',
        gitHubLink: 'https://github.com/jsparrowio/employee-tracker',
        screenshot: 'https://github.com/jsparrowio/employee-tracker/raw/main/assets/main_menu_screenshot.png',
        contributors: 'Base code provided by edX and their respective developers. A portion of code written with the help of Instructor Charlie Werness, and the XPert learning assistant chatbot provided by edX. Remainder of code written by Josh Garrett (jsparrowio)',
        techUsed: 'TypeScript, node.js, npm, and postgreSQL',
        description: 'The Employee Tracker is a CMS that allows you to store, access, update, or delete employees for your organization. It allows you to assign departments, roles, salaries, and managers to said employees. It also allows you to update or delete departments and roles for the employees as well. When you run the program, you will be brought to a main menu that allows you to select which function you would like to complete, which will include all of the features mentioned above.',
    },
    {
        id: 'port-3',
        name: 'PetZeppelin',
        deployedLink: 'https://jsparrowio.github.io/pet-zeppelin/',
        gitHubLink: 'https://github.com/jsparrowio/pet-zeppelin',
        screenshot: 'https://github.com/jsparrowio/pet-zeppelin/raw/main/assets/images/login.png',
        contributors: 'Josh Garrett, Lucas Hallman, Matt Oberdalhoff, Zachary LaCore, and Zachary Lynch',
        techUsed: 'HTML, CSS (Tailwind), and JavaScript',
        description: 'When opening the initial page, the user will be presented with a login screen. Upon entering a username and password, the site will check for an existing user by that name. If the username exists, the site will confirm that the password is correct. If the username is unique, it will create a new "account" with that username and password. After logging in, the user will be able to create blog posts that will contain a title, image, and post content, as well as read previous blog posts.',
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
        name: 'Prework Study Guide',
        deployedLink: 'https://jsparrowio.github.io/prework-study-guide/',
        gitHubLink: 'https://github.com/jsparrowio/prework-study-guide',
        screenshot: pwsgss,
        contributors: 'All base code and content provided by edX and their respective developers. Additional written code and content by Josh Garrett (jsparrowio) with heavy guidance and influence from the edX/UoM Bootcamp Modules, in addition to other educational or open sources.',
        techUsed: 'HTML, CSS, and JavaScript',
        description: 'This Prework Study Guide was created for UoM Bootcamp students who were going through the Prework, in addition to being a great reference point for the basics in the subjects it contains. It contains detailed notes on HTML, CSS, Git, and JavaScript.',
    }
]
