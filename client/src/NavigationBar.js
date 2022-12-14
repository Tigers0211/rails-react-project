import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavigationBar.css"


function NavigationBar({handleDelete}){

    return (
        <>
          <Navbar bg="dark" variant="dark" expand='lg'>
            <Container className='navContain'>
              <Navbar.Brand href="/userhome">Swc Fantasy</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/userhome">Home</Nav.Link>
                <Nav.Link href="/createleague">Create New League</Nav.Link>
                <Nav.Link href="/all-leagues">View Leagues</Nav.Link>
                {/* <Nav.Link href="/new-team" >Make a New Team</Nav.Link> */}
                <Nav.Link  onClick={handleDelete} className="logoutBtn">Logout</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          </>
    )}

export default NavigationBar;