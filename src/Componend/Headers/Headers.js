import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLoaderData, } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Headers = () => {
  const {logOut,user} = useContext(AuthContext)
 
  const handleSingOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
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
              <Nav.Link ><Link to='/login'>login</Link> </Nav.Link>
              
            </Nav>
            <div className="navbar-end">
          <span className="mr-2 bg-slate-100 d-flex">{user?.displayName}</span>

          <div>
            {user?.photoURL ? (
              <img className="rounded w-8 mr-2 bg-slate-100" src={user?.photoURL} alt="" />
            ) : (
              <p></p>
            )}
          </div>

          <div>
            {user?.email ? (
              <button className="btn btn-primary" onClick={handleSingOut}>
                Log Out
              </button>
            ) : (
              <Link to="/login"></Link>
            )}
          </div>
        </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Headers;