import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
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
    
],
},
]);

export default router;