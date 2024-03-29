import { NavLink } from "react-router-dom";
import './navbar.scss';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = ({menuOpen, setMenuOpen}) => {
    
    return (
        <div className={"navbar " + (menuOpen && "activeMobile")}>
            <div className="wrapper">
               {/*  <div className="logo"><Link className='logo__link' to='/'>Fodorov</Link></div> */}
                <nav className="menu">
                    <div className="menu__item">
                        <NavLink className='menu__link' to='/'>Home</NavLink>
                    </div>
                    <div className="menu__item">
                        <NavLink className='menu__link' to='/projects'>My projects</NavLink>
                    </div>
                    <div className="menu__item">
                        <NavLink className='menu__link' to='/learn'>How I learn</NavLink>
                    </div>
                    <div className="menu__item">
                        <NavLink className='menu__link' to='/contacts'>Contacts</NavLink>
                    </div>
                    <div className="menu__item">
                        <NavLink className='menu__link' to='/about'>About</NavLink>
                    </div>
                </nav>
                <div className="social">
                    <a href="mailto:zhenkaaf@gmail.com"><EmailIcon/></a>
                    <a href="https://t.me/Yevhen_Fodorov" target='_blank'><TelegramIcon/></a>
                    <a href="https://www.linkedin.com/in/yevhen-fodorov" target='_blank'><LinkedInIcon/></a>
                    <a href="https://github.com/Zhenkaaf?tab=repositories" target='_blank'><GitHubIcon/></a>
                    <p>+38-066-827-94-21</p>
                </div>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    )
}
export default Navbar;