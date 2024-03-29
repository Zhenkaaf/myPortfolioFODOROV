import { Link } from 'react-router-dom';
import './mobileMenu.scss';


const MobileMenu = ({menuOpen, setMenuOpen}) => {

    return (
        <div className={"mobileMenu " + (menuOpen && "activeMobile")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <Link className='mobileMenu__link' to='/'>Home</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link className='mobileMenu__link' to='/projects'>My projects</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link className='mobileMenu__link' to='/learn'>How I learn</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link className='mobileMenu__link' to='/contacts'>Contacts</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link className='mobileMenu__link' to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu;