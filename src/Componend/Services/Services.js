import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';


const Services = () => {
    const [services,SetServices]= useState([])
    useEffect(()=>{
        fetch(`https://service-assignment-server.vercel.app/services`)
        .then(res=>res.json())
        .then(data=>SetServices(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-rows-2 lg:grid-cols-3 gap-4 p-12 border-spacing-3'>
          {
            services.map(ser=><ServicesCard key={ser._id} ser={ser}></ServicesCard>)
          }
        </div>
    );
};

export default Services;