import Paragraph from "../components/Paragraph"
import Experience from "../components/Experience"
import Skill from "../components/Skill"
import Education from "../components/Education"
import Proyect from "../components/Proyects"
import { scrollToSection } from './SideBar'


const Content = ({ setLanguaje, titles, aboutMe, laboralExperience, education, proyects, skills }) => {


    return <main className="main">
        <div className="btnsLanguaje">
            <button onClick={() => setLanguaje('español')}><img src={"/flags/argentinaBandera.png"} alt={"Español"} /></button>
            <button onClick={() => setLanguaje('english')}><img src={"/flags/englandFlag.png"} alt={"English"} /></button>
        </div>

        <div id="aboutMeSection" className="aboutMe">
            <h2>{titles.aboutMe}</h2>
            <Paragraph text={aboutMe} />
        </div>

        <div id="laboralExperienceSection">
            <h2>{titles.laboralExperience}</h2>
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
            <h2>{titles.proyects}</h2>
            <li className="proyectsContent">
                {
                    proyects.map((proyect, index) => (
                        <Proyect key={index} title={proyect.title} description={proyect.description} url={proyect.url} image={proyect.image} />
                    ))
                }
            </li>
        </div>

        <div id="skillsSection">
            <h2>{titles.skills}</h2>
            <li className="skillsContent">
                {skills.map((skill, index) => (
                    <Skill key={index} name={skill.name} image={skill.image} />
                ))}
            </li>
        </div>

        <div id="educationSection">
            <h2>{titles.education}</h2>
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