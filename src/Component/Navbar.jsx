import React from 'react';
import { NavLink } from 'react-router-dom';
import {Github} from 'lucide-react'

const Navbar = () => {

    const HERO_GRADIENT = 'linear-gradient(to right, #632EE3, #9F62F2)';

    const GRADIENT_STYLE = { 
    backgroundImage: HERO_GRADIENT,
  };
    const INACTIVE_COLOR = '#1f2937'; // A dark gray/black color
  // Function to determine link styling based on active state
  const getNavLinkClass = ({ isActive }) =>
    `px-3 py-2 font-bold text-lg transition duration-150 ease-in-out hover:border-b-4 ${isActive ? ' bg-clip-text text-transparent ' : ' '}`;

    
  return (
    // 🚨 FIX: Removed the non-standard and width-restricting 'px-30' class.
    <nav className="navbar bg-base-100 shadow-md sticky top-0 z-50 lg:px-30">
      
      {/* 1. Navbar Start (Left Side: Logo and Mobile Menu Toggle) */}
      <div className="navbar-start">
        
        {/* Mobile Dropdown Menu: Hides on large screens (lg:hidden) */}
        <div className="dropdown">
          {/* Hamburger Menu Button */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          
          {/* Mobile Menu Content (Appears when hamburger is clicked) */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/apps">Apps</NavLink></li>
            <li><NavLink to="/installation">Installation</NavLink></li>
          </ul>
        </div>
        
        {/* Logo/Brand Section */}
        <NavLink to="/" className="flex items-center text-xl font-bold  normal-case">
          <img src="/src/assets/logo.png" alt="Hero.Io Logo" className='w-15 h-15 mr-2' />
          <h2 
              className='text-4xl font-bold bg-clip-text text-transparent'
              style={{ backgroundImage: HERO_GRADIENT }}
            >
              Hero.Io
            </h2>
        </NavLink>
      </div>
      
      {/* 2. Navbar Center (Middle: Desktop Links) - Hidden on mobile, Visible on desktop (lg:flex) */}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 space-x-4">
<li>
              <NavLink 
                to="/" 
                end 
                className={getNavLinkClass}
                // 💡 CRITICAL: The inline 'style' prop determines the final color and border.
                style={({ isActive }) => 
                  isActive 
                    ? { ...GRADIENT_STYLE, borderBottomColor: '#632EE3' } // ACTIVE: Applies the gradient and a primary-colored border
                    : { color: INACTIVE_COLOR, borderBottomColor: 'transparent' } // INACTIVE: Forces dark text color and an invisible border
                }
              >
                Home
              </NavLink>
            </li>
            
            {/* The logic is identical for About and Contact to ensure consistency */}
            <li>
              <NavLink 
                to="/about" 
                className={getNavLinkClass}
                style={({ isActive }) => 
                  isActive 
                    ? { ...GRADIENT_STYLE, borderBottomColor: '#632EE3' }
                    : { color: INACTIVE_COLOR, borderBottomColor: 'transparent' }
                }
              >
                Apps
              </NavLink>
            </li>
            
            <li>
              <NavLink 
                to="/contact" 
                className={getNavLinkClass}
                style={({ isActive }) => 
                  isActive 
                    ? { ...GRADIENT_STYLE, borderBottomColor: '#632EE3' }
                    : { color: INACTIVE_COLOR, borderBottomColor: 'transparent' }
                }
              >
                Installation
              </NavLink>
            </li>
        </ul>
      </div>

      {/* 3. Navbar End (Right Side: Login button) */}
      <div className="navbar-end">
        <button className=" btn text-white font-semibold border-none 
                       bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                       hover:from-[#9F62F2] hover:to-[#632EE3]">
            {/* 🚨 2. LUCIDE ICON USED HERE */}
            <Github className="w-5 h-5"/>
            Contribution
          </button>
      </div>
    </nav>
  );
};

export default Navbar;