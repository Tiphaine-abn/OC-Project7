import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.scss';

// Composant pour afficher une liste de logements sous forme de cartes cliquables
export default function Card({ logements }) {
    return (
        <>
            {logements.map((logement) => (
                <Link to={`/accommodation/${logement.id}`} className="card" key={logement.id}>
                    <div className="card__content">
                        <img src={logement.cover} alt={logement.title} />
                        <div className="card__title-background">
                            <div className="card__title-text">
                                {logement.title}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
}

// Définition des types de props pour le composant Card
Card.propTypes = {
    logements: PropTypes.array.isRequired // La prop "logements" doit être un tableau
};
