import React from 'react';
import { Mail, Phone, Code, ArrowUp, FileCheck } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#343940] bg-[#17191C] relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-display font-bold text-[#F2F3F4] text-lg">
                {portfolioData.personal.fullName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7895B2]"></span>
              <span className="text-xs font-mono text-[#7895B2]">
                {portfolioData.personal.collegeName}
              </span>
            </div>
            <p className="text-xs text-[#A5ABB3]">
              Second-Year B.Tech AI &amp; Data Science &bull; 8.12 CGPA &bull; {portfolioData.personal.location}
            </p>
          </div>

          {/* Social / Official Links */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.codeChefUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#202328] border border-[#343940] hover:border-[#7895B2] text-[#A5ABB3] hover:text-[#F2F3F4] transition-colors"
              title="CodeChef Profile"
            >
              <Code className="w-4 h-4 text-[#7895B2]" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2.5 rounded-lg bg-[#202328] border border-[#343940] hover:border-[#7895B2] text-[#A5ABB3] hover:text-[#F2F3F4] transition-colors"
              title="Send Email"
            >
              <Mail className="w-4 h-4 text-[#7895B2]" />
            </a>
            <a
              href={`tel:${portfolioData.personal.phone}`}
              className="p-2.5 rounded-lg bg-[#202328] border border-[#343940] hover:border-[#7895B2] text-[#A5ABB3] hover:text-[#F2F3F4] transition-colors"
              title="Call"
            >
              <Phone className="w-4 h-4 text-[#7895B2]" />
            </a>
            <a
              href={`./${portfolioData.personal.resumeFileName}`}
              download={portfolioData.personal.resumeFileName}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#202328] border border-[#343940] hover:border-[#7895B2] text-[#A5ABB3] hover:text-[#F2F3F4] transition-colors"
              title="Download Resume"
            >
              <FileCheck className="w-4 h-4 text-[#7895B2]" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#202328] border border-[#343940] text-[#7895B2] hover:bg-[#25292E] hover:border-[#7895B2] transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[#343940] flex flex-col sm:flex-row items-center justify-between text-xs text-[#A5ABB3] gap-3 font-mono">
          <div>
            &copy; {currentYear} {portfolioData.personal.fullName} ({portfolioData.personal.alternateSpelling}). All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Verified from Official Resume &bull; RCPIT AI &amp; DS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
