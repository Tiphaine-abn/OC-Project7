import './Footer.scss'
import logo from '../assets/logo-white.png';

export default function Footer() {
    return (
        <footer className="App-footer">
            <img src={logo} className="App-logo" alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}