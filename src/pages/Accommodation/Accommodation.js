import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import logements from '../../data/logements.json';
import Slideshow from "../../components/Slideshow";

const findLogementId = (id) => {
    return logements.find((logement) => logement.id === id);
}

function Accommodation() {
    const { id } = useParams();
    const logement = findLogementId(id);
    const pictures = logement.pictures;
    return (
        <>
            <Header />
            <main className="main">
                <div className="slideshow">
                    <Slideshow images={pictures} />
                </div>
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
                <p>{logement.host.name}</p>
                <p>{logement.tags}</p>
                <p>{logement.rating}</p>
                <h2>Description</h2>
                <p>{logement.description}</p>
                <h2>Equipements</h2>
                <p>{logement.equipments}</p>
            </main>
            <Footer />
        </>
    );
}

export default Accommodation;