import React, { useEffect, useRef, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./navBar.css";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const hero = document.getElementById("home");
    const handleScroll = () => {
      const navbarHeight = navbarRef.current?.getBoundingClientRect().height ?? 76;
      setScrolled(!hero || hero.getBoundingClientRect().bottom <= navbarHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <Navbar
      ref={navbarRef}
      expand="lg"
      className={`portfolio-navbar${scrolled ? " navbar-scrolled" : ""}`}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand href="/#home" className="fw-bold fs-4">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/#home" className="me-3">
              Home
            </Nav.Link>
            <Nav.Link href="/#about" className="me-3">
              About Me
            </Nav.Link>
            <Nav.Link href="/#experience" className="me-3">
              Experience
            </Nav.Link>
            <Nav.Link href="/#projectGallery" className="me-3">
              Gallery
            </Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
