import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from "react-router-dom";
import './NotFound.scss';

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="main">
                <div className="error-page">
                    <h1>404</h1>
                    <p>Oups ! La page que vous demandez n'existe pas.</p>
                    <Link className="return-home" to='/'> Retourner sur la page d’accueil </Link>
                </div>
            </main>
            <Footer />
        </>
    )
}