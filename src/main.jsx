import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomeScreen from './pages/HomeScreen.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import UserAccount from './pages/UserAccount.jsx';
import NotFound from './pages/NotFound.jsx';
import './css/index.css';


const router = createBrowserRouter([
   {
      path: '/',
      errorElement: <NotFound />,
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <HomeScreen />
         },
         {
            path: '/location',
            element: <Location />
         },
         {
            path: '/login',
            element: <Login />
         },
         {
            path: '/register',
            element: <Register />
         },
         {
            path: '/user',
            element: <UserAccount />
         },
      ]
   },
   {
      path: '*',
      element: <NotFound />
   }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
);