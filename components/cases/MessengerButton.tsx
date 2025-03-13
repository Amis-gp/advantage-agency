import React from 'react';
import Link from 'next/link';

import "@/app/globals.css"

interface MessengerButtonProps {
  link: string;
  text: string;
}

const MessengerButton: React.FC<MessengerButtonProps> = ({ link, text }) => {
  return (
    <div className="fixed bottom-2 right-4 md:bottom-6 md:right-8">
      {/* Icon */}
      <div className="group relative inline-block">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-75 animate-ping"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white bg-blue-500 rounded-full p-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1 14.823l-3.049-3.216-5.951 3.216 6.559-6.898 3.048 3.216 5.952-3.216-6.559 6.898z" />
            </svg>
          </div>
        </Link>
        {/* Text */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded transition-opacity duration-300 opacity-0 group-hover:opacity-100 tooltip">
          {text}
          <div className="absolute left-1/2 top-full transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default MessengerButton;