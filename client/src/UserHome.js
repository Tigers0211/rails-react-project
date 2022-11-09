import NavigationBar from "./NavigationBar";
import Header from "./Header";
import { useEffect, useState } from "react";


function UserHome(){
const [players, setPlayers] = useState([])

useEffect(() =>{

        fetch('/players')
        .then(res => res.json())
        .then(data => setPlayers(data))
}, [])

console.log(players)

    return(
        <div className="UserHome">
            <Header />
            <NavigationBar />
        </div>
    )
}


export default UserHome;