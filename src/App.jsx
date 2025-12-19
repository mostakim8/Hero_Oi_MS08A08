import React from 'react';
import { Outlet } from 'react-router-dom'; 
import './App.css'; 
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="bg-base-100 min-h-screen w-full">
        <Navbar />
        
        <div className="content">
            <Outlet /> 
        </div>
    </div>
  );
}

export default App;