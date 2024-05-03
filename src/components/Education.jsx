import './education.css'

const Education = ({ place, title, time, text }) => {
    return <ul className='educationUl'>
        <h4>{place}</h4>
        <div className='educationHeader'>
            <h3>{title}</h3>
            <h4>{time}</h4>
        </div>
        <p>{text}</p>
    </ul>

}

export default Education