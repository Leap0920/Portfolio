import React from 'react';
import { Mail, ArrowUpRight, MapPin } from 'lucide-react';
import { SOCIAL_LINKS, PORTFOLIO_OWNER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-slate-400 py-20 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Let's work together.</h2>
            <p className="text-slate-400 text-base md:text-lg max-w-md mb-6 md:mb-8 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question about my stack, want to collaborate, or just want to say hi, feel free to reach out!
            </p>
            <a
              href={SOCIAL_LINKS.email}
              className="inline-flex items-start gap-2 md:gap-3 text-white text-lg md:text-2xl font-semibold hover:text-blue-400 transition-colors break-all"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" />
              <span className="break-all">baclao.carlo.cometa@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-col justify-end items-start md:items-end gap-6">
            <a href={SOCIAL_LINKS.github} className="group flex items-center gap-3 text-lg text-slate-400 hover:text-white transition-colors">
              Github
              <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} className="group flex items-center gap-3 text-lg text-slate-400 hover:text-white transition-colors">
              LinkedIn
              <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} {PORTFOLIO_OWNER}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Quezon City, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;