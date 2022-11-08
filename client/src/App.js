import Home from './Home';
import UserHome from './UserHome';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const navigate = useNavigate();
  
  function handleLogin(user){
    navigate('/userhome')
    setCurrentUser(user)
  }

  console.log(currentUser)
  return (
    <div className="App">
      <Routes>
      <Route path ="/" 
      element = {<Home handleLogin={handleLogin}/>}/>
      
      <Route path='/userhome'
      element = { <UserHome/>}/>
     
      </Routes>
    </div>
  );
}

export default App;
