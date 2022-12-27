import './learn.scss';
import ff from './../../img/11.png';

const Learn = () => {
    return (
        <div className="learn">
            <div className="container">
                <p className="learn__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero veniam omnis aspernatur. Veritatis voluptatem illo, nihil quibusdam deserunt odit fuga est perferendis eum quas architecto, eaque labore, in neque!
                </p>
                <div className="learn__items">
                    <div className="learn__item item">
                        <div className="item__img">
                            <a className='aaa' target='_blank' href="https://zhenkaaf.github.io/LamaReactPortfolioWebsite/"><img /* src={ff} */ src='https://images.pexels.com/photos/5702958/pexels-photo-5702958.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="" /></a>
                        </div>
                        <div className="item__info">
                            <p className="item__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, error maxime dolorem beatae itaque cumque repudiandae quam corrupti tempore architecto velit recusandae, alias impedit odit iusto incidunt molestias harum sequi!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                                <a className="item__link" href="">Visit website</a>
                                <a className="item__link" href="">Link to gitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Learn;