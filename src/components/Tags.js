import './Tags.scss';

// Composant pour afficher une liste de mots clés
function Tags({ tag }) {
    return (
        <div className="tags-content">
            <ul className="tags__style">
                {tag.map((tag, index) => (
                    <li className="tags__text" key={index}>
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tags;