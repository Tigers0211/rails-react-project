import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./Home.css";

function RegisterModal({handleShow, handleClose, show, handleLogin}){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState('')
  const userData = {
    username : username,
    password : password,
    password_confirmation : confirmPassword,
    email : email,
    name : name
}

function handleSubmit(e){
 e.preventDefault()
  fetch('/signup', {
    method : "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body : JSON.stringify(userData),
  })
  .then((r) => r.json())
  .then((data) => handleLogin(data))
}



    return (
        <>
          <Button className = "register" variant="dark" onClick={handleShow}>
            Register
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Register your account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value ={email}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Create your username "
                    onChange={(e) => setUsername(e.target.value)}
                    value ={username}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="Password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value ={password}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirm-password">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="Password"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    autoFocus
                  />
                </Form.Group> 
                <Button variant="primary" type = "submit"onClick={handleClose}>
                Get Started
              </Button>
              </Form>
            </Modal.Body>

          </Modal>
        </>
      );
}

export default RegisterModal;