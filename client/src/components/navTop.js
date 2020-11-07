import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import DiceModal from '../components/modal'



 function NavTop(props) {

 

           return(<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home" onClick={() => props.handlePageChange("profile")}>Dicey</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
    </Navbar.Collapse>
    <DiceModal/>
  </Navbar>)

 
}

export default NavTop