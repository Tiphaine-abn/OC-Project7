import starActive from '../assets/Star-active.svg';
import starInactive from '../assets/Star-inactive.svg';
import './Rate.scss';

export default function Rating({ rating }) {
    const rate = [1, 2, 3, 4, 5]
    return (
        <div className="rating-container">
            {rate.map((rateStars) =>
                rating >= rateStars ? (
                    <img src={starActive} alt="Etoile active" key={rateStars} className="rating-star" />
                ) : (
                    <img src={starInactive} alt="Etoile inactive" key={rateStars} className="rating-star" />
                )
            )}
        </div>
    );
}