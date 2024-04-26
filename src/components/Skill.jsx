import './skill.css'

const Skill = ({ name, image }) => {

    return <ul>
        <figure className="skillCard">
            <div className="corner left-top"></div>
            <div className="corner left-bottom"></div>
            <div className="corner right-top"></div>
            <div className="corner right-bottom"></div>
            <img src={image} alt={name} />
            <figcaption>
                <h3>{name}</h3>
                {/* <p>
                258 Serenity Lane, Crestwood Hills
            </p> */}
            </figcaption>
        </figure>
    </ul>
}

export default Skill