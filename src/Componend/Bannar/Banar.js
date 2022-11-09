import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1  from '../picture/picture (1).png'
import img2  from '../picture/picture (2).png'
import img3  from '../picture/picture (3).png'

const Banar = () => {
    return (
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

      
      </Carousel.Item>
    </Carousel>
    );
};

export default Banar;