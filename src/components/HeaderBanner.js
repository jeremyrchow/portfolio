import React from "react"
import "./HeaderBanner.css"
import HeaderNavButtons from "./HeaderNavButtons"
import {Nav,Navbar,NavDropdown,NavItem,Form,FormControl,Button} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from '../assets/Jeremy_Chow_Resume.pdf'


function HeaderBanner() {
  return (
    <div id="navbar" className="nav-bar navbar">
      <Navbar fixed= "top" bg="white" expand="lg">
        <Navbar.Brand href="#home">Jeremy Chow</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/*<Nav.Link href="#link">Projects</Nav.Link>*/}
            <Nav.Link href={Resume}>Résumé</Nav.Link>
            {/*
                        <NavDropdown title="Projects" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Machine Learning</NavDropdown.Item>
            
                          <NavDropdown.Item href="#action/3.2">Javascript</NavDropdown.Item>
            
                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    
  );
}

export default HeaderBanner;
