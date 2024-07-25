import './Footer.scss'
import logo from '../assets/logo-white.png';

function Footer() {
    return (
        <footer className="App-footer">
            <img src={logo} className="App-logo" alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer;