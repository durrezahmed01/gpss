
import React from 'react';

const VisionAnimation: React.FC = () => {
  return (
    <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-blue-50 to-white rounded-[3rem] shadow-2xl overflow-hidden flex items-center justify-center border border-sky-100">
      <svg
        viewBox="0 0 100 120"
        className="w-full h-full p-8 drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="visionSunGradient" x1="50" y1="20" x2="50" y2="45" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FACC15" />
            <stop offset="1" stopColor="#F97316" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Radiating Wisdom Circles */}
        <g className="opacity-20">
          <circle cx="50" cy="45" r="30" stroke="#FACC15" strokeWidth="0.5" className="animate-ping" />
          <circle cx="50" cy="45" r="40" stroke="#0EA5E9" strokeWidth="0.5" className="animate-[ping_3s_infinite]" style={{ animationDelay: '1s' }} />
        </g>

        {/* Animated Sun Rays - More active than logo */}
        <g>
          {[0, 30, 60, 90, 120, 150, 180].map((angle, i) => (
            <line
              key={i}
              x1="50"
              y1="45"
              x2={50 + 45 * Math.cos((angle - 180) * (Math.PI / 180))}
              y2={45 + 45 * Math.sin((angle - 180) * (Math.PI / 180))}
              stroke="#FACC15"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-pulse opacity-60"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </g>

        {/* The Half Sun - Core of Vision */}
        <path
          d="M20 45C20 28.4315 33.4315 15 50 15C66.5685 15 80 28.4315 80 45H20Z"
          fill="url(#visionSunGradient)"
          className="animate-[bounce_5s_infinite]"
        />

        {/* The Book - Knowledge Base */}
        <g className="animate-[pulse_4s_infinite]">
          {/* Left Page */}
          <path
            d="M15 50C15 47 17 45 20 45H50V85H20C17 85 15 83 15 80V50Z"
            fill="#0EA5E9"
            className="transition-all duration-1000"
          />
          {/* Right Page */}
          <path
            d="M85 50C85 47 83 45 80 45H50V85H80C83 85 85 83 85 80V50Z"
            fill="#38BDF8"
          />
          
          {/* Fluttering Page Effect (Center Overlay) */}
          <path
            d="M50 45L35 48C35 48 35 78 35 82L50 85V45Z"
            fill="white"
            fillOpacity="0.2"
            className="animate-[flutter_2s_infinite]"
          />
        </g>

        {/* Knowledge Sparks rising from the book */}
        {[...Array(5)].map((_, i) => (
          <circle
            key={i}
            r="1.5"
            fill="#FACC15"
            className="animate-[float_3s_infinite]"
            style={{
              cx: 30 + (i * 10),
              cy: 65,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </svg>

      <style>{`
        @keyframes flutter {
          0%, 100% { transform: skewY(0deg); opacity: 0.1; }
          50% { transform: skewY(-2deg); opacity: 0.3; }
        }
        @keyframes float {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-30px); opacity: 0; }
        }
      `}</style>
      
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"></div>
      
      {/* Vision Tag */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-blue-950 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl border border-white/10 whitespace-nowrap">
        Center of Excellence
      </div>
    </div>
  );
};

export default VisionAnimation;
