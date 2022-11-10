import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Componend/Blog/Blog';
import Home from './Componend/Home/Home';
import Login from './Componend/Login/Login';
import Main from './Componend/Main/Main';
import Services from './Componend/Services/Services';


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
