import React from 'react';
import { Users, Megaphone, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="experience" className="space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202328] border border-[#343940] text-[#7895B2] text-xs font-mono uppercase tracking-wider">
          <Users className="w-3.5 h-3.5 text-[#7895B2]" /> Extracurricular Responsibility
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F2F3F4]">
          Leadership &amp; College Initiatives
        </h2>
        <p className="text-[#A5ABB3] text-sm sm:text-base">
          Proven leadership in organizing campus academic events, group activities, and student team initiatives at RC Patel Institute of Technology.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-[#25292E] p-6 sm:p-8 rounded-xl space-y-6 border border-[#343940] hover:border-[#7895B2] transition-colors">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#343940]">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-[#202328] border border-[#343940] text-[#7895B2] flex items-center justify-center shrink-0">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-[#F2F3F4]">
                {portfolioData.leadership.title}
              </h3>
              <p className="text-xs font-mono text-[#7895B2]">
                {portfolioData.leadership.organization}
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-md text-xs font-mono bg-[#202328] text-[#7895B2] border border-[#343940] shrink-0">
            Active Leadership
          </span>
        </div>

        <p className="text-[#A5ABB3] text-sm sm:text-base leading-relaxed italic">
          "{portfolioData.leadership.description}"
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#A5ABB3]">
          {portfolioData.leadership.responsibilities.map((resp, i) => (
            <div
              key={i}
              className="p-3.5 rounded-lg bg-[#202328] border border-[#343940] flex items-start gap-2.5"
            >
              <CheckCircle2 className="w-4 h-4 text-[#7895B2] shrink-0 mt-0.5" />
              <span>{resp}</span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
