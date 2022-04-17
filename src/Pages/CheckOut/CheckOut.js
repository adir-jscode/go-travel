import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { serviceId } = useParams();
    return (
        <div className="container">
            <p>hellooo { serviceId }</p>
        </div>
    );
};

export default CheckOut;