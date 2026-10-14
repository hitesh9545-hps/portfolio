import React, { useState } from 'react';
import { Sliders, X, FileText, GitFork, CheckCircle, ExternalLink, Copy, Check } from 'lucide-react';

interface PersonalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: {
    college: string;
    gradYear: string;
    email: string;
    linkedin: string;
    github: string;
    resume: string;
  };
  onSave: (data: {
    college: string;
    gradYear: string;
    email: string;
    linkedin: string;
    github: string;
    resume: string;
  }) => void;
  onReset: () => void;
}

export const PersonalizeModal: React.FC<PersonalizeModalProps> = ({
  isOpen,
  onClose,
  initialData,
  onSave,
  onReset
}) => {
  const [formData, setFormData] = useState(initialData);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="bg-[#25292E] max-w-lg w-full p-6 sm:p-7 rounded-xl border border-[#343940] shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
        
        <div className="flex items-center justify-between border-b border-[#343940] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#202328] border border-[#343940] text-[#7895B2] flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-[#F2F3F4] text-base">
                Customize Placeholders
              </h3>
              <span className="text-[11px] text-[#A5ABB3] font-mono">
                Personalize your portfolio live
              </span>
            </div>
          </div>
          <button onClick={onClose} className="text-[#A5ABB3] hover:text-[#F2F3F4] p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-[#A5ABB3]">
          Enter your real details below. Changes reflect on this page immediately and are stored in your local browser storage!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
          
          <div className="space-y-1">
            <label className="text-[#A5ABB3]">College / University Name:</label>
            <input
              type="text"
              id="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="e.g. Government College of Engineering..."
              className="w-full px-3 py-2.5 rounded-lg bg-[#202328] border border-[#343940] text-[#F2F3F4] focus:border-[#7895B2] outline-none text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#A5ABB3]">Expected Graduation Year:</label>
            <input
              type="text"
              id="gradYear"
              value={formData.gradYear}
              onChange={handleChange}
              placeholder="e.g. 2027 or 2028"
              className="w-full px-3 py-2.5 rounded-lg bg-[#202328] border border-[#343940] text-[#F2F3F4] focus:border-[#7895B2] outline-none text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#A5ABB3]">Professional Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. hitesh.pravin@example.com"
              className="w-full px-3 py-2.5 rounded-lg bg-[#202328] border border-[#343940] text-[#F2F3F4] focus:border-[#7895B2] outline-none text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#A5ABB3]">LinkedIn Profile URL:</label>
            <input
              type="url"
              id="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="e.g. https://linkedin.com/in/hitesh-pravin"
              className="w-full px-3 py-2.5 rounded-lg bg-[#202328] border border-[#343940] text-[#F2F3F4] focus:border-[#7895B2] outline-none text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#A5ABB3]">GitHub Profile URL:</label>
            <input
              type="url"
              id="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="e.g. https://github.com/hiteshpravin"
              className="w-full px-3 py-2.5 rounded-lg bg-[#202328] border border-[#343940] text-[#F2F3F4] focus:border-[#7895B2] outline-none text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#A5ABB3]">Resume Link or File Name:</label>
            <input
              type="text"
              id="resume"
              value={formData.resume}
              onChange={handleChange}
              placeholder="e.g. resume.pdf or Google Drive link"
              className="w-full px-3 py-2.5 rounded-lg bg-[#202328] border border-[#343940] text-[#F2F3F4] focus:border-[#7895B2] outline-none text-xs"
            />
          </div>

          <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#343940]">
            <button
              type="button"
              onClick={onReset}
              className="px-3 py-2 text-[#A5ABB3] hover:text-[#F2F3F4] text-xs"
            >
              Reset to Default
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-[#7895B2] text-[#17191C] font-semibold text-xs hover:bg-[#8FAAC4] transition-colors"
            >
              Save Details Live
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPersonalize: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onOpenPersonalize
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="bg-[#25292E] max-w-md w-full p-6 sm:p-7 rounded-xl border border-[#343940] shadow-2xl space-y-5 animate-in fade-in duration-200">
        <div className="flex items-center justify-between border-b border-[#343940] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#202328] border border-[#343940] text-[#7895B2] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-[#F2F3F4] text-base">Resume Placeholder</h3>
              <span className="text-[11px] text-[#A5ABB3] font-mono">Action Required</span>
            </div>
          </div>
          <button onClick={onClose} className="text-[#A5ABB3] hover:text-[#F2F3F4] p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-[#A5ABB3] leading-relaxed">
          <p>
            You haven't attached a formal resume PDF yet. To keep your portfolio 100% genuine, the download button is paused until a file is added.
          </p>
          
          <div className="p-3.5 rounded-lg bg-[#202328] border border-[#343940] space-y-2">
            <div className="font-mono text-[#7895B2] text-xs font-semibold">How to enable your resume:</div>
            <ol className="list-decimal list-inside space-y-1 text-xs text-[#A5ABB3] font-mono">
              <li>Place your resume file named <span className="text-[#F2F3F4] bg-[#25292E] px-1 py-0.5 rounded">resume.pdf</span> in the public/ folder.</li>
              <li>Or paste a Google Drive / cloud link in the <span className="text-[#7895B2]">Edit Profile</span> drawer.</li>
            </ol>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-xs font-mono text-[#A5ABB3] hover:text-[#F2F3F4]">
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenPersonalize();
            }}
            className="px-4 py-2 rounded-lg bg-[#7895B2] text-[#17191C] font-semibold text-xs font-mono hover:bg-[#8FAAC4]"
          >
            Edit Link Now
          </button>
        </div>
      </div>
    </div>
  );
};

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'github' | 'demo';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  type
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="bg-[#25292E] max-w-md w-full p-6 sm:p-7 rounded-xl border border-[#343940] shadow-2xl space-y-5">
        <div className="flex items-center justify-between border-b border-[#343940] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#202328] border border-[#343940] text-[#7895B2] flex items-center justify-center">
              <GitFork className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-[#F2F3F4] text-base">
                {title} ({type === 'github' ? 'GitHub' : 'Live Demo'})
              </h3>
              <span className="text-[11px] text-[#A5ABB3] font-mono">Status: Planned Idea</span>
            </div>
          </div>
          <button onClick={onClose} className="text-[#A5ABB3] hover:text-[#F2F3F4] p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-[#A5ABB3] leading-relaxed">
          <p>
            The {type === 'github' ? 'repository' : 'live demo'} for "{title}" is currently pending because this project is in the "Planned Idea" phase. Once your code is initialized, simply link it in <span className="text-[#F2F3F4] font-mono">src/portfolioData.ts</span> or the Profile Editor!
          </p>
          
          <div className="p-3.5 rounded-lg bg-[#202328] border border-[#343940] space-y-2">
            <div className="font-mono text-[#7895B2] text-xs font-semibold">Ready to build this project?</div>
            <p className="text-xs text-[#A5ABB3]">
              Initialize a repository on GitHub, add your Python scripts, and paste your URL into <span className="text-[#F2F3F4] font-mono">src/portfolioData.ts</span> or the Profile Editor.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-xs font-mono text-[#A5ABB3] hover:text-[#F2F3F4]">
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};

interface ContactSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  } | null;
}

