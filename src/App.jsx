import { useState, useEffect } from "react"
import data from '../data.json'
import Header from "./layout/Header"
import SideBar from "./layout/SideBar"
import Content from "./layout/Content"
import Footer from "./layout/Footer"

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'



function App() {
  const [languaje, setLanguaje] = useState('español')
  const [aboutMe, setAboutMe] = useState('')
  const [laboralExperience, setLaboralExperience] = useState([])
  const [skills, setSkills] = useState(data.skills)
  const [education, setEducation] = useState([])
  const [proyects, setProyects] = useState([])
  const [titles, setTitles] = useState([])

  useEffect(() => {
    if (languaje === 'english') {
      setAboutMe(data.english.aboutMe)
      setLaboralExperience(data.english.laboralExperience)
      setEducation(data.education)
      setProyects(data.english.proyects)
      setTitles(data.english.titles)
    } else {
      setAboutMe(data.spanish.aboutMe)
      setLaboralExperience(data.spanish.laboralExperience)
      setEducation(data.education)
      setProyects(data.spanish.proyects)
      setTitles(data.spanish.titles)
    }
  }, [languaje])

  return (
    <div className="principalPage container-fluid">
      <div className="row">
        <div className="col-12 column">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-4 col-12 sideBar column">
          <SideBar titles={titles} />
        </div>
        <div /* style={{ backgroundImage: 'url(/backgroundContent.jpg)' }} */ className="col-lg-10 col-md-9 col-sm-8 col-12 principalContent column">
          <Content setLanguaje={setLanguaje} titles={titles} aboutMe={aboutMe} laboralExperience={laboralExperience} education={education} proyects={proyects} skills={skills} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 column">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
