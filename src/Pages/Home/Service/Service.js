import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const handleBooking = id => {
        navigate(`/checkout/${id}`);
    }
    return (
        <div className="container col-12 col-md-6 col-lg-4 text-center">
            <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={img} alt=""/>
  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="fw-bold">{ price}</p>
    <p className="card-text">{description}</p>
    <button onClick={()=>handleBooking(id)} className="btn btn-primary">Book Now</button>
  </div>
</div>
        </div>
    );
};

export default Service;