import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Ordersview from '../Ordersview/Ordersview';
import Table from 'react-bootstrap/Table';

const AllReview = () => {
    const {user} = useContext(AuthContext)
    const [order,setOrder] = useState([])
    console.log(order)

    useEffect(()=>{
       fetch(`https://service-assignment-server.vercel.app/orders?email=${user?.email}`)
       .then(res=>res.json())
       .then(data=>setOrder(data))
    },[user?.email])
    return (
        <div>
            <h2 className='text-3xl'>this is orders {order.length}</h2>
            
       {
        order?.map(or => <Ordersview 
        key={or._id}
        or={or}
        ></Ordersview> )
       }
   
        </div>
    );
};

export default AllReview;

