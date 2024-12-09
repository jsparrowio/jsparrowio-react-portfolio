// import the project UI component that will render a project card for every project
// project list contains the array of objects of portfolio projects
import Project from './UI/Project';
import { ProjectList } from './ProjectList';

// export the PortfolioList function to be imported elsewhere
export default function PortfolioList() {
    // returns a Project card for every project in ProjectList
    return (
        <Project
            projectsArray={ProjectList}
        />
    );
}