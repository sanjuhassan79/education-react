import React from 'react';
import {Container, Image, Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
const Appbar = () => {
    return (
        <div>
           <Navbar className="px-5" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container fluid>
  <Navbar.Brand href="#home"><Image src="http://irsfoundation.com/tf/templates/EducationPark/images/logo-2.png" rounded /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav"className="justify-content-end">
    <Nav className="mr-auto">
    <NavLink
  to="/Home"
  className="px-4 text-uppercase fs-6 fw-normal text-decoration-none text-warning"
  activeStyle={{
    fontWeight: "bold",
    color: "red",
    textTransform:"uppercase",
    textDecoration:"none",
    
    
  }}
>
  Home
</NavLink>
    <NavLink
  to="/About"
  className="px-4 text-uppercase fs-6 fw-normal text-decoration-none text-warning"
  activeStyle={{
    fontWeight: "bold",
    color: "red",
    textTransform:"uppercase",
    textDecoration:"none",
    
    
  }}
>
About
</NavLink>
    <NavLink
  to="/Services"
  className="px-4 text-uppercase fs-6 fw-normal text-decoration-none text-warning"
  activeStyle={{
    fontWeight: "bold",
    color: "red",
    textTransform:"uppercase",
    textDecoration:"none",
    
    
  }}
>
Services
</NavLink>
    <NavLink
  to="/Contact"
  className="px-4 text-uppercase fs-6 fw-normal text-decoration-none text-warning"
  activeStyle={{
    fontWeight: "bold",
    color: "red",
    textTransform:"uppercase",
    textDecoration:"none",
    
    
  }}
>
Contact
</NavLink>
   
      
    </Nav>
   
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Appbar;