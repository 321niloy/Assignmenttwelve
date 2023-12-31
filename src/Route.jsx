import {
    createBrowserRouter,
  } from "react-router-dom";
;
import Home from "./component/home/Home";
import Main from "./component/home/Main/Main";
import Error from "./pages/error/Error";
import Login from "./pages/error/login/Login";
import Signup from "./pages/signup/Signup";
import Instructor from "./component/instructor/Instructor";
import Instrument from "./pages/Instrument/Instrument";
import Dashboard from "./pages/dashboard/Dashboard";
import Selactedclass from "./pages/selactedclassed/Selactedclass";

import Addclass from "./pages/Manageclasses/addclass/Addclass";
import Manageusers from "./component/manageusers/Manageusers";
import Updaterequest from "./pages/updaterequ/Updaterequest";
import Payment from "./pages/Payment/Payment";
import Myselactedclass from "./pages/Myselactedclass/Myselactedclass";
import MyenrolledClass from "./pages/myenrolledclass/MyenrolledClass";
import Studentdashboard from "./pages/studentdashboard/Studentdashboard";
import Instructorsclass from "./pages/instructorsclass/Instructorsclass";



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
     },
     {
      path:'Addclasses',
      element:<Addclass></Addclass>
     },
     {
      path:'manrageuse',
      element:<Manageusers></Manageusers>
     },
     {
      path:'updaterequest',
      element:<Updaterequest></Updaterequest>
     },
     {
      path:'payment',
      element:<Payment></Payment>
     },
     {
      path:'myclass',
      element:<Myselactedclass></Myselactedclass>
     },
     {
      path:'myenroll',
      element:<MyenrolledClass></MyenrolledClass>
     },
     {
      path:'studendash',
      element:<Studentdashboard></Studentdashboard>
     },
     {
      path:'instruclass',
      element:<Instructorsclass></Instructorsclass>
     }
     ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
  ]);