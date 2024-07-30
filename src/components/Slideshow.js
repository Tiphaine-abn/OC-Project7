import React, { useState } from 'react';
import './Slideshow.scss';
import ArrowLeft from '../assets/ArrowLeft.png';
import ArrowRight from '../assets/ArrowRight.png';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slideshow-container">
            <button onClick={prevSlide} className="arrow arrow-left">
                <img src={ArrowLeft} alt="Previous Slide" />
            </button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide-image" />
            <button onClick={nextSlide} className="arrow arrow-right">
                <img src={ArrowRight} alt="Next Slide" />
            </button>
        </div>
    );
};

export default Slideshow;
