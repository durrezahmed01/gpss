
import React from 'react';
import { MapPin, Phone, Mail, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-16 pb-24 bg-white/40 backdrop-blur-[2px] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal opacity-0">
            <h2 className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-3">Visit Our Campus</h2>
            <h3 className="text-4xl md:text-6xl font-black text-blue-950 mb-8 font-serif leading-none tracking-tighter">Get In Touch</h3>
            <p className="text-slate-600 mb-10 text-xl leading-relaxed font-medium">
              We welcome parents and students to visit our campus at Chhawni to experience our disciplined learning atmosphere firsthand.
            </p>

            <div className="space-y-8">
              <div className="flex gap-5 items-start group">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <MapPin className="text-sky-500 group-hover:text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-blue-950 text-sm uppercase tracking-widest opacity-40 mb-1">Our Address</h5>
                  <p className="text-slate-800 font-bold text-lg">Near Astal Road, Chhawni, Tonk – 304001, Rajasthan</p>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <Phone className="text-sky-500 group-hover:text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-blue-950 text-sm uppercase tracking-widest opacity-40 mb-1">Call Helpline</h5>
                  <p className="text-slate-800 font-bold text-lg">+91 9461042184 | +91 6375600294</p>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <Mail className="text-sky-500 group-hover:text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-blue-950 text-sm uppercase tracking-widest opacity-40 mb-1">Official Email</h5>
                  <p className="text-sky-600 font-black text-lg italic">gpsstonk@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative scroll-reveal opacity-0 delay-300">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl bg-blue-950/90 backdrop-blur-md border-8 border-white group relative flex items-center justify-center p-12 text-center">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:20px_20px] animate-[pulse_5s_infinite]"></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce shadow-xl shadow-sky-500/20">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <p className="text-sky-400 font-black uppercase tracking-[0.4em] text-sm mb-6">Our Legacy</p>
                <h4 className="text-4xl md:text-5xl font-black font-serif italic text-white leading-tight">
                  "Come to Learn, <br /> Go to Serve"
                </h4>
                <div className="mt-8 w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-400 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
