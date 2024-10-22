import React from 'react';
import { Link } from 'react-router-dom';  
import { AiOutlineHome } from 'react-icons/ai';  


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Oops! Page Not Found</h2>
      <p className="text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded transition duration-300">
        <AiOutlineHome className="mr-2 text-2xl" /> {/* Add the Home Icon here */}
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
