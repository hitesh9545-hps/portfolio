import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Leadership } from './components/Leadership';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal, ContactSuccessModal } from './components/PersonalizeModal';

export const App: React.FC = () => {
  // Modal states
  const [projectModal, setProjectModal] = useState<{
    isOpen: boolean;
    title: string;
    type: 'github' | 'hardware' | 'demo';
  }>({
    isOpen: false,
    title: '',
    type: 'github'
  });

  const [contactSuccessData, setContactSuccessData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  } | null>(null);

  return (
    <div className="bg-[#17191C] text-[#F2F3F4] font-sans selection:bg-[#7895B2]/30 selection:text-[#F2F3F4] antialiased relative min-h-screen overflow-x-hidden">
      
      {/* Subtle Background Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-30" />
      </div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 md:space-y-36 pt-8 pb-20">
        <Hero />

        <About />

        <Skills />

        <Projects
          onOpenProjectModal={(title, type) =>
            setProjectModal({ isOpen: true, title, type })
          }
        />

        <Education />

        <Certifications />

        <Leadership />

        <LearningJourney />

        <Contact
          onShowSuccessModal={(data) => setContactSuccessData(data)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal
        isOpen={projectModal.isOpen}
        onClose={() =>
          setProjectModal((prev) => ({ ...prev, isOpen: false }))
        }
        title={projectModal.title}
        type={projectModal.type as 'github' | 'demo'}
      />

      <ContactSuccessModal
        isOpen={!!contactSuccessData}
        onClose={() => setContactSuccessData(null)}
        data={contactSuccessData}
      />

    </div>
  );
};

export default App;
