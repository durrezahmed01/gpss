
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, GraduationCap, MapPin, Phone, Mail } from 'lucide-react';
import { SCHOOL_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-slate-400 py-20 border-t border-blue-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-8 h-8 text-sky-400" />
              <span className="font-bold text-2xl text-white">Genius Public</span>
            </div>
            <p className="mb-8 leading-relaxed text-sm">
              Empowering students with quality education, disciplined environment, and all-round development since 2006.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all shadow-lg">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Official Records</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-sm">Near Astal Road, Chhawni, Tonk – 304001, Rajasthan</span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-sm">+91 94610 42184<br/>+91 63756 00294</span>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-sm italic">gpsstonk@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Facilities', 'Highlights', 'Admissions', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-sky-400 transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="mb-4 text-xs">Stay informed about school events and results.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-blue-900 border-none rounded-xl px-4 py-3 flex-1 focus:ring-1 focus:ring-sky-400 text-sm outline-none text-white"
              />
              <button className="bg-sky-500 text-white px-4 py-3 rounded-xl hover:bg-sky-600 font-bold text-xs uppercase tracking-widest transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-wide">
          <p>© {new Date().getFullYear()} {SCHOOL_NAME}. Disciplined Learning Since 2006.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
