import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Utensils, CalendarCheck, Car, Landmark, FolderGit2, ArrowRight } from 'lucide-react';

const getProjectIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('cuisine')) return <Utensils className="w-8 h-8 text-orange-400" />;
  if (lowerTitle.includes('attendance')) return <CalendarCheck className="w-8 h-8 text-blue-400" />;
  if (lowerTitle.includes('jdm') || lowerTitle.includes('car')) return <Car className="w-8 h-8 text-red-500" />;
  if (lowerTitle.includes('accounting') || lowerTitle.includes('finance')) return <Landmark className="w-8 h-8 text-emerald-400" />;
  return <FolderGit2 className="w-8 h-8 text-purple-400" />;
};

const getIconBackground = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('cuisine')) return 'bg-orange-500/10 border-orange-500/20';
  if (lowerTitle.includes('attendance')) return 'bg-blue-500/10 border-blue-500/20';
  if (lowerTitle.includes('jdm')) return 'bg-red-500/10 border-red-500/20';
  if (lowerTitle.includes('accounting')) return 'bg-emerald-500/10 border-emerald-500/20';
  return 'bg-purple-500/10 border-purple-500/20';
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-slate-950 relative">
      {/* Background decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-xl">
              Real-world applications demonstrating full-stack capabilities and system architecture.
            </p>
          </div>
          <a href="https://github.com/Leap0920" target="_blank" rel="noreferrer" className="text-blue-400 font-medium hover:text-blue-300 transition-colors inline-flex items-center gap-2 group">
            View full archive <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 reveal flex flex-col h-full"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Top Bar */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl border ${getIconBackground(project.title)} transition-transform group-hover:scale-110 duration-300`}>
                  {getProjectIcon(project.title)}
                </div>
                
                <div className="flex gap-3">
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                      aria-label="View Source"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-slate-800/50">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium text-slate-300 bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;