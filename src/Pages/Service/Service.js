import React from 'react';

const Service = ({ service }) => {
    const {name,img,description,price}= service;
    return (
        <div className="card mx-auto text-center mt-5" style={{ width: "18rem" }}>
  <img src={img} className="card-img-top" alt="..."/>
  <div class="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="fw-bold">{ price}</p>
                <p className="card-text">{ description }</p>
    <button href="#" className="btn btn-primary">Book Now</button>
  </div>
</div>
        

        
        // <div>






        //     <img src={img} alt={description} ></img>
        //     <h3>{name}</h3>
        //     <h5>Price: {price}</h5>
        //     <p>{description}</p>
        //     <button className="btn btn-primary">Book Now</button>
        // </div>
    );
};

export default Service;