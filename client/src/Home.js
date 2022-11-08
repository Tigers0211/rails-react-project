import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import {useState} from 'react';
import "./Home.css";

function Home(){
    const [show, setShow] = useState(false);
    const [loginShow, setLoginShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLoginClose = () => setLoginShow(false);
    const handleLoginShow = () => setLoginShow(true);

    return(
        <div className="home">
            <LoginModal show={loginShow} handleClose={handleLoginClose} handleShow={handleLoginShow}/>
            <RegisterModal show={show} handleClose={handleClose} handleShow={handleShow}/>

        </div>
    )
}

export default Home;