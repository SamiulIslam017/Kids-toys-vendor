import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AllToys from "../Pages/AllToys";
import MyToys from "../Pages/MyToys";
import AddNewToy from "../Pages/AddNewToy";
import Blogs from "../Pages/Blogs";
import SingleToyDetails from "../Pages/SingleToyDetails";
import Login from "../Pages/Login/Login"
import Register from "../Pages/Login/Register"

import Error from "../Pages/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children: [
    {
        path:'/',
        element:<Home></Home>
    },
    {
      path:'/allToys',
      element: <AllToys></AllToys>
    },
    {
      path:'/myToys',
      element:<MyToys></MyToys>
    
    },
    {
      path:'/addAToy',
      element:<AddNewToy></AddNewToy>
    },
    {
      path:'/blogs',
      element:<Blogs></Blogs>
    },
    {
      path:"/toyDetails",
      element:<SingleToyDetails></SingleToyDetails>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    }
    
],
},
]);

export default router;