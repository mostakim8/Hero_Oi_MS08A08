import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer'; 
import appsData from '../data/allAppsData.json'; 

const Apps = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("default");

    // Case-sensitive filtering logic 
    const filteredApps = appsData
        .filter(app => app.title.includes(searchTerm)) 
        .sort((a, b) => {
            if (sortBy === "az") return a.title.localeCompare(b.title);
            if (sortBy === "za") return b.title.localeCompare(a.title);
            if (sortBy === "rating") return b.ratingAvg - a.ratingAvg;
            if (sortBy === "downloads") return b.downloads - a.downloads;
            return 0;
        });

    return (
        <div className="pt-32 bg-[#FDFBFF] min-h-screen font-['Poppins']">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Our All Applications
                    </h2>
                    <p className="text-[#627382] max-w-2xl mx-auto text-xl">
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>

                {/* Filter Row */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
                    
                    {/* App Count  */}
                    <div className="text-[#627382] font-semibold text-2xl uppercase tracking-widest order-2 lg:order-1">
                        App Found (<span className="text-[#627382]">{filteredApps.length}</span>)
                    </div>

                    {/* Search & Sort Container Right side */}
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto order-1 lg:order-2">
                        
                        {/* Case-sensitive Search Bar */}
                        <div className="relative w-full md:w-80">
                            <input
                                type="text"
                                placeholder="Search apps..."
                                className="w-full h-14 pl-12 pr-4 rounded-2xl bg-white border border-gray-100 shadow-sm focus:ring-2 focus:ring-[#632EE3]/20 outline-none text-gray-700 transition-all"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        </div>

                        {/* Sort Dropdown */}
                        <div className="relative w-full md:w-56">
                            <select 
                                className="select w-full h-14 pl-6 pr-10 rounded-2xl bg-white border border-gray-100 shadow-sm outline-none focus:ring-2 focus:ring-[#632EE3]/20 font-bold text-gray-600 appearance-none cursor-pointer"
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="default">Sort by: Default</option>
                                <option value="az">A to Z</option>
                                <option value="za">Z to A</option>
                                <option value="rating">Highest Rating</option>
                                <option value="downloads">Highest Downloading</option>
                            </select>
                            
                        </div>
                    </div>
                </div>

                {/* Apps Grid */}
                {filteredApps.length === 0 ? (
                    <div className="text-center py-40 border-2 border-dashed border-gray-100 rounded-[40px]">
                        <img src="/public/App-Error.png" className='mx-auto'/>
                        <h2 className='text-black text-4xl font-bold mt-8'>OPPS!! APP NOT FOUND</h2>
                        <p className='text-gray-400 mt-4'>The App you are requesting is not found on our system.  please try another apps</p>
                        <Link to="/" >
                        <button className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white mt-8'>Go Home</button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {filteredApps.map(app => (
                            <Link 
                                to={`/app/${app.id}`} 
                                key={app.id} 
                                className="bg-white border border-gray-100 p-7 rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className="bg-[#F8F9FF] rounded-[30px] p-6 mb-6 flex justify-center items-center aspect-square">
                                    <img 
                                        src={app.image} 
                                        className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-500" 
                                        alt={app.title}
                                    />
                                </div>
                                
                                <h3 className="font-medium text-center text-gray-800 text-[20px] truncate mb-5 group-hover:text-[#632EE3]">
                                    {app.title}
                                </h3>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                                        <img src="/icon-downloads.png" alt="dl" className="w-3.5 h-3.5 opacity-60"/>
                                        <span className="text-[#00D390] font-medium text-base">
                                            {(app.downloads / 1000000).toFixed(1)}M
                                        </span>
                                    </div>
                                    <span className="bg-amber-50 text-amber-600 px-3 py-1.5 rounded-full text-base font-medium">
                                        ⭐ {app.ratingAvg}
                                    </span>  
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Apps;