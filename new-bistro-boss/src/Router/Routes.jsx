import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login'/Login";
import SignUp from "../Pages/SignUp/SignUp";





export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/menu",
        element:<OurMenu></OurMenu>
      },
      {
        path:"order/:category",
        element:<Order></Order>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      }
    ]
  }
]);

