import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(data => setServices(data));
    },[])
    return (
        <div id="services" className="container mt-5 w-75 mx-auto">
            <h1 className="text-center text-primary"> SERVICES</h1>
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