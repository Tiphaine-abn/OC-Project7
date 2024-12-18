import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Img1 from '../../assets/Img1.png';
import logements from '../../data/logements.json';

// Composant pour afficher la page d'accueil
export default function Home() {
    return (
        <>
            <Header />
            <main className="main">
                <Banner img={Img1} text="Chez vous, partout et ailleurs" />
                <div className="gallery">
                    <Card logements={logements} />
                </div>
            </main>
            <Footer />
        </>
    )
}
