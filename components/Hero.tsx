
import React, { useEffect, useState } from 'react';
import { Sparkles, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    const b = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 40 + 20,
      delay: Math.random() * -20,
      duration: Math.random() * 15 + 10,
      opacity: Math.random() * 0.3 + 0.1,
      sway: Math.random() * 60 - 30,
    }));
    setBubbles(b);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-blue-950">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000" 
          alt="Genius Public School Classroom"
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/95 via-blue-950/80 to-blue-950"></div>
      </div>

      {/* Hero-Specific Moving Bubbles */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {bubbles.map((bubble) => (
          <div 
            key={bubble.id}
            className="absolute rounded-full bg-white/10 backdrop-blur-[1px] border border-white/5 shadow-[inset_0_0_8px_rgba(255,255,255,0.2)]"
            style={{
              left: bubble.left,
              top: bubble.top,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              opacity: bubble.opacity,
              animation: `hero-bubble-float ${bubble.duration}s ease-in-out infinite alternate`,
              animationDelay: `${bubble.delay}s`,
              '--sway-amount': `${bubble.sway}px`
            } as any}
          />
        ))}
      </div>

      <style>{`
        @keyframes hero-bubble-float {
          0% { transform: translateY(0) translateX(0) scale(1); }
          100% { transform: translateY(-80px) translateX(var(--sway-amount)) scale(1.1); }
        }
        @keyframes text-shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes motto-dim-glow {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.4)); }
          50% { opacity: 0.4; filter: drop-shadow(0 0 0px rgba(56, 189, 248, 0)); }
        }
        .animate-text-shine {
          background: linear-gradient(
            to right, 
            #ffffff 20%, 
            #7dd3fc 40%, /* Light sky blue (sky-300) */
            #ffffff 50%, /* Core bright white strike */
            #7dd3fc 60%, /* Light sky blue (sky-300) */
            #ffffff 80%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: text-shine 4s linear infinite;
        }
        .animate-motto {
          animation: motto-dim-glow 4s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 rounded-full px-4 py-1.5 mb-8 animate-bounce backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-sky-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Quality Education Since 2006</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 leading-[1.1] md:leading-[0.95] font-serif tracking-tighter animate-text-shine">
            GENIUS PUBLIC <br className="hidden sm:block" />
            SECONDARY SCHOOL
          </h1>
          
          <div className="relative inline-block mb-10 px-4">
            <p className="text-sky-400 text-xl sm:text-3xl md:text-5xl font-black font-serif tracking-wide italic animate-motto">
              "Come to Learn, Go to Serve"
            </p>
            <div className="mt-4 w-24 sm:w-32 h-1 bg-sky-500/30 rounded-full overflow-hidden mx-auto">
               <div className="w-1/3 h-full bg-sky-400 animate-[shimmer_2s_infinite]"></div>
            </div>
          </div>
          
          <p className="text-slate-200 text-base sm:text-lg md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto font-medium opacity-80 px-4">
            Empowering students in Tonk, Rajasthan with a disciplined academic environment and holistic character development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <div className="w-full sm:w-auto shimmer bg-sky-500 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-3 shadow-2xl shadow-sky-500/30 border border-white/20 select-none cursor-default transition-transform hover:scale-105">
              <Calendar className="w-5 h-5 md:w-6 md:h-6" />
              Admission Started 2025-26
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
