export function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({ behavior: "smooth" })
    }
}

const sections = [
    { 'id': "aboutMeSection", "name": "Sobre Mí" },
    { 'id': "laboralExperienceSection", "name": "Experiencia Laboral" },
    { 'id': "skillsSection", "name": "SKILLS" },
    { 'id': "educationSection", "name": "Educación" },
    { 'id': "contactSection", "name": "¡Contáctame!" }
]

const SideBar = () => {
    return <div className="sidebar">
        <li>
            {sections.map((section, index) => (
                <ul key={index}
                    onClick={() => scrollToSection(section.id)}>
                    <p>{section.name}</p>
                </ul>
            ))}
        </li>
    </div>
}

export default SideBar