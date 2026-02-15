// src/components/MainContent/MainContent.jsx
import { useState } from 'react';
import Navbar from './Navbar';
import About from '../sections/About';
import Resume from '../sections/Resume';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import './MainContent.css';

const MainContent = ({ aboutMe, education, experience, skills, projects }) => {
  const [activeTab, setActiveTab] = useState('about');

  // Get the title based on active tab
  const getTitle = () => {
    switch (activeTab) {
      case 'about': return 'About me';
      case 'resume': return 'Resume';
      case 'projects': return 'Projects';
      case 'contact': return 'Contact';
      default: return 'About me';
    }
  };

  return (
    <div className="main-content">
      {/* Header with title on left and navbar on right */}
      <div className="content-header">
        <h2 className="page-title">{getTitle()}</h2>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Content sections */}
      {activeTab === 'about' && <About aboutMe={aboutMe} />}
      {activeTab === 'resume' && <Resume />}
      {activeTab === 'projects' && <Projects projects={projects} />}
      {activeTab === 'contact' && <Contact />}
    </div>
  );
};

export default MainContent;