import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';




const Signin = () => {
    const {createuser} =useContext(AuthContext)
    const handelSignin = event =>{
   

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(email,password,name);
    
        createuser(email,password,name)
        .then(result=>{
          const user = result.user;
          console.log(user);
          form.reset()
        })
         .then(error =>console.log(error))
    
      }
    return (
        <div className='w-100 mt-20 border-rose-500 border-spacing-7 align-middle justify-center d-flex'>
        <Form onSubmit={handelSignin} className='border w-1/2  border-spacing-4 text-white border-l-fuchsia-700 p-14 bg-slate-900'>
          <h1 className='center'>Sign In</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
      
          <Form.Control type="text" name='name' placeholder="Enter Name :" />
    
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         
          <Form.Control type="email" name='email' placeholder="Enter email" />
    
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
         
          <Form.Control type="password" name='password' placeholder="Password"  />
        </Form.Group>
        <Button variant="primary" className='w-100' type="submit">
          Submit
        </Button><br />
      
           <p className='center'>Already have a account <Link to='/login'>login</Link> </p>
      </Form>
        </div>
    );
};

export default Signin;