export const ContactSuccessModal: React.FC<ContactSuccessModalProps> = ({
  isOpen,
  onClose,
  data
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !data) return null;

  const handleLaunchMailto = () => {
    const targetEmail = "hitu9545@gmail.com";
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${data.subject}`);
    const body = encodeURIComponent(
      `Hi Hitesh,\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const handleCopy = () => {
    const text = `From: ${data.name} <${data.email}>\nSubject: ${data.subject}\n\n${data.message}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="bg-[#25292E] max-w-lg w-full p-6 sm:p-8 rounded-xl border border-[#343940] shadow-2xl space-y-5">
        <div className="flex items-center justify-between border-b border-[#343940] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#202328] border border-[#343940] text-[#7895B2] flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-[#F2F3F4] text-base">Message Ready to Send</h3>
              <span className="text-[11px] text-[#A5ABB3] font-mono">Validation Passed</span>
            </div>
          </div>
          <button onClick={onClose} className="text-[#A5ABB3] hover:text-[#F2F3F4] p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-[#A5ABB3]">
          <p>
            Your message has been validated! Because no third-party email API key (e.g., Formspree or EmailJS) is currently configured, we do not fake background email delivery.
          </p>

          <div className="p-3.5 rounded-lg bg-[#202328] border border-[#343940] space-y-1.5 font-mono text-xs">
            <div><span className="text-[#A5ABB3]">From:</span> <span className="text-[#F2F3F4]">{data.name} ({data.email})</span></div>
            <div><span className="text-[#A5ABB3]">Subject:</span> <span className="text-[#7895B2]">{data.subject}</span></div>
            <div className="pt-1 text-[#A5ABB3] max-h-24 overflow-y-auto whitespace-pre-wrap text-[11px] border-t border-[#343940] mt-1">
              {data.message}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
          <button
            onClick={handleLaunchMailto}
            className="w-full sm:flex-1 py-2.5 px-4 rounded-lg bg-[#7895B2] text-[#17191C] font-semibold text-xs font-mono hover:bg-[#8FAAC4] flex items-center justify-center gap-2 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" /> Open in Email App
          </button>
          <button
            onClick={handleCopy}
            className="w-full sm:flex-1 py-2.5 px-4 rounded-lg border border-[#343940] bg-[#202328] hover:bg-[#25292E] text-[#F2F3F4] text-xs font-mono flex items-center justify-center gap-2 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#7895B2]" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#A5ABB3]" />
                <span>Copy to Clipboard</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
