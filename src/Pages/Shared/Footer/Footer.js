import React from 'react';

const Footer = () => {
  const today = new Date();
    return (
      <div className="text-center text-black mt-5 fw-bold">
        <p><small>Copyright &copy; {today.getFullYear()} Go travel. All Rights Reserved</small></p>
      </div>
       
    );
};

export default Footer;