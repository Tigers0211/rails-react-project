import Home from './Home';
import UserHome from './UserHome';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {  useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateNewTeam from './CreateNewTeam';
import UserTeams from './UserTeams';
import CreateLeague from './CreateLeague';
import AllLeagues from './AllLeagues';


function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [teams, setTeams] = useState([])
  const navigate = useNavigate();

  

  useEffect(() =>{

    fetch('/teams')
    .then(res => res.json())
    .then(data => {setTeams(data)})
}, [])

  
  function handleLogin(user){
    navigate('/userhome')
    setCurrentUser(user)
  }



  
  return (
    <div className="App">
      
      <Routes>
      <Route path ="/" 
      element = {<Home handleLogin={handleLogin}/>}/>
      
      <Route path='/userhome'
      element = { <UserHome currentUser={currentUser} teams={teams} />}/>

      <Route path="new-team"
      element ={<CreateNewTeam/>} />

      <Route path='/teams/:id'
      element = {<UserTeams currentUser={currentUser} />} />

      <Route path='/createleague'
        element ={<CreateLeague/>}/>

      <Route path="/all-leagues"
        element={<AllLeagues/>} />
    
      </Routes>
    </div>
  );
}

export default App;
