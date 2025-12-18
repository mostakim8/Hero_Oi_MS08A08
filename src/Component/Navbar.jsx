import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Github } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-2">
                    <img src="/src/assets/logo.png" alt="Logo" className="h-8" />
                    <span className="text-xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</span>
                </Link>
                
                {/* Nav Links */}
                <ul className="flex space-x-8 font-bold">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#632EE3] border-b-2 border-[#632EE3]" : "text-gray-700 hover:text-[#632EE3]"}>Home</NavLink></li>
                    <li><NavLink to="/apps" className={({ isActive }) => isActive ? "text-[#632EE3] border-b-2 border-[#632EE3]" : "text-gray-700 hover:text-[#632EE3]"}>Apps</NavLink></li>
                    <li><NavLink to="/installation" className={({ isActive }) => isActive ? "text-[#632EE3] border-b-2 border-[#632EE3]" : "text-gray-700 hover:text-[#632EE3]"}>Installation</NavLink></li>
                </ul>

                {/* GitHub Button */}
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white! border-none rounded-lg px-4">
                    <Github size={18} className="mr-1" /> Contribution
                </a>
            </div>
        </nav>
    );
};

export default Navbar;