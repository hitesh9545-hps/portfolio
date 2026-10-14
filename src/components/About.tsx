import React from 'react';
import { User, Sparkles, Cpu, Brain, Target } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202328] border border-[#343940] text-[#7895B2] text-xs font-mono uppercase tracking-wider">
          <User className="w-3.5 h-3.5 text-[#7895B2]" /> Profile &amp; Motivation
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F2F3F4]">
          About Me
        </h2>
        <p className="text-[#A5ABB3] text-base">
          Second-year AI &amp; Data Science undergraduate at RC Patel Institute of Technology, Shirpur, combining algorithmic thinking with practical systems engineering.
        </p>
      </div>

      {/* Narrative & Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Story / Bio Card */}
        <div className="lg:col-span-7 bg-[#25292E] border border-[#343940] p-6 sm:p-8 rounded-xl space-y-5">
          <div className="flex items-center gap-3 pb-2 border-b border-[#343940]">
            <div className="w-8 h-8 rounded-lg bg-[#202328] border border-[#343940] text-[#7895B2] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-[#F2F3F4]">
                Academic Journey &amp; Technical Mindset
              </h3>
              <p className="text-xs text-[#A5ABB3] font-mono">
                RC Patel Institute of Technology, Shirpur &bull; 2nd Year (3rd Sem)
              </p>
            </div>
          </div>

          {/* Official Resume Summary */}
          <div className="p-4 rounded-lg bg-[#202328] border-l-2 border-[#7895B2] space-y-1">
            <span className="text-xs font-mono text-[#7895B2] uppercase tracking-wider font-semibold">
              Official Summary
            </span>
            <p className="text-xs sm:text-sm text-[#F2F3F4] italic leading-relaxed">
              "{portfolioData.personal.resumeSummary}"
            </p>
          </div>

          <p className="text-[#A5ABB3] text-sm sm:text-base leading-relaxed">
            I am currently pursuing my <span className="text-[#F2F3F4] font-medium">B.Tech in Artificial Intelligence and Data Science</span> at RC Patel Institute of Technology, Shirpur, maintaining a <span className="text-[#7895B2] font-semibold font-mono">8.12 CGPA</span> (Sem 1: 8.10, Sem 2: 8.14). Prior to engineering, I graduated secondary and higher secondary education with distinction—scoring <span className="text-[#F2F3F4] font-mono">92.80% in 10th (SSC)</span> and <span className="text-[#F2F3F4] font-mono">92.60% in 12th (HSC)</span>.
          </p>

          <p className="text-[#A5ABB3] text-sm sm:text-base leading-relaxed">
            My engineering philosophy centers around hands-on construction. I have built and demonstrated a complete <span className="text-[#F2F3F4] font-medium">Face Mask Detection System</span> leveraging computer vision with OpenCV, TensorFlow, and Keras, alongside an automated hardware <span className="text-[#F2F3F4] font-medium">Automatic Water Dispenser System</span> powered by infrared sensors and relay circuitry.
          </p>

          {/* Languages & Hobbies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#343940] text-xs text-[#A5ABB3]">
            <div>
              <span className="font-mono text-[#7895B2] text-[11px] uppercase block mb-1.5 font-semibold">
                Languages Known:
              </span>
              <div className="flex gap-2 font-mono">
                {portfolioData.personal.languagesKnown.map((lang, li) => (
                  <span key={li} className="px-2 py-0.5 rounded bg-[#202328] border border-[#343940] text-[#A5ABB3]">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="font-mono text-[#7895B2] text-[11px] uppercase block mb-1.5 font-semibold">
                Hobbies &amp; Interests:
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {portfolioData.personal.hobbies.map((hobby, hi) => (
                  <span key={hi} className="px-2 py-0.5 rounded bg-[#202328] border border-[#343940] text-[#A5ABB3]">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Information Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          <div className="bg-[#25292E] border border-[#343940] hover:border-[#7895B2] p-5 rounded-xl flex items-start gap-4 transition-colors flex-1">
            <div className="w-11 h-11 rounded-lg bg-[#202328] border border-[#343940] flex items-center justify-center shrink-0 text-[#7895B2]">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-[#7895B2] uppercase font-semibold">Current Focus</div>
              <h4 className="font-display font-bold text-[#F2F3F4] text-base">B.Tech in AI &amp; Data Science</h4>
              <p className="text-xs text-[#A5ABB3] leading-relaxed">
                2nd Year (3rd Sem) at RC Patel Institute of Technology, Shirpur. Consistent academic performer with 8.12 CGPA.
              </p>
            </div>
          </div>

          <div className="bg-[#25292E] border border-[#343940] hover:border-[#7895B2] p-5 rounded-xl flex items-start gap-4 transition-colors flex-1">
            <div className="w-11 h-11 rounded-lg bg-[#202328] border border-[#343940] flex items-center justify-center shrink-0 text-[#7895B2]">
              <Brain className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-[#7895B2] uppercase font-semibold">Applied Technical Scope</div>
              <h4 className="font-display font-bold text-[#F2F3F4] text-base">C, Python &amp; Computer Vision</h4>
              <p className="text-xs text-[#A5ABB3] leading-relaxed">
                Real-world projects with OpenCV, TensorFlow, Keras, DSA, OOP, hardware control circuits, and CodeChef competitive coding.
              </p>
            </div>
          </div>

          <div className="bg-[#25292E] border border-[#343940] hover:border-[#7895B2] p-5 rounded-xl flex items-start gap-4 transition-colors flex-1">
            <div className="w-11 h-11 rounded-lg bg-[#202328] border border-[#343940] flex items-center justify-center shrink-0 text-[#7895B2]">
              <Target className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-[#7895B2] uppercase font-semibold">Key Strengths</div>
              <h4 className="font-display font-bold text-[#F2F3F4] text-base">Leadership, Problem Solving &amp; Agility</h4>
              <p className="text-xs text-[#A5ABB3] leading-relaxed">
                Quick learner, skilled communicator, calm decision-maker, and active organizer of academic events and college initiatives.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
