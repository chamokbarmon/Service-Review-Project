import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Componend/Blog/Blog';
import Details from './Componend/Details/Details';
import Home from './Componend/Home/Home';
import Login from './Componend/Login/Login';
import Main from './Componend/Main/Main';
import Review from './Componend/Review/Review';
import Services from './Componend/Services/Services';
import Signin from './Componend/SignIn/Signin';



function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
         
            path:'/login',
            element:<Login></Login>
          
        },
        {
          path:'/blog',
          element :<Blog></Blog>
        },
        {
          path:'/services',
          element:<Services></Services>
        },
        {
          path:'/signin',
          element:<Signin></Signin>
        },
        {
          path:'/services/:id',
          element:<Details></Details>,
          loader:({params})=> fetch(`https://service-assignment-server.vercel.app/services/${params.id}`)
        },
        {
          path:'/review/:id',
          element:<Review></Review>,
          loader:({params})=> fetch(`https://service-assignment-server.vercel.app/review/${params.id}`)

        }
       
      ]
      
    }
  ])
  return (
    <div className="App">
          <RouterProvider router={router}>

          </RouterProvider>
    </div>
  );
}

export default App;
