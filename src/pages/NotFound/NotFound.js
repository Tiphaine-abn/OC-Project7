import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './NotFound.scss';

function NotFound() {
    return (
        <>
            <Header />
            <main className="main">
                <div className="error-page">
                    <h1>404</h1>
                    <p>Oups ! La page que vous demandez n'existe pas.</p>
                    <a href='/'>Retourner sur la page d’accueil</a>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default NotFound;