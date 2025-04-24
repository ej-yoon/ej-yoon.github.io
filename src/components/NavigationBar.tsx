import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// style
import styles from '../styles/Section.module.css';
// type
import { RefObject } from 'react';
type Props = {
    aboutSectionRef: RefObject<HTMLInputElement | null>;
    careerSectionRef: RefObject<HTMLInputElement | null>;
    educationSectionRef: RefObject<HTMLInputElement | null>;
};

export default function NavigationBar({ aboutSectionRef, careerSectionRef, educationSectionRef }: Props) {
    
    const handleSelect = (eventKey: any) => {
        let reference: any = aboutSectionRef;

        if(eventKey == "about") {
            reference = aboutSectionRef;
        }else if(eventKey == "career") {
            reference = careerSectionRef;
        }else if(eventKey == "education") {
            reference = educationSectionRef;
        }

        window.scrollTo({
            top: reference.current.offsetTop,
            behavior: "smooth"
        });
    };

    return (
        <Navbar collapseOnSelect expand="sm" sticky="top" className="navbar bg-body-tertiary">
            <Container>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                      <Nav fill variant="underline" defaultActiveKey="about" onSelect={handleSelect}>
                          <Nav.Item>
                              <Nav.Link eventKey="about" className={styles.navigationLinks}>About</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey="career" className={styles.navigationLinks}>Career</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey="education" className={styles.navigationLinks}>Education</Nav.Link>
                          </Nav.Item>
                      </Nav>
                  </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}