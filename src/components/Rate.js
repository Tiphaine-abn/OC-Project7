import starActive from '../assets/Star-active.svg';
import starInactive from '../assets/Star-inactive.svg';
import './Rate.scss';

function Rating({ rating }) {
    const rate = [1, 2, 3, 4, 5]
    return (
        <div className="rating-container">
            {rate.map((rateStars) =>
                rating >= rateStars ? (
                    <img src={starActive} alt="Active Star" key={rateStars} className="rating-star" />
                ) : (
                    <img src={starInactive} alt="Inactive Star" key={rateStars} className="rating-star" />
                )
            )}
        </div>
    );
}
export default Rating;