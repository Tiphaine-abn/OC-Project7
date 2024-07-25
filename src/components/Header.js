import './Header.scss'
import logo from '../assets/logo.svg';


function Header() {
    return (
        <header className="header">
            <img src={logo} className="header_logo" alt="logo" />
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>À Propos</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;