import React from 'react';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">HERO.IO</h2>
                        <p className="text-slate-400">Providing the best software solutions for everyone, everywhere.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-6">Follow Us</h4>
                        <div className="flex gap-4">
                            <Facebook className="hover:text-blue-500 cursor-pointer" />
                            <Twitter className="hover:text-blue-400 cursor-pointer" />
                            <Linkedin className="hover:text-blue-600 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <p className="text-center mt-8 text-slate-500">© 2024 HERO.IO App Store. Built with Creativity.</p>
            </div>
        </footer>
    );
};

export default Footer;