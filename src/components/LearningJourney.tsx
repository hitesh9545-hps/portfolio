import React from 'react';
import { Milestone } from 'lucide-react';
import { portfolioData, JourneyMilestone } from '../portfolioData';

export const LearningJourney: React.FC = () => {
  const getStatusBadgeClass = (status: JourneyMilestone['status']) => {
    switch (status) {
      case 'In Progress':
        return 'bg-[#202328] border-[#7895B2]/40 text-[#7895B2]';
      case 'Next Step':
        return 'bg-[#202328] border-[#343940] text-[#A5ABB3]';
      case 'Future Target':
        return 'bg-[#202328] border-[#343940] text-[#A5ABB3]';
      case 'Completed':
        return 'bg-[#202328] border-[#343940] text-[#F2F3F4]';
      default:
        return 'bg-[#202328] border-[#343940] text-[#A5ABB3]';
    }
  };

  return (
    <section id="journey" className="space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202328] border border-[#343940] text-[#7895B2] text-xs font-mono uppercase tracking-wider">
          <Milestone className="w-3.5 h-3.5 text-[#7895B2]" /> Continuous Progression
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F2F3F4]">
          My Learning Journey
        </h2>
        <p className="text-[#A5ABB3] text-sm sm:text-base">
          Tracking my progressive growth from introductory syntax to intelligent engineering. No fabricated historical dates—only authentic milestones.
        </p>
      </div>

      {/* Milestones List */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {portfolioData.learningJourney.map((milestone: JourneyMilestone) => (
          <div
            key={milestone.step}
            className="p-6 rounded-xl bg-[#25292E] border border-[#343940] hover:border-[#7895B2] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold shrink-0 bg-[#202328] border border-[#343940] text-[#7895B2]"
              >
                0{milestone.step}
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-[#F2F3F4] text-base">
                  {milestone.title}
                </h3>
                <p className="text-xs text-[#A5ABB3]">
                  {milestone.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {milestone.tags.map((tag: string, ti: number) => (
                    <span
                      key={ti}
                      className="code-badge px-2 py-0.5 rounded bg-[#202328] text-[#A5ABB3] border border-[#343940]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <span
              className={`px-3 py-1 rounded-md text-xs font-mono border shrink-0 ${getStatusBadgeClass(
                milestone.status
              )}`}
            >
              {milestone.status}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};
