// src/components/MainContent/MainContent.jsx
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Navbar from './Navbar';
import About from '../sections/About';
import Resume from '../sections/Resume';
import Projects from '../sections/Projects';
import Certificates from '../sections/Certificates';
import Contact from '../sections/Contact';
import './MainContent.css';

const MainContent = ({ aboutMe, education, experience, skills, projects, certificates, onScrollProgress }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [isMobileHeaderFixed, setIsMobileHeaderFixed] = useState(false);
  const contentRef = useRef(null);
  const headerShellRef = useRef(null);

  // Get the title based on active tab
  const getTitle = () => {
    switch (activeTab) {
      case 'about': return 'About me';
      case 'resume': return 'Resume';
      case 'projects': return 'Projects';
      case 'certificates': return 'Certifications';
      case 'contact': return 'Contact';
      default: return 'About me';
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    onScrollProgress?.(0);
  }, [activeTab, onScrollProgress]);

  const handleScroll = (event) => {
    const element = event.currentTarget;
    const maxScroll = element.scrollHeight - element.clientHeight;
    const progress = maxScroll > 0 ? element.scrollTop / maxScroll : 0;

    onScrollProgress?.(progress);
  };

  useEffect(() => {
    const updateMobileHeader = () => {
      const shell = headerShellRef.current;
      const isMobile = window.matchMedia('(max-width: 768px)').matches;

      if (!shell || !isMobile) {
        setIsMobileHeaderFixed(false);
        return;
      }

      setIsMobileHeaderFixed(shell.getBoundingClientRect().top <= 0);
    };

    updateMobileHeader();
    window.addEventListener('scroll', updateMobileHeader, { passive: true });
    window.addEventListener('resize', updateMobileHeader);

    return () => {
      window.removeEventListener('scroll', updateMobileHeader);
      window.removeEventListener('resize', updateMobileHeader);
    };
  }, []);

  return (
    <div className="main-content" ref={contentRef} onScroll={handleScroll}>
      {/* Header with title on left and navbar on right */}
      <div
        className="content-header-shell"
        id="mobile-section-menu"
        ref={headerShellRef}
      >
        <div className="content-header">
          <h2 className="page-title">{getTitle()}</h2>
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

      {createPortal(
        <div className={`mobile-fixed-header ${isMobileHeaderFixed ? 'visible' : ''}`}>
          <div className="content-header">
            <h2 className="page-title">{getTitle()}</h2>
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>,
        document.body
      )}

      <div className="section-view" key={activeTab}>
        {activeTab === 'about' && <About aboutMe={aboutMe} />}
        {activeTab === 'resume' && <Resume />}
        {activeTab === 'projects' && <Projects projects={projects} />}
        {activeTab === 'certificates' && <Certificates certificates={certificates} />}
        {activeTab === 'contact' && <Contact />}
      </div>
    </div>
  );
};

export default MainContent;
