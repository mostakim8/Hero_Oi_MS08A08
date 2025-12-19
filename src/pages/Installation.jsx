import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ChevronDown, Star, Download } from 'lucide-react';
import Footer from '../component/Footer';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortBy, setSortBy] = useState("size");

    useEffect(() => {
        setInstalledApps(JSON.parse(localStorage.getItem('installedApps')) || []);
    }, []);

    const handleUninstall = (id) => {
        const updated = installedApps.filter(app => app.id !== id);
        localStorage.setItem('installedApps', JSON.stringify(updated));
        setInstalledApps(updated);
        toast.error("App uninstalled successfully", {
            style: { borderRadius: '10px', background: '#333', color: '#fff' }
        });
    };

    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortBy === "size") return b.size - a.size;
        return a.title.localeCompare(b.title);
    });

    return (
        <div className="pt-32 bg-[#F8F9FB] min-h-screen font-['Poppins']">
            <Toaster position="top-right" />
            
            <div className="max-w-6xl mx-auto px-6 pb-20">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-[#0B1B35] mb-4">Your Installed Apps</h1>
                    <p className="text-[#627382] text-[20px]">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                {/* Apps Found & Sort Row */}
                <div className="flex justify-between items-center mb-10">
                    <div className="text-2xl font-semibold text-[#0B1B35]">
                        {installedApps.length} Apps Found
                    </div>
                    
                    <div className="relative">
                        <select 
                            className="select select-bordered w-44 h-12 rounded-xl bg-white border-gray-200 text-gray-500 text-base appearance-none pl-4 pr-10 outline-none shadow-sm"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="size">Sort By Size</option>
                            <option value="name">Sort By Name</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                </div>

                {/* App List */}
                <div className="space-y-4">
                    {installedApps.length === 0 ? (
                        <div className="text-center py-32 bg-white rounded-[40px] border border-dashed border-gray-200">
                            <p className="text-2xl text-gray-300 font-bold italic">No apps installed yet.</p>
                        </div>
                    ) : (
                        sortedApps.map(app => (
                            <div key={app.id} className="bg-white p-5 rounded-2xl flex items-center justify-between shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-gray-50 group hover:shadow-md transition-all">
                                
                                <div className="flex items-center gap-6">
                                    {/* App Icon */}
                                    <div className="w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0 p-3">
                                        <img src={app.image} className="w-full h-full object-contain" alt={app.title} />
                                    </div>
                                    
                                    {/* Info Details */}
                                    <div>
                                        <h3 className="font-medium text-xl text-[#0B1B35] mb-2">{app.title}</h3>
                                        <div className="flex items-center gap-5 text-base ">
                                            <span className="flex items-center gap-1 text-[#55E49C] font-medium">
                                                <Download size={14} /> {(app.downloads / 1000000).toFixed(0)}M
                                            </span>
                                            <span className="flex items-center gap-1 text-orange-400 font-medium">
                                                <Star size={14} fill="currentColor" /> {app.ratingAvg}
                                            </span>
                                            <span className="text-gray-400">
                                                {app.size} MB
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Uninstall Button */}
                                <button 
                                    onClick={() => handleUninstall(app.id)} 
                                    className="bg-[#55E49C] hover:bg-[#48c98a] text-white px-8 py-3 rounded-xl text-base font-semibold transition-colors"
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Installation;