import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Login = () => {
  const {login, GoogleProvider} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname||'/'

  const GoogleSign = new GoogleAuthProvider()

  const handelLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

   

    login(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      form.reset()
      navigate(form,{replace:true})
    })
     .then(error =>console.log(error))


     
  }
  const handelGoogle =()=>{
    GoogleProvider(GoogleSign)
     .then(result=>{
       const user = result.user;
       console.log(user)

     })
     .catch(error=>{
       console.error('error',error)
     })
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
        <Button variant="primary" onClick={handelGoogle} className='mt-2 w-100' type="submit">
          Google
        </Button>
        <p className='center'>New  account <Link to='/signin'>Signin</Link> </p>
      </Form>
        </div>
    );
};



export default Login;

