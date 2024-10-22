import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Root from './components/Root';
import AuthProvider from './Provider/AuthProvider';
import Order from './components/Order';
import PrivateRoute from './Route/PrivateRoute';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/Login",
        element:<Login></Login>
      },
      {
        path:"/Register",
        element:<Register></Register>

      },
      {
        path:"/Order",
        element:<PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path:"/Profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>

      },
      {
        path:"/Dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
