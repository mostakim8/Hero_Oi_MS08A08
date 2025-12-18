import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Apps from './pages/Apps.jsx';
import Installation from './pages/Installation.jsx';
import AppDetails from './pages/AppDetails.jsx'; // 🚨 নতুন ইমপোর্ট
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'apps', element: <Apps /> },
      { path: 'installation', element: <Installation /> },
      { path: 'app/:id', element: <AppDetails /> }, // 🚨 ডাইনামিক রাউট যোগ করা হয়েছে
      { path: '*', element: <NotFound /> }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);