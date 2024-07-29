import './Header.scss';
import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="logo" />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "underline" : "")}>
                            À Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
