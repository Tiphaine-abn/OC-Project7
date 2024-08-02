import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.scss';

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

Card.propTypes = {
    logements: PropTypes.array.isRequired
};
