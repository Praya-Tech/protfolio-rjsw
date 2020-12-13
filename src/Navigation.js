import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="shadow-sm"
      >
        <Navbar.Brand href="#home">Jayraj's Protfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#project">
              Projects
            </Nav.Link>
            <Nav.Link eventKey={2} href="#contact">
              Contact
            </Nav.Link>
            <Nav.Link eventKey={3} href="#memes">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
