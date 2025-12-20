import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          
          {/* Large Error Code Area */}
          <div className="mb-8 p-8 bg-base-100 shadow-2xl rounded-lg">
            <h1 className="text-9xl font-extrabold text-error">
              404
            </h1>
            <p className="text-2xl font-semibold mt-4 text-base-content">
              Oops, page not found!
            </p>
          </div>

          <h2 className="text-4xl font-bold mb-4 text-warning">
            OPPS!! Page NOT FOUND
          </h2>
          <p className="text-xl text-base-content/80 mb-8">
            The page you requested is deserted.
          </p>
          
          <NavLink to="/" className="btn btn-primary btn-lg">
            Take Me Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;