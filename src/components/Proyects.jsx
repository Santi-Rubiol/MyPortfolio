import './proyect.css'

const Proyect = ({ title, description, url, image }) => {
    return <ul className="proyectUl">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url} target="_blank">
            <img src={image} alt={title} />
        </a>

    </ul>
}

export default Proyect