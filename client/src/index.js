import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import NotFound from './views/404';
import 'element-theme-default';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>, 
  },
  {
   path: "/login",
   element: <Login/>, 
 },
 {
   path: "/signup",
   element: <SignUp/>
 },
 {
   path: "/*",
   element: <NotFound/>
 },
]);

root.render(
  <RouterProvider router={router} />
);
