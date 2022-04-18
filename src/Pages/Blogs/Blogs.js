import React from 'react';

const Blogs = () => {
    return (
        <div className="container mx-auto w-75">
            <div>
                 <h3>Difference between authorization and authentication</h3>
            <p>Authentication is the process of verifying a user. Authentication is the first step of a good identity and access management process.On the other hand,Authorization is the process of verifying what specific applications, files, and data a user has access to. Authorization always takes place after authentication.</p>
            </div>
            <div>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>We are using firebase for user authentication as well as for hosting applications. Firebase provides several authentication methods, such as Email and password based authentication, Phone number authentication, Google, Facebook, Twitter, github , Microsoft and Yahoo authentication etc  </p>
            </div>
            <div>
                <h3>What other services does firebase provide other than authentication?</h3>
                <p>Firebase provides a variety of services other than authentication, such as Firebase Database service, Realtime database service, Storage , Machine Learning & Hosting.</p>
            </div>
           
            
        </div>
    );
};

export default Blogs;