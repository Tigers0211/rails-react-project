import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function LoginModal({handleShow, handleClose, show, handleLogin}){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState('')
 const userData = {
      username : username,
      password : password,
  }
  
  
  function handleSubmit(e){
   e.preventDefault()

  fetch("/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(userData)
  })
  .then((res) => res.json())
  .then((data) => handleLogin(data))}
 

  


    return (
        <>
          <Button variant="dark" onClick={handleShow} className="Log-In">
            Log In
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Log Back In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form  onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="Password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value ={password}
                    autoFocus
                  />
                </Form.Group>
              <Button variant="primary" type="submit" onClick={handleClose} >
                Log In
              </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </>
      );
}

export default LoginModal;