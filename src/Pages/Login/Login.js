import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  let location = useLocation();
  const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  let showError;
  if (error) {
    showError = error?.message;
  }
  
  let from = location.state?.from?.pathname || "/";
  const handleRegistration = () => {
    navigate("/register");
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  }
  if (user) {
    console.log("login successful");
    console.log(user.email)
     navigate(from, { replace: true });
  }
  const handleRestPassword = async () => {
     const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
          alert('Sent email');
  }
    return (
      <div className="container w-50 mx-auto mt-5">
        <h1 className="text-info text-center">Login</h1>
      <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
          </Button>
          <div className="text-danger">
               {showError}
          </div>
         
          <p onClick={handleRegistration} className="text-center">New to Go Travel? <span className="text-info">Create a new account</span> </p>
          <p onClick={handleRestPassword} className="text-center"><span className="text-info">Reset Password</span> </p>
        </Form>
        <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;