import React, { useEffect, useState } from 'react';
import UseServices from '../../../Hooks/UseServices/UseServices';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = UseServices([]);
    return (
        <div id="services" className="container mt-5 w-75 mx-auto">
            <h1 className="text-center text-primary">Our Services</h1>
            <p className="text-center fw-bold text-primary">POPULAR PACKAGES</p>
            <div className="row">
                {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            </div>
            
        </div>
    );
};

export default Services;