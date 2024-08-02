import React, { useState } from 'react';
import './Collapse.scss';
import Arrow from '../assets/Arrow.png';

// Composant pour afficher du contenu déroulant
export default function Collapse({ title, children }) {
    // Utilisation du hook useState pour gérer l'état ouvert/fermé du contenu
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état ouvert/fermé
    const toggle = () => { setIsOpen(!isOpen); }

    return (
        <div>
            <div className="collapse">
                <h3>{title}</h3>
                <img src={Arrow} alt="Cliquez pour dérouler le texte" onClick={toggle}
                    className={`collapse-arrow ${isOpen ? 'open' : 'closed'}`} />
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
                {children}
            </div>
        </div >
    );
}