import { Link } from "react-router-dom";
import './navbar.scss';



const Navbar = () => {
    
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="logo">Fodorov</div>
                <nav className="menu">
                    <div className="menu__item">
                        <Link className='menu__link' to='/products/1'>Home</Link>
                    </div>
                    <div className="menu__item">
                        <Link className='menu__link' to='/products/1'>Works</Link>
                    </div>
                    <div className="menu__item">
                        <Link className='menu__link' to='/products/1'>How I learn</Link>
                    </div>
                    <div className="menu__item">
                        <Link className='menu__link' to='/products/1'>Contacts</Link>
                    </div>
                    <div className="menu__item">
                        <Link className='menu__link' to='/products/1'>About</Link>
                    </div>
                </nav>
                <div className="social">social</div>
            </div>
        </div>
    )
}
export default Navbar;