import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ServicesCard = ({ser}) => {
    const {picture,name,description,_id} = ser ;
    return (
        <div className='w-52 '>
         <Card style={{ width: '18rem' }}>
          <img className='max-h-40 p-2' src={picture} alt="" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className='text-truncate'>
            {
              description

            }
          </Card.Text>
           <Link to={`/services/${_id}`}><Button variant="primary">Details</Button></Link>
        </Card.Body>
      </Card>
       </div>
    );
};

export default ServicesCard;