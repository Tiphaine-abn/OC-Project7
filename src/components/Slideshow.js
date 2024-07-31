import React, { useState } from 'react';
import './Slideshow.scss';
import ArrowLeft from '../assets/ArrowLeft.png';
import ArrowRight from '../assets/ArrowRight.png';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex < images.length - 1) {
                return prevIndex + 1;
            } else {
                return 0;
            }
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex > 0) {
                return prevIndex - 1;
            } else {
                return images.length - 1;
            }
        });
    }

    if (images.length === 1) {
        return (
            <div className="slideshow-container">
                <img src={images[0]} alt="Unique Slide" className="slide-image" />
            </div>
        );
    }

    return (
        <div className="slideshow-container">
            <button onClick={prevSlide} className="arrow arrow-left">
                <img src={ArrowLeft} alt="Previous Slide" />
            </button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide-image" />
            <button onClick={nextSlide} className="arrow arrow-right">
                <img src={ArrowRight} alt="Next Slide" />
            </button>
            <div className="slide-counter">
                {currentIndex + 1}/{images.length}
            </div>
        </div>
    );
};

export default Slideshow;
