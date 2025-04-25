import { useRef } from 'react';
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
    const refNavbar = useRef<HTMLInputElement | null>(null);

    const handleSelect = (eventKey: any) => {
        let reference: any = aboutSectionRef;

        if(eventKey == "about") {
            reference = aboutSectionRef;
        }else if(eventKey == "career") {
            reference = careerSectionRef;
        }else if(eventKey == "education") {
            reference = educationSectionRef;
        }

        const rect = reference.current.getBoundingClientRect();
        const offset = rect.top + window.scrollY;
        const navbarHeight = refNavbar.current != null ? refNavbar.current.offsetHeight : 0;

        window.scrollTo({
            top: offset - navbarHeight,
            behavior: "smooth"
        });
    };

    return (
        <Navbar collapseOnSelect expand="sm" sticky="top" className="navbar bg-body-tertiary" ref={refNavbar}>
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