import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className="bg-info fixed-top" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Go-Travel</Navbar.Brand>
    <Nav>
                    <Nav.Link  className="text-white fw-bold" to="/home">Home</Nav.Link>
                    <Nav.Link  className="text-white fw-bold"to="/about">About</Nav.Link>
                    <Nav.Link  className="text-white fw-bold"to="/blogs">Blogs</Nav.Link>
                    <Nav.Link  className="text-white fw-bold"to="/login">Login</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
    );
};

export default Header;