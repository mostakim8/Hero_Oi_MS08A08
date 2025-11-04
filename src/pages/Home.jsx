
import React, { useEffect, useState } from 'react';
import { Play, Apple, Download, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../Component/Footer'; // Adjust path if needed, assuming Footer.jsx is in src/components


// Data to populate the cards

const trendingApps = [

// Expanded data for a better visual representation
// 1

{ imageSrc: '/src/assets/Apps Icon/SmPlan ToDo List.png',
    name: 'SmPlan:ToDo List With Reminder', 
    rating: 5,
    downloads: '8M', 
    reviews: '60K' 
},
// 2
{ imageSrc: '/src/assets/Apps Icon/Forest Productivity.jpg', 
    name: 'Forest:Focus For Productivity',
    rating: 5, 
    downloads: '9M', 
    reviews: '100K' 
},
// 3
{ imageSrc:'/src/assets/Apps Icon/Flip .webp',
    name: 'Flip:Focus Timer For Study', 
    rating: 4.5, 
    downloads: '1.2M', 
    reviews: '12K' },
// 4
{ imageSrc:'/src/assets/Apps Icon/Pomocat.png',
    name: 'Pomocat:Cute Pomodoro Timer', 
    rating: 4.8, 
    downloads: '5M', 
    reviews: '88K' },
// 5
    { imageSrc:'/src/assets/Apps Icon/Time Planner.png',
    name: 'Time Planner: Schedule & Tasks', 
    rating: 4.8, 
    downloads: '5M', 
    reviews: '88K' },
// 6
    { imageSrc:'/src/assets/Apps Icon/Morning Havit.jpg',
    name: 'Morning Habits - Daily Routine', 
    rating: 4.8, 
    downloads: '5M', 
    reviews: '88K' },
// 7
    { imageSrc:'/src/assets/Apps Icon/Focus Plant.png',
    name: 'Focus Plant: Pomodoro Forest', 
    rating: 4.8, 
    downloads: '5M', 
    reviews: '88K' },
// 8
    { imageSrc:'/src/assets/Apps Icon/Alarmy-Alarm.jpg',
    name: 'Alarmy-Alarm Clock & Sleep', 
    rating: 4.8, 
    downloads: '5M', 
    reviews: '88K' },



];



const GRADIENT_STYLE = {

backgroundImage: 'linear-gradient(to right, #632EE3, #9F62F2)',

};

const NEW_GRADIENT = 'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)';

const HERO_BACKGROUND_STYLE = {

backgroundImage: NEW_GRADIENT,

};

// Note: I used a left-to-right (90deg) gradient for simplicity.


const Home = () => {
    
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set to true after component mounts to trigger animation
    setIsVisible(true); 
  }, []);

  const animationClasses = `
    transition-all duration-1000 ease-out 
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
  `;

