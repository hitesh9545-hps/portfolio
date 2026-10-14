import React, { useState } from 'react';
import { ArrowRight, FileCheck, Menu, X } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#17191C]/90 backdrop-blur-md border-b border-[#343940] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo / Name */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#7895B2] rounded-lg p-1">
            <div className="w-10 h-10 rounded-lg bg-[#202328] border border-[#343940] group-hover:border-[#7895B2] flex items-center justify-center transition-colors">
              <span className="font-display font-bold text-xs tracking-wider text-[#7895B2]">
                SHP
              </span>
            </div>
            <div>
              <span className="font-display font-bold text-[#F2F3F4] text-base md:text-lg tracking-tight group-hover:text-[#7895B2] transition-colors">
                {portfolioData.personal.fullName}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-[#7895B2]"></span>
                <span className="text-[11px] text-[#A5ABB3] font-mono tracking-wider">
                  RCPIT SHIRPUR &bull; CGPA 8.12
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <a href="#home" className="px-3 py-1.5 rounded-lg text-sm text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#202328] transition-colors">Home</a>
            <a href="#about" className="px-3 py-1.5 rounded-lg text-sm text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#202328] transition-colors">About</a>
            <a href="#skills" className="px-3 py-1.5 rounded-lg text-sm text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#202328] transition-colors">Skills</a>
            <a href="#projects" className="px-3 py-1.5 rounded-lg text-sm text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#202328] transition-colors">Projects</a>
            <a href="#education" className="px-3 py-1.5 rounded-lg text-sm text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#202328] transition-colors">Education</a>
            <a href="#certifications" className="px-3 py-1.5 rounded-lg text-sm text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#202328] transition-colors">Certifications</a>
            <a href="#experience" className="px-3 py-1.5 rounded-lg text-sm text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#202328] transition-colors">Leadership</a>
            <a href="#contact" className="px-3 py-1.5 rounded-lg text-sm text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#202328] transition-colors">Contact</a>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`./${portfolioData.personal.resumeFileName}`}
              download={portfolioData.personal.resumeFileName}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-[#7895B2] border border-[#343940] bg-[#202328] hover:border-[#7895B2] hover:text-[#F2F3F4] flex items-center gap-1.5 transition-colors"
            >
              <FileCheck className="w-3.5 h-3.5 text-[#7895B2]" />
              <span>Resume (Verified)</span>
            </a>
            
            <a
              href="#contact"
              className="px-4 py-2 text-xs md:text-sm font-medium text-[#17191C] bg-[#7895B2] hover:bg-[#8FAAC4] rounded-lg transition-colors flex items-center gap-2"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#202328] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#343940] bg-[#202328] px-4 pt-3 pb-6 space-y-2">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#25292E]">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#25292E]">About</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#25292E]">Skills</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#25292E]">Projects</a>
          <a href="#education" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#25292E]">Education</a>
          <a href="#certifications" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#25292E]">Certifications (11)</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#25292E]">Leadership &amp; Experience</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base text-[#A5ABB3] hover:text-[#F2F3F4] hover:bg-[#25292E]">Contact</a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`./${portfolioData.personal.resumeFileName}`}
              download={portfolioData.personal.resumeFileName}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-2.5 px-4 rounded-lg border border-[#343940] bg-[#25292E] text-[#7895B2] font-mono text-xs flex items-center justify-center gap-2"
            >
              <FileCheck className="w-4 h-4" /> Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-lg bg-[#7895B2] text-[#17191C] font-medium text-sm"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
