import Experience from "../components/Experience"
import Skill from "../components/Skill"
import data from '../../data.json'
import { scrollToSection } from './SideBar'


const Content = () => {
    const skills = data.skills
    const laboralExperience = data.laboralExperience

    return <main className="main">
        <div id="aboutMeSection" className="aboutMe">
            <h2>Sobre Mí</h2>
            <p>
                Egresado de la <b>Universidad Tecnológica Nacional</b>, busco nuevos retos constantemente, me encanta ponerme a prueba y aprender cosas nuevas, soy una persona muy curiosa. Me apasionan las matemáticas.
                <br />
                Cuento con sólidos conocimientos en la comprensión de algoritmos
                complejos y versatilidad y lógica para resolver diversos problemas, respaldados por años de experiencia en programación. Soy una persona dispuesta y capaz de realizar cualquier tarea.
            </p>
        </div>

        <div id="laboralExperienceSection">
            <h2>Experiencia Laboral</h2>
            <li className="laboralExperienceContent">
                {laboralExperience.map((experience, index) => (
                    <Experience key={index} title={experience.title} rol={experience.rol} time={experience.time} text={experience.text} />
                ))}
            </li>
        </div>

        <div id="skillsSection">
            <h2>Mis Skills</h2>
            <li className="skillsContent">
                {skills.map((skill, index) => (
                    <Skill key={index} name={skill.name} image={skill.image} />
                ))}
            </li>
        </div>

        <button className="btn-fixed" onClick={() => scrollToSection('headerSection')}>Inicio</button>


    </main>
}

export default Content