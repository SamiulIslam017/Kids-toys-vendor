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
import PrivateRoute from "./PrivateRoute";
import UpdateRoute from "../Extra/UpdateRoute";


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
      element: <AllToys></AllToys>,
      loader: () => fetch('https://kids-toy-vendor-server.vercel.app/totalToys')
    },
    {
      path:'/myToys',
      element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
    
    },
    {
      path:'/addAToy',
      element:<PrivateRoute><AddNewToy></AddNewToy></PrivateRoute>

    },
    {
      path:'/blogs',
      element:<Blogs></Blogs>
    },
    {
      path:"/toyDetails/:id",
      element:<PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
      loader:({params}) => fetch(`https://kids-toy-vendor-server.vercel.app/alltoys/${params.id}`)
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/update/:id',
      element:<UpdateRoute></UpdateRoute>,
      loader:({params}) => fetch(`https://kids-toy-vendor-server.vercel.app/alltoys/${params.id}`)
    },
    
],
},
]);

export default router;