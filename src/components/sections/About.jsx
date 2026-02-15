// src/components/sections/About.jsx
import './Sections.css';

const About = ({ aboutMe }) => {
  return (
    <article className="article active">
      <section>
        {aboutMe.description.map((paragraph, index) => (
          <p key={index} className="about-text">
            {paragraph}
          </p>
        ))}

        {aboutMe.interests && (
          <div className="interests-container">
            <p className="about-text" style={{ marginBottom: '10px', fontWeight: '600', color: 'var(--white-2)' }}>
              I am particularly interested in:
            </p>
            <ul className="interests-list">
              {aboutMe.interests.map((interest, index) => (
                <li key={index} className="interest-item">
                  <span className="interest-bullet">▹</span> {interest}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section>
        <h3 className="section-title">Things I'm Good At</h3>

        <div className="service-list">
          {aboutMe.services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon-box">{service.icon}</div>
              <div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default About;