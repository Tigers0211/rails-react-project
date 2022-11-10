import Home from './Home';
import UserHome from './UserHome';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {  useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import CreateNewTeam from './CreateNewTeam';
import UserTeams from './UserTeams';
import CreateLeague from './CreateLeague';
import AllLeagues from './AllLeagues';

export const userContext = createContext()
function App() {
  const userStorage = sessionStorage.user_data ? JSON.parse(sessionStorage.user_data) : null
  const [currentUser, setCurrentUser] = useState(userStorage)

  const navigate = useNavigate();


  function handleLogin(){
    navigate('/userhome')
    window.location.reload()
  }


  return (
    <div className="App">
      <userContext.Provider value={[currentUser, setCurrentUser]}>
      <Routes>
      <Route path ="/" 
      element = {<Home handleLogin={handleLogin}/>}/>
      
      <Route path='/userhome'
      element = { <UserHome/> }/>

      <Route path="/new-team"
      element ={<CreateNewTeam/>} />

      <Route path='/teams/:id'
      element = {<UserTeams  />} />

      <Route path='/createleague'
        element ={<CreateLeague/>}/>

      <Route path="/all-leagues"
        element={<AllLeagues/>} />
    
      </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
