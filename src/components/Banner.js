import './Banner.scss'

function Banner({ img, text, removeOverlay }) {
    return (
        <div className={`banner ${removeOverlay ? 'no-overlay' : ''}`}>
            <img className="banner__img" src={img} alt="Photo d'un paysage" />
            <div className="banner__text">{text}</div>
        </div>
    )
}
export default Banner;