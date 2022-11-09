import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Componend/Home/Home';
import Login from './Componend/Login/Login';
import Main from './Componend/Main/Main';

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
