import './works.scss';
import { worksProjects } from '../../data/worksProjects';
import ProjectItemCard from '../../components/projectItemCard/ProjectItemCard';

const Works = () => {
    return (
        <div className="works">
            <div className="container">
                <p className="works__desc">On this page you can see my own projects. Some of them are real test tasks, from IT companies, which I have completed. And some of them are my realized ideas. 
                </p>
                <div className="works__items">
                    {worksProjects.map(item => (
                         <ProjectItemCard item={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Works;