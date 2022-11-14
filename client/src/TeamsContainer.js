import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


function TeamsContainer({ team }){
  const navigate = useNavigate();
    const [teams, setTeams] = useState([])
    
    function handleClick(e){
      console.log(e)
      navigate(`/teams/${team.id}`)
    }

  
 
    return(
    
    <div>   
        <Card className="text-center">
      <Card.Header>Team</Card.Header>
      <Card.Body>
        <Card.Title>{team.team_name}</Card.Title>
        <Card.Text>
         A member of the league {team.league.league_name}
        </Card.Text>
        <Button onClick={(e) =>handleClick(e)} variant="primary">Look at team</Button>
      </Card.Body>
      
    </Card>

    
        
    </div>


    )
}



export default TeamsContainer;