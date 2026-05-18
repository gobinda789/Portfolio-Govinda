// src/App.jsx
import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import { personalInfo, aboutMe, education, experience, skills, projects, certificates } from './data/portfoliodata';
import './App.css';

function App() {
  const [mainScrollProgress, setMainScrollProgress] = useState(0);

  return (
    <div className="main-container">
      <Sidebar personalInfo={personalInfo} scrollProgress={mainScrollProgress} />
      <MainContent
        aboutMe={aboutMe}
        education={education}
        experience={experience}
        skills={skills}
        projects={projects}
        certificates={certificates}
        onScrollProgress={setMainScrollProgress}
      />
    </div>
  );
}

export default App;
