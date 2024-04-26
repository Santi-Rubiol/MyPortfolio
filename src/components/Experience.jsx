
const Experience = ({ title, rol, time, text }) => {
    return <>
        <div style={{
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'start',
        }}>
            <h3>{title}</h3>
            <h4>{time}</h4>
        </div>
        <h4>{rol}</h4>
        <p>{text}</p>
    </>

}

export default Experience