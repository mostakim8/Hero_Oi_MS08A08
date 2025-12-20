import React from 'react';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0B1B35] text-white py-16  px-6">
            <div className="max-w-7xl mx-auto">
                {/* Main Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12">
                    
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-black mb-4 tracking-tighter">
                            HERO<span className="text-[#632EE3]">.IO</span>
                        </h2>
                        <p className="text-slate-400 leading-relaxed max-w-sm mx-auto md:mx-0">
                            Providing the best software solutions for everyone, everywhere.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-widest">Quick Links</h4>
                        <ul className="space-y-3 text-slate-400 font-medium">
                            <li className="hover:text-[#632EE3] cursor-pointer transition-colors">About Us</li>
                            <li className="hover:text-[#632EE3] cursor-pointer transition-colors">Privacy Policy</li>
                            <li className="hover:text-[#632EE3] cursor-pointer transition-colors">Terms of Service</li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-widest ">Follow Us</h4>
                        <div className="flex justify-center md:justify-start gap-6">
                            <Facebook className="hover:text-[#632EE3] cursor-pointer transition-transform hover:scale-110" size={24} />
                            <Twitter className="hover:text-[#632EE3] cursor-pointer transition-transform hover:scale-110" size={24} />
                            <Linkedin className="hover:text-[#632EE3] cursor-pointer transition-transform hover:scale-110" size={24} />
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <p className="text-center mt-10 text-slate-500 text-sm font-medium">
                   Copyright © {new Date().getFullYear()} - All right reserved by HERO.IO
                </p>
            </div>
        </footer>
    );
};

export default Footer;