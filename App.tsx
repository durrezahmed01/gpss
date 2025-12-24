
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIAssistant from './components/AIAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Bubbles from './components/Bubbles';
import VisionAnimation from './components/VisionAnimation';
import { HIGHLIGHTS } from './constants';
import { Camera, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active', 'animate-in', 'fade-in', 'slide-in-from-bottom-10', 'duration-700');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal, .reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-sky-500 selection:text-white">
      {/* Background Bubbles Layer */}
      <Bubbles />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Vision Section - Transparent background to show bubbles */}
        <section id="about" className="py-24 bg-white/40 backdrop-blur-[2px] scroll-mt-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 scroll-reveal opacity-0 flex justify-center">
                <div className="relative w-full max-w-[60%] lg:max-w-[70%] xl:max-w-[60%] mx-auto">
                  <VisionAnimation />
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-sky-500 rounded-3xl -z-10 opacity-20"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-950 rounded-3xl -z-10 opacity-10"></div>
                </div>
              </div>

              <div className="lg:w-1/2 scroll-reveal opacity-0">
                <h2 className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-3">Our Vision</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6 font-serif leading-tight">
                  Nurturing Responsible <br /> Individuals
                </h3>
                <p className="text-slate-700 text-lg leading-relaxed mb-10 italic border-l-4 border-sky-500 pl-6 bg-white/60 backdrop-blur-md py-6 rounded-r-2xl shadow-sm font-medium">
                  "To nurture responsible, confident, and well-educated individuals by providing a strong academic foundation, moral values, and a disciplined environment — preparing students for lifelong learning, leadership, and service to society."
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 bg-white/80 backdrop-blur-md border border-slate-100 rounded-3xl shadow-sm hover:border-sky-200 transition-all group">
                    <h5 className="font-extrabold text-blue-950 text-xl mb-3 group-hover:text-sky-600 transition-colors">Quality Education</h5>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">Structured curriculum delivered by experienced educators since 2006 to ensure every student excels.</p>
                  </div>
                  <div className="p-8 bg-white/80 backdrop-blur-md border border-slate-100 rounded-3xl shadow-sm hover:border-sky-200 transition-all group">
                    <h5 className="font-extrabold text-blue-950 text-xl mb-3 group-hover:text-sky-600 transition-colors">Moral Values</h5>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">Character building and ethical discipline are the core pillars of our educational journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section id="highlights" className="py-32 bg-blue-950/90 relative overflow-hidden backdrop-blur-sm scroll-mt-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-20 scroll-reveal opacity-0">
              <h2 className="text-sky-400 font-bold uppercase tracking-[0.3em] text-sm mb-4">Campus Life</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white font-serif tracking-tight">Daily Highlights</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {HIGHLIGHTS.map((item, i) => (
                <div key={i} className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-sky-500/10 hover:bg-white/10 transition-all duration-500 scroll-reveal opacity-0">
                  <div className="aspect-[1/1] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="p-8">
                    <div className="bg-sky-500 text-white p-2.5 rounded-2xl w-fit mb-5 shadow-lg shadow-sky-500/30 group-hover:rotate-12 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="font-black text-xl text-white mb-3 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-sky-200/80 leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        </section>

        {/* Facilities Section - Transparent background */}
        <section id="facilities" className="py-24 bg-white/30 backdrop-blur-[2px] scroll-mt-24">
          <Features />
        </section>

        {/* Admission CTA Section */}
        <section id="admissions" className="pt-32 pb-16 relative overflow-hidden bg-sky-500/90 backdrop-blur-sm scroll-mt-24">
          <div className="absolute inset-0 opacity-10 overflow-hidden scale-110">
             <img 
              src="https://images.unsplash.com/photo-1510531704581-5b2870972060?auto=format&fit=crop&q=80&w=2000" 
              alt="Celebratory Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
            <div className="max-w-3xl mx-auto scroll-reveal opacity-0">
              <div className="inline-block bg-white/30 backdrop-blur-xl border border-white/40 rounded-full px-8 py-3 mb-8 font-black uppercase tracking-[0.2em] text-xs animate-pulse">
                Registration Open
              </div>
              <h2 className="text-5xl md:text-8xl font-black mb-8 font-serif leading-[1.1] tracking-tighter">
                Admission Started <br /> 2025-2026
              </h2>
              <p className="text-sky-50 text-lg md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
                Join Tonk's most disciplined academic community. Limited seats available for Nursery to Secondary classes.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="shimmer bg-blue-950 text-white px-12 py-6 rounded-3xl font-black text-xl shadow-2xl flex items-center justify-center gap-3 select-none cursor-default">
                  <ShieldCheck className="w-6 h-6 text-sky-400" />
                  Admission Started
                </div>
                <div className="bg-white/20 backdrop-blur-xl border-2 border-white/30 text-white px-12 py-6 rounded-3xl font-black text-xl select-none">
                  Session 2025-26
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;
