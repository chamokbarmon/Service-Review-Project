import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ServiceCard.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ser}) => {
    const {picture,name,description,_id} = ser ;
    console.log(ser)
    return (
      <div>
         <div className='w-52 '>
         <Card style={{ width: '18rem' }}>
         <figure>
            
            <PhotoProvider className='cursor'>
              <PhotoView src={picture}>
                <img className='h-40' src={picture} alt="" />
              </PhotoView>
            </PhotoProvider>
                    </figure>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className='text-truncate'>
            {
              description

            }
          </Card.Text>
           <Link to={`/review/${_id}`}><Button className='me-3' variant="primary">Details</Button></Link>

        </Card.Body>
      </Card>
      
       </div>
       
      </div>
    );
};

export default ServiceCard;