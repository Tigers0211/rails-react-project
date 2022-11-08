import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function LoginModal({handleShow, handleClose, show}){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState('')

  function handleSubmit(){

  }


  


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
              <Form  onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    onChange={(e) => setUsername(e.target.value)}

                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="Password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoFocus
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Log In
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default LoginModal;