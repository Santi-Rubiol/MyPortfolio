import myPhoto from '../assets/myPhotos/porfile_Photo.jpg'

const Header = () => {

    return <header className="header" id='headerSection'>
        <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-4 col-12">
                <div className="photoContent">
                    <img src={myPhoto} />
                </div>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-8 col-12">
                <h1 className="contentName">
                    {"SANTIAGO RUBIOL"}
                </h1>
                <h2 className="myTitle">FULL STACK DEVELOPER <b>(STACK MERN)</b></h2>
            </div>

        </div>
    </header>
}

export default Header