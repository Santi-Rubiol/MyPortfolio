import Skill from "./components/Skill"
import Contact from "./components/Contact"
import wppLogo from './assets/whatsapp-logo.svg'
import gmailLogo from './assets/gmail-logo.svg'
import linkedinLogo from './assets/linkedin-logo.svg'
import gitHubLogo from './assets/github-logo.svg'


import './style.css'

function App() {
  const urlWhatsApp = `https://wa.me/${3816204123}?text=${encodeURIComponent('Hola Santiago!')}`
  const asuntoFormateado = encodeURIComponent("Mail desde tu web")
  const cuerpoFormateado = encodeURIComponent("Hola Santiago!")
  const urlCorreo = `mailto:${"santirubiol14@gmail.com"}?subject=${asuntoFormateado}&body=${cuerpoFormateado}`


  return (
    <div className="principalPage">
      <div className="headerPrincipalData">
        <h1 className="myName">SANTIAGO RUBIOL</h1>
        <h2 className="myTitle">FULL STACK DEVELOPER <b>(STACK MERN)</b></h2>
      </div>
      <div className="headerContactData">
        <p>Tafí Viejo, Tucumán, Argentina</p>
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
      <div className="skillsContent">
        <Skill name={"Javascript"} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"} />

        <Skill name={"Python"} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Python_logo_51.svg/750px-Python_logo_51.svg.png?20210510195343"} />
      </div>
    </div>
  )
}

export default App
