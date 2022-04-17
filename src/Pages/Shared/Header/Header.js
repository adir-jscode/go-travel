import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
     signOut(auth);
  }
    return (
        <Navbar sticky="top" className="bg-info" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/">Go-Travel</Navbar.Brand>
    <Nav>
                    <Nav.Link  className="text-white fw-bold" as={Link} to="home">Home</Nav.Link>
                    <Nav.Link  className="text-white fw-bold" as={Link} to="about">About</Nav.Link>
                    <Nav.Link  className="text-white fw-bold" as={Link}to="blogs">Blogs</Nav.Link>
                    <Nav.Link  className="text-white fw-bold" href="home#services">Services</Nav.Link>
            {
              user
              ?
                // <button onClick={handleSignOut}>Logout</button>
                 <Nav.Link onClick={handleSignOut} className="text-white fw-bold">Logout</Nav.Link>
              :              
              <Nav.Link className="text-white fw-bold" as={Link} to="login">Login</Nav.Link>
            }
            {
              user?.name && user.name
            }
      
    </Nav>
    </Container>
  </Navbar>
    );
};

export default Header;