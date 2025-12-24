
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-blue-950/95 backdrop-blur-md shadow-lg py-2' : 'bg-blue-950/40 py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Logo className="transform group-hover:scale-110 transition-transform duration-500" />
          <div className="flex flex-col">
            <span className="font-black text-lg md:text-2xl tracking-tighter text-white leading-none">
              GENIUS <span className="text-sky-400">PUBLIC</span>
            </span>
            <span className="font-bold text-[10px] md:text-xs text-sky-300 tracking-[0.25em] leading-none mt-1 uppercase">
              Secondary School
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-black uppercase tracking-widest hover:text-sky-400 transition-colors text-slate-100 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <div className="shimmer bg-sky-500 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-wider shadow-xl shadow-sky-500/20 select-none">
            Admission Started 2025-26
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-3 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-blue-950 z-[60] transform transition-transform duration-500 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-4">
              <Logo />
              <div className="flex flex-col">
                <span className="font-black text-2xl text-white">GENIUS PUBLIC</span>
                <span className="font-bold text-sm text-sky-400 tracking-widest">SECONDARY SCHOOL</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-3 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col gap-8 flex-1">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-black text-slate-100 hover:text-sky-400 transition-all transform translate-x-0 hover:translate-x-4 duration-300`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="shimmer bg-sky-500 text-white text-center py-6 rounded-3xl text-xl font-black mt-auto shadow-2xl shadow-sky-500/30 select-none">
            Admission Started 2025-2026
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
