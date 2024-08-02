import React, { useState } from 'react';
import './Slideshow.scss';
import ArrowLeft from '../assets/ArrowLeft.png';
import ArrowRight from '../assets/ArrowRight.png';

// Composant pour afficher une diapositive avec navigation
const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0); // Index de l'image actuelle

    // Fonction pour passer à la diapositive suivante
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex < images.length - 1) {
                return prevIndex + 1;
            } else {
                return 0;
            }
        });
    };

    // Fonction pour revenir à la diapositive précédente
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex > 0) {
                return prevIndex - 1;
            } else {
                return images.length - 1;
            }
        });
    }

    // Affichage d'une seule image si le tableau des images contient une seule image
    if (images.length === 1) {
        return (
            <div className="slideshow-container">
                <img src={images[0]} alt="Diapositive unique" className="slide-image" />
            </div>
        );
    }

    // Affichage du diaporama avec navigation
    return (
        <div className="slideshow-container">
            <button onClick={prevSlide} className="arrow arrow-left">
                <img src={ArrowLeft} alt="Diapositive précédente" />
            </button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide-image" />
            <button onClick={nextSlide} className="arrow arrow-right">
                <img src={ArrowRight} alt="Diapositive suivante" />
            </button>
            <div className="slide-counter">
                {currentIndex + 1}/{images.length}
            </div>
        </div>
    );
};

export default Slideshow;
