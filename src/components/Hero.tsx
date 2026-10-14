import React from 'react';
import { Layers, Download, Send, Eye, Terminal, Award, Trophy, Mail, Phone, Code } from 'lucide-react';
import { NeuralNetworkCanvas } from './NeuralNetworkCanvas';
import { portfolioData } from '../portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center pt-6 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Student Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#202328] border border-[#343940] text-[#7895B2] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#7895B2]"></span>
            <span>2nd Year (3rd Sem) &bull; RC Patel Institute of Technology, Shirpur</span>
          </div>

          {/* Greeting & Name */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <p className="text-sm font-mono text-[#7895B2] tracking-wider uppercase font-semibold">
                Hello World, I'm
              </p>
              <span className="px-2 py-0.5 rounded bg-[#202328] border border-[#343940] text-[11px] font-mono text-[#A5ABB3]">
                CGPA: <strong className="text-[#F2F3F4]">8.12</strong>
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#F2F3F4] tracking-tight leading-tight">
              {portfolioData.personal.fullName}
            </h1>
            <p className="text-xs font-mono text-[#A5ABB3]">
              Also documented as: <span className="text-[#F2F3F4]">{portfolioData.personal.alternateSpelling}</span> &bull; {portfolioData.personal.location}
            </p>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-[#F2F3F4] leading-snug">
            Curious Mind. Intelligent Technology. <span className="text-[#7895B2]">Limitless Possibilities.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#A5ABB3] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            {portfolioData.personal.heroSubtitle}
          </p>

          {/* Core Technical Highlights */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="px-3 py-1.5 rounded-md text-xs font-mono bg-[#202328] border border-[#343940] text-[#A5ABB3] flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#7895B2]" /> Computer Vision
            </span>
            <span className="px-3 py-1.5 rounded-md text-xs font-mono bg-[#202328] border border-[#343940] text-[#A5ABB3] flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#7895B2]" /> C &amp; Python
            </span>
            <span className="px-3 py-1.5 rounded-md text-xs font-mono bg-[#202328] border border-[#343940] text-[#A5ABB3] flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#7895B2]" /> 11 Certifications
            </span>
            <span className="px-3 py-1.5 rounded-md text-xs font-mono bg-[#202328] border border-[#343940] text-[#A5ABB3] flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-[#7895B2]" /> CodeChef (rcpit251108042)
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap gap-3 items-center">
            
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-lg bg-[#7895B2] text-[#17191C] font-semibold text-xs font-mono tracking-wider hover:bg-[#8FAAC4] transition-colors flex items-center gap-2"
            >
              <Layers className="w-4 h-4" />
              <span>EXPLORE MY WORK</span>
            </a>

            <a
              href={`./${portfolioData.personal.resumeFileName}`}
              download={portfolioData.personal.resumeFileName}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 rounded-lg border border-[#343940] hover:border-[#7895B2] text-[#A5ABB3] hover:text-[#F2F3F4] font-mono text-xs bg-[#202328] transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-[#7895B2]" />
              <span className="font-medium">Download Resume</span>
              <span className="px-1.5 py-0.5 text-[10px] bg-[#25292E] text-[#7895B2] border border-[#343940] rounded font-mono">
                Verified
              </span>
            </a>

            <a
              href="#contact"
              className="px-5 py-3.5 rounded-lg bg-[#202328] border border-[#343940] text-[#F2F3F4] hover:border-[#7895B2] hover:bg-[#25292E] font-mono text-xs font-medium transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-[#7895B2]" />
              <span>Let's Connect</span>
            </a>

          </div>

          {/* Quick Verified Contact Info */}
          <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-[#A5ABB3] font-mono">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="hover:text-[#F2F3F4] flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#7895B2]" /> {portfolioData.personal.email}
            </a>
            <a
              href={`tel:${portfolioData.personal.phone}`}
              className="hover:text-[#F2F3F4] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#7895B2]" /> {portfolioData.personal.phone}
            </a>
            <a
              href={portfolioData.personal.codeChefUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F2F3F4] flex items-center gap-1.5 transition-colors"
            >
              <Code className="w-3.5 h-3.5 text-[#7895B2]" /> CodeChef: {portfolioData.personal.codeChefUsername}
            </a>
          </div>

        </div>

        {/* Right Column: AI Visual Canvas */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <NeuralNetworkCanvas />
        </div>

      </div>
    </section>
  );
};
