// imports ProjectList which contains the array of objects of portfolio projects
import { ProjectList } from './ProjectList';

// export the PortfolioNav function to be imported elsewhere
export default function PortfolioNav() {
    // returns an inner-page navigation link for every project object that exist in ProjectList
    return (
        ProjectList.map((project) =>
            <a href={`#${project.id}`} key={project.id + 'nav-link'}><h4>{`${project.name}`}</h4></a>
        )
    )
}