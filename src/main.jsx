import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/home/Home.jsx';
import ErrorPage from './ErrorPage.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import AuthProvider from './components/provider/AuthProvider.jsx';
import Brands from './components/brands/Brands.jsx';
import BrandDetails from './components/brands/BrandDetails.jsx';
import PrivateRoute from './components/privateRoute/PrivateRoute.jsx';
import MyProfile from './components/myprofile/MyProfile.jsx';
import UpdateProfile from './components/myprofile/UpdateProfile.jsx';
import AbotDev from './components/AbotDev.jsx';
import ForgetPassword from './components/forgetPass/ForgetPassword.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "aboutDev",
        element:<AbotDev></AbotDev>,
      },
      {
        path: "/login/password",
        element:<ForgetPassword></ForgetPassword>,
      },
      
      {
        path: "/profile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
      },
      {
        path: "/UpdateProfile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader:() => fetch('/donation.json')
      },
      {
        path: "/brand/:id",
        element:<PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
        loader:() => fetch('/donation.json')
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
