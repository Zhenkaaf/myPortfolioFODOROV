import './projects.scss';
import { worksProjects } from '../../data/worksProjects';
import ProjectItemCard from '../../components/projectItemCard/ProjectItemCard';

const Projects = () => {
    return (
        <div className="projects">
            <div className="container">
                <p className="projects__desc">On this page you can see my own realized projects and ideas.
                </p>
                <div className="projects__items">
                    {worksProjects.map(item => (
                         <ProjectItemCard item={item} key={item.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Projects;