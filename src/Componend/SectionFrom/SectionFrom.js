import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SectionFrom = () => {
    return (
       <div className='w-100 mt-20 border-rose-500 border-spacing-7 align-middle justify-center d-flex'>
         <Form  className='border w-1/2  border-spacing-4 text-white border-l-fuchsia-700 p-14 bg-slate-900'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your name :" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Address" />
      </Form.Group>
         
            <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
       </div>
    );
};

export default SectionFrom;