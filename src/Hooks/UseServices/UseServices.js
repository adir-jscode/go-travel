import React, { useEffect, useState } from 'react';

const UseServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(data => setServices(data));
    },[])
    return [services,setServices];
};

export default UseServices;