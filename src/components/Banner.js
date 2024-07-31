import './Banner.scss';

function Banner({ img, text, additionalClass }) {
    return (
        <div className={`banner ${additionalClass}`}>
            <img className="banner__img" src={img} alt="Photo d'un paysage" />
            <div className="banner__text">{text}</div>
        </div>
    )
}

export default Banner;
