'use client';

import React from 'react';

const FloatingChatButton = () => {
  return (
    <button 
      className="fixed bottom-6 right-6 w-14 h-14 bg-black hover:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
      aria-label="Open chat"
    >
      <svg 
        className="w-7 h-7 text-white" 
        viewBox="0 0 20 20" 
        fill="currentColor"
        style={{
          animation: 'rock 3s ease-in-out infinite',
        }}
      >
        <style>
          {`
            @keyframes rock {
              0%, 100% { transform: rotate(-25deg); }
              50% { transform: rotate(25deg); }
            }
          `}
        </style>
        <path 
          fillRule="evenodd" 
          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" 
          clipRule="evenodd" 
        />
      </svg>
    </button>
  );
};

export default FloatingChatButton;

