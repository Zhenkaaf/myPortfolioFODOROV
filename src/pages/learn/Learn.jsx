import './learn.scss';
import { learnProjects } from '../../data/learnProjects';

const Learn = () => {
    return (
        <div className="learn">
            <div className="container">
                <p className="learn__desc">As one of ways of learning I watch videos on youtube about how other people create websites and just repeat for them.
                    During repeating I learn new ways and methods of solving tasks.
                    Also sometimes I find that some code doesn't work or outdated. So I need to google and figure out how this code works for today. I think that it is good practice for me. And based on this practice I can do similar things.
                    <hr />Below you can see some of my repeated projects
                </p>
                <div className="learn__items">
                    {learnProjects.map(item => (
                        <div className="learn__item item" key={item.id}>
                            <div className="item__img">
                                <a target='_blank' rel="noreferrer" href={item.link}><img src={item.img} alt="" /></a>
                            </div>
                            <div className="item__info">
                                <p className="item__desc">{item.description}</p>
                                <a className="item__link" rel="noreferrer" target='_blank' href={item.link}>Visit website</a>
                                <a className="item__link" rel="noreferrer" target='_blank' href={item.gitHubLink}>Link to gitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Learn;