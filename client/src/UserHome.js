import Header from "./Header";
import { useEffect, useState, useContext } from "react";
import NavigationBar from './NavigationBar';
import { useNavigate } from "react-router-dom";
import TeamsContainer from "./TeamsContainer";
import { userContext } from "./App";



function UserHome({}){
    const navigate = useNavigate();
    const [teams, setTeams] = useState([])
 
    const [currentUser ] = useContext(userContext)
    
    useEffect(() =>{

        fetch('/teams')
        .then(res => res.json())
        .then(data => {setTeams(data)})
    }, [])

    
  function handleLogout(){
    navigate('/')
  }

  function handleDelete(){
    fetch("/logout", {
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(data => {console.log(data)
    handleLogout()
    sessionStorage.removeItem("user_data")
})
}

    const filteredTeams = teams.filter((team) => team.user_id === currentUser.id)

    const firstTeam = filteredTeams[0]
    const secondTeam = filteredTeams[1]

    console.log(teams)
    return(
        <div className="UserHome">
            <Header />
            <NavigationBar handleDelete={handleDelete}/>
            <div>
            
    { teams.length ? <TeamsContainer firstTeam={firstTeam} secondTeam={secondTeam}/> : null}
    </div>
            
            
        </div>
    )
}


export default UserHome;