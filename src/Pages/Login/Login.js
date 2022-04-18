import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
 import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  let location = useLocation();
  const [
  signInWithEmailAndPassword,
  user,
  error
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
    if (email) {
      await sendPasswordResetEmail(email);
          toast('Password reset email sent');
    }
    else {
      toast('Please provide a email address');
    }
    
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
         
          <p onClick={handleRegistration} className="text-center">New to Go Travel? <button className="text-info btn btn-link text-decoration-none">Create a new account</button> </p>
          <p onClick={handleRestPassword} className="text-center"><button className="text-info btn btn-link text-decoration-none">Reset Password</button> </p>
        </Form>
        <SocialLogin></SocialLogin>
        <ToastContainer />
    </div>
  );
};

export default Login;