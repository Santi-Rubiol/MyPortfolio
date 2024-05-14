export function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId)
    console.log(sectionId)
    if (section) {
        section.scrollIntoView({ behavior: "smooth" })
    }
}


const SideBar = ({ titles }) => {
    // Convertimos el objeto titles a un array de secciones
    const sections = Object.entries(titles).map(([id, name]) => ({
        id: id + "Section", // Añade "Section" al id
        name: name // Utiliza el valor como nombre
    }))

    return (
        <div className="sidebar">
            <ul>
                {sections.map((section, index) => (
                    <li key={index} onClick={() => scrollToSection(section.id)}>
                        <p>{section.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideBar