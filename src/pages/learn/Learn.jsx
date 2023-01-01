import './learn.scss';
import { learnProjects } from '../../data/learnProjects';
import ProjectItemCard from '../../components/projectItemCard/ProjectItemCard';

const Learn = () => {
    return (
        <div className="learn">
            <div className="container">
                <p className="learn__desc">As one of ways of learning I watch videos on youtube about how other people create websites and just repeat for them.
                    During repeating I learn new ways and methods of solving tasks.
                    Also sometimes I find that some code doesn't work or outdated. So I need to google and figure out how this code works for today. I think that it is good practice for me. And based on this practice I can do similar things.
                    <hr />Below you can see some of my repeated projects.
                </p>
                <div className="learn__items">
                    {learnProjects.map(item => (
                        <ProjectItemCard item={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Learn;