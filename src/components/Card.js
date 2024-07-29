import PropTypes from 'prop-types';
import './Card.scss';

function Card({ logements }) {
    const displayedLogements = logements.slice(0, 6);
    return (
        <>
            {displayedLogements.map((logement) => (
                <div className="card" key={logement.id}>
                    <div className="card__content">
                        <h2>{logement.title}</h2>
                    </div>
                </div>
            ))}
        </>
    );
}

Card.propTypes = {
    logements: PropTypes.array.isRequired
};

export default Card;
