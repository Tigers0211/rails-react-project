import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


function TeamsContainer({ firstTeam, secondTeam}){
  const navigate = useNavigate();
    const [teams, setTeams] = useState([])
    
    function handleClick1(e){
      console.log(e)
      navigate(`/teams/${firstTeam.id}`)
    }

    function handleClick2(){
      navigate(`/teams/${secondTeam.id}`)
    }
 
    return(
    
    <div>   
        <Card className="text-center">
      <Card.Header>Team 1</Card.Header>
      <Card.Body>
        <Card.Title>{firstTeam.team_name}</Card.Title>
        <Card.Text>
         A member of the league {firstTeam.league.league_name}
        </Card.Text>
        <Button onClick={(e) =>handleClick1(e)} variant="primary">Look at team</Button>
      </Card.Body>
      
    </Card>

    <Card className="text-center">
      <Card.Header>Team 2</Card.Header>
      <Card.Body>
        <Card.Title>{secondTeam.team_name}</Card.Title>
        <Card.Text>
        A member of the league {secondTeam.league.league_name}
        </Card.Text>
        <Button onClick={handleClick2} variant="primary">Look at team</Button>
      </Card.Body>
      
    </Card>
        
        
    </div>


    )
}



export default TeamsContainer;