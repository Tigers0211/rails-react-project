import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import NavigationBar from "./NavigationBar";
import Table from 'react-bootstrap/Table';
import "./UserTeam.css"




function UserTeams(){
    const { id } = useParams()
    const [team, setTeam] = useState([])

    useEffect(() =>{

        fetch(`/teams/${id}`)
        .then(res => res.json())
        .then(data => {setTeam(data)})
    }, [])
 console.log(team)
    const na = "N/A"
    return(
  <div className="teamCards">
    <NavigationBar/>
    {team.team_name ? <div>
        <h1 className="teamName">{team.team_name}</h1>
        <Table striped className="tableboy">
      <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Passing Yards</th>
          <th>Passing Touchdowns</th>
          <th>Rushing Yards</th>
          <th>Rushing Touchdowns</th>
          <th>Receptions</th>
          <th>Receiving Yards</th>
          <th>Receiving Touchdowns</th>
          
        </tr>
      </thead>
      <tbody>
     { team.players.map((player) =>{
    return (
        <tr>
          <td><strong>{player.position}</strong></td>
          <td>{player.player_name}</td>
        <td>{player.passing_yards ? player.passing_yards : na}</td>
        <td>{player.passing_touchdowns ? player.passing_touchdowns : na}</td>
        <td>{player.rushing_yards ? player.rushing_yards : na}</td>
        <td>{player.rushing_touchdowns ? player.rushing_touchdowns: na}</td>
        <td>{player.receptions ? player.receptions: na}</td>
        <td>{player.receiving_yards ? player.receiving_yards: na}</td>
        <td>{player.receiving_touchdowns ? player.receiving_touchdowns: na}</td>
        </tr>
    )
   })}
      </tbody>
    </Table>
            
        </div> : null
}</div>)
}

export default UserTeams;