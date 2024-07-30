import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.scss';

function Card({ logements }) {
    return (
        <>
            {logements.map((logement) => (
                <Link to={`/accommodation/${logement.id}`} className="card" key={logement.id}>
                    <div className="card__content">
                        <img src={logement.cover} alt={logement.title} />
                        <h2>{logement.title}</h2>
                    </div>
                </Link>
            ))}
        </>
    );
}

Card.propTypes = {
    logements: PropTypes.array.isRequired
};

export default Card;
