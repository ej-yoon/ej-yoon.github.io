import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavigationBar() {
    return (
        <Navbar expand="sm" sticky="top" className="navbar bg-body-tertiary">
            <Container>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                      <Nav variant="underline">
                          <Nav.Item>
                              <Nav.Link href="#about" eventKey="about" style={{color: "#153147"}}>About</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link href="#career" eventKey="work" style={{color: "#153147"}}>Career</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link href="#education" eventKey="education" style={{color: "#153147"}}>Education</Nav.Link>
                          </Nav.Item>
                      </Nav>
                  </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}