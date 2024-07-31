import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../style/App.scss';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Accommodation from '../pages/Accommodation/Accommodation';
import NotFound from '../pages/NotFound/NotFound';

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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
