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
                            <a /* className="item__link" */ target='_blank' href="https://zhenkaaf.github.io/LamaReactPortfolioWebsite/"><img src={ff} alt="" /></a>
                        </div>
                        <div className="item__info">
                            <p className="item__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, error maxime dolorem beatae itaque cumque repudiandae quam corrupti tempore architecto velit recusandae, alias impedit odit iusto incidunt molestias harum sequi!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                           {/*  <div className="item__links"> */}
                                <a className="item__link" href="">visit site</a>
                                <a className="item__link" href="">link to gitHub</a>
                          {/*   </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Learn;