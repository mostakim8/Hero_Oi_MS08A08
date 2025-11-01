import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Installation.jsx'; 
import NotFound from './pages/NotFound.jsx'; // 👈 Your 404 page
// NOTE: I'm using 'Contact' for the '/about' route as per your last main.jsx snippet.

// 🚨 CRITICAL: Import both items
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/Apps.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App (which contains the Navbar and Outlet) is the layout
    children: [
      {
        path: '/',
        element: <Home />, // Renders at exact path "/"
      },
      {
        path: 'about', // Corresponds to /about
        element: <About />, // Using Contact as a placeholder page
      },
      {
        path: 'contact', // Corresponds to /contact
        element: <Contact />,
      },
      // 🚨 CATCH-ALL: Renders NotFound for any path not matched above
      {
        path: '*',
        element: <NotFound />, 
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 🚨 CRITICAL: Must wrap the app and pass the router object */}
    <RouterProvider router={router} />
  </StrictMode>
);