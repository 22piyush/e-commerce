import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white text-center">
      <h1 className="text-8xl font-extrabold drop-shadow-lg">404</h1>
      <p className="text-2xl mt-4 font-light italic">Lost in Space?</p>
      <p className="text-lg mt-2">The page you're looking for has drifted away.</p>
      <Link 
        to="/" 
        className="mt-6 px-8 py-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-transform transform hover:scale-105"
      >
        Take Me Home
      </Link>
    </div>
  );
}

export default NotFound;