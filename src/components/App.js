// Logique de routing de l'application
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Accommodation from '../pages/Accommodation/Accommodation';
import NotFound from '../pages/NotFound/NotFound';
import './App.scss';

// Création du router avec les différentes routes de l'application
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/accommodation/:id",
    element: <Accommodation />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
], { basename: "/OC-Project7" });

// Composant principal de l'application
export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
