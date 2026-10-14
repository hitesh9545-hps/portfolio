import React, { useState } from 'react';
import { Terminal, Eye, Sparkles, Bot, FileSpreadsheet } from 'lucide-react';
import { portfolioData, SkillItem } from '../portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSkills = portfolioData.skills.filter((skill: SkillItem) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'programming') return skill.category === 'Programming';
    if (selectedCategory === 'cs') return skill.category === 'Computer Science & OOP';
    if (selectedCategory === 'aiml') return skill.category === 'AI & Computer Vision';
    if (selectedCategory === 'tools') return skill.category === 'Web & Tools';
    return true;
  });

  const getSkillIcon = (name: string) => {
    if (name.includes('C Programming')) return <span className="font-bold font-mono text-[#7895B2]">C</span>;
    if (name.includes('Python')) return <span className="font-bold font-mono text-[#7895B2]">Py</span>;
    if (name.includes('Data Structures')) return <span className="font-bold font-mono text-[#7895B2]">DSA</span>;
    if (name.includes('OOP Concepts')) return <span className="font-bold font-mono text-[#7895B2]">OOP</span>;
    if (name.includes('Computer Vision') || name.includes('OpenCV')) return <Eye className="w-5 h-5 text-[#7895B2]" />;
    if (name.includes('TensorFlow')) return <span className="font-bold font-mono text-[#7895B2]">TF</span>;
    if (name.includes('Prompt Engineering')) return <Sparkles className="w-5 h-5 text-[#7895B2]" />;
    if (name.includes('HTML')) return <span className="font-bold font-mono text-[#7895B2]">&lt;/&gt;</span>;
    if (name.includes('CodeChef')) return <span className="font-bold font-mono text-[#7895B2]">CC</span>;
    if (name.includes('GitHub Copilot')) return <Bot className="w-5 h-5 text-[#7895B2]" />;
    if (name.includes('MS Office') || name.includes('MSCIT')) return <FileSpreadsheet className="w-5 h-5 text-[#7895B2]" />;
    return <Terminal className="w-5 h-5 text-[#7895B2]" />;
  };

  return (
    <section id="skills" className="space-y-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202328] border border-[#343940] text-[#7895B2] text-xs font-mono uppercase tracking-wider">
          <Terminal className="w-3.5 h-3.5 text-[#7895B2]" /> Technical Competencies
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F2F3F4]">
          Technical Skills &amp; Stack
        </h2>
        <p className="text-[#A5ABB3] text-sm sm:text-base">
          Extracted directly from resume and verified through academic coursework, competitive coding, and applied project builds.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { id: 'all', label: 'All Skills (11)' },
          { id: 'programming', label: 'Programming Languages' },
          { id: 'cs', label: 'Core Computer Science & OOP' },
          { id: 'aiml', label: 'Computer Vision & AI' },
          { id: 'tools', label: 'Web & Tools' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              selectedCategory === tab.id
                ? 'bg-[#7895B2] text-[#17191C] font-semibold shadow-sm'
                : 'bg-[#202328] border border-[#343940] text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#25292E]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#25292E] border border-[#343940] hover:border-[#7895B2] p-6 rounded-xl space-y-4 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#202328] border border-[#343940] flex items-center justify-center">
                  {getSkillIcon(skill.name)}
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#F2F3F4] text-base">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-[#A5ABB3] font-mono">
                    {skill.category}
                  </span>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#202328] border border-[#343940] text-[#7895B2]">
                {skill.status}
              </span>
            </div>

            <p className="text-xs text-[#A5ABB3] leading-relaxed">
              {skill.notes}
            </p>

            <div className="pt-2 border-t border-[#343940] flex items-center justify-between text-[11px] text-[#A5ABB3] font-mono">
              <span>Level: {skill.level}</span>
              <span className="text-[#7895B2]">Verified</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
