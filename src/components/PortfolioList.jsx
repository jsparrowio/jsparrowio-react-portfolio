import Project from './UI/Project';
import { ProjectList } from './ProjectList';

export default function PortfolioList() {
    return (
        <Project
            projectsArray={ProjectList}
        />
    );
}