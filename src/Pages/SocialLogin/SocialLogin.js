import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let showError;
    if (error) {
        showError = <div>
        <p className="text-danger">{error.message}</p>
      </div>
    }
    if (user) {
        navigate("/home");
    }
    return (
        <div>
            <div className="mt-5 d-flex align-items-center">
            <div style={{height: '1px'}} className="bg-info w-50"></div>
            <p className="mb-1 px-2">OR</p>
            <div style={{ height: '1px' }} className="bg-info w-50"></div>
            
            
            </div>
            <div className="w-50 mx-auto text-center mt-2">
                <button onClick={()=>signInWithGoogle()} className="btn btn-info text-white fw-bold">
                    <img style={{ width: '30px'}}src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="Google Business"></img>
                    Google Sign in
                </button>
                {showError}
            </div>
        </div>
        
    );
};

export default SocialLogin;