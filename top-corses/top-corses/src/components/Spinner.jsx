import React from 'react';

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="relative w-24 h-24">
        {/* Outer spinner */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        
        {/* Inner spinner rotating in opposite direction */}
        <div className="absolute top-3 left-3 w-18 h-18 border-4 border-b-4 border-pink-500 border-b-transparent rounded-full animate-spin-reverse"></div>
      </div>
      <p className="mt-6 text-xl font-semibold text-gray-700">Loading...</p>

      {/* Custom animation for reverse spin */}
      <style>
        {`
          .animate-spin-reverse {
            animation: spin-reverse 1.2s linear infinite;
          }
          @keyframes spin-reverse {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Spinner;
