import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Review = () => {
    const review = useLoaderData();
    const {picture,name,description,rating,price } = review ;
    console.log(review);

    return (
        <div className='w-52 me-auto align-items-center'>
        <Card style={{ width: '60rem' }}>
        <figure>
            
    <PhotoProvider className='cursor'>
      <PhotoView src={picture}>
        <img className='h-40 w-40' src={picture} alt="" />
      </PhotoView>
    </PhotoProvider>
            </figure>
         
       <Card.Body>
         <Card.Title>{name}</Card.Title>
         <Card.Text >
           {
             description

           }
         </Card.Text>
          <h2>Rating : {rating}</h2>
          <h3>Price :{price}</h3>
       </Card.Body>
     </Card>
      </div>
    );
};

export default Review;