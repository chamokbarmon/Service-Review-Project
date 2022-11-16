import React from 'react';
import Table from 'react-bootstrap/Table';

const Ordersview = ({or}) => {
    const {phone,customer,
      email,price,message} = or;
    console.log(or)
    return (
        <div>
            <Table striped bordered hover>
      <thead>
        <tr>
      
          <th>First Name</th>
          <th>Price</th>
          <th>Message</th>
          <th>Phone </th>
          <th>Email </th>
        </tr>
      </thead>
      <tbody>
        <tr>
      
          <td>{customer}</td>
          <td>{price}</td>
          <td>{message}</td>
          <td>{phone}</td>
          <td>{email}</td>
        </tr>
       
      </tbody>
    </Table>
        </div>
    );
};

export default Ordersview;