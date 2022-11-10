import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Headers = () => {
  const {logout} = useContext(AuthContext)

  const signout =()=>{
    logout('')
  }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" ><h3><Link to='/'>Sports Shops</Link> </h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link> <Link to={`/services`}>My Reviews </Link> </Nav.Link>
              <Nav.Link ><Link to='/services'>Add Service</Link> </Nav.Link>
              <Nav.Link ><Link to='/blog'>Blog</Link> </Nav.Link>
              
            </Nav>
            <Nav>
               <button className='btn btn-primary me-4'><Link to='/login' className='text-white'>Login</Link></button>
               <button onClick={signout} className='btn btn-primary '><Link to='/logout' className='text-white'>LogOut</Link></button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Headers;