import React from 'react';

// Data to populate the cards
const trendingApps = [
  { name: 'SmPlan: ToDo List With Reminder', rating: 4.9, downloads: '8M', reviews: '54K' },
  // Add more app data here if available
];
const GRADIENT_STYLE = { 
  backgroundImage: 'linear-gradient(to right, #632EE3, #9F62F2)',
};

const Home = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      
      {/* Hero Header Section */}
      <section className="text-center py-16 bg-base-200 rounded-box mb-12">
        <h1 className="text-5xl font-extrabold text-black mb-4">
          We Build <br/>  <span className="block md:inline bg-clip-text text-transparent"
    style={GRADIENT_STYLE}>
           Productive </span> Apps 
        </h1>
        <p className="text-base text-base-content/80 px-auto mb-8">
          At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        <img src="/src/assets/hero.png" alt="" />
      </section>

      {/* Stats Section */}
      <div className="stats shadow w-full mb-12">
        <div className="stat">
          <div className="stat-title">Trending Apps</div>
          <div className="stat-value text-secondary">29.6M</div>
          <div className="stat-desc">Total Downloads</div>
        </div>
        <div className="stat">
          <div className="stat-title">Our All Applications</div>
          <div className="stat-value">906K</div>
          <div className="stat-desc">Total Apps</div>
        </div>
        <div className="stat">
          <div className="stat-title">Your Installed Apps</div>
          <div className="stat-value text-accent">132+</div>
          <div className="stat-desc">Active Users</div>
        </div>
      </div>

      {/* Trending Apps - Cards Section */}
      <h2 className="text-3xl font-bold mb-6">Trending Apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingApps.map((app, index) => (
          <div key={index} className="card bg-base-100 shadow-xl border border-base-300">
            {/* The DaisyUI Card component is ideal for this */}
            <div className="card-body p-4">
              <h3 className="card-title text-lg">{app.name}</h3>
              <div className="flex items-center text-sm">
                <span className="text-warning text-xl mr-2">⭐</span>
                <span className="font-bold mr-4">{app.rating}</span>
                <span className="text-base-content/70">
                  ({app.reviews} Reviews) | {app.downloads} Downloads
                </span>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-sm btn-outline btn-primary">Download</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* You would add the "Your Installed Apps" list section here, likely using DaisyUI's <ul class="menu"> or a table. */}

    </div>
  );
};

export default Home;