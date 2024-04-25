
const Contact = ({ link, logo, logoName, text }) => {
    return <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt={logoName} />
        {/* {text} */}
    </a>

}

export default Contact