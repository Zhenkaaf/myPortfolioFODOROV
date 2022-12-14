import './projectItemCard.scss';


const ProjectItemCard = ({ item}) => {
    return (
        <div className="learn__item item">
            <div className="item__img">
                <a target='_blank' rel="noreferrer" href={item.link}><img src={item.img} alt="" /></a>
            </div>
            <div className="item__info">
                <p className="item__desc">{item.description}</p>
                {item.linkToRequrements && <a className="item__link" rel="noreferrer" target='_blank' href={item.linkToRequrements}>Requirements</a>}
                <a className="item__link" rel="noreferrer" target='_blank' href={item.link}>Visit website</a>
                <a className="item__link" rel="noreferrer" target='_blank' href={item.gitHubLink}>Link to gitHub</a>
            </div>
        </div>
    )
}
export default ProjectItemCard;

