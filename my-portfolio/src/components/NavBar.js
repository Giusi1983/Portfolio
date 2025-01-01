import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img className="App-logo" src="/logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav-link-hover" href="/">Home</Nav.Link>
            <Nav.Link className="nav-link-hover" href="/about">About</Nav.Link>
            <Nav.Link className="nav-link-hover" href="/services">Services</Nav.Link>
            <Nav.Link className="nav-link-hover" href="/blog">Blog</Nav.Link>
            <Nav.Link className="nav-link-hover" href="/contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
