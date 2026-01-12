// src/components/sections/About.jsx
import './Sections.css';

const About = ({ aboutMe }) => {
  return (
    <article className="article active">
      <h2 className="article-title">About me</h2>

      <section>
        {aboutMe.description.map((paragraph, index) => (
          <p key={index} className="about-text">
            {paragraph}
          </p>
        ))}
      </section>

      <section>
        <h3 className="article-title" style={{ fontSize: '22px', marginTop: '40px' }}>
          What I'm doing
        </h3>

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