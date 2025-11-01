import React from 'react';
import { Outlet } from 'react-router-dom'; // 👈 Must be imported!
 // NOTE: Assuming your folder is 'components' or 'Component'
import './App.css'; // Assuming this imports Tailwind/DaisyUI
import Navbar from './Component/Navbar';

function App() {
  return (
    
<div className="bg-base-100 min-h-screen w-full">

 <Navbar></Navbar>



   
       {/* Renders the navigation bar at the top */}
      
      <div className="content">
        {/* 🚨 CRITICAL: This is where Home, Contact, or NotFound page content will load */}
        <Outlet /> 
      </div>
      </div>
    
  );
}

export default App;