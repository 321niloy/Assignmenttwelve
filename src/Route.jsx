import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "./App";
import Home from "./component/home/Home";
import Main from "./component/home/Main/Main";
import Error from "./pages/error/Error";
import Login from "./pages/error/login/Login";
import Signup from "./pages/signup/Signup";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<Signup></Signup>
        }
      ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
  ]);