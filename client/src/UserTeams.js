import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import NavigationBar from "./NavigationBar";
import Table from 'react-bootstrap/Table';
import TeamsContainer from "./TeamsContainer";



function UserTeams(){
    const { id } = useParams()
    const [team, setTeam] = useState([])

    useEffect(() =>{

        fetch(`/teams/${id}`)
        .then(res => res.json())
        .then(data => {setTeam(data)})
    }, [])


   console.log(team)
    
    return(
  <div>
    <NavigationBar/>
    {team.team_name ? <div>
        <h1 className="teamName">{team.team_name}</h1>
        <Table striped>
      <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          
        </tr>
      </thead>
      <tbody>
     { team.players.map((player) =>{
    return (
        <tr>
          <td>{player.position}</td>
          <td>{player.player_name}</td>
        </tr>
    )
   })}
        
      </tbody>
    </Table>
            
        </div> : null
}</div>)
}

export default UserTeams;