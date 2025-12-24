
import React from 'react';
import { FEATURES, STATS } from '../constants';

const Features: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal opacity-0">
        <h2 className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-3">Modern Infrastructure</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6 font-serif">Campus Facilities</h3>
        <p className="text-slate-600 leading-relaxed">
          We offer a comprehensive curriculum that blends academic rigor with extracurricular passion, 
          supported by state-of-the-art facilities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {FEATURES.map((feature, idx) => (
          <div 
            key={idx}
            className="p-8 rounded-3xl border border-white/50 bg-white/60 backdrop-blur-md hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-300 group scroll-reveal opacity-0"
          >
            <div className="bg-white text-sky-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-500/20 transition-all duration-300">
              {feature.icon}
            </div>
            <h4 className="text-xl font-bold text-blue-950 mb-4 group-hover:text-sky-600 transition-colors">{feature.title}</h4>
            <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-950/90 backdrop-blur-md rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center scroll-reveal opacity-0">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-sky-400 font-medium uppercase tracking-wider text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default Features;