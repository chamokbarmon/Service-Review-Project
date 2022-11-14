import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AllReview = () => {
    const {user} = useContext(AuthContext)
    const [orders,setOrders] = useState({})

    useEffect(()=>{
       fetch(`https://service-assignment-server.vercel.app/orders?email=${user.email}`)
       .then(res=>res.json())
       .then(data=>setOrders(data))
    },[user?.email])
    return (
        <div>
            {orders.length}
        </div>
    );
};

export default AllReview;

