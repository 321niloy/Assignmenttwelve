import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Route';
import Authprovider from './component/provider/Authprovider/Authprovider';









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider> <RouterProvider router={router} /></Authprovider>
    

  </React.StrictMode>,
)
