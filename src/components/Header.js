import './Header.scss';
import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';

// Composant pour afficher l'en-tête
export default function Header() {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="Logo Kasa" />
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
