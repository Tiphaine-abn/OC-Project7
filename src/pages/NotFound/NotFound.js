import './NotFound.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function NotFound() {
    return (
        <>
            <Header />
            <div className="error-page">
                <h1>404</h1>
                <p>Oups ! La page que vous demandez n'existe pas.</p>
                <a href='/'>Retourner sur la page d’accueil</a>
            </div>
            <Footer />
        </>
    )
}

export default NotFound;