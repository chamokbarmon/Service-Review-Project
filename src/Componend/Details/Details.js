import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const {description}= useLoaderData()
    return (
        <div className='bg-blue-900 text-white p-5'>
            {description}
        </div>
    );
};

export default Details;


