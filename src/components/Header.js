import logo from '../assets/logo.svg';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
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