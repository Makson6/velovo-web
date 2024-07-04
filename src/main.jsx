import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './layout/Layout.jsx';
import Accueil from './Pages/Accueil.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Location from './Pages/Location.jsx';
import Connexion from './Pages/Connexion.jsx';
import CreationCompte from './Pages/CreationCompte.jsx';
import CompteUtilisateur from './Pages/CompteUtilisateur.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Accueil />
      },
      {
        path: '/location',
        element: <Location />
      },
      {
        path: '/connexion',
        element: <Connexion />
      },
      {
        path: '/nouveaucompte',
        element: <CreationCompte />
      },
      {
        path: '/utilisateur',
        element: <CompteUtilisateur />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
