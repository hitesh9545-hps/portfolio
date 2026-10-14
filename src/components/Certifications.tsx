import React from 'react';
import { Award, BadgeCheck, Trophy } from 'lucide-react';
import { portfolioData, CertificationItem, AchievementItem } from '../portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202328] border border-[#343940] text-[#7895B2] text-xs font-mono uppercase tracking-wider">
          <Award className="w-3.5 h-3.5 text-[#7895B2]" /> Credentials &amp; Honors
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F2F3F4]">
          Certifications &amp; Achievements
        </h2>
        <p className="text-[#A5ABB3] text-sm sm:text-base">
          11 official certifications and recognized honors directly verified from resume document.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Certifications List */}
        <div className="lg:col-span-7 bg-[#25292E] border border-[#343940] p-6 sm:p-8 rounded-xl space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#343940]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#202328] border border-[#343940] text-[#7895B2] flex items-center justify-center">
                <BadgeCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[#F2F3F4] text-lg">Verified Certifications</h3>
                <span className="text-xs text-[#A5ABB3] font-mono">11 Courses &amp; Competitions</span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#202328] border border-[#343940] text-[#7895B2]">
              All Verified
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {portfolioData.certifications.map((cert: CertificationItem) => (
              <div
                key={cert.id}
                className={`p-3 rounded-lg bg-[#202328] border border-[#343940] flex items-start gap-2.5 ${
                  cert.id === 11 ? 'sm:col-span-2' : ''
                }`}
              >
                <span className="text-[#7895B2] font-bold shrink-0">
                  {cert.id < 10 ? `0${cert.id}.` : `${cert.id}.`}
                </span>
                <div>
                  <div className="text-[#F2F3F4] font-medium">{cert.title}</div>
                  <div className="text-[11px] text-[#A5ABB3]">{cert.issuerOrCategory}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#25292E] border border-[#343940] p-6 rounded-xl space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#343940]">
              <div className="w-9 h-9 rounded-lg bg-[#202328] border border-[#343940] text-[#7895B2] flex items-center justify-center">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[#F2F3F4] text-lg">Verified Achievements</h3>
                <span className="text-xs text-[#A5ABB3] font-mono">Academic &amp; Athletic Honors</span>
              </div>
            </div>

            <div className="space-y-3">
              {portfolioData.achievements.map((ach: AchievementItem, idx: number) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#202328] border border-[#343940] space-y-1"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#F2F3F4] font-medium">{ach.title}</span>
                    <span className="text-[#7895B2] font-semibold">{ach.scoreOrAward}</span>
                  </div>
                  <p className="text-[11px] text-[#A5ABB3]">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
