import NavigationBar from "./NavigationBar";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function AllLeagues(){
const [leagues, setLeagues] = useState([])


useEffect(() =>{

    fetch(`/leagues`)
    .then(res => res.json())
    .then(data => {setLeagues(data)})
}, [])


const mappedLeagues = leagues.map((league) =>{
    return(
        <Card style={{ width: '18rem' }}>
      
        <Card.Body>
          <Card.Title>{league.league_name}</Card.Title>

          
        </Card.Body>
      </Card>

    )
})
    
    
    return(
    
    <div>
        <NavigationBar />

        {mappedLeagues}

    </div>
    )
}

export default AllLeagues;