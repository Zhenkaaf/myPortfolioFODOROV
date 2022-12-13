import './home.scss';
import { init } from 'ityped';
import { useEffect } from 'react';
import { useRef } from 'react';

const Home = () => {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false, 
            backDelay:  1000,
            typeSpeed:  150,
            strings: ['Fodorov', 'Yeah!' ] 
        })
    }, [])

    return (
        <div className="home">
            <div className="wrapper">
                <div className="left">
                    <div className="photo">photo
                        <img className="photo__img" src="" alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="description">
                        <h2 className="description__title">Hi! I'm Yevhen <span ref={textRef}></span></h2>
                        <p className="description__text">I am looking for a Junior Trainee Frontend (React) developer opportunity or internship.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;