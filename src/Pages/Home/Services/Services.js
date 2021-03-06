import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [services,setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h2 className='text-center text-primary' id='services'>Our Services</h2>
          <div className='service-container'>
          {
              services.map(service => <Service
              key={service.id}
              service = {service}
              >

              </Service>)
         }
          </div>
        </div>
    );
};

export default Services;