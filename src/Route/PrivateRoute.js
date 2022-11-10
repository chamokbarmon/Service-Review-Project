
import { Navigate, useLocation } from 'react-router';
import Spinner from 'react-bootstrap/Spinner';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext)
    
  
   if(!user){
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
   }
   return children;
};

export default PrivateRoute;