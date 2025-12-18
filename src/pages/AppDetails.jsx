import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import toast, { Toaster } from 'react-hot-toast';
import { Download, Star, MessageSquare } from 'lucide-react';
import allApps from '../data/allAppsData.json';

const AppDetails = () => {
    const { id } = useParams();
    const app = allApps.find(a => a.id.toString() === id.toString());
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        if (app) {
            const installed = JSON.parse(localStorage.getItem('installedApps')) || [];
            setIsInstalled(installed.some(a => a.id.toString() === app.id.toString()));
        }
        window.scrollTo(0, 0);
    }, [app, id]);

    const handleInstall = () => {
        if (!app) return;
        const installed = JSON.parse(localStorage.getItem('installedApps')) || [];
        if (!installed.some(a => a.id.toString() === app.id.toString())) {
            const updated = [...installed, app];
            localStorage.setItem('installedApps', JSON.stringify(updated));
            setIsInstalled(true);
            toast.success("Successfully Installed!", { 
                icon: '🚀', 
                style: { borderRadius: '15px', background: '#333', color: '#fff' } 
            });
        }
    };

    if (!app) return <div className="text-center py-40 font-bold text-2xl">App Not Found</div>;

    const chartData = [...app.ratings].reverse().map(item => ({
        name: `${item.name} star`,
        count: item.count
    }));

    return (
        <div className="pt-32 bg-[#FDFBFF] min-h-screen font-['Poppins']">
            <Toaster position="top-right" />
            <div className="max-w-6xl mx-auto px-6 pb-20">
                
                {/* --- Header Section --- */}
                <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
                    
                    {/* Left: App Icon */}
                    <div className="w-full md:w-[35%]">
                        <div className="bg-white p-10 rounded-[48px] shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-50 aspect-square flex items-center justify-center">
                            <img src={app.image} className="w-4/5 h-4/5 object-contain" alt={app.title} />
                        </div>
                    </div>

                    {/* Right: Info Content */}
                    <div className="flex-1 pt-4">
                        <h1 className="text-4xl md:text-5xl font-black text-[#0B1B35] mb-2">{app.title}</h1>
                        <p className="text-[#9F62F2] font-semibold text-xl mb-10">Developed by productive.io</p>
                        
                        {/* 🚨 Updated Stats Layout (Vertical Stack) 🚨 */}
                        <div className="flex gap-16 mb-12 pb-10 border-b border-gray-100">
                            
                            {/* Download Stat */}
                            <div className="flex flex-col items-center text-center">
                                <Download size={32} className="text-[#55E49C] mb-2" />
                                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Downloads</span>
                                <p className="text-4xl font-black text-[#0B1B35]">{(app.downloads / 1000000).toFixed(0)}M</p>
                            </div>
                            
                            {/* Ratings Stat */}
                            <div className="flex flex-col items-center text-center">
                                <Star size={32} className="text-orange-400 mb-2" fill="currentColor" />
                                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Average Ratings</span>
                                <p className="text-4xl font-black text-[#0B1B35]">{app.ratingAvg}</p>
                            </div>

                            {/* Reviews Stat */}
                            <div className="flex flex-col items-center text-center">
                                <MessageSquare size={32} className="text-[#9F62F2] mb-2" />
                                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Total Reviews</span>
                                <p className="text-4xl font-black text-[#0B1B35]">54K</p>
                            </div>

                        </div>

                        {/* Install Button */}
                        <button 
                            onClick={handleInstall}
                            disabled={isInstalled}
                            className={`w-full md:w-80 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl hover:scale-[1.02] active:scale-95 ${
                                isInstalled 
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none' 
                                : 'bg-[#55E49C] hover:bg-[#48c98a] text-white shadow-green-100'
                            }`}
                        >
                            {isInstalled ? "Already Installed" : `Install Now (${app.size} MB)`}
                        </button>
                    </div>
                </div>

                {/* Ratings Section */}
                <div className="mb-24">
                    <h3 className="text-3xl font-bold mb-10 text-[#0B1B35]">Ratings</h3>
                    <div className="h-72 w-full max-w-4xl">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart layout="vertical" data={chartData}>
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontWeight: 600}} width={80} />
                                <Tooltip cursor={{fill: 'transparent'}} />
                                <Bar dataKey="count" fill="#F59E0B" radius={[0, 10, 10, 0]} barSize={22} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Description Section */}
                <div className="max-w-4xl">
                    <h3 className="text-3xl font-bold mb-8 text-[#0B1B35]">Description</h3>
                    <p className="text-gray-500 leading-loose text-lg whitespace-pre-line">
                        {app.description}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AppDetails;