import React from 'react';
import { SKILLS } from '../constants';

const SkillPill: React.FC<{ name: string }> = ({ name }) => (
  <span className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg text-sm font-medium text-slate-300 shadow-sm hover:border-blue-500/50 hover:text-blue-400 hover:bg-slate-900 transition-all cursor-default hover:-translate-y-1">
    {name}
  </span>
);

const Skills: React.FC = () => {
  // Group skills by category
  const languages = SKILLS.filter(s => s.category === 'Language');
  const frameworks = SKILLS.filter(s => s.category === 'Framework');
  const tools = SKILLS.filter(s => s.category === 'Tool');
  const softSkills = SKILLS.filter(s => s.category === 'Soft Skill');

  return (
    <section id="skills" className="py-20 md:py-32 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 md:mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-xl text-sm md:text-base">
            The languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <h3 className="text-sm font-bold text-blue-500 uppercase tracking-wider mb-6 border-l-2 border-blue-500 pl-3">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {languages.map(s => <SkillPill key={s.name} name={s.name} />)}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-wider mb-6 border-l-2 border-cyan-500 pl-3">Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              {frameworks.map(s => <SkillPill key={s.name} name={s.name} />)}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '300ms' }}>
            <h3 className="text-sm font-bold text-indigo-500 uppercase tracking-wider mb-6 border-l-2 border-indigo-500 pl-3">Tools</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map(s => <SkillPill key={s.name} name={s.name} />)}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '400ms' }}>
            <h3 className="text-sm font-bold text-purple-500 uppercase tracking-wider mb-6 border-l-2 border-purple-500 pl-3">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map(s => <SkillPill key={s.name} name={s.name} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;