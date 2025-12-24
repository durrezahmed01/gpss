
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated Sun Rays */}
        <g className="animate-[pulse_3s_infinite]">
          {[0, 45, 90, 135, 180].map((angle, i) => (
            <line
              key={i}
              x1="50"
              y1="45"
              x2={50 + 35 * Math.cos((angle - 180) * (Math.PI / 180))}
              y2={45 + 35 * Math.sin((angle - 180) * (Math.PI / 180))}
              stroke="#FACC15"
              strokeWidth="4"
              strokeLinecap="round"
              className="opacity-70"
            />
          ))}
        </g>

        {/* Half Sun */}
        <path
          d="M25 45C25 31.1929 36.1929 20 50 20C63.8071 20 75 31.1929 75 45H25Z"
          fill="url(#sunGradient)"
          className="animate-[bounce_4s_infinite]"
        />

        {/* Book Body */}
        <path
          d="M15 50C15 47.2386 17.2386 45 20 45H50V80H20C17.2386 80 15 77.7614 15 75V50Z"
          fill="#0EA5E9"
          stroke="#075985"
          strokeWidth="1"
        />
        <path
          d="M85 50C85 47.2386 82.7614 45 80 45H50V80H80C82.7614 80 85 77.7614 85 75V50Z"
          fill="#38BDF8"
          stroke="#075985"
          strokeWidth="1"
        />
        
        {/* Book Pages Detail */}
        <path d="M20 50H45V75H20C18.3431 75 17 73.6569 17 72V53C17 51.3431 18.3431 50 20 50Z" fill="white" fillOpacity="0.3"/>
        <path d="M80 50H55V75H80C81.6569 75 83 73.6569 83 72V53C83 51.3431 81.6569 50 80 50Z" fill="white" fillOpacity="0.3"/>

        <defs>
          <linearGradient id="sunGradient" x1="50" y1="20" x2="50" y2="45" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FACC15" />
            <stop offset="1" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
