import { useState, useEffect } from "react"
import Paragraph from "../components/Paragraph"
import Experience from "../components/Experience"
import Skill from "../components/Skill"
import Education from "../components/Education"
import Carrousel from "../components/Carrousel"
import Proyect from "../components/Proyects"
import data from '../../data.json'
import { scrollToSection } from './SideBar'


const Content = () => {
    const [languaje, setLanguaje] = useState('español')
    const [aboutMe, setAboutMe] = useState('')
    const [laboralExperience, setLaboralExperience] = useState([])
    const [skills, setSkills] = useState(data.skills)
    const [education, setEducation] = useState([])
    const [proyects, setProyects] = useState([])

    //let laboralExperience = data.laboralExperience

    /* let education = data.education
    let proyects = data.proyects */

    useEffect(() => {
        if (languaje === 'english') {
            setAboutMe(data.english.aboutMe)
            setLaboralExperience(data.spanish.laboralExperience)
            setEducation(data.education)
            setProyects(data.proyects)
        } else {
            setAboutMe(data.spanish.aboutMe)
            setLaboralExperience(data.spanish.laboralExperience)
            setEducation(data.education)
            setProyects(data.proyects)
        }
    }, [languaje])


    const changeLanguaje = () => {
        if (languaje === 'español') {
            setLanguaje('english')
        } else {
            setLanguaje('español')
        }
    }

    return <main className="main">
        <div>
            <button onClick={changeLanguaje}>INGLÉS</button>
        </div>

        <div id="aboutMeSection" className="aboutMe">
            <h2>Sobre Mí</h2>
            <Paragraph text={aboutMe} />
        </div>

        <div id="laboralExperienceSection">
            <h2>Experiencia Laboral</h2>
            <li className="laboralExperienceContent">
                {laboralExperience.map((experience, index) => (
                    <Experience key={index} title={experience.title} rol={experience.rol} time={experience.time} text={experience.text} />
                ))}
            </li>
        </div>

        {/* <div>
            <h4>AUXILIAR</h4>
            <Carrousel />
        </div> */}

        <div id="proyectsSection">
            <h2>Mis Proyectos</h2>
            <li className="proyectsContent">
                {
                    proyects.map((proyect, index) => (
                        <Proyect key={index} title={proyect.title} description={proyect.description} url={proyect.url} image={proyect.image} />
                    ))
                }
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

        <div id="educationSection">
            <h2>Educación</h2>
            <li className="educationContent">
                {education.map((edu, index) => (
                    <Education key={index} place={edu.place} title={edu.title} time={edu.time} text={""} />
                ))}
            </li>
        </div>

        <button className="btn-fixed" onClick={() => scrollToSection('headerSection')}>Inicio</button>
    </main>
}

export default Content