return (

  <div className={animationClasses}>
{/* Hero Header Section */}
    <section className="max-w-7xl mx-auto text-center py-16 bg-base-200 rounded-box mb-12 ">
    <h2 className="text-6xl font-extrabold text-black mb-4">We Build <br/> <span className="block md:inline bg-clip-text text-transparent" style={GRADIENT_STYLE}> Productive </span> Apps
    </h2>
    <p className="text-xl text-base-content/50 text-center px-20 lg:px-45 mb-8">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>



{/* Google Play and App Store Buttons (using custom images from previous step) */}

        <div className="flex justify-center space-x-4  mb-12">
            <a href="/download/android" className="btn btn-lg text-black font-bold bg-white hover:bg-gray-100 border border-gray-300 ">
           <img src="/src/assets/fi_16076057.png" alt="Google Play" className='w-6 h-6' />Google Play</a>


            <a href="/download/ios" className="btn btn-lg text-black font-bold bg-white hover:bg-gray-100 border border-gray-300 ">
            <img src="/src/assets/fi_5977575.png" alt=" App Store" className='w-6 h-6' />App Store
            </a>

        </div>


{/* hero img */}

            <img className= " mx-auto px-6 md:px-8 lg:px-0" src="/src/assets/hero.png" alt="" />

    </section>



{/* Stats Section */}

<div style={HERO_BACKGROUND_STYLE} className='text-white grid place-items-center rounded pt-8 mt-[-112px] w-full'>

    <div className="max-w-4xl mx-auto">
    <h2 className='text-white text-5xl font-bold text-center mb-8'>Trusted by Millions, Built for You</h2>

    {/* 🚨 RESPONSIVENESS CHANGE APPLIED HERE 🚨 */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mb-12 px-4"> 

        <div className="stat text-center p-4 bg-white/10 rounded-lg lg:bg-transparent lg:rounded-none lg:p-0"> {/* Added padding and background for better look */}
            <div className="stat-title text-white">Trending Apps</div>
            <div className="stat-value font-extrabold text-6xl py-3">29.6M</div>
            <div className="stat-desc text-white">Total Downloads</div>
        </div>

        <div className="stat text-center p-4 bg-white/10 rounded-lg lg:bg-transparent lg:rounded-none lg:p-0">
            <div className="stat-title text-white">Our All Applications</div>
            <div className="stat-value font-extrabold text-6xl py-3">906K</div>
            <div className="stat-desc text-white">Total Apps</div>
        </div>

        <div className="stat text-center p-4 bg-white/10 rounded-lg lg:bg-transparent lg:rounded-none lg:p-0">
            <div className="stat-title text-white">Your Installed Apps</div>
            <div className="stat-value font-extrabold text-6xl py-3">132+</div>
            <div className="stat-desc text-white">Active Users</div>
        </div>

    </div>
</div>

</div>


{/* Trending Apps - Cards Section (REDESIGN APPLIED HERE) */}

<section className='Trending App max-w-7xl mx-auto text-center py-16'>

        <h2 className="text-3xl font-bold mb-6 text-black">Trending Apps</h2>
        <h4 className='text-black/50'>Explore All Trending Apps on the Market developed by us</h4>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-4 lg:px-0">

     {trendingApps.map((app, index) => (

        <motion.div key={index}
        initial={{opacity:0, y: 50}}


        whileInView={{ opacity: 1, y:0}}
        viewport={{ once: true, amount: 0.2 }} // Animates when 20% of the element is visible
        transition= {{
           type: 'spring',         // Use physics-based motion
        damping: 15,            // Controls the settling speed
        stiffness: 100,
            delay: index*0.1}}

        className="card bg-base-100 shadow-xl rounded-t-xl border border-gray-200 overflow-hidden transition duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-2xl">

{/* 1. Placeholder Image Area */}
           <div className="h-48 bg-gray-200 rounded-t-xl flex items-center justify-center ">
                <img 
                    src={app.imageSrc} 
                    alt={`${app.name} icon`} 
                    // Style the image to fit nicely within the placeholder area, e.g., max-h-full, object-contain
                    className='max-h-full w-full object-cover rounded-t-xl' 
                />
            </div>

{/* 2. Card Body and Footer */}

        <div className="card-body p-4 pt-3 space-y-2">
{/* App Name */}
            <h3 className="text-xl text-black font-semibold 
 text-left truncate whitespace-nowrap overflow-hidden">{app.name}</h3>
{/* 3. Stats/Badges Section (Aligned to the bottom of the card) */}
             <div className="flex justify-between items-center pt-2">

{/* Downloads Badge (Green icon, muted text) */}

                <div className="flex items-center space-x-1 bg-green-50/70 text-green-700 py-1 px-3 rounded-full text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>

                <span>{app.downloads}</span>
                </div>


{/* Rating Badge (Star icon, gold background) */}

                    <div className="flex items-center space-x-1 bg-amber-500/10 text-amber-600 py-1 px-3 rounded-full text-sm font-medium"><span className="text-base">⭐</span>
                                        <span>{app.rating}</span>
                    </div>

             </div>
        </div>

        </motion.div>

))}

   </div>
   <div className="show-botton mt-5">
      <button className=" btn text-white font-semibold border-none 
                       bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                       hover:from-[#9F62F2] hover:to-[#632EE3]">
            Show All
        </button>
   </div>
 

</section>

{/* You would add the "Your Installed Apps" list section here */}
<Footer></Footer>

</div>





);

};



export default Home;