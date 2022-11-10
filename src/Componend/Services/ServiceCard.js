import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ser}) => {
    const {picture,name,description} = ser ;
    console.log(ser)
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
           <Link to=''><Button variant="primary">See All</Button></Link>
        </Card.Body>
      </Card>
       </div>
    );
};

export default ServiceCard;