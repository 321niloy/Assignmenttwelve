import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "./App";
import Home from "./component/home/Home";
import Main from "./component/home/Main/Main";
import Error from "./pages/error/Error";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
  ]);