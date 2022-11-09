import Header from "./Header";
import { useEffect, useState, useContext } from "react";
import NavigationBar from './NavigationBar';
import { useNavigate } from "react-router-dom";
import TeamsContainer from "./TeamsContainer";




function UserHome({teams, currentUser}){
    const navigate = useNavigate();
 
    
  function handleLogout(){
    navigate('/')
  }

  function handleDelete(){
    fetch("/logout", {
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(data => {console.log(data)
    handleLogout()})
}

    const filteredTeams = teams.filter((team) => team.user_id === currentUser.id)

    const firstTeam = filteredTeams[0]
    const secondTeam = filteredTeams[1]

    
    return(
        <div className="UserHome">
            <Header />
            <NavigationBar handleDelete={handleDelete}/>
            <div>
            
    <TeamsContainer firstTeam={firstTeam} secondTeam={secondTeam}/>
    </div>
            
            
        </div>
    )
}


export default UserHome;