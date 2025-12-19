import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Github } from 'lucide-react';

const Navbar = () => {
    // এই ফাংশনটি চেক করবে লিঙ্কটি অ্যাক্টিভ কি না
    // অ্যাক্টিভ হলে লিনিয়ার গ্রেডিয়েন্ট ক্লাস দিবে, না হলে পিউর ব্ল্যাক (text-black)
    const linkStyle = ({ isActive }) => 
        isActive 
            ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold" 
            : "text-black hover:text-[#632EE3] transition-colors font-medium";

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-[16px]">
                
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-2">
                    {/* লোগো পাথ ঠিক আছে কি না নিশ্চিত হয়ে নিন */}
                    <img src="/src/assets/logo.png" alt="Logo" className="h-8" />
                    <span className="text-xl font-black bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                        HERO.IO
                    </span>
                </Link>
                
                {/* Nav Links */}
                <ul className="flex space-x-8">
                    <li>
                        <NavLink to="/" className={linkStyle}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/apps" className={linkStyle}>
                            Apps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/installation" className={linkStyle}>
                            Installation
                        </NavLink>
                    </li>
                </ul>

                {/* GitHub Button */}
                <a 
                    href="https://github.com/mostakim8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none rounded-lg px-4 py-2 text-sm font-semibold shadow-md hover:shadow-purple-200 transition-all"
                >
                    <Github size={18} className="mr-2" /> Contribution
                </a>
            </div>
        </nav>
    );
};

export default Navbar;