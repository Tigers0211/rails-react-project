import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar(){



    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/userhome">Swc Fantasy</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/userhome">Home</Nav.Link>
                <Nav.Link href="/user-teams">Your Teams</Nav.Link>
                <Nav.Link href="/all-leagues">Join a league</Nav.Link>
                <Nav.Link href="/user-leagues">Your Leagues</Nav.Link>
                <Nav.Link href="/new-team">Make a New Team</Nav.Link>
                <Nav.Link href="/logout">Logout</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          </>
    )}

export default NavigationBar;