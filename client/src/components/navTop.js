import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import DiceModal from '../components/modal'



 function NavTop(props) {
   return(
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     <Navbar.Brand href="/" onClick={() => props.handlePageChange("profile")}>Dicey</Navbar.Brand>
     <Navbar.Brand href="/signin" onClick={() => props.handlePageChange("signin")}>Sign In</Navbar.Brand>
     <Navbar.Brand href="/signup" onClick={() => props.handlePageChange("signup")}>Sign Up</Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
     </Navbar.Collapse>
     <DiceModal/>
   </Navbar>
   )

 
}

export default NavTop