import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Ordersview from '../Ordersview/Ordersview';
import Table from 'react-bootstrap/Table';

const AllReview = () => {
    const {user} = useContext(AuthContext)
    const [order,setOrder] = useState({})

    useEffect(()=>{
       fetch(`https://service-assignment-server.vercel.app/orders?email=${user.email}`)
       .then(res=>res.json())
       .then(data=>setOrder(data))
    },[user?.email])
    return (
        <div>
            <h2 className='text-3xl'>this is orders {order.length}</h2>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Number</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
       {
        order.map(or => <Ordersview 
        key={or._id}
        or={or}
        ></Ordersview> )
       }
      
      </tbody>
    </Table>
        </div>
    );
};

export default AllReview;

