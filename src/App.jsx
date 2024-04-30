import Header from "./layout/Header"
import SideBar from "./layout/SideBar"
import Content from "./layout/Content"
import Footer from "./layout/Footer"

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'



function App() {
  return (
    <div className="principalPage container-fluid">
      <div className="row">
        <div className="col-12 column">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-4 col-12 sideBar">
          <SideBar />
        </div>
        <div className="col-lg-10 col-md-9 col-sm-8 col-12 principalContent column">
          <Content />
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
