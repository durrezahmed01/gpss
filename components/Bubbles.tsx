
import React from 'react';

const Bubbles: React.FC = () => {
  // Create an array of 30 bubbles with different properties
  const bubbles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 150 + 50,
    left: Math.random() * 100,
    delay: Math.random() * -20,
    duration: Math.random() * 20 + 15,
    color: i % 3 === 0 ? 'bg-sky-400/15' : i % 3 === 1 ? 'bg-blue-400/10' : 'bg-amber-400/10',
    blur: i % 2 === 0 ? 'blur-2xl' : 'blur-3xl',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className={`absolute rounded-full ${b.color} ${b.blur}`}
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            bottom: '-20%',
            animation: `bubble-rise ${b.duration}s linear infinite`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes bubble-rise {
          0% {
            transform: translateY(0) scale(1) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-50vh) scale(1.2) translateX(30px);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) scale(0.8) translateX(-20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Bubbles;
