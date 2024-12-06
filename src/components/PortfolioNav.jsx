import { ProjectList } from './ProjectList';

export default function PortfolioNav() {
    
    return (
        ProjectList.map((project) =>
                <a href={`#${project.id}`} key={project.id+'nav-link'}><h4>{`${project.name}`}</h4></a>
        )
    ) }