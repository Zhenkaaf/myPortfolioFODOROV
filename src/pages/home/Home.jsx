import './home.scss';
import { init } from 'ityped';
import { useEffect } from 'react';
import { useRef } from 'react';
import me from './../../img/me.jpg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Home = () => {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1000,
            typeSpeed: 250,
            showCursor: true,
            strings: ['work or', 'internship']
        })
    }, [])
    //<p className="info__text">I'm looking for a Junior Trainee Front-end developer (React)</p>
    return (
        <div className="home">
            <div className="wrapper">
                <div className="left">
                    <div className="photo">
                        <div className="photo__background">
                            <img className="photo__img" src={me} alt="" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="info">
                        <div className="info__top">
                            <h2 className="info__title">Hi! I'm Yevhen Fodorov</h2>
                            <p className="info__text">I'm looking for <span ref={textRef}></span></p>
                            <p className="info__text">as a Junior Trainee Front-end developer (React)</p>
                        </div>
                        <div className="info__bottom">
                            <p className="info__text bottom_text">You can download my CV by clicking button under:</p>
                            <KeyboardArrowDownIcon className="info__img"/>
                            <div className="info__cv">
                                <a href="https://drive.google.com/file/d/11uvOkR0Kuz4af_Ezj6ze-hYMAzZ-PJUy/view?usp=sharing" download target='_blank'>Download CV</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Home;