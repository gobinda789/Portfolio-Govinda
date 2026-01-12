// src/components/sections/Resume.jsx
import './Sections.css';

const Resume = ({ education, experience, skills }) => {
  return (
    <article className="article active">
      <h2 className="article-title">Resume</h2>

      <section className="timeline">
        <h3 className="article-title" style={{ fontSize: '22px' }}>Education</h3>

        <ol className="timeline-list">
          {education.map((edu, index) => (
            <li key={index} className="timeline-item">
              <h4 className="timeline-item-title">{edu.institution}</h4>
              <span className="timeline-period">{edu.period}</span>
              <p className="timeline-text">
                {edu.degree}
                {edu.details && (
                  <>
                    <br />
                    {edu.details}
                  </>
                )}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <h3 className="article-title" style={{ fontSize: '22px' }}>Experience</h3>

        <ol className="timeline-list">
          {experience.map((exp, index) => (
            <li key={index} className="timeline-item">
              <h4 className="timeline-item-title">
                {exp.position} @ {exp.company}
              </h4>
              <span className="timeline-period">{exp.period}</span>
              <p className="timeline-text">{exp.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skills-list">
        <h3 className="article-title" style={{ fontSize: '22px' }}>My Skills</h3>

        {skills.map((skill, index) => (
          <div key={index} className="skills-item">
            <div className="skill-title">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-progress-bg">
              <div 
                className="skill-progress-fill" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Resume;