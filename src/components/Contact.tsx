import React, { useState } from 'react';
import { Mail, Phone, Code, MapPin, Send, Info, Contact as ContactIcon, FileCheck } from 'lucide-react';
import { portfolioData } from '../portfolioData';

interface ContactProps {
  onShowSuccessModal: (data: { name: string; email: string; subject: string; message: string }) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowSuccessModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim().length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()),
      subject: formData.subject.trim().length < 3,
      message: formData.message.trim().length < 10
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.subject && !newErrors.message) {
      onShowSuccessModal({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim()
      });
    }
  };

  return (
    <section id="contact" className="space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202328] border border-[#343940] text-[#7895B2] text-xs font-mono uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5 text-[#7895B2]" /> Verified Channels
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F2F3F4]">
          Let's Build Something Intelligent Together.
        </h2>
        <p className="text-[#A5ABB3] text-sm sm:text-base">
          Reach out for project collaborations, technical discussions in computer vision, or academic exchanges.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Verified Coordinates */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#25292E] border border-[#343940] p-6 sm:p-7 rounded-xl space-y-5">
            <h3 className="font-display font-bold text-[#F2F3F4] text-lg flex items-center gap-2">
              <ContactIcon className="w-5 h-5 text-[#7895B2]" />
              <span>Official Coordinates</span>
            </h3>

            {/* Email */}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#202328] border border-[#343940] hover:border-[#7895B2] transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#25292E] border border-[#343940] text-[#7895B2] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-xs text-[#A5ABB3] font-mono">Professional Email (Verified)</span>
                <p className="text-sm font-mono text-[#F2F3F4] font-medium truncate">
                  {portfolioData.personal.email}
                </p>
                <span className="text-[11px] text-[#A5ABB3] group-hover:text-[#7895B2]">
                  Click to send direct email &rarr;
                </span>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${portfolioData.personal.phone}`}
              className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#202328] border border-[#343940] hover:border-[#7895B2] transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#25292E] border border-[#343940] text-[#7895B2] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-xs text-[#A5ABB3] font-mono">Phone (Verified)</span>
                <p className="text-sm font-mono text-[#F2F3F4] font-medium truncate">
                  {portfolioData.personal.phone}
                </p>
                <span className="text-[11px] text-[#A5ABB3] group-hover:text-[#7895B2]">
                  Click to dial &rarr;
                </span>
              </div>
            </a>

            {/* CodeChef */}
            <a
              href={portfolioData.personal.codeChefUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#202328] border border-[#343940] hover:border-[#7895B2] transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#25292E] border border-[#343940] text-[#7895B2] flex items-center justify-center shrink-0">
                <Code className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-xs text-[#A5ABB3] font-mono">CodeChef Profile (Verified)</span>
                <p className="text-sm font-mono text-[#F2F3F4] font-medium truncate">
                  {portfolioData.personal.codeChefUsername}
                </p>
                <span className="text-[11px] text-[#A5ABB3] group-hover:text-[#7895B2]">
                  View competitive coder profile &rarr;
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#202328] border border-[#343940]">
              <div className="w-10 h-10 rounded-lg bg-[#25292E] border border-[#343940] text-[#7895B2] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-xs text-[#A5ABB3] font-mono">Campus &amp; Location</span>
                <p className="text-sm font-mono text-[#F2F3F4] font-medium truncate">
                  {portfolioData.personal.location}
                </p>
                <span className="text-[11px] text-[#A5ABB3]">{portfolioData.personal.collegeName}</span>
              </div>
            </div>

            {/* Resume Download */}
            <a
              href={`./${portfolioData.personal.resumeFileName}`}
              download={portfolioData.personal.resumeFileName}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-lg border border-[#343940] hover:border-[#7895B2] text-[#7895B2] hover:bg-[#202328] text-xs font-mono flex items-center justify-center gap-2 transition-colors"
            >
              <FileCheck className="w-4 h-4" />
              <span>Download Official Resume (PNG)</span>
            </a>
          </div>
        </div>

        {/* Right: Validated Form */}
        <div className="lg:col-span-7 bg-[#25292E] border border-[#343940] p-6 sm:p-8 rounded-xl space-y-6">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-[#F2F3F4] text-lg">Send a Message to Hitesh</h3>
            <p className="text-xs text-[#A5ABB3]">
              Validated form connected to <span className="text-[#7895B2] font-mono">{portfolioData.personal.email}</span> with 1-click email draft and clipboard copy.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-mono text-[#F2F3F4]">
                Your Full Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Morgan"
                className="w-full px-4 py-3 rounded-lg bg-[#202328] border border-[#343940] focus:border-[#7895B2] focus:ring-1 focus:ring-[#7895B2] text-sm text-[#F2F3F4] placeholder-[#A5ABB3]/50 outline-none transition-colors"
              />
              {errors.name && (
                <p className="text-[11px] text-rose-400">Please enter your name.</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-mono text-[#F2F3F4]">
                Your Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. alex@example.com"
                className="w-full px-4 py-3 rounded-lg bg-[#202328] border border-[#343940] focus:border-[#7895B2] focus:ring-1 focus:ring-[#7895B2] text-sm text-[#F2F3F4] placeholder-[#A5ABB3]/50 outline-none transition-colors"
              />
              {errors.email && (
                <p className="text-[11px] text-rose-400">Please enter a valid email address.</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="block text-xs font-mono text-[#F2F3F4]">
                Subject / Topic *
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Face Mask Detection Project Discussion"
                className="w-full px-4 py-3 rounded-lg bg-[#202328] border border-[#343940] focus:border-[#7895B2] focus:ring-1 focus:ring-[#7895B2] text-sm text-[#F2F3F4] placeholder-[#A5ABB3]/50 outline-none transition-colors"
              />
              {errors.subject && (
                <p className="text-[11px] text-rose-400">Please provide a subject topic.</p>
              )}
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor="message" className="block text-xs font-mono text-[#F2F3F4]">
                  Your Message *
                </label>
                <span className="text-[10px] font-mono text-[#A5ABB3]">
                  {formData.message.length} / 1000
                </span>
              </div>
              <textarea
                id="message"
                rows={4}
                maxLength={1000}
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello Hitesh, I reviewed your Face Mask Detection project and your 8.12 CGPA at RCPIT..."
                className="w-full px-4 py-3 rounded-lg bg-[#202328] border border-[#343940] focus:border-[#7895B2] focus:ring-1 focus:ring-[#7895B2] text-sm text-[#F2F3F4] placeholder-[#A5ABB3]/50 outline-none transition-colors resize-none"
              />
              {errors.message && (
                <p className="text-[11px] text-rose-400">Please enter a message (at least 10 characters).</p>
              )}
            </div>

            <div className="pt-2 space-y-3">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg bg-[#7895B2] text-[#17191C] hover:bg-[#8FAAC4] font-medium text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit &amp; Send to {portfolioData.personal.email}</span>
              </button>

              <div className="flex items-center gap-2 text-[11px] text-[#A5ABB3] justify-center">
                <Info className="w-3.5 h-3.5 text-[#7895B2]" />
                <span>Verified destination: Prepares direct email dispatch to hitu9545@gmail.com.</span>
              </div>
            </div>

          </form>
        </div>

      </div>

    </section>
  );
};
