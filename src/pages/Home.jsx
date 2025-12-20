import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import appsData from '../data/allAppsData.json'; 

const Home = () => {
    const trendingApps = appsData.slice(0, 8);

    return (
        <div className="min-h-screen">
            <div className="pt-28 px-6 mx-auto mb-10  ">
                {/* Hero Section */}
                <div className=" text-center  py-20 r ">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="mx-auto text-7xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900 leading-tight">We Build <br /> 
                        <span className="text-[#632EE3]">productive </span>Apps
                    </motion.h1>
                    <p className="text-gray-500 text-xl mb-10 max-w-xl mx-auto">
                       At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    
                    <div className="mx-auto flex flex-col sm:flex-row justify-center gap-6 mt-10">
                         {/* Google Play Button */}
                    <a href="https://play.google.com/store" className="btn rounded-2xl hover:bg-gray-200 text-white border-none px-10 h-16 shadow-xl shadow-gray-300 flex items-center gap-3 transition-all transform hover:scale-105">
                         <img src="/public/fi_16076057.png" className="w-7 h-7" alt="Google Play" />
                         <div className="text-left">    
                         <p className="text-lg text-black font-semibold leading-none">Google Play</p>
                        </div>
                     </a>

                         {/* App Store Button */}
                     <a href="https://www.apple.com/app-store/" className="btn rounded-2xl hover:bg-gray-200 text-white border-none px-10 h-16 shadow-xl shadow-gray-300 flex items-center gap-3 transition-all transform hover:scale-105">
                         <img src="/public/fi_5977575.png" className="w-7 h-7" alt="App Store"/>
                         <div className="text-left">
                         <p className="text-lg text-black font-semibold leading-none">App Store</p>
                         </div>
                     </a>

                    </div>  
                </div>

             {/* banner img  */}
                <div className="mx-auto flex justify-center items-center w-full mt-12 px-4">
                         <img src="/hero.png" alt="Hero Banner" className="max-w-full h-auto"/>
                </div>


                <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white grid place-items-center py-10'>
                     <div className="max-w-6xl mx-auto px-4 w-full ">
                        <h2 className=' text-4xl md:text-5xl font-bold text-center mb-8 tracking-tight'>Trusted by Millions, Built for You</h2>
        
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"> 

                            {/* Total Download */}
                                     <div className="stat text-center p-8 backdrop-blur-md rounded-4xl hover:bg-white/10 transition-all">
                                         <div className="stat-title text-purple-100 uppercase tracking-widest text-base ">Total Downloads</div>
                                         <div className="stat-value font-extrabold text-[64px] md:text-[64px] py-3 tracking-tighter">29.6M</div>
                                         <div className="stat-desc text-purple-200 text-base">21% more than last month</div>
                                     </div>

                            {/* Total Reviews */}
                                     <div className="stat text-center p-8 backdrop-blur-md rounded-4xl hover:bg-white/10 transition-all">
                                         <div className="stat-title text-purple-100 uppercase tracking-widest text-base">Total Reviews</div>
                                         <div className="stat-value font-extrabold text-[64px] md:text-[64px] py-3 tracking-tighter">906K</div>
                                         <div className="stat-desc text-purple-200 text-base">46% more than last month</div>
                                     </div>

                            {/* Active Apps */}
                                     <div className="stat text-center p-8 backdrop-blur-md rounded-4xl hover:bg-white/10 transition-all">
                                         <div className="stat-title text-purple-100 uppercase tracking-widest text-base">Active Apps</div>
                                         <div className="stat-value font-black text-[64px] md:text-[64px] py-3 tracking-tighter">132+</div>
                                         <div className="stat-desc text-purple-200 text-base">31 more will Launch</div>
                                     </div>

                                </div>
                    </div>
                </div>

                {/* Trending Apps */}
                <div className="text-center mt-14 mb-10">
                    <h2 className="text-5xl font-bold text-gray-800 tracking-tight">Trending Apps</h2>
                    <h6 className='text-[20px] text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</h6>
                </div>

                <div className="mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-9">
                    {trendingApps.map((app, index) => (
                        <motion.div 
                            key={app.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300"
                        >
                            <Link to={`/app/${app.id}`}>
                                <div className="bg-[#F8F9FF] rounded-3xl p-6 mb-6 flex justify-center items-center aspect-square">
                                    <img src={app.image} alt={app.title} className=" object-cover group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="font-medium text-[20px] text-gray-800 mb-2 truncate group-hover:text-[#632EE3]">{app.title}</h3>

                                <div className="flex justify-between items-center">
                                     <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">

                                     <img src="/Apps Icon/icon-downloads.png" alt="downloads" className="w-4 h-4 opacity-70"/>
                                     <span className=" text-[#00D390] font-medium text-base tracking-tight">
                                            {(app.downloads / 1000000).toFixed(1)}
                                     </span>
                                     </div>
                                    <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-base font-medium">⭐ {app.ratingAvg}</span>  
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <div className='text-center mt-8'>
                            <Link to="/apps">
                                <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-base font-semibold text-white hover:bg-[#4d23b3] border-none px-10 rounded-2xl shadow-xl shadow-purple-100 transition-all duration-300'>Show All                                  
                                </button>
                            </Link>
                </div>
               
            </div>
            
            <Footer />

        </div>
    );
};

export default Home;