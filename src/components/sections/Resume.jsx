// src/components/sections/Resume.jsx
import './Sections.css';
import cvPdf from '../../assets/images/Govinda_CV.pdf';

const Resume = () => {
  const pdfUrl = cvPdf;

  return (
    <article className="article active">
      {/* PDF Viewer Section */}
      <section className="resume-pdf-section">
        <h3 className="timeline-title">My Resume</h3>
        <div className="resume-pdf-viewer-wrapper">
          <iframe
            src={pdfUrl}
            className="resume-pdf-viewer"
            title="Govinda Bhandari CV"
          />
        </div>
        <a
          href={pdfUrl}
          download="Govinda_Bhandari_CV.pdf"
          className="resume-download-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV
        </a>
      </section>
    </article>
  );
};

export default Resume;