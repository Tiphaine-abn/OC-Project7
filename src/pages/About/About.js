import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Img2 from '../../assets/Img2.png'


function About() {
    return (
        <>
            <div className="about"></div>
            <Header />
            <main>
                <Banner img={Img2} text="" removeOverlay={true} />
            </main>
        </>
    )
}

export default About;