import React from "react";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarComp = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="main-bar">
      <Navbar.Brand href="#"><i>{'<ed8en/>'}</i><span>design</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"> 
        <Nav className = "ml-auto">
          <Nav.Link className="nav-item" href="#">Works</Nav.Link>
          <Nav.Link className="nav-item" href="#">About</Nav.Link>
          <Nav.Link className="nav-item" href="#">Career</Nav.Link>
          <Nav.Link className="nav-item" href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
