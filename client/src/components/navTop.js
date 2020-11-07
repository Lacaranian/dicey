import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

 function NavTop(props) {
           return(<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home" onClick={() => props.handlePageChange("profile")}>Dicey</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">

      <Nav>
      <Nav.Link href="#action/3.1">Dice</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)

 
}

export default NavTop