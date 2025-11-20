import React from 'react';
import { INTRO_TEXT } from '../constants';
import { ArrowDown, Code, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-slate-950">
      {/* Background Elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-full text-blue-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Open to work
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tighter animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Carlo C. Baclao
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 mt-2">
            Programmer
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {INTRO_TEXT}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a 
            href="#projects"
            className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-bold overflow-hidden hover:bg-blue-700 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="flex items-center gap-2">
              <Code className="w-5 h-5" /> View Projects
            </span>
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 bg-slate-900 text-slate-300 border border-slate-800 rounded-full font-bold hover:border-slate-600 hover:text-white transition-all hover:shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;