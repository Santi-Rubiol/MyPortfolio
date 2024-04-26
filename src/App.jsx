import Header from "./layout/Header"
import SideBar from "./layout/SideBar"
import Content from "./layout/Content"
import Footer from "./layout/Footer"

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'



function App() {
  return (
    <div className="container-fluid principalPage">
      <div className="row">
        <div className="col-2 sideBar">
          <SideBar />
        </div>
        <div className="col-10 principalContent">
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
