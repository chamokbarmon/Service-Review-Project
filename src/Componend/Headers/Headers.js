import { Button } from 'bootstrap';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, } from 'react-router-dom';


const Headers = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" ><h3>Sports Shops</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to='/review'>My Reviews  </Nav.Link>
              <Nav.Link to='/services'>Add Service </Nav.Link>
              <Nav.Link to='/blog'>Blog </Nav.Link>
              
            </Nav>
            <Nav>
               <button className='btn btn-primary me-4'><Link to='/login' className='text-white'>Login</Link></button>
               <button className='btn btn-primary '><Link to='/logout' className='text-white'>LogOut</Link></button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Headers;