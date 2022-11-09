import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import './Service.css';
import { Col, Container, Row } from 'react-bootstrap';

const Service = () => {
    const [services,SetServices]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res=>res.json())
        .then(data=>SetServices(data))
    },[])
    return (
       <div > 
            <Container>
                <Row>
                    <div>
                        <h1 className='center mt-20 mb-20'>Services</h1>
                    </div>
                    <Col>
                    <div className='grid grid-cols-1 md:grid-rows-2 lg:grid-cols-3 gap-4 p-12 border-spacing-3'>
                       {
                      services.map(ser => <ServiceCard key={ser._id} ser={ser}></ServiceCard>)
                     }
                      </div>
                    </Col>
                </Row>
            </Container>
       </div>
            
       
    );
};

export default Service;