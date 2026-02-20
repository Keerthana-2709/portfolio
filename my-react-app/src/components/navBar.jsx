import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./navBar.css";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      expand="lg" 
      className="bg-dark sticky-top navbar-dark"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand href="/" className="text-white fw-bold fs-4">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-white me-3">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="text-white me-3">
              About Me
            </Nav.Link>
            <Nav.Link href="/services" className="text-white me-3">
              Services
            </Nav.Link>
            <Nav.Link href="/contact" className="text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
