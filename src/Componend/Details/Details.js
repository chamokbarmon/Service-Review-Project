import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const {description,_id}= useLoaderData()
    return (
        <div className='bg-blue-900 text-white p-5'>
            {description}
             
             <br /> <br />
              
            <Button className='btn btn-primary'><Link to={`/services/${_id}`} className='text-white'>Review Section</Link></Button>
        </div>
    );
};

export default Details;


