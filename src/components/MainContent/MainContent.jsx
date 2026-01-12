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

  return (
    <div className="main-content">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'about' && <About aboutMe={aboutMe} />}
      {activeTab === 'resume' && (
        <Resume 
          education={education} 
          experience={experience} 
          skills={skills} 
        />
      )}
      {activeTab === 'projects' && <Projects projects={projects} />}
      {activeTab === 'contact' && <Contact />}
    </div>
  );
};
export default MainContent;

