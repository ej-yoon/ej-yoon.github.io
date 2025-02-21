import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from '../styles/MainLayout.module.css';

export default function NavigationBar() {
    return (
      <Navbar expand="sm" sticky="top" className="bg-body-tertiary">
        <Container className={styles.navbarContainer}>
            <Navbar.Brand href="/home">YEJ</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/work">Work</Nav.Link>
                <Nav.Link href="/education">Education</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}