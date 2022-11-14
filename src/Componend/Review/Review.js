import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Details from '../Details/Details';

const Review = () => {
    const review = useLoaderData();
    const {picture,name,description,rating,price } = review ;
    console.log(review);

    return (
        <div >
        <Card className='w-52 me-auto align-items-center' style={{ width: '60rem' }}>
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
     <br /> <br />
     <div className='text-middle w-75 bg-red-400' >
     <h1 >Review Section</h1><br /><br />
     <Details></Details>
     </div>
    
      </div>
    );
};

export default Review;