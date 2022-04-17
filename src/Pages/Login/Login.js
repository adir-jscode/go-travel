import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();

  const handleRegistration = () => {
    navigate("/register");
  }
    return (
      <div className="container w-50 mx-auto mt-5">
        <h1 className="text-info text-center">Login</h1>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
          </Button>
          <p onClick={handleRegistration} className="text-center">New to Go Travel? <span className="text-info">Create a new account</span> </p>
</Form>
    </div>
  );
};

export default Login;