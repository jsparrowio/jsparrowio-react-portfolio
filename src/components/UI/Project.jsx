export default function Project({ projectsArray }) {
    return (
        projectsArray.map((project) =>
            <>
                <h3 id={`${project.id}`} key={project.id+'-h3'}>{`${project.name}`}</h3>
                <div className="port-item" key={project.id+'-maindiv'}>
                    <img src={`${project.screenshot}`} className="port-item-image" key={project.id+'-img'}></img>
                    <div className="port-item-content" key={project.id+'-content-div'}>
                        <p key={project.id+'-links-p'}>
                            {project.deployedLink !== '' && (
                                <a href={project.deployedLink} key={project.id+'-deployed-link'}>
                                    <img src="https://www.freeiconspng.com/uploads/link-icon-png-14.png" style={{ maxHeight: '30px', maxWidth: '30px' }} alt="Link Icon" key={project.id+'-link-img'} />
                                </a>
                            )}
                            <a href={`${project.gitHubLink}`} key={project.id+'-github-link'}><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/dark/github.svg" key={project.id+'-gh-img'}></img></a>
                        </p>
                        <p key={project.id+'-contributors-p'}><b>Contributors:</b> {project.contributors}</p>
                        <p key={project.id+'-tech-p'}><b>Technologies Used:</b> {project.techUsed}</p>
                        <p key={project.id+'-description-p'}><b>Description:</b> {project.description}</p>
                    </div>
                </div>
            </>
        )
    );
}