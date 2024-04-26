import Experience from "./components/Experience"
import Skill from "./components/Skill"
import Contact from "./components/Contact"
import wppLogo from './assets/whatsapp-logo.svg'
import gmailLogo from './assets/gmail-logo.svg'
import linkedinLogo from './assets/linkedin-logo.svg'
import gitHubLogo from './assets/github-logo.svg'
import data from '../data.json'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function App() {
  const urlWhatsApp = `https://wa.me/${3816204123}?text=${encodeURIComponent('Hola Santiago!')}`
  const asuntoFormateado = encodeURIComponent("Mail desde tu web")
  const cuerpoFormateado = encodeURIComponent("Hola Santiago!")
  const urlCorreo = `mailto:${"santirubiol14@gmail.com"}?subject=${asuntoFormateado}&body=${cuerpoFormateado}`

  const skills = data.skills
  // const contacts = data.contacts


  return (
    <div className="container-fluid principalPage">
      <div className="row">
        <div className="col-2 sideBar">
          AAA
        </div>
        <div className="col-10">
          <header className="header">
            <div className="headerPrincipalData">
              <h1 className="myName">SANTIAGO RUBIOL</h1>
              <h2 className="myTitle">FULL STACK DEVELOPER <b>(STACK MERN)</b></h2>
            </div>
          </header>

          <main className="main">
            <h2>Sobre Mí</h2>
            <div className="aboutMe">
              <p>
                Egresado de la <b>Universidad Tecnológica Nacional</b>, busco nuevos retos constantemente, me encanta ponerme a prueba y aprender cosas nuevas, soy una persona muy curiosa. Me apasionan las matemáticas.
                <br />
                Cuento con sólidos conocimientos en la comprensión de algoritmos
                complejos y versatilidad y lógica para resolver diversos problemas, respaldados por años de experiencia en programación. Soy una persona dispuesta y capaz de realizar cualquier tarea.
              </p>
            </div>

            <div>
              <h2>Experiencia Laboral</h2>
              <Experience
                title={"AA"}
                rol={"BB"}
                time={"CC"}
                text={"DD"} />
            </div>

            <div>
              <h2>Mis Skills</h2>
              <li className="skillsContent">
                {skills.map((skill, index) => (
                  <Skill key={index} name={skill.name} image={skill.image} />
                ))}
              </li>
            </div>

          </main>
          <footer className="footer">
            <div className="footerContactData">
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
        </div>


      </div>

    </div>
  )
}

export default App
