import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-12 md:mb-20 text-center reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">My Journey</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-lg">
            The path I've taken through education and professional experience to become a software engineer.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-slate-900 transform md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {EXPERIENCE.map((item, index) => {
              const isWork = item.type === 'work';
              // Even index = Left side on Desktop
              const isLeft = index % 2 === 0;

              return (
                <div key={item.id} className={`relative flex flex-col md:flex-row gap-8 items-start reveal ${isLeft ? 'md:flex-row-reverse' : ''}`}>

                  {/* Icon Marker */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-slate-950 border-4 border-slate-900 rounded-full flex items-center justify-center z-10 transform md:-translate-x-1/2 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]">
                    <div className={`w-full h-full rounded-full flex items-center justify-center ${isWork ? 'bg-blue-600' : 'bg-cyan-600'}`}>
                      {isWork ? (
                        <Briefcase className="w-6 h-6 text-white" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-4rem)] group perspective-1000`}>
                    <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 relative overflow-hidden">

                      {/* Glow Effect */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full -mr-4 -mt-4 group-hover:from-blue-500/20 transition-all"></div>

                      <div className="flex flex-wrap items-center gap-3 text-xs font-bold tracking-wider text-blue-400 mb-4 uppercase">
                        <div className="flex items-center gap-1 bg-blue-500/10 px-3 py-1 rounded-full">
                          <Calendar className="w-3 h-3" />
                          {item.duration}
                        </div>
                        <span className="text-slate-600">|</span>
                        <span className={isWork ? "text-blue-400" : "text-cyan-400"}>
                          {isWork ? "Experience" : "Education"}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.role}</h3>
                      <h4 className="text-lg text-slate-300 font-medium mb-6 border-b border-slate-800 pb-4">{item.company}</h4>

                      <ul className="space-y-3">
                        {item.description.map((desc, i) => (
                          <li key={i} className="text-slate-400 leading-relaxed flex items-start gap-3 text-sm md:text-base">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;