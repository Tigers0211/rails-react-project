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


function handleDeleteLeague(id){
    const deleteLeague = leagues.filter(deleteLeague => deleteLeague.id !== id)
    setLeagues(deleteLeague)
}

function favoriteHandler(league){
    fetch(`/leagues/${league.id}`,{
      method : "PATCH",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify({favorite : !league.favorite}),
    }).then((res) => res.json())
    .then((data) =>{
        const updatedLeagues = leagues.map((league) =>{
            if (league.id === data.id){
                return data;
            }else{
                return league;
            }
        });
       
        setLeagues(updatedLeagues)
    })
  }


function handleDelete(league){
    fetch(`/leagues/${league.id}`,{
        method : "DELETE",
    });
    handleDeleteLeague(league.id)
}


const mappedLeagues = leagues.map((league) =>{
    return(
        <Card style={{ width: '18rem' }}>
      
        <Card.Body>
          <Card.Title>{league.league_name}</Card.Title>
          <Button onClick={() => handleDelete(league)}>Delete League</Button>
          {league.favorite ? (
          <button
            className="favorite-on" onClick={() => {favoriteHandler(league)}}>
            ★
          </button>
        ) : (
          <button className="favorite-off" onClick={() => {favoriteHandler(league);}}>
            ☆
          </button>)}
          
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