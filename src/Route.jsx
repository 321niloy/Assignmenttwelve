import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "./App";
import Home from "./component/home/Home";
import Main from "./component/home/Main/Main";
import Error from "./pages/error/Error";
import Login from "./pages/error/login/Login";
import Signup from "./pages/signup/Signup";
import Instructor from "./component/instructor/Instructor";
import Instrument from "./pages/Instrument/Instrument";
import Dashboard from "./pages/dashboard/Dashboard";
import Selactedclass from "./pages/selactedclassed/Selactedclass";


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
        },
        {
          path:'instructor',
          element:<Instructor></Instructor>
        },
        {
          path:'class',
          element:<Instrument></Instrument>
        }
      ]
    },
    {
     path:"/dashboard",
     element:<Dashboard></Dashboard>,
     children:[
     {
      path:'selactedclass',
      element:<Selactedclass></Selactedclass>
     }
     ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
  ]);