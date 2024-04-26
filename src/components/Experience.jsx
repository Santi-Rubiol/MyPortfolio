import './experience.css'

const Experience = ({ title, rol, time, text }) => {
    return <ul>
        <div className='experienceHeader'>
            <h3>{title}</h3>
            <h4>{time}</h4>
        </div>
        <h4>{rol}</h4>
        <p>{text}</p>
    </ul>

}

export default Experience