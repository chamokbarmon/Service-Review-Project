import React from 'react';
import Table from 'react-bootstrap/Table';

const Ordersview = ({or}) => {
    const {phone} = or;
    console.log(or)
    return (
        <div>
            {/* <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>{phone}</td>
          <td>@mdo</td>
        </tr>
       
      </tbody>
    </Table> */}
        </div>
    );
};

export default Ordersview;