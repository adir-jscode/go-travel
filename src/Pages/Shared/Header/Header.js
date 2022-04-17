import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar sticky="top" className="bg-info" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/">Go-Travel</Navbar.Brand>
    <Nav>
                    <Nav.Link  className="text-white fw-bold" as={Link} to="home">Home</Nav.Link>
                    <Nav.Link  className="text-white fw-bold" as={Link} to="about">About</Nav.Link>
                    <Nav.Link  className="text-white fw-bold" as={Link}to="blogs">Blogs</Nav.Link>
                    <Nav.Link  className="text-white fw-bold" href="home#services">Services</Nav.Link>
                    <Nav.Link  className="text-white fw-bold" as={Link} to="login">Login</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
    );
};

export default Header;