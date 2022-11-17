import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import {useState} from 'react';
import "./Home.css";
import video from "./video.mp4"
import "./App.css"

function Home({handleLogin}){
    const [show, setShow] = useState(false);
    const [loginShow, setLoginShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLoginClose = () => setLoginShow(false);
    const handleLoginShow = () => setLoginShow(true);

    return(
        <div className="home">
            
            <video autoPlay loop muted className="video">
                <source src={video} type = 'video/mp4' />
            </video>

            <img className="secImage" src="https://upload.wikimedia.org/wikipedia/commons/9/90/SEC_new_logo.png?20101229161133" />
            <h1 className="homeTitle">Sec Fantasy Football</h1>
            <div className="buttons">
            <LoginModal show={loginShow}
             handleClose={handleLoginClose}
              handleShow={handleLoginShow}
              handleLogin={handleLogin} />
            <RegisterModal show={show}
             handleClose={handleClose}
              handleShow={handleShow}
              handleLogin={handleLogin}/>
            </div>

        </div>
    )
}

export default Home;