import React from 'react';
import { CERTIFICATES } from '../constants';
import { Award, CheckCircle2, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-12 md:mb-16 reveal">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Certifications</h2>
            <p className="text-slate-400 max-w-xl text-sm md:text-lg">
              Professional credentials and continuous learning milestones.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500 bg-slate-900/50 px-3 md:px-4 py-2 rounded-full border border-slate-800">
            <Award className="w-4 h-4 text-blue-500" />
            <span>{CERTIFICATES.length} Credentials Earned</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {CERTIFICATES.map((cert, idx) => {
            const isUdemy = cert.issuer === 'Udemy';
            const isCisco = cert.issuer === 'Cisco';

            let accentColor = 'text-blue-400';
            let bgHover = 'hover:border-blue-500/30 hover:shadow-blue-900/20';

            if (isUdemy) {
              accentColor = 'text-purple-400';
              bgHover = 'hover:border-purple-500/30 hover:shadow-purple-900/20';
            } else if (isCisco) {
              accentColor = 'text-cyan-400';
              bgHover = 'hover:border-cyan-500/30 hover:shadow-cyan-900/20';
            }

            return (
              <div
                key={cert.id}
                className={`
                  group relative bg-slate-900/40 border border-slate-800 rounded-xl p-6 
                  transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900 hover:shadow-xl
                  flex flex-col justify-between min-h-[180px] reveal
                  ${bgHover}
                `}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-slate-950 border border-slate-800 ${accentColor}`}>
                      {cert.issuer}
                    </span>
                    {cert.url && (
                      <a href={cert.url} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-200 group-hover:text-white leading-snug transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 mt-auto pt-4 border-t border-slate-800/50 group-hover:border-slate-800 transition-colors">
                  <CheckCircle2 className={`w-3 h-3 ${accentColor}`} />
                  <span>Verified Certificate</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;