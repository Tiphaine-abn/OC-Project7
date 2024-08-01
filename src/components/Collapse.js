import React, { useState } from 'react';
import './Collapse.scss';
import Arrow from '../assets/Arrow.png';


function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => { setIsOpen(!isOpen); }

    return (
        <div>
            <div className="collapse" onClick={toggle}>
                <h3>{title}</h3>
                <img src={Arrow} alt="Cliquez pour dérouler le texte"
                    className={`collapse-arrow ${isOpen ? 'open' : 'closed'}`} />
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
                {children}
            </div>
        </div >
    );
}

export default Collapse;