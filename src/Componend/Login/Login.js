import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Login = () => {
  const {login, handelgooglesignin} = useContext(AuthContext)

  const handelLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    login(email,password)
    handelgooglesignin(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      form.reset()
    })
     .then(error =>console.log(error))

  }
    return (
        <div className='w-100 mt-20 border-rose-500 border-spacing-7 align-middle justify-center d-flex'>
        <Form onSubmit={handelLogin} className='border w-1/2  border-spacing-4 text-white border-l-fuchsia-700 p-14 bg-slate-900'>
          <h1 className='center'>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
    
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
         
          <Form.Control type="password" name='password' placeholder="Password"  />
        </Form.Group>
        <Button variant="primary" className='w-100' type="submit">
          Submit
        </Button><br />
        <Button variant="primary" className='mt-2 w-100' type="submit">
          Google
        </Button>
        <p className='center'>New  account <Link to='/signin'>Signin</Link> </p>
      </Form>
        </div>
    );
};



export default Login;

