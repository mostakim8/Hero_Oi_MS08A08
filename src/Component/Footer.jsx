import React from 'react';
// Importing icons from Lucide React for social links
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    // Main footer container with dark background and padding
    <footer className="bg-[#10172A] text-white py-10 px-4 md:px-8 mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Top section: Logo and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-700 pb-8 mb-8">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            {/* You'll need to provide your actual logo image source here */}
            {/* For now, using a placeholder icon and the text */}
            <img src="/src/assets/logo.png" alt="HERO.IO Logo" className="h-8 w-8" /> 
            <span className="text-2xl font-bold">HERO.IO</span>
          </div>

          {/* Social Links Section */}
          <div className="text-center md:text-right lg:pr-16 bg">
            <h4 className="text-xl font-semibold mb-4">Social Links</h4>
            <div className="flex justify-center  space-x-4">
              {/* Twitter/X Icon */}
              <a href="#" aria-label="Twitter" className=" transition-colors duration-200 border-black rounded-2xl pt-1 px-1 bg-white ">
                <Twitter size={24} className='text-black/80 hover:text-blue-900 ' />
              </a>
              {/* LinkedIn Icon */}
              <a href="#" aria-label="LinkedIn" className=" transition-colors duration-200 border-black rounded-2xl p-1 bg-white">
                <Linkedin size={24} className=' text-black/80 hover:text-blue-900'/>
              </a>
              {/* Facebook Icon */}
              <a href="#" aria-label="Facebook" className="text-black hover:text-white transition-colors duration-200 border-black rounded-2xl pt-[8px] pr-0.5 bg-white">
                <Facebook size={24}  className='text-black/80 hover:text-blue-900'/>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section: Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>Copyright © 2025 - All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;