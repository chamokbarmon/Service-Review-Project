import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Details = () => {
    const {user} = useContext(AuthContext)
    const {_id,title,price} = useLoaderData()
    const handelfrom =event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstname.value} ${form.lastname.value}`
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order ={
            service:_id,
            serviceName : title,
            price,
            customer : name,
            email,
            phone,
            message
        }
        fetch('https://service-assignment-server.vercel.app/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(er=>console.log(er));

    }  
   
    return (
        <form action="" onSubmit={handelfrom}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 '>
           <input  name='firstname' type="text" placeholder='Enter name :' className='bg-red-300 text-black border'  />
           <input  name='lastname' type="text" placeholder='Enter lastname :' className='bg-red-300 text-black' />
           <input  name='phone' type="number" placeholder='Enter phone :' className='bg-red-300 text-black' />
           <input  name='email' type="email" placeholder='Enter Email :' defaultValue={user?.email} className='bg-red-300 text-black' readOnly />
          
        </div>
        <textarea name="message" id="" cols="30" rows="10"></textarea> <br /> 
       <Button> <input type="submit" className='btn' value='please your order' /></Button>
        </form>
    );
};

export default Details;


