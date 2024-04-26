import Contact from "../components/Contact"
import wppLogo from '../assets/whatsapp-logo.svg'
import gmailLogo from '../assets/gmail-logo.svg'
import linkedinLogo from '../assets/linkedin-logo.svg'
import gitHubLogo from '../assets/github-logo.svg'


const Footer = () => {
    const urlWhatsApp = `https://wa.me/${3816204123}?text=${encodeURIComponent('Hola Santiago!')}`
    const asuntoFormateado = encodeURIComponent("Mail desde tu web")
    const cuerpoFormateado = encodeURIComponent("Hola Santiago!")
    const urlCorreo = `mailto:${"santirubiol14@gmail.com"}?subject=${asuntoFormateado}&body=${cuerpoFormateado}`

    return <footer className="footer">
        <div id="contactSection" className="footerContactData">
            {/* <p>Tafí Viejo, Tucumán, Argentina</p> */}
            <h3>¡Contáctame!</h3>
            { }
            <Contact
                text={"+54 3816 204123"}
                link={urlWhatsApp}
                logo={wppLogo}
                logoName={"WhatsApp"}
            />
            <Contact
                text={"santirubiol14@gmail.com"}
                link={urlCorreo}
                logo={gmailLogo}
                logoName={"Mail"}
            />
            <Contact
                text={"Linkedin"}
                link={"https://www.linkedin.com/in/santiago-rubiol/"}
                logo={linkedinLogo}
                logoName={"Linkedin"}
            />
            <Contact
                text={"GitHub"}
                link={"https://github.com/Santi-Rubiol"}
                logo={gitHubLogo}
                logoName={"GitHub"}
            />
        </div>
    </footer>
}

export default Footer