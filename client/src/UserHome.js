import Header from "./Header";
import { useEffect, useState, useContext } from "react";
import NavigationBar from './NavigationBar';
import { useNavigate } from "react-router-dom";
import TeamsContainer from "./TeamsContainer";
import { userContext } from "./App";
import CreateLeague from "./CreateLeague";
import './UserHome.css'



function UserHome({}){
    const navigate = useNavigate();
    const [filteredTeams, setFilteredTeams] = useState([])
 
    const [currentUser] = useContext(userContext)
    
    useEffect(() =>{

        fetch('/teams')
        .then(res => res.json())
        .then(data => {
       filteredUsersTeams(data) })
    }, [])


    
  function handleLogout(){
    navigate('/')
  }

  function handleDelete(){
    fetch("/logout", {
        method: "DELETE",
    })
    .then((r) => {r.json()
     handleLogout()
    console.log(r)
    sessionStorage.removeItem("user_data") 
    
})
}

function filteredUsersTeams(teams){
    const newFilteredTeams = teams.filter((team) => team.user_id === currentUser.id)
        setFilteredTeams(newFilteredTeams)
}

    return(
    <div className="userHome">
       { filteredTeams.length ?
        <div className="UserHome">
            <Header />
            <NavigationBar handleDelete={handleDelete}/>
            
            
    {filteredTeams.map((team) =>{
     return <TeamsContainer key={team.id}team={team}/>   
    })}
    
            
            
        </div> :
        
        <div> <Header /> 
               
                <CreateLeague />
                </div>}
</div>
    )
}


export default UserHome;