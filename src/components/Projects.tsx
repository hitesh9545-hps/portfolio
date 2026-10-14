import React from 'react';
import { FolderGit2, ScanFace, Droplets, BarChart3, TrendingUp, Check, Github, ExternalLink, Cpu } from 'lucide-react';
import { portfolioData, ProjectItem } from '../portfolioData';

interface ProjectsProps {
  onOpenProjectModal: (title: string, type: 'github' | 'hardware' | 'demo') => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenProjectModal }) => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'face-mask-detection':
        return <ScanFace className="w-6 h-6 text-[#7895B2]" />;
      case 'automatic-water-system':
        return <Droplets className="w-6 h-6 text-[#7895B2]" />;
      case 'student-performance':
        return <BarChart3 className="w-6 h-6 text-[#7895B2]" />;
      case 'ml-prediction-model':
        return <TrendingUp className="w-6 h-6 text-[#7895B2]" />;
      default:
        return <FolderGit2 className="w-6 h-6 text-[#7895B2]" />;
    }
  };

  return (
    <section id="projects" className="space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202328] border border-[#343940] text-[#7895B2] text-xs font-mono uppercase tracking-wider">
          <FolderGit2 className="w-3.5 h-3.5 text-[#7895B2]" /> Project Showcase
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F2F3F4]">
          Real Projects &amp; Innovation Builds
        </h2>
        <p className="text-[#A5ABB3] text-sm sm:text-base">
          Actual projects built and documented in official resume, spanning real-time computer vision AI and automated embedded systems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project: ProjectItem) => {
          const isCompleted = project.status === 'Completed';

          return (
            <div
              key={project.id}
              className="bg-[#25292E] border border-[#343940] hover:border-[#7895B2] rounded-xl overflow-hidden flex flex-col group transition-colors duration-200"
            >
              {/* Banner */}
              <div className="h-44 relative bg-[#202328] border-b border-[#343940] flex items-center justify-center p-6">
                <div className="relative z-10 flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-xl bg-[#25292E] border border-[#343940] flex items-center justify-center">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="text-xs font-mono text-[#A5ABB3] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#202328] border border-[#343940] text-[#7895B2] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7895B2]"></span>
                    {project.status === 'Completed' ? 'Completed Project' : 'Planned Idea'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-display font-bold text-[#F2F3F4]">
                    {project.title}
                  </h3>
                  <p className="text-[#A5ABB3] text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* How it works if available */}
                  {project.howItWorks && (
                    <div className="p-3.5 rounded-lg bg-[#202328] border border-[#343940] text-xs text-[#A5ABB3] space-y-1">
                      <span className="font-mono text-[#7895B2] font-semibold block">
                        How It Works:
                      </span>
                      <p>{project.howItWorks}</p>
                    </div>
                  )}

                  <div className="space-y-1.5 pt-1">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#A5ABB3]">
                        <Check className="w-3.5 h-3.5 text-[#7895B2] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech & Links */}
                <div className="space-y-4 pt-4 border-t border-[#343940]">
                  <div className="flex flex-wrap gap-2">
                    {project.techUsed.map((tech, ti) => (
                      <span
                        key={ti}
                        className="code-badge px-2.5 py-1 rounded-md bg-[#202328] text-[#A5ABB3] border border-[#343940]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    {isCompleted && project.id === 'automatic-water-system' ? (
                      <button
                        onClick={() => onOpenProjectModal(project.title, 'hardware')}
                        className="flex-1 py-2.5 px-3 rounded-lg border border-[#343940] hover:border-[#7895B2] bg-[#202328] hover:bg-[#25292E] text-xs font-mono text-[#F2F3F4] flex items-center justify-center gap-2 transition-colors"
                      >
                        <Cpu className="w-3.5 h-3.5 text-[#7895B2]" />
                        <span>Hardware Blueprint</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => onOpenProjectModal(project.title, 'github')}
                        className="flex-1 py-2.5 px-3 rounded-lg border border-[#343940] hover:border-[#7895B2] bg-[#202328] hover:bg-[#25292E] text-xs font-mono text-[#F2F3F4] flex items-center justify-center gap-2 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5 text-[#7895B2]" />
                        <span>GitHub [Link Repo]</span>
                      </button>
                    )}
                    <button
                      onClick={() => onOpenProjectModal(project.title, 'demo')}
                      className="flex-1 py-2.5 px-3 rounded-lg border border-[#343940] hover:border-[#7895B2] bg-[#202328] hover:bg-[#25292E] text-xs font-mono text-[#A5ABB3] hover:text-[#F2F3F4] flex items-center justify-center gap-2 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#7895B2]" />
                      <span>Live Demo [Pending]</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
