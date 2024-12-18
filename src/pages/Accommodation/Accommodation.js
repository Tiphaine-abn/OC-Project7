import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams, Navigate } from "react-router-dom"; // Importation des hooks pour la gestion des paramètres d'URL et de redirection
import logements from '../../data/logements.json';
import Slideshow from "../../components/Slideshow";
import Collapse from '../../components/Collapse';
import Tags from '../../components/Tags';
import Rate from '../../components/Rate';
import './Accommodation.scss';

// Fonction pour trouver un logement par son ID
const findLogementId = (id) => {
    return logements.find((logement) => logement.id === id);
}

// Composant pour afficher les détails d'un logement
export default function Accommodation() {
    const { id } = useParams(); // // Récupération de l'ID du logement depuis les paramètres d'URL
    const logement = findLogementId(id); // Recherche du logement correspondant à l'ID

    // Redirection vers la page NotFound si le logement n'est pas trouvé
    if (!logement) {
        return <Navigate to="/NotFound" />;
    }

    const pictures = logement.pictures; // Extraction des images du logement

    // Retourne le JSX pour afficher les détails du logement
    return (
        <>
            <Header />
            <main className="main">
                <section className="accommodation-page">
                    <div className="slideshow">
                        <Slideshow images={pictures} />
                    </div>
                    <div className="infos-section">
                        <div className="titles-contener">
                            <h1>{logement.title}</h1>
                            <h2>{logement.location}</h2>
                            <Tags tag={logement.tags} />
                        </div>
                        <div className="host-rate-container">
                            <div className="info-host__identity">
                                <p className="info-host__name">{logement.host.name}</p>
                                <img className="info-host__picture" src={logement.host.picture} alt="" />
                            </div>
                            <div className="rate">
                                <Rate rating={logement.rating} />
                            </div>
                        </div>
                    </div>
                    <div className="accommodation-collapse-container">
                        <div className="accommodation-collapse">
                            <Collapse title="Description">
                                <p>{logement.description}</p>
                            </Collapse>
                        </div>
                        <div className="accommodation-collapse">
                            <Collapse title="Équipements">
                                <ul>
                                    {logement.equipments.map((equipment, index) => (
                                        <li key={index}>{equipment}</li>
                                    ))}
                                </ul>
                            </Collapse>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}