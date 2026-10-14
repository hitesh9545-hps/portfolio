import React from 'react';
import { GraduationCap, Building2, Calendar } from 'lucide-react';
import { portfolioData, EducationItem } from '../portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-mono uppercase tracking-wider">
          <GraduationCap className="w-3.5 h-3.5" /> Academic Pathway
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
          Educational History
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Academic qualifications directly extracted from official resume, with semester-wise SGPA and distinction scores.
        </p>
      </div>

      {/* Timeline Cards */}
      <div className="max-w-4xl mx-auto space-y-6">
        {portfolioData.education.map((item: EducationItem, idx: number) => {
          const isCurrent = idx === 0;

          return (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-xl relative transition-all bg-[#25292E] ${
                isCurrent
                  ? 'border border-[#7895B2]/60 shadow-lg shadow-black/20'
                  : 'border border-[#343940] hover:border-[#7895B2]'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#343940]">
                <div>
                  <span className="px-3 py-1 rounded-md text-xs font-mono bg-[#202328] text-[#7895B2] border border-[#343940]">
                    {item.statusBadge || 'Completed'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#A5ABB3]">Score:</span>
                  <span className="px-2.5 py-1 rounded-md font-mono font-semibold text-sm border bg-[#202328] text-[#F2F3F4] border-[#343940]">
                    {item.score}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F2F3F4]">
                  {item.qualification}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#A5ABB3] font-mono">
                  <div className="flex items-center gap-1.5 text-[#7895B2]">
                    <Building2 className="w-4 h-4" />
                    <span className="font-semibold text-[#F2F3F4]">{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#A5ABB3]">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[#A5ABB3]">{item.year}</span>
                  </div>
                </div>

                {isCurrent && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    <div className="px-3 py-1.5 rounded-lg bg-[#202328] border border-[#343940] font-mono text-xs text-[#A5ABB3] flex items-center gap-2">
                      <span className="text-[#A5ABB3]">Sem 1 SGPA:</span>
                      <span className="text-[#F2F3F4] font-bold">8.10</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-[#202328] border border-[#343940] font-mono text-xs text-[#A5ABB3] flex items-center gap-2">
                      <span className="text-[#A5ABB3]">Sem 2 SGPA:</span>
                      <span className="text-[#F2F3F4] font-bold">8.14</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-[#202328] border border-[#343940] font-mono text-xs text-[#A5ABB3] flex items-center gap-2">
                      <span className="text-[#A5ABB3]">Cumulative CGPA:</span>
                      <span className="text-[#7895B2] font-bold">8.12</span>
                    </div>
                  </div>
                )}

                {item.details && !isCurrent && (
                  <p className="text-xs text-[#A5ABB3] pt-1 leading-relaxed">
                    {item.details}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
