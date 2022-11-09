import NavigationBar from "./NavigationBar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function CreateLeague(){
    const [leagueName, setLeagueName] = useState('')
    const [username, setUsername] = useState('')
    const leagueData = {
        league_name : leagueName,
        username : username
    }


   function handleSubmit(e){
    e.preventDefault()
        fetch('/leagues', {
            method : "POST",
                headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(leagueData)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
   }

    return(
        <div className="createleague">
            <NavigationBar/>

            <h1>Create a New League</h1>
            <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>New League Name</Form.Label>
        <Form.Control
         type="text" 
         placeholder="New League Name"
         onChange={(e) => setLeagueName(e.target.value)}
         value={leagueName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="commisionerName">
        <Form.Label>Commissioner Username</Form.Label>
        <Form.Control 
        type="text"
         placeholder="Your Username"
         onChange={(e) => setUsername(e.target.value)}
            value={username} />
      </Form.Group>
      <Button variant="outline-success" type="submit">Create League</Button>
    </Form>

        </div>
    )
}

export default CreateLeague;