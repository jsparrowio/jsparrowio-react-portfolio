import tfs from '../assets/tfs.png'
import pflss from '../assets/pflss.png';
import ccss from '../assets/ccss.png';
import aess from '../assets/aess.png';

export const projects = [
  {
    id: 'fierrett-sphere',
    title: 'The Fierrett Sphere',
    tagline: 'Self-hosted production-grade infrastructure platform',
    description:
      'Designed and operated a multi-service self-hosted platform integrating authentication, storage, media services, networking, and automation.',
    highlights: [
      'Docker-based service orchestration with segmented networking',
      'SSO / OIDC authentication using Authentik across multiple apps',
      'Reverse proxy + Cloudflare Tunnel + Tailscale access patterns',
      'ZFS snapshotting, replication, and backup workflows',
      'Automated updates and notifications with container tooling',
    ],
    tech: ['Docker', 'Linux', 'ZFS', 'Authentik', 'Tailscale', 'Cloudflare', 'Networking'],
    links: {
      github: '',
      live: '',
    },
    category: 'infrastructure',
    featured: true,
    image: tfs,
  },
  {
    id: 'arceust-era',
    title: 'Arceust Era',
    tagline: 'Full-stack Pokémon web game with GraphQL backend',
    description:
      'Built a full-stack browser game integrating third-party Pokémon APIs with custom backend logic, authentication, and persistent user data.',
    highlights: [
      'GraphQL API with Apollo and JWT authentication',
      'Dynamic game state + team-building mechanics',
      'MongoDB data modeling for user and team persistence',
      'CI workflow using GitHub Actions; deployed on Render',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'MongoDB', 'JWT', 'GitHub Actions'],
    links: {
      live: 'https://arceust-era.onrender.com/',
      github: 'https://github.com/jsparrowio/arceust-era',
    },
    category: 'fullstack',
    featured: true,
    image: aess,
  },
  {
    id: 'social-network-api',
    title: 'Social Network API',
    tagline: 'Scalable REST API for social platform data',
    description:
      'Designed and implemented a RESTful API supporting users, posts (thoughts), reactions, and friend relationships with MongoDB.',
    highlights: [
      'Express + TypeScript backend architecture',
      'MongoDB schema design with Mongoose',
      'CRUD operations for users, thoughts, reactions, and friends',
      'Tested and documented endpoints using API clients (e.g., Insomnia)',
    ],
    tech: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Mongoose'],
    links: {
      github: 'https://github.com/jsparrowio/social-network-api',
      live: '',
    },
    category: 'backend',
    featured: false,
    image: 'https://github.com/jsparrowio/social-network-api/raw/main/assets/snapiss.png',
  },
  {
    id: 'candidate-search',
    title: 'Candidate Search',
    tagline: 'GitHub candidate discovery + review workflow',
    description:
      'Built a React app that pulls potential candidates from GitHub and enables a save/reject workflow, plus a saved-candidates review view.',
    highlights: [
      'Typed React UI with a practical review workflow',
      'GitHub API integration for candidate sourcing',
      'Stateful save/reject interactions and saved list management',
    ],
    tech: ['React', 'TypeScript', 'CSS', 'GitHub API'],
    links: {
      live: 'https://candidate-search-xray.onrender.com/',
      github: 'https://github.com/jsparrowio/candidate-search',
    },
    category: 'frontend',
    featured: false,
    image: 'https://github.com/jsparrowio/candidate-search/raw/main/src/assets/candsearchss.png',
  },
  {
    id: 'cosmocommute',
    title: 'CosmoCommute',
    tagline: 'Space travel planning app with auth + NASA APIs',
    description:
      'Collaborative full-stack app concept for space travelers: interstellar traffic + space weather updates to plan safer routes.',
    highlights: [
      'Auth + user system contributions (design + implementation)',
      'Backend work with Express and PostgreSQL',
      'Third-party API integration (NASA) for data sourcing',
      'Not currently deployed — runnable locally from the repository',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'NASA APIs'],
    links: {
      github: 'https://github.com/jsparrowio/cosmocommute',
      live: '',
    },
    category: 'fullstack',
    featured: false,
    image: ccss,
  },
  {
    id: 'this-portfolio',
    title: 'This Portfolio',
    tagline: 'React/Vite portfolio site (this website)',
    description:
      'Personal portfolio built with React and Vite; focused on clear presentation, fast iteration, and a simple information architecture.',
    highlights: [
      'Component-driven layout with reusable UI elements',
      'Project data centralized for easier updates',
      'Responsive improvements and content polish over time',
    ],
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'HTML'],
    links: {
      live: 'https://jsparrowioportfolio.netlify.app/',
      github: 'https://github.com/jsparrowio/jsparrowio-react-portfolio',
    },
    category: 'frontend',
    featured: false,
    image: pflss,
  },
];

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'featured', label: 'Featured' },
  { id: 'fullstack', label: 'Full-stack' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'infrastructure', label: 'Infrastructure' },
];
