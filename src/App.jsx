// src/App.jsx
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import { personalInfo, aboutMe, education, experience, skills, projects } from './data/portfoliodata';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <Sidebar personalInfo={personalInfo} />
      <MainContent 
        aboutMe={aboutMe}
        education={education}
        experience={experience}
        skills={skills}
        projects={projects}
      />
    </div>
  );
}

export default App;