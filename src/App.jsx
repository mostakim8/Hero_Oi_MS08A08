// src/App.jsx

import React from 'react';
import { Outlet } from 'react-router-dom'; 
import './App.css'; 
import Navbar from './component/Navbar'; // Adjust path if needed

function App() {
  return (
    <div className="bg-base-100 min-h-screen w-full">
        <Navbar />
        
        <div className="content">
            {/* 🚨 This is where Home, Apps, or Installation will render */}
            <Outlet /> 
        </div>
    </div>
  );
}

export default